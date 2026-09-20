import React, { useState, useMemo, useEffect } from 'react';
import { allVaultNotes, masterIndexNote } from './data/vaultIndex';
import { VaultNote } from './types';
import {
  computeVaultConnections,
  generateVaultZip,
  downloadBlob
} from './utils/vaultExporter';
import { NoteViewer } from './components/NoteViewer';
import { VaultGraph } from './components/VaultGraph';
import { BacklinksPanel } from './components/BacklinksPanel';
import { VaultStatsModal } from './components/VaultStatsModal';
import { DMScreenDrawer } from './components/DMScreenDrawer';
import { QuickDiceTray, DiceRollResult } from './components/QuickDiceTray';
import { WorldbuilderModal } from './components/WorldbuilderModal';
import { CharacterSheetModal } from './components/CharacterSheetModal';
import { AdventureConsole, ADVENTURE_PRESETS } from './components/AdventureConsole';
import { parseAndRoll } from './components/QuickDiceTray';
import {
  Folder,
  FolderOpen,
  FileText,
  Search,
  Download,
  Share2,
  Sparkles,
  Command,
  Layers,
  Split,
  ChevronRight,
  ChevronDown,
  Info,
  CheckCircle,
  Menu,
  X,
  ExternalLink,
  ShieldAlert,
  BookOpen,
  Dices,
  PlusCircle,
  UserCheck,
  Compass
} from 'lucide-react';

export default function App() {
  const [customNotes, setCustomNotes] = useState<VaultNote[]>(() => {
    try {
      const saved = localStorage.getItem('dnd_vault_custom_notes');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Sync custom notes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('dnd_vault_custom_notes', JSON.stringify(customNotes));
    } catch (e) {
      console.error('Failed to save custom notes to localStorage', e);
    }
  }, [customNotes]);

  // Combined notes list (core vault + custom notes)
  const combinedNotes = useMemo(() => {
    return [...allVaultNotes, ...customNotes];
  }, [customNotes]);

  const [selectedNote, setSelectedNote] = useState<VaultNote>(masterIndexNote);
  const [viewMode, setViewMode] = useState<'note' | 'graph' | 'split' | 'adventure'>('note');
  const [activeAdventureId, setActiveAdventureId] = useState<string>('curse-of-strahd');
  const [hideOtherContent, setHideOtherContent] = useState<boolean>(false);
  const [isBacklinksOpen, setIsBacklinksOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFolderFilter, setSelectedFolderFilter] = useState<string>('All');
  const [collapsedFolders, setCollapsedFolders] = useState<Record<string, boolean>>({});
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [isQuickSwitcherOpen, setIsQuickSwitcherOpen] = useState(false);
  const [isDMScreenOpen, setIsDMScreenOpen] = useState(false);
  const [isWorldbuilderOpen, setIsWorldbuilderOpen] = useState(false);
  const [isCharacterSheetOpen, setIsCharacterSheetOpen] = useState(false);
  const [recentDiceRoll, setRecentDiceRoll] = useState<DiceRollResult | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isExporting, setIsExporting] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Compute connections across all notes
  const { backlinks, forwardLinks, titleToNoteMap } = useMemo(() => {
    return computeVaultConnections(combinedNotes);
  }, [combinedNotes]);

  const handleCreateCustomNote = (newNote: VaultNote) => {
    setCustomNotes((prev) => [newNote, ...prev]);
    setSelectedNote(newNote);
    setViewMode('note');
  };

  const handleUpdateNote = (updatedNote: VaultNote) => {
    setCustomNotes((prev) => {
      const exists = prev.some((n) => n.id === updatedNote.id);
      if (exists) {
        return prev.map((n) => (n.id === updatedNote.id ? updatedNote : n));
      } else {
        return [updatedNote, ...prev];
      }
    });
    setSelectedNote(updatedNote);
  };

  const handleDeleteNote = (noteId: string) => {
    setCustomNotes((prev) => prev.filter((n) => n.id !== noteId));
    if (selectedNote.id === noteId) {
      setSelectedNote(masterIndexNote);
    }
  };

  // Keyboard shortcut listener (Cmd+K / Ctrl+K, Alt+D for DM Screen, Esc to close)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsQuickSwitcherOpen((prev) => !prev);
      } else if (e.altKey && (e.key === 'd' || e.key === 'D')) {
        e.preventDefault();
        setIsDMScreenOpen((prev) => !prev);
      } else if (e.altKey && (e.key === 'c' || e.key === 'C')) {
        e.preventDefault();
        setIsCharacterSheetOpen((prev) => !prev);
      } else if (e.altKey && (e.key === 'a' || e.key === 'A')) {
        e.preventDefault();
        setViewMode((prev) => (prev === 'adventure' ? 'note' : 'adventure'));
      } else if (e.key === 'Escape') {
        setIsQuickSwitcherOpen(false);
        setIsStatsOpen(false);
        setIsDMScreenOpen(false);
        setIsWorldbuilderOpen(false);
        setIsCharacterSheetOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Folders list
  const folders = useMemo(() => {
    return Array.from(new Set(combinedNotes.map((n) => n.folder))).sort();
  }, [combinedNotes]);

  // Active Adventure Preset
  const activePreset = useMemo(() => {
    return ADVENTURE_PRESETS.find((a) => a.id === activeAdventureId) || ADVENTURE_PRESETS[0];
  }, [activeAdventureId]);

  // Filtered notes
  const filteredNotes = useMemo(() => {
    return combinedNotes.filter((note) => {
      // Focus Mode: Hide everything except the active adventure
      if (hideOtherContent && activePreset) {
        const matchesAdventure =
          note.folder.toLowerCase().includes(activePreset.folderKeyword.toLowerCase()) ||
          note.title.toLowerCase().includes(activePreset.folderKeyword.toLowerCase()) ||
          note.tags.some((t) => t.toLowerCase().includes(activePreset.id.toLowerCase())) ||
          note.folder.includes('Session Notes');
        if (!matchesAdventure) return false;
      }

      const matchesSearch =
        searchQuery === '' ||
        note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (note.aliases &&
          note.aliases.some((a) => a.toLowerCase().includes(searchQuery.toLowerCase())));

      const matchesFolder =
        selectedFolderFilter === 'All' || note.folder === selectedFolderFilter;

      let matchesCategory = true;
      if (selectedCategory === 'Templates') {
        matchesCategory =
          note.folder.includes('Templates') ||
          note.category === 'Template';
      } else if (selectedCategory === 'Homebrew') {
        matchesCategory =
          note.folder.includes('Homebrew') ||
          note.category === 'Homebrew' ||
          note.id.startsWith('homebrew-');
      } else if (selectedCategory === 'Rules') {
        matchesCategory =
          note.folder.includes('Rules') ||
          note.folder.includes('Mechanics') ||
          note.folder.includes('Appendix') ||
          note.folder.includes('Index') ||
          note.category === 'Rule' ||
          note.category === 'Rulebook' ||
          note.category === 'Index' ||
          note.category === 'Appendix' ||
          note.category === 'Trap';
      } else if (selectedCategory === 'Classes') {
        matchesCategory =
          note.folder.includes('Classes') ||
          note.folder.includes('Races') ||
          note.folder.includes('Backgrounds') ||
          note.folder.includes('Character Options') ||
          note.folder.includes('Origins') ||
          note.category === 'Class' ||
          note.category === 'Modern Subclass' ||
          note.category === 'Subclass' ||
          note.category === 'Race' ||
          note.category === 'Background' ||
          note.category === 'Feat';
      } else if (selectedCategory === 'Spells') {
        matchesCategory =
          note.folder.includes('Spell') ||
          note.category === 'Spell' ||
          note.category === 'Modern Spell';
      } else if (selectedCategory === 'Monsters') {
        matchesCategory =
          note.folder.includes('Creature') ||
          note.folder.includes('Monster') ||
          note.folder.includes('Bestiary') ||
          note.folder.includes('Foes') ||
          note.category === 'Creature' ||
          note.category === 'NPC';
      } else if (selectedCategory === 'Adventures') {
        matchesCategory =
          note.folder.includes('Curse of Strahd') ||
          note.folder.includes('Sword Coast') ||
          note.folder.includes('Xanathar') ||
          note.folder.includes('Tiamat') ||
          note.folder.includes('Tome of Foes') ||
          note.folder.includes('Giants') ||
          note.folder.includes('Spelljammer') ||
          note.folder.includes('Lost Mine') ||
          note.folder.includes('Multiverse') ||
          note.folder.includes('Planescape') ||
          note.folder.includes('Vecna') ||
          note.folder.includes('Fiendish Folio') ||
          note.folder.includes('Undermountain') ||
          note.folder.includes('Campaign') ||
          note.category === 'Adventure' ||
          note.category === 'Adventure Chapter' ||
          note.category === 'Campaign' ||
          note.category === 'Handout' ||
          note.category === 'Tarokka' ||
          note.category === 'Lore' ||
          note.category === 'Location';
      } else if (selectedCategory === 'Gear') {
        matchesCategory =
          note.folder.includes('Equipment') ||
          note.folder.includes('Treasure') ||
          note.category === 'Equipment' ||
          note.category === 'Modern Equipment' ||
          note.category === 'Magic Item' ||
          note.category === 'Tool';
      } else if (selectedCategory === 'Characters') {
        matchesCategory =
          note.folder.includes('Characters') ||
          note.category === 'Character' ||
          note.tags.includes('character');
      }

      return matchesSearch && matchesFolder && matchesCategory;
    });
  }, [combinedNotes, searchQuery, selectedFolderFilter, selectedCategory, hideOtherContent, activePreset]);

  // Group filtered notes by folder
  const groupedNotes = useMemo(() => {
    const map = new Map<string, VaultNote[]>();
    folders.forEach((f) => map.set(f, []));
    filteredNotes.forEach((n) => {
      const list = map.get(n.folder) || [];
      list.push(n);
      map.set(n.folder, list);
    });
    return map;
  }, [folders, filteredNotes]);

  const toggleFolder = (folderName: string) => {
    setCollapsedFolders((prev) => ({
      ...prev,
      [folderName]: !prev[folderName]
    }));
  };

  const navigateToNote = (targetTitle: string) => {
    const resolved = titleToNoteMap.get(targetTitle.toLowerCase());
    if (resolved) {
      setSelectedNote(resolved);
      setIsQuickSwitcherOpen(false);
      setMobileSidebarOpen(false);
    }
  };

  const handleExportZip = async () => {
    try {
      setIsExporting(true);
      const blob = await generateVaultZip(combinedNotes);
      downloadBlob(blob, 'DnD-5e-Modern-Obsidian-Vault.zip');
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 5000);
    } catch (err) {
      console.error('Error exporting vault zip:', err);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="flex h-screen w-screen bg-slate-950 text-slate-100 overflow-hidden font-sans select-none">
      {/* Mobile Top Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-slate-900 border-b border-slate-800 px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          className="p-1 text-slate-300 hover:text-white"
        >
          {mobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
        <span className="font-semibold text-sm text-amber-400">D&D Obsidian Vault</span>
        <button
          onClick={handleExportZip}
          className="px-2.5 py-1 bg-amber-500 text-slate-950 font-medium text-xs rounded"
        >
          Export
        </button>
      </div>

      {/* Left Sidebar - File Tree & Explorer */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-30 w-72 bg-slate-950 border-r border-slate-800 flex flex-col transition-transform duration-200 ${
          mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } ${mobileSidebarOpen ? 'pt-14 lg:pt-0' : ''}`}
      >
        {/* App Title & Quick Action */}
        <div className="p-3.5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h1 className="font-bold text-xs text-slate-100 leading-tight">
                D&D 5e & Modern
              </h1>
              <p className="text-[10px] text-slate-400">Obsidian Master Vault</p>
            </div>
          </div>
          <button
            onClick={() => setIsStatsOpen(true)}
            className="p-1.5 rounded hover:bg-slate-900 text-slate-400 hover:text-amber-400 transition-colors"
            title="Vault Statistics & Integrity"
          >
            <Info className="w-4 h-4" />
          </button>
        </div>

        {/* Search Bar & Quick Switcher Trigger */}
        <div className="p-3 border-b border-slate-800 space-y-2">
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-500" />
            <input
              type="text"
              placeholder="Search notes, tags, rules..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 bg-slate-900 border border-slate-800 rounded-md text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500/60"
            />
          </div>

          <div className="flex gap-1.5">
            <button
              onClick={() => setIsQuickSwitcherOpen(true)}
              className="flex-1 flex items-center justify-between px-2.5 py-1.5 bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 rounded text-slate-400 hover:text-slate-200 text-xs transition-colors"
            >
              <span className="flex items-center gap-1.5">
                <Command className="w-3 h-3 text-amber-500" />
                <span>Quick Switcher</span>
              </span>
              <kbd className="px-1.5 py-0.5 text-[9px] bg-slate-800 text-slate-400 rounded border border-slate-700 font-mono">
                ⌘K
              </kbd>
            </button>
            <button
              onClick={() => setIsDMScreenOpen(true)}
              className="flex items-center gap-1 px-2.5 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded text-xs font-medium transition-colors"
              title="Open DM Screen Quick HUD (Alt+D)"
            >
              <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
              <span>DM HUD</span>
            </button>
          </div>

          {/* New Note & Worldbuilder Studio Button */}
          <div className="space-y-1.5">
            <button
              onClick={() => setIsWorldbuilderOpen(true)}
              className="w-full flex items-center justify-center gap-2 px-3 py-1.5 bg-gradient-to-r from-amber-500/20 via-amber-500/15 to-amber-600/20 hover:from-amber-500/30 hover:to-amber-600/30 text-amber-300 border border-amber-500/40 rounded-md text-xs font-semibold shadow-sm transition-all group"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400 group-hover:rotate-12 transition-transform" />
              <span>+ Worldbuilder & Templates</span>
            </button>
            <button
              onClick={() => setIsCharacterSheetOpen(true)}
              className="w-full flex items-center justify-center gap-2 px-3 py-1.5 bg-gradient-to-r from-amber-500/15 to-slate-900 hover:bg-slate-850 text-amber-300 border border-amber-500/30 rounded-md text-xs font-semibold shadow-sm transition-all group"
            >
              <UserCheck className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
              <span>Character Sheets (Standard & Kids)</span>
            </button>
            <button
              onClick={() => setViewMode('adventure')}
              className={`w-full flex items-center justify-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold shadow-sm transition-all group border ${
                viewMode === 'adventure'
                  ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold'
                  : 'bg-gradient-to-r from-purple-500/20 via-amber-500/15 to-purple-600/20 hover:from-purple-500/30 hover:to-purple-600/30 text-amber-300 border-amber-500/40'
              }`}
            >
              <Compass className="w-3.5 h-3.5 text-amber-400 group-hover:rotate-45 transition-transform" />
              <span>Pick Adventure & Auto-Populate</span>
            </button>
          </div>

          {/* Category Filter Chips */}
          <div className="pt-1 flex flex-wrap gap-1">
            {[
              { id: 'All', label: 'All' },
              { id: 'Characters', label: 'Characters' },
              { id: 'Templates', label: 'Templates' },
              { id: 'Homebrew', label: 'My Notes' },
              { id: 'Rules', label: 'Rules & DM' },
              { id: 'Classes', label: 'Classes' },
              { id: 'Spells', label: 'Spells' },
              { id: 'Monsters', label: 'Bestiary' },
              { id: 'Adventures', label: 'Adventures' },
              { id: 'Gear', label: 'Gear' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-2 py-0.5 rounded-full text-[10px] font-medium transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-850 border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Folder / Note Tree */}
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {hideOtherContent && activePreset && (
            <div className="mx-1 mb-2 p-2 bg-amber-500/15 border border-amber-500/40 rounded-md text-xs flex items-center justify-between text-amber-300 shadow-sm">
              <span className="truncate font-semibold flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="truncate">Focus: {activePreset.name}</span>
              </span>
              <button
                onClick={() => setHideOtherContent(false)}
                className="text-[10px] text-slate-400 hover:text-slate-100 underline shrink-0 ml-1.5"
                title="Show all vault notes"
              >
                Show All
              </button>
            </div>
          )}

          {folders.map((folder) => {
            const notesInFolder = groupedNotes.get(folder) || [];
            if (notesInFolder.length === 0) return null;
            const isCollapsed = collapsedFolders[folder];

            return (
              <div key={folder} className="text-xs">
                <button
                  onClick={() => toggleFolder(folder)}
                  className="w-full flex items-center justify-between px-2 py-1.5 rounded hover:bg-slate-900/80 text-slate-300 font-medium group transition-colors"
                >
                  <span className="flex items-center gap-1.5 truncate">
                    {isCollapsed ? (
                      <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-300" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-300" />
                    )}
                    {isCollapsed ? (
                      <Folder className="w-3.5 h-3.5 text-amber-500/80" />
                    ) : (
                      <FolderOpen className="w-3.5 h-3.5 text-amber-400" />
                    )}
                    <span className="truncate">{folder}</span>
                  </span>
                  <span className="text-[10px] text-slate-500 px-1.5 py-0.2 rounded bg-slate-900 border border-slate-800">
                    {notesInFolder.length}
                  </span>
                </button>

                {!isCollapsed && (
                  <div className="ml-4 pl-2 border-l border-slate-800/80 my-0.5 space-y-0.5">
                    {notesInFolder.map((note) => {
                      const isSelected = selectedNote.id === note.id;
                      return (
                        <button
                          key={note.id}
                          onClick={() => {
                            setSelectedNote(note);
                            setMobileSidebarOpen(false);
                          }}
                          className={`w-full flex items-center gap-1.5 px-2 py-1 rounded text-left truncate transition-colors ${
                            isSelected
                              ? 'bg-amber-500/15 text-amber-300 font-medium border-l-2 border-amber-400'
                              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                          }`}
                        >
                          <FileText
                            className={`w-3 h-3 shrink-0 ${
                              isSelected ? 'text-amber-400' : 'text-slate-600'
                            }`}
                          />
                          <span className="truncate">{note.title}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Vault Export Action */}
        <div className="p-3 border-t border-slate-800 bg-slate-950/90 space-y-2">
          {downloadSuccess && (
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded text-emerald-400 text-xs animate-in fade-in">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Vault downloaded!</span>
            </div>
          )}

          <button
            onClick={handleExportZip}
            disabled={isExporting}
            className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs rounded-md shadow-md shadow-amber-500/20 transition-all disabled:opacity-50"
          >
            <Download className="w-4 h-4" />
            {isExporting ? 'Generating ZIP...' : 'Export Vault (.zip)'}
          </button>
        </div>
      </aside>

      {/* Main Work Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden pt-12 lg:pt-0">
        {/* Workspace Toolbar */}
        <div className="h-10 px-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1 bg-slate-900 p-0.5 rounded border border-slate-800">
            <button
              onClick={() => setViewMode('note')}
              className={`px-3 py-1 rounded transition-colors ${
                viewMode === 'note'
                  ? 'bg-amber-500/20 text-amber-300 font-medium'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Note
            </button>
            <button
              onClick={() => setViewMode('split')}
              className={`px-3 py-1 rounded transition-colors ${
                viewMode === 'split'
                  ? 'bg-amber-500/20 text-amber-300 font-medium'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Split View
            </button>
            <button
              onClick={() => setViewMode('graph')}
              className={`px-3 py-1 rounded transition-colors ${
                viewMode === 'graph'
                  ? 'bg-amber-500/20 text-amber-300 font-medium'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Graph View
            </button>
            <button
              onClick={() => setViewMode('adventure')}
              className={`px-3 py-1 rounded transition-colors flex items-center gap-1.5 ${
                viewMode === 'adventure'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-amber-400 hover:text-amber-300 hover:bg-slate-800/60'
              }`}
              title="Pick an adventure & auto-populate random tables (Alt+A)"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Adventure Mode</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsCharacterSheetOpen(true)}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/50 font-medium transition-colors cursor-pointer shadow-sm active:scale-95"
              title="Open Character Sheets & Kids 5e Studio (Alt+C)"
            >
              <UserCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Character Sheets</span>
            </button>

            <button
              onClick={() => setIsDMScreenOpen(true)}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/50 font-medium transition-colors cursor-pointer shadow-sm active:scale-95"
              title="Toggle DM Screen Quick Reference (Alt+D)"
            >
              <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
              <span>DM Screen HUD</span>
            </button>

            <button
              onClick={() => navigateToNote("5e Mechanics Dictionary & Rules Glossary (A to Z)")}
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded hover:bg-slate-900 text-slate-300 hover:text-amber-300 border border-slate-800 transition-colors cursor-pointer"
              title="Open Complete A-Z Rules Dictionary Note"
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>Rules Dictionary</span>
            </button>

            <div className="h-4 w-px bg-slate-800 hidden sm:block" />

            <div className="flex items-center gap-3 text-slate-400">
              <span className="hidden sm:inline">
                Active: <strong className="text-slate-200">{selectedNote.title}</strong>
              </span>
              <span className="hidden md:inline text-slate-600">•</span>
              <span className="hidden md:inline font-mono text-[11px] text-amber-400/90">
                {allVaultNotes.length} notes total
              </span>
            </div>
          </div>
        </div>

        {/* View Mode Canvas */}
        <div className="flex-1 flex overflow-hidden">
          {viewMode === 'note' && (
            <div className="flex-1 flex h-full overflow-hidden">
              <div className="flex-1 h-full overflow-hidden">
                <NoteViewer
                  note={selectedNote}
                  onNavigateToNote={navigateToNote}
                  onOpenGraph={() => setViewMode('graph')}
                  backlinkCount={(backlinks[selectedNote.title] || []).length}
                  onToggleBacklinks={() => setIsBacklinksOpen(!isBacklinksOpen)}
                  isBacklinksOpen={isBacklinksOpen}
                  allNotes={combinedNotes}
                  onUpdateNote={handleUpdateNote}
                  onDeleteNote={handleDeleteNote}
                  onOpenWorldbuilder={() => setIsWorldbuilderOpen(true)}
                  onOpenCharacterSheets={() => setIsCharacterSheetOpen(true)}
                  onTriggerDiceRoll={(roll) => setRecentDiceRoll(roll)}
                />
              </div>
              {isBacklinksOpen && (
                <BacklinksPanel
                  note={selectedNote}
                  backlinks={backlinks}
                  forwardLinks={forwardLinks}
                  onNavigateToNote={navigateToNote}
                  onClose={() => setIsBacklinksOpen(false)}
                />
              )}
            </div>
          )}

          {viewMode === 'graph' && (
            <div className="flex-1 h-full p-3 bg-slate-900">
              <VaultGraph
                notes={combinedNotes}
                selectedNote={selectedNote}
                forwardLinks={forwardLinks}
                onSelectNote={(note) => {
                  setSelectedNote(note);
                  setViewMode('note');
                }}
              />
            </div>
          )}

          {viewMode === 'split' && (
            <div className="flex-1 flex h-full overflow-hidden">
              <div className="w-1/2 h-full overflow-hidden border-r border-slate-800">
                <NoteViewer
                  note={selectedNote}
                  onNavigateToNote={navigateToNote}
                  onOpenGraph={() => setViewMode('graph')}
                  backlinkCount={(backlinks[selectedNote.title] || []).length}
                  onToggleBacklinks={() => setIsBacklinksOpen(!isBacklinksOpen)}
                  isBacklinksOpen={isBacklinksOpen}
                  allNotes={combinedNotes}
                  onUpdateNote={handleUpdateNote}
                  onDeleteNote={handleDeleteNote}
                  onOpenWorldbuilder={() => setIsWorldbuilderOpen(true)}
                  onOpenCharacterSheets={() => setIsCharacterSheetOpen(true)}
                  onTriggerDiceRoll={(roll) => setRecentDiceRoll(roll)}
                />
              </div>
              <div className="w-1/2 h-full p-3 bg-slate-900">
                <VaultGraph
                  notes={combinedNotes}
                  selectedNote={selectedNote}
                  forwardLinks={forwardLinks}
                  onSelectNote={(note) => setSelectedNote(note)}
                />
              </div>
            </div>
          )}

          {viewMode === 'adventure' && (
            <div className="flex-1 flex h-full overflow-hidden">
              <AdventureConsole
                allNotes={combinedNotes}
                onNavigateToNote={(title) => {
                  navigateToNote(title);
                  setViewMode('note');
                }}
                onRollDice={(notation, label) => {
                  const res = parseAndRoll(notation);
                  if (res) {
                    setRecentDiceRoll({
                      ...res,
                      label
                    });
                  }
                }}
                onCreateCustomNote={handleCreateCustomNote}
                hideOtherContent={hideOtherContent}
                onToggleHideOtherContent={setHideOtherContent}
                activeAdventureId={activeAdventureId}
                onSelectAdventure={(id) => {
                  setActiveAdventureId(id);
                }}
              />
            </div>
          )}
        </div>
      </main>

      {/* Quick Switcher Modal (Cmd+K) */}
      {isQuickSwitcherOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-lg max-w-xl w-full shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-100">
            <div className="p-3 border-b border-slate-800 flex items-center gap-2">
              <Search className="w-4 h-4 text-amber-400" />
              <input
                autoFocus
                type="text"
                placeholder="Type note title, keyword, or tag..."
                className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-500 focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <kbd className="text-[10px] text-slate-500 font-mono px-1.5 py-0.5 bg-slate-800 rounded">
                ESC
              </kbd>
            </div>

            <div className="max-h-80 overflow-y-auto p-2 space-y-1">
              {filteredNotes.length === 0 ? (
                <div className="p-4 text-center text-xs text-slate-500">
                  No notes match "{searchQuery}"
                </div>
              ) : (
                filteredNotes.slice(0, 15).map((note) => (
                  <button
                    key={note.id}
                    onClick={() => navigateToNote(note.title)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded text-left hover:bg-slate-800 text-xs text-slate-200 group transition-colors"
                  >
                    <div className="flex items-center gap-2 truncate">
                      <FileText className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span className="font-medium truncate">{note.title}</span>
                    </div>
                    <span className="text-[10px] text-slate-500 px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800">
                      {note.folder}
                    </span>
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* Worldbuilder Studio Modal */}
      <WorldbuilderModal
        isOpen={isWorldbuilderOpen}
        onClose={() => setIsWorldbuilderOpen(false)}
        onCreateNote={handleCreateCustomNote}
      />

      {/* Vault Statistics & Integrity Modal */}
      <VaultStatsModal
        notes={combinedNotes}
        isOpen={isStatsOpen}
        onClose={() => setIsStatsOpen(false)}
        onExport={handleExportZip}
        isExporting={isExporting}
      />

      {/* DM Screen Quick Reference HUD Drawer */}
      <DMScreenDrawer
        isOpen={isDMScreenOpen}
        onClose={() => setIsDMScreenOpen(false)}
        onNavigateToNote={navigateToNote}
      />

      {/* Interactive Character Sheet Studio Modal (Standard 5e & Kids 5e) */}
      <CharacterSheetModal
        isOpen={isCharacterSheetOpen}
        onClose={() => setIsCharacterSheetOpen(false)}
        onTriggerDiceRoll={(roll) => setRecentDiceRoll(roll)}
        onSaveToVault={handleCreateCustomNote}
      />

      {/* Floating Quick Dice Tray Dock */}
      <QuickDiceTray recentRoll={recentDiceRoll} />
    </div>
  );
}
