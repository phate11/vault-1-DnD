import React, { useState } from 'react';
import { VaultNote } from '../types';
import { worldbuildingTemplateNotes } from '../data/worldbuildingTemplateNotes';
import {
  Sparkles,
  X,
  Copy,
  Check,
  Plus,
  Compass,
  MapPin,
  User,
  Shield,
  Sun,
  Sword,
  Skull,
  Calendar,
  Search,
  TreePine,
  Wand2,
  BookOpen
} from 'lucide-react';

interface WorldbuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateNote: (newNote: VaultNote) => void;
}

interface TemplatePreset {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
  defaultFolder: string;
  description: string;
  templateId: string;
}

const TEMPLATE_PRESETS: TemplatePreset[] = [
  {
    id: 'settlement',
    name: 'Settlement & City',
    icon: MapPin,
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    defaultFolder: 'Homebrew/Locations',
    description: 'Districts, demographics, defenses, taverns, key NPCs, and 1d6 rumor tables.',
    templateId: 'template-settlement-worldbuilding'
  },
  {
    id: 'npc',
    name: 'NPC & Roleplay Profile',
    icon: User,
    color: 'text-sky-400 bg-sky-500/10 border-sky-500/30',
    defaultFolder: 'Homebrew/NPCs',
    description: 'Ideals, bonds, flaws, voice quirks, dark secrets, and embedded 5e stat block.',
    templateId: 'template-npc-character-worldbuilding'
  },
  {
    id: 'dungeon',
    name: 'Dungeon & Delve',
    icon: Compass,
    color: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    defaultFolder: 'Homebrew/Dungeons',
    description: 'Dungeon ecology, wandering monsters, room-by-room key, traps, and boss vault.',
    templateId: 'template-dungeon-delve-worldbuilding'
  },
  {
    id: 'faction',
    name: 'Faction & Guild Order',
    icon: Shield,
    color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30',
    defaultFolder: 'Homebrew/Factions',
    description: 'Ranks 1–5 renown perks, agendas, heraldry, safehouses, and faction rivalries.',
    templateId: 'template-faction-guild-worldbuilding'
  },
  {
    id: 'deity',
    name: 'Deity & Pantheon',
    icon: Sun,
    color: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30',
    defaultFolder: 'Homebrew/Pantheon',
    description: 'Domains, holy symbols, dogma, priesthood orders, and divine Channel Divinity boons.',
    templateId: 'template-deity-pantheon-worldbuilding'
  },
  {
    id: 'magic-item',
    name: 'Magic Item & Artifact',
    icon: Sword,
    color: 'text-rose-400 bg-rose-500/10 border-rose-500/30',
    defaultFolder: 'Homebrew/Magic Items',
    description: 'Properties, charges, attunement, spell triggers, curses, and sentience.',
    templateId: 'template-magic-item-worldbuilding'
  },
  {
    id: 'monster',
    name: 'Monster & Boss Encounter',
    icon: Skull,
    color: 'text-red-400 bg-red-500/10 border-red-500/30',
    defaultFolder: 'Homebrew/Monsters',
    description: 'Complete YAML stat block, legendary/lair actions, regional effects, and tactics.',
    templateId: 'template-monster-boss-worldbuilding'
  },
  {
    id: 'session-prep',
    name: 'Session Prep & DM Tracker',
    icon: Calendar,
    color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
    defaultFolder: 'Homebrew/Campaign - Sessions',
    description: 'Lazy DM framework: strong start, 10 secrets & clues, encounters, and clocks.',
    templateId: 'template-session-prep-tracker'
  },
  {
    id: 'quest',
    name: 'Quest & Mystery Arc',
    icon: Search,
    color: 'text-violet-400 bg-violet-500/10 border-violet-500/30',
    defaultFolder: 'Homebrew/Quests',
    description: 'Three-Clue Rule matrix, suspects, alibis, escalation timers, and rewards.',
    templateId: 'template-quest-mystery-arc'
  },
  {
    id: 'wilderness',
    name: 'Wilderness & Realm',
    icon: TreePine,
    color: 'text-teal-400 bg-teal-500/10 border-teal-500/30',
    defaultFolder: 'Homebrew/Regions',
    description: 'Hex crawl exploration tables, environmental hazards, weather, and flora/fauna.',
    templateId: 'template-wilderness-region-worldbuilding'
  },
  {
    id: 'spell',
    name: 'Custom Spell & Magic',
    icon: Wand2,
    color: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
    defaultFolder: 'Homebrew/Spells',
    description: 'Level, school, components, upcasting formulas, class lists, and discovery lore.',
    templateId: 'template-spell-technomagic-worldbuilding'
  },
  {
    id: 'campaign-hub',
    name: 'Campaign Master Bible',
    icon: BookOpen,
    color: 'text-amber-300 bg-amber-400/10 border-amber-400/30',
    defaultFolder: 'Homebrew/Campaign - Master Hub',
    description: 'Setting themes, party roster, house rules, front clocks, and Dataview tables.',
    templateId: 'template-campaign-master-hub'
  }
];

export const WorldbuilderModal: React.FC<WorldbuilderModalProps> = ({
  isOpen,
  onClose,
  onCreateNote
}) => {
  const [selectedPreset, setSelectedPreset] = useState<TemplatePreset>(TEMPLATE_PRESETS[0]);
  const [noteTitle, setNoteTitle] = useState('');
  const [customFolder, setCustomFolder] = useState(TEMPLATE_PRESETS[0].defaultFolder);
  const [copied, setCopied] = useState(false);
  const [previewTab, setPreviewTab] = useState<'create' | 'preview'>('create');

  if (!isOpen) return null;

  const currentTemplateNote = worldbuildingTemplateNotes.find(
    (n) => n.id === selectedPreset.templateId
  );

  const handleSelectPreset = (preset: TemplatePreset) => {
    setSelectedPreset(preset);
    setCustomFolder(preset.defaultFolder);
    if (!noteTitle || noteTitle.includes('Name')) {
      setNoteTitle(`My New ${preset.name}`);
    }
  };

  const generateContent = (title: string, folder: string) => {
    const raw = currentTemplateNote ? currentTemplateNote.content : '';
    // Replace placeholder title and folder in frontmatter
    let processed = raw;
    if (title.trim()) {
      processed = processed.replace(/^title:\s*.*$/m, `title: ${title.trim()}`);
      processed = processed.replace(/^#\s+.*$/m, `# ${title.trim()}`);
    }
    if (folder.trim()) {
      processed = processed.replace(/^folder:\s*.*$/m, `folder: ${folder.trim()}`);
    }
    return processed;
  };

  const handleCreate = () => {
    const finalTitle = noteTitle.trim() || `New ${selectedPreset.name}`;
    const finalFolder = customFolder.trim() || selectedPreset.defaultFolder;
    const content = generateContent(finalTitle, finalFolder);

    const newNote: VaultNote = {
      id: `homebrew-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      title: finalTitle,
      folder: finalFolder,
      category: currentTemplateNote?.category || 'Homebrew',
      tags: ['homebrew', selectedPreset.id, 'worldbuilding'],
      aliases: [finalTitle],
      content
    };

    onCreateNote(newNote);
    onClose();
  };

  const handleCopy = () => {
    const finalTitle = noteTitle.trim() || `New ${selectedPreset.name}`;
    const finalFolder = customFolder.trim() || selectedPreset.defaultFolder;
    const content = generateContent(finalTitle, finalFolder);
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-slate-950 border border-amber-500/30 w-full max-w-4xl max-h-[90vh] rounded-xl shadow-2xl flex flex-col overflow-hidden text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/60">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-lg font-bold text-amber-200 flex items-center gap-2">
                Worldbuilder Studio & Template Generator
              </h2>
              <p className="text-xs text-slate-400">
                Instantly spawn standardized Obsidian-ready worldbuilding notes, stat blocks, and campaign logs.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-slate-800">
          {/* Left Column: Preset Catalog */}
          <div className="md:col-span-5 p-4 overflow-y-auto max-h-[60vh] space-y-2">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 px-1 mb-2">
              Select Worldbuilding Archetype
            </div>
            <div className="grid grid-cols-1 gap-1.5">
              {TEMPLATE_PRESETS.map((preset) => {
                const Icon = preset.icon;
                const isSelected = selectedPreset.id === preset.id;
                return (
                  <button
                    key={preset.id}
                    onClick={() => handleSelectPreset(preset)}
                    className={`w-full text-left p-2.5 rounded-lg border transition-all flex items-start gap-3 ${
                      isSelected
                        ? 'bg-amber-500/15 border-amber-500/50 shadow-md shadow-amber-950/20'
                        : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-850 hover:border-slate-700'
                    }`}
                  >
                    <div className={`p-2 rounded-md border shrink-0 ${preset.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-semibold text-slate-200 flex items-center justify-between">
                        <span>{preset.name}</span>
                        {isSelected && <span className="text-[10px] text-amber-400 font-bold">Selected</span>}
                      </div>
                      <p className="text-[11px] text-slate-400 line-clamp-2 mt-0.5 leading-snug">
                        {preset.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Configuration & Preview */}
          <div className="md:col-span-7 p-5 flex flex-col justify-between overflow-y-auto max-h-[60vh] space-y-4">
            <div className="space-y-4">
              {/* Tab Selector */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <div className="flex gap-2">
                  <button
                    onClick={() => setPreviewTab('create')}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                      previewTab === 'create'
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Note Setup
                  </button>
                  <button
                    onClick={() => setPreviewTab('preview')}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                      previewTab === 'preview'
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Markdown Preview
                  </button>
                </div>
                <div className="text-[11px] text-slate-500">
                  Folder: <span className="text-amber-400/90 font-mono">{customFolder}</span>
                </div>
              </div>

              {previewTab === 'create' ? (
                <div className="space-y-4 pt-1">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Note Title
                    </label>
                    <input
                      type="text"
                      value={noteTitle}
                      onChange={(e) => setNoteTitle(e.target.value)}
                      placeholder={`e.g. ${
                        selectedPreset.id === 'settlement'
                          ? 'Daggerford Gateway'
                          : selectedPreset.id === 'npc'
                          ? 'Archmage Malakor'
                          : selectedPreset.id === 'monster'
                          ? 'Gargantuan Ash Drake'
                          : 'My Custom Note'
                      }`}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Target Vault Folder
                    </label>
                    <input
                      type="text"
                      value={customFolder}
                      onChange={(e) => setCustomFolder(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-slate-100 font-mono focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                    />
                    <p className="text-[11px] text-slate-500 mt-1">
                      Organized cleanly under your vault hierarchy. Will export automatically to desktop Obsidian.
                    </p>
                  </div>

                  {/* Highlights box */}
                  <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800 space-y-2">
                    <div className="text-xs font-semibold text-amber-300 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Features Included in this Template</span>
                    </div>
                    <ul className="text-xs text-slate-400 space-y-1 pl-4 list-disc marker:text-amber-500/60">
                      <li>Full YAML frontmatter (tags, category, folder, attributes)</li>
                      <li>Standardized cross-referencing with [[wikilinks]]</li>
                      <li>Pre-styled 5e CSS callouts, tables, and die-rollable tables</li>
                      {selectedPreset.id === 'monster' && <li>Authentic TTRPG Statblock with dice actions</li>}
                      {selectedPreset.id === 'campaign-hub' && <li>Automated Dataview query tables pre-written</li>}
                      {selectedPreset.id === 'session-prep' && <li>10 Secrets & Clues checkboxes and Lazy DM workflow</li>}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="space-y-2 pt-1">
                  <div className="text-[11px] text-slate-400">
                    Template preview (Frontmatter + Markdown):
                  </div>
                  <pre className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono text-slate-300 max-h-[300px] overflow-y-auto whitespace-pre-wrap select-all">
                    {generateContent(noteTitle || 'My New Note', customFolder)}
                  </pre>
                </div>
              )}
            </div>

            {/* Actions Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800 mt-4">
              <button
                onClick={handleCopy}
                className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-850 text-slate-300 border border-slate-700 text-xs font-medium flex items-center gap-1.5 transition-colors"
                title="Copy raw Markdown to clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Markdown'}</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={onClose}
                  className="px-3 py-1.5 rounded-lg text-slate-400 hover:text-slate-200 text-xs font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCreate}
                  className="px-4 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold shadow-md shadow-amber-950/40 flex items-center gap-1.5 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5 stroke-[3]" />
                  <span>Create Note & Open</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
