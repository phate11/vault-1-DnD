import React, { useState, useEffect } from 'react';
import {
  SheetType,
  StandardCharacterSheet,
  KidCharacterSheet,
  AnyCharacterSheet,
  SKILL_DEFINITIONS,
  formatModifier
} from '../types/characterSheet';
import {
  DEFAULT_STANDARD_CHARACTERS,
  DEFAULT_KID_CHARACTERS,
  convertCharacterToMarkdown
} from '../data/defaultCharacterSheets';
import {
  CHARACTER_SHEET_TEMPLATES,
  CharacterTemplateItem
} from '../data/characterSheetTemplates';
import { DiceRollResult } from './QuickDiceTray';
import { VaultNote } from '../types';
import {
  Shield,
  Heart,
  Sparkles,
  Zap,
  Sword,
  Scroll,
  X,
  Plus,
  Copy,
  Check,
  Download,
  Dices,
  Smile,
  Eye,
  Brain,
  Backpack,
  Award,
  Coins,
  ChevronDown,
  Printer,
  FileText,
  UserCheck,
  Star,
  RefreshCw,
  LayoutGrid,
  Search,
  Filter,
  Play,
  Wand2,
  BookOpen
} from 'lucide-react';

interface CharacterSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTriggerDiceRoll?: (roll: DiceRollResult) => void;
  onSaveToVault?: (newNote: VaultNote) => void;
}

export const CharacterSheetModal: React.FC<CharacterSheetModalProps> = ({
  isOpen,
  onClose,
  onTriggerDiceRoll,
  onSaveToVault
}) => {
  const [sheetType, setSheetType] = useState<SheetType>('kids');
  const [activeTab, setActiveTab] = useState<'kids' | 'standard' | 'templates'>('kids');
  const [templateFilter, setTemplateFilter] = useState<string>('all');
  const [templateSearch, setTemplateSearch] = useState('');
  const [customizingTemplate, setCustomizingTemplate] = useState<CharacterTemplateItem | null>(null);
  const [customHeroName, setCustomHeroName] = useState('');
  const [standardRoster, setStandardRoster] = useState<StandardCharacterSheet[]>(() => {
    try {
      const saved = localStorage.getItem('dnd_vault_standard_roster');
      return saved ? JSON.parse(saved) : DEFAULT_STANDARD_CHARACTERS;
    } catch {
      return DEFAULT_STANDARD_CHARACTERS;
    }
  });

  const [kidRoster, setKidRoster] = useState<KidCharacterSheet[]>(() => {
    try {
      const saved = localStorage.getItem('dnd_vault_kid_roster');
      return saved ? JSON.parse(saved) : DEFAULT_KID_CHARACTERS;
    } catch {
      return DEFAULT_KID_CHARACTERS;
    }
  });

  const [selectedStandardId, setSelectedStandardId] = useState<string>(DEFAULT_STANDARD_CHARACTERS[0].id);
  const [selectedKidId, setSelectedKidId] = useState<string>(DEFAULT_KID_CHARACTERS[0].id);
  const [copied, setCopied] = useState(false);
  const [savedToVaultSuccess, setSavedToVaultSuccess] = useState(false);
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  const [newCharName, setNewCharName] = useState('');
  const [newCharClass, setNewCharClass] = useState('');

  // Persist rosters to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('dnd_vault_standard_roster', JSON.stringify(standardRoster));
    } catch (e) {
      console.error(e);
    }
  }, [standardRoster]);

  useEffect(() => {
    try {
      localStorage.setItem('dnd_vault_kid_roster', JSON.stringify(kidRoster));
    } catch (e) {
      console.error(e);
    }
  }, [kidRoster]);

  if (!isOpen) return null;

  const currentStandard = standardRoster.find((c) => c.id === selectedStandardId) || standardRoster[0];
  const currentKid = kidRoster.find((c) => c.id === selectedKidId) || kidRoster[0];

  const handleLoadTemplate = (tpl: CharacterTemplateItem, customName?: string) => {
    const finalName = customName?.trim() || tpl.sheet.name;
    if (tpl.system === 'kids') {
      const newKid: KidCharacterSheet = {
        ...(tpl.sheet as KidCharacterSheet),
        id: `kid-tpl-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
        name: finalName
      };
      setKidRoster((prev) => [newKid, ...prev]);
      setSelectedKidId(newKid.id);
      setSheetType('kids');
      setActiveTab('kids');
    } else {
      const newStandard: StandardCharacterSheet = {
        ...(tpl.sheet as StandardCharacterSheet),
        id: `std-tpl-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
        name: finalName
      };
      setStandardRoster((prev) => [newStandard, ...prev]);
      setSelectedStandardId(newStandard.id);
      setSheetType('standard');
      setActiveTab('standard');
    }
    setCustomizingTemplate(null);
    setCustomHeroName('');
  };

  const handleSaveTemplateToVault = (tpl: CharacterTemplateItem) => {
    const md = convertCharacterToMarkdown(tpl.sheet);
    const folder = tpl.system === 'kids' ? 'Characters/Kids' : (tpl.category === 'Modern' ? 'Characters/Modern' : 'Characters/Standard');
    const noteTitle = `${tpl.sheet.name} (${tpl.name})`;

    if (onSaveToVault) {
      const newNote: VaultNote = {
        id: `char-tpl-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
        title: noteTitle,
        folder,
        category: 'Character',
        tags: ['character', tpl.system === 'kids' ? 'kids-dnd' : '5e-standard', tpl.category.toLowerCase(), 'template'],
        aliases: [tpl.sheet.name, tpl.name],
        content: md
      };
      onSaveToVault(newNote);
      setSavedToVaultSuccess(true);
      setTimeout(() => setSavedToVaultSuccess(false), 3000);
    }
  };

  const handleCopyTemplateMarkdown = (tpl: CharacterTemplateItem) => {
    const md = convertCharacterToMarkdown(tpl.sheet);
    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Roll d20 helper with dice tray integration
  const rollCheck = (label: string, bonus: number, notation = '1d20') => {
    const d20 = Math.floor(Math.random() * 20) + 1;
    const total = d20 + bonus;
    const result: DiceRollResult = {
      formula: notation,
      notation,
      rolls: [d20],
      modifier: bonus,
      total,
      timestamp: new Date(),
      label: `${label} (${bonus >= 0 ? `+${bonus}` : bonus})`
    };
    if (onTriggerDiceRoll) {
      onTriggerDiceRoll(result);
    }
  };

  const rollDamage = (label: string, diceCount: number, diceSides: number, bonus: number) => {
    const rolls: number[] = [];
    let sum = 0;
    for (let i = 0; i < diceCount; i++) {
      const val = Math.floor(Math.random() * diceSides) + 1;
      rolls.push(val);
      sum += val;
    }
    const total = sum + bonus;
    const notation = `${diceCount}d${diceSides}${bonus !== 0 ? (bonus > 0 ? `+${bonus}` : bonus) : ''}`;
    const result: DiceRollResult = {
      formula: notation,
      notation,
      rolls,
      modifier: bonus,
      total,
      timestamp: new Date(),
      label: `${label} Damage`
    };
    if (onTriggerDiceRoll) {
      onTriggerDiceRoll(result);
    }
  };

  // Kid Hearts modification
  const handleKidHeartsChange = (delta: number) => {
    setKidRoster((prev) =>
      prev.map((k) => {
        if (k.id === currentKid.id) {
          const next = Math.max(0, Math.min(k.heartsMax, k.heartsCurrent + delta));
          return { ...k, heartsCurrent: next };
        }
        return k;
      })
    );
  };

  const handleToggleHeartSlot = (index: number) => {
    setKidRoster((prev) =>
      prev.map((k) => {
        if (k.id === currentKid.id) {
          const next = index < k.heartsCurrent ? index : index + 1;
          return { ...k, heartsCurrent: next };
        }
        return k;
      })
    );
  };

  // Kid Stars modification
  const handleKidStarsChange = (delta: number) => {
    setKidRoster((prev) =>
      prev.map((k) => {
        if (k.id === currentKid.id) {
          const next = Math.max(0, Math.min(k.heroStarsMax, k.heroStars + delta));
          return { ...k, heroStars: next };
        }
        return k;
      })
    );
  };

  // Standard HP modification
  const handleStandardHpChange = (delta: number) => {
    setStandardRoster((prev) =>
      prev.map((s) => {
        if (s.id === currentStandard.id) {
          const next = Math.max(0, Math.min(s.hpMax, s.hpCurrent + delta));
          return { ...s, hpCurrent: next };
        }
        return s;
      })
    );
  };

  const handleStandardDeathSave = (type: 'successes' | 'failures', index: number) => {
    setStandardRoster((prev) =>
      prev.map((s) => {
        if (s.id === currentStandard.id) {
          const currentVal = s.deathSaves[type];
          const nextVal = currentVal > index ? index : index + 1;
          return {
            ...s,
            deathSaves: {
              ...s.deathSaves,
              [type]: nextVal
            }
          };
        }
        return s;
      })
    );
  };

  const handleExportMarkdown = () => {
    const activeSheet: AnyCharacterSheet = sheetType === 'kids' ? currentKid : currentStandard;
    const md = convertCharacterToMarkdown(activeSheet);
    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSaveToVaultNote = () => {
    const activeSheet: AnyCharacterSheet = sheetType === 'kids' ? currentKid : currentStandard;
    const md = convertCharacterToMarkdown(activeSheet);
    const folder = sheetType === 'kids' ? 'Characters/Kids' : 'Characters/Standard';
    const noteTitle = `${activeSheet.name} - ${sheetType === 'kids' ? 'Kid Adventurer' : '5e Sheet'}`;

    if (onSaveToVault) {
      const newNote: VaultNote = {
        id: `char-sheet-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
        title: noteTitle,
        folder,
        category: 'Character',
        tags: ['character', sheetType === 'kids' ? 'kids-dnd' : '5e-standard', 'adventurer'],
        aliases: [activeSheet.name],
        content: md
      };
      onSaveToVault(newNote);
      setSavedToVaultSuccess(true);
      setTimeout(() => setSavedToVaultSuccess(false), 3000);
    }
  };

  const handleCreateNewCharacter = () => {
    if (!newCharName.trim()) return;

    if (sheetType === 'kids') {
      const newKid: KidCharacterSheet = {
        id: `kid-char-${Date.now()}`,
        type: 'kids',
        name: newCharName.trim(),
        heroTitle: 'The Brave Explorer',
        heroClass: newCharClass.trim() || 'Hero Adventurer',
        ageGroup: 'Ages 5 and Up',
        avatarEmoji: '⭐',
        themeColor: 'amber',
        heartsCurrent: 8,
        heartsMax: 8,
        heroStars: 3,
        heroStarsMax: 5,
        stats: {
          brawn: { name: 'Brawn', icon: '🦾', bonus: 2, hint: 'Smashing doors, heavy lifting, big jumps!' },
          agility: { name: 'Agility', icon: '⚡', bonus: 2, hint: 'Dodging traps, sneaky tiptoeing, archery!' },
          heart: { name: 'Heart', icon: '❤️', bonus: 2, hint: 'Being brave, standing tall, eating spicy stew!' },
          smarts: { name: 'Smarts', icon: '🧠', bonus: 1, hint: 'Solving riddles, reading maps, knowing monsters!' },
          senses: { name: 'Senses', icon: '👁️', bonus: 1, hint: 'Spotting clues, hearing whispers!' },
          smile: { name: 'Smile', icon: '✨', bonus: 2, hint: 'Cheering up friends, making loyal allies!' }
        },
        heroMoves: [
          {
            id: `move-${Date.now()}-1`,
            name: 'Heroic Strike',
            icon: '⚔️',
            actionType: 'Action',
            ruleTip: 'Roll d20 + Brawn (+2)! On 10+, deal 2 Hearts to a monster!',
            description: 'A courageous strike to protect friends and allies.'
          },
          {
            id: `move-${Date.now()}-2`,
            name: 'Cheering Smile',
            icon: '💖',
            actionType: 'Special Power',
            ruleTip: 'Spend 1 Star ⭐ to give everyone +2 on their roll!',
            description: 'Gives a warm speech that makes everyone feel invincible.'
          }
        ],
        backpack: [
          { name: 'Warm Apple Turnover', icon: '🥧', description: 'Eat to heal 1 Heart immediately!' },
          { name: 'Bright Camp Torch', icon: '🔦', description: 'Shines friendly light that wards off gloom.' },
          { name: 'Soft Climbing Rope', icon: '🪢', description: '50 feet of sturdy rope.' }
        ],
        goldCoins: 10,
        motto: 'Always be kind and never give up!',
        favoriteTreat: 'Honey cakes and fresh milk'
      };

      setKidRoster((prev) => [newKid, ...prev]);
      setSelectedKidId(newKid.id);
    } else {
      const newStandard: StandardCharacterSheet = {
        id: `std-char-${Date.now()}`,
        type: 'standard',
        name: newCharName.trim(),
        classAndLevel: newCharClass.trim() || 'Fighter 1',
        race: 'Human',
        background: 'Folk Hero',
        alignment: 'Neutral Good',
        xp: 0,
        inspiration: false,
        proficiencyBonus: 2,
        armorClass: 16,
        initiative: 1,
        speed: '30 ft.',
        hpCurrent: 12,
        hpMax: 12,
        hpTemp: 0,
        hitDice: '1d10',
        deathSaves: { successes: 0, failures: 0 },
        abilities: {
          str: { score: 16, modifier: 3, saveProficient: true },
          dex: { score: 12, modifier: 1, saveProficient: false },
          con: { score: 14, modifier: 2, saveProficient: true },
          int: { score: 10, modifier: 0, saveProficient: false },
          wis: { score: 12, modifier: 1, saveProficient: false },
          cha: { score: 8, modifier: -1, saveProficient: false }
        },
        skills: {
          athletics: { proficient: true },
          animalHandling: { proficient: true },
          survival: { proficient: true }
        },
        passivePerception: 13,
        proficienciesAndLanguages: ['All armor, shields', 'Simple & martial weapons', 'Common'],
        attacks: [
          {
            id: `atk-${Date.now()}`,
            name: 'Longsword',
            atkBonus: 5,
            damage: '1d8 + 3',
            damageType: 'slashing',
            range: 'Melee (5 ft.)'
          }
        ],
        equipment: ['Chain Mail (AC 16)', 'Longsword', 'Shield', "Explorer's Pack"],
        currency: { cp: 10, sp: 15, ep: 0, gp: 25, pp: 0 },
        featuresAndTraits: ['Second Wind: Regain 1d10+1 HP on bonus action once per short rest'],
        personality: {
          traits: 'I face problems head-on.',
          ideals: 'Protect those who cannot protect themselves.',
          bonds: 'My village is my home and family.',
          flaws: 'I cannot back down from a challenge.'
        }
      };

      setStandardRoster((prev) => [newStandard, ...prev]);
      setSelectedStandardId(newStandard.id);
    }

    setIsCreatingNew(false);
    setNewCharName('');
    setNewCharClass('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="bg-slate-950 border border-slate-800 w-full max-w-6xl max-h-[94vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top App Header */}
        <div className="px-5 py-3.5 border-b border-slate-800 bg-slate-900/80 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 shadow-inner">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-lg font-bold text-slate-100 flex items-center gap-2">
                <span>Character Sheet Studio</span>
                <span className="text-xs px-2 py-0.5 rounded-full font-sans font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Interactive 5e
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Interactive character management for both standard 5e campaigns and young adventurers (ages 5+).
              </p>
            </div>
          </div>

          {/* System Toggle: Standard vs Kids vs Templates */}
          <div className="flex items-center gap-2">
            <div className="flex items-center p-1 bg-slate-950 rounded-xl border border-slate-800 shadow-inner">
              <button
                onClick={() => {
                  setSheetType('kids');
                  setActiveTab('kids');
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'kids'
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md shadow-amber-950/40'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Young Adventurers (Ages 5+)</span>
              </button>
              <button
                onClick={() => {
                  setSheetType('standard');
                  setActiveTab('standard');
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'standard'
                    ? 'bg-slate-800 text-amber-300 border border-amber-500/30 shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Shield className="w-3.5 h-3.5" />
                <span>Standard 5e Sheet</span>
              </button>
              <button
                onClick={() => setActiveTab('templates')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'templates'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-md font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                <span>Templates Gallery ({CHARACTER_SHEET_TEMPLATES.length})</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Character Selector Sub-Toolbar */}
        <div className="px-5 py-2.5 bg-slate-950 border-b border-slate-850 flex flex-wrap items-center justify-between gap-3 text-xs">
          {activeTab === 'templates' ? (
            <div className="flex items-center justify-between w-full gap-3">
              <div className="flex items-center gap-2 text-slate-300">
                <LayoutGrid className="w-4 h-4 text-amber-400" />
                <span className="font-semibold text-slate-200">Character Sheet Templates</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-400 text-[11px]">
                  Pick a pre-configured template to load into your roster or export to your Obsidian vault.
                </span>
              </div>
              <button
                onClick={() => setActiveTab(sheetType === 'kids' ? 'kids' : 'standard')}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-700 text-amber-300 text-xs font-semibold transition-colors"
              >
                <span>Back to Active Sheet</span>
              </button>
            </div>
          ) : (
            <>
              {/* Character Roster Pill Selector */}
              <div className="flex items-center gap-2 overflow-x-auto py-0.5 max-w-full">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 whitespace-nowrap">
                  {sheetType === 'kids' ? 'Kid Heroes:' : '5e Roster:'}
                </span>

                {sheetType === 'kids' ? (
                  <div className="flex items-center gap-1.5">
                    {kidRoster.map((k) => (
                      <button
                        key={k.id}
                        onClick={() => setSelectedKidId(k.id)}
                        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border transition-all ${
                          selectedKidId === k.id
                            ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 font-bold shadow-sm'
                            : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-850'
                        }`}
                      >
                        <span>{k.avatarEmoji}</span>
                        <span className="whitespace-nowrap">{k.name}</span>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5">
                    {standardRoster.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setSelectedStandardId(s.id)}
                        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border transition-all ${
                          selectedStandardId === s.id
                            ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 font-bold shadow-sm'
                            : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-850'
                        }`}
                      >
                        <span>⚔️</span>
                        <span className="whitespace-nowrap">{s.name}</span>
                      </button>
                    ))}
                  </div>
                )}

                <button
                  onClick={() => setIsCreatingNew(!isCreatingNew)}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-700 text-slate-300 hover:text-amber-300 font-medium whitespace-nowrap transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>New Hero</span>
                </button>

                <button
                  onClick={() => setActiveTab('templates')}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 font-medium whitespace-nowrap transition-colors ml-1"
                >
                  <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                  <span>Templates (13)</span>
                </button>
              </div>

              {/* Export & Vault Save Actions */}
              <div className="flex items-center gap-2 shrink-0">
                {savedToVaultSuccess && (
                  <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1 animate-in fade-in">
                    <Check className="w-3.5 h-3.5" />
                    Saved to Vault!
                  </span>
                )}
                <button
                  onClick={handleSaveToVaultNote}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 font-medium transition-colors"
                  title="Save this character as an Obsidian Markdown note in your vault"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Save to Vault (.md)</span>
                </button>
                <button
                  onClick={handleExportMarkdown}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-300 font-medium transition-colors"
                  title="Copy markdown content to clipboard"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy .md'}</span>
                </button>
              </div>
            </>
          )}
        </div>

        {/* Inline New Character Creation Form */}
        {isCreatingNew && activeTab !== 'templates' && (
          <div className="px-5 py-3 bg-amber-500/10 border-b border-amber-500/30 flex flex-wrap items-center gap-3 text-xs animate-in fade-in">
            <span className="font-bold text-amber-300 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              Create New {sheetType === 'kids' ? 'Young Adventurer (Ages 5+)' : '5e Hero'}:
            </span>
            <input
              type="text"
              placeholder="Hero Name (e.g. Robin Greenleaf)"
              value={newCharName}
              onChange={(e) => setNewCharName(e.target.value)}
              className="px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-md text-slate-200 text-xs focus:outline-none focus:border-amber-500 w-52"
            />
            <input
              type="text"
              placeholder={sheetType === 'kids' ? 'Role (e.g. Pixie Scout)' : 'Class (e.g. Paladin 3)'}
              value={newCharClass}
              onChange={(e) => setNewCharClass(e.target.value)}
              className="px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-md text-slate-200 text-xs focus:outline-none focus:border-amber-500 w-48"
            />
            <button
              onClick={handleCreateNewCharacter}
              disabled={!newCharName.trim()}
              className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 font-bold rounded-md shadow-sm transition-colors"
            >
              Spawn Character
            </button>
            <button
              onClick={() => {
                const blankTpl = CHARACTER_SHEET_TEMPLATES.find((t) =>
                  sheetType === 'kids' ? t.id === 'template-blank-kids-hero' : t.id === 'template-blank-5e-standard'
                );
                if (blankTpl) {
                  handleLoadTemplate(blankTpl, newCharName || undefined);
                  setIsCreatingNew(false);
                }
              }}
              className="px-3 py-1.5 bg-sky-950 hover:bg-sky-900 border border-sky-700/60 text-sky-200 rounded-md font-medium text-xs transition-colors flex items-center gap-1.5 shadow-sm"
              title="Quick start with a clean fillable blank sheet"
            >
              <span>📄 Blank Canvas</span>
            </button>
            <button
              onClick={() => {
                setIsCreatingNew(false);
                setActiveTab('templates');
              }}
              className="px-3 py-1.5 bg-slate-900 hover:bg-slate-850 border border-slate-700 text-amber-300 rounded-md font-medium transition-colors"
            >
              Or Pick from Templates ({CHARACTER_SHEET_TEMPLATES.length})
            </button>
            <button
              onClick={() => setIsCreatingNew(false)}
              className="px-2.5 py-1.5 text-slate-400 hover:text-slate-200"
            >
              Cancel
            </button>
          </div>
        )}

        {/* Rename / Customize Template Dialog */}
        {customizingTemplate && (
          <div className="px-5 py-3 bg-slate-900 border-b border-amber-500/40 flex flex-wrap items-center gap-3 text-xs animate-in fade-in">
            <span className="font-bold text-amber-300 flex items-center gap-1.5">
              <span>{customizingTemplate.icon}</span>
              <span>Customize Hero Name for {customizingTemplate.name}:</span>
            </span>
            <input
              type="text"
              placeholder="Hero Name"
              value={customHeroName}
              onChange={(e) => setCustomHeroName(e.target.value)}
              className="px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-md text-slate-200 text-xs focus:outline-none focus:border-amber-500 w-60"
            />
            <button
              onClick={() => handleLoadTemplate(customizingTemplate, customHeroName)}
              className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-md shadow-sm transition-colors"
            >
              Play with Custom Name
            </button>
            <button
              onClick={() => setCustomizingTemplate(null)}
              className="px-2.5 py-1.5 text-slate-400 hover:text-slate-200"
            >
              Cancel
            </button>
          </div>
        )}

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-900/90">
          {activeTab === 'templates' ? (
            /* =========================================================
               CHARACTER SHEET TEMPLATES GALLERY
               ========================================================= */
            <div className="max-w-6xl mx-auto space-y-6 animate-in fade-in duration-200">
              {/* Templates Gallery Header */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-amber-500/30 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold">
                      {CHARACTER_SHEET_TEMPLATES.length} Archetypes & Blank Templates
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30 text-xs font-semibold">
                      Standard 5e, Modern, Young Heroes & Blank Slates
                    </span>
                  </div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-100">
                    Character Sheet Templates Library
                  </h2>
                  <p className="text-xs text-slate-400 mt-1 max-w-2xl">
                    Choose a pre-built hero or a clean <strong>Blank Template</strong> to start playing immediately in the interactive sheet studio, or click <strong>Save to Vault</strong> to create a linked Obsidian Markdown note.
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0 w-full md:w-auto">
                  <div className="relative w-full md:w-64">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      placeholder="Search templates..."
                      value={templateSearch}
                      onChange={(e) => setTemplateSearch(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>
              </div>

              {/* Filter Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {[
                  { id: 'all', label: 'All Templates', count: CHARACTER_SHEET_TEMPLATES.length },
                  { id: 'Blank', label: '📄 Blank Sheets', count: CHARACTER_SHEET_TEMPLATES.filter((t) => t.category === 'Blank').length },
                  { id: 'Martial', label: 'Martial & Warriors', count: CHARACTER_SHEET_TEMPLATES.filter((t) => t.category === 'Martial').length },
                  { id: 'Spellcaster', label: 'Spellcasters', count: CHARACTER_SHEET_TEMPLATES.filter((t) => t.category === 'Spellcaster').length },
                  { id: 'Expert', label: 'Stealth & Experts', count: CHARACTER_SHEET_TEMPLATES.filter((t) => t.category === 'Expert').length },
                  { id: 'Modern', label: 'Modern 5e', count: CHARACTER_SHEET_TEMPLATES.filter((t) => t.category === 'Modern').length },
                  { id: 'Kids', label: 'Young Adventurers (5+)', count: CHARACTER_SHEET_TEMPLATES.filter((t) => t.category === 'Kids').length },
                  { id: 'Companion', label: 'Sidekicks & Retainers', count: CHARACTER_SHEET_TEMPLATES.filter((t) => t.category === 'Companion').length }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setTemplateFilter(tab.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold whitespace-nowrap transition-colors ${
                      templateFilter === tab.id
                        ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold shadow-sm'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        templateFilter === tab.id ? 'bg-slate-950 text-amber-300' : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Template Cards Grid */}
              {(() => {
                const searchLower = templateSearch.toLowerCase().trim();
                const filtered = CHARACTER_SHEET_TEMPLATES.filter((tpl) => {
                  const matchesCategory = templateFilter === 'all' || tpl.category === templateFilter;
                  const matchesSearch =
                    !searchLower ||
                    tpl.name.toLowerCase().includes(searchLower) ||
                    tpl.subtitle.toLowerCase().includes(searchLower) ||
                    tpl.description.toLowerCase().includes(searchLower) ||
                    tpl.keyStats.toLowerCase().includes(searchLower) ||
                    tpl.signatureFeature.toLowerCase().includes(searchLower) ||
                    tpl.weaponsOrSpells.toLowerCase().includes(searchLower);
                  return matchesCategory && matchesSearch;
                });

                if (filtered.length === 0) {
                  return (
                    <div className="p-12 text-center bg-slate-950/60 border border-slate-800 rounded-2xl">
                      <p className="text-slate-400 text-sm">No character templates matched "{templateSearch}".</p>
                      <button
                        onClick={() => {
                          setTemplateSearch('');
                          setTemplateFilter('all');
                        }}
                        className="mt-3 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-amber-300 text-xs rounded-lg font-medium"
                      >
                        Clear Filters
                      </button>
                    </div>
                  );
                }

                return (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filtered.map((tpl) => (
                      <div
                        key={tpl.id}
                        className={`p-4 rounded-2xl bg-slate-950 border transition-all flex flex-col justify-between shadow-lg group ${
                          tpl.category === 'Blank'
                            ? 'border-sky-500/40 hover:border-sky-400/70 hover:shadow-sky-950/30'
                            : 'border-slate-800 hover:border-amber-500/40 hover:shadow-amber-950/20'
                        }`}
                      >
                        <div>
                          {/* Card Header */}
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <div className="flex items-center gap-3">
                              <span className="text-3xl p-2 rounded-xl bg-slate-900 border border-slate-800 shadow-inner group-hover:scale-105 transition-transform">
                                {tpl.icon}
                              </span>
                              <div>
                                <h3 className="font-serif text-base font-bold text-slate-100 group-hover:text-amber-200 transition-colors">
                                  {tpl.name}
                                </h3>
                                <p className="text-[11px] text-amber-400/90 font-medium">{tpl.subtitle}</p>
                              </div>
                            </div>
                            <span
                              className={`text-[10px] px-2 py-0.5 rounded-full font-semibold shrink-0 border ${
                                tpl.category === 'Blank'
                                  ? 'bg-sky-500/20 text-sky-300 border-sky-500/40'
                                  : 'bg-slate-900 border-slate-700 text-slate-300'
                              }`}
                            >
                              {tpl.badge}
                            </span>
                          </div>

                          {/* Description */}
                          <p className="text-xs text-slate-400 line-clamp-2 mb-3">{tpl.description}</p>

                          {/* Key Vitals Badge */}
                          <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800/80 text-[11px] font-mono text-amber-300/90 mb-3">
                            {tpl.keyStats}
                          </div>

                          {/* Signature Features */}
                          <div className="space-y-1.5 text-xs text-slate-300 mb-4">
                            <div>
                              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                                Signature Features:
                              </span>
                              <span className="text-slate-300 text-xs font-medium">{tpl.signatureFeature}</span>
                            </div>
                            <div>
                              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                                Weapons / Spells:
                              </span>
                              <span className="text-slate-400 text-xs truncate block">{tpl.weaponsOrSpells}</span>
                            </div>
                          </div>
                        </div>

                        {/* Actions Toolbar */}
                        <div className="pt-3 border-t border-slate-850 flex flex-wrap items-center gap-2">
                          <button
                            onClick={() => handleLoadTemplate(tpl)}
                            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs shadow-md transition-all active:scale-95"
                            title="Load this template into active character sheet"
                          >
                            <Play className="w-3.5 h-3.5 fill-slate-950" />
                            <span>Play Now</span>
                          </button>

                          <button
                            onClick={() => handleSaveTemplateToVault(tpl)}
                            className="flex items-center gap-1 px-2.5 py-1.5 bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-300 hover:text-amber-300 rounded-lg text-xs font-medium transition-colors"
                            title="Save template as Markdown note in vault"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">Save</span>
                          </button>

                          <button
                            onClick={() => handleCopyTemplateMarkdown(tpl)}
                            className="p-1.5 bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-400 hover:text-slate-200 rounded-lg transition-colors"
                            title="Copy markdown to clipboard"
                          >
                            <Copy className="w-3.5 h-3.5" />
                          </button>

                          <button
                            onClick={() => {
                              setCustomizingTemplate(tpl);
                              setCustomHeroName(tpl.sheet.name);
                            }}
                            className="px-2 py-1.5 bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-400 hover:text-amber-300 rounded-lg text-xs transition-colors"
                            title="Customize hero name before loading"
                          >
                            Rename
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })()}
            </div>
          ) : sheetType === 'kids' ? (
            /* =========================================================
               KIDS CHARACTER SHEET (AGES 5 AND UP)
               ========================================================= */
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Young Hero Banner */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-2 border-amber-500/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4 text-center md:text-left">
                  <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border-2 border-amber-400/60 flex items-center justify-center text-4xl shadow-lg shadow-amber-950/40">
                    {currentKid.avatarEmoji}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 justify-center md:justify-start">
                      <h1 className="font-serif text-2xl sm:text-3xl font-black text-amber-200 tracking-wide">
                        {currentKid.name}
                      </h1>
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold">
                        {currentKid.heroClass}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30 text-[11px] font-semibold">
                        Ages 5+ Friendly
                      </span>
                    </div>
                    <p className="text-xs text-amber-400/90 italic font-medium mt-1">
                      "{currentKid.motto}"
                    </p>
                  </div>
                </div>

                {/* Shiny Gold Coins Pouch */}
                <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-amber-950/30 border border-amber-500/40 shadow-inner">
                  <div className="text-2xl">🪙</div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-amber-400/80">Shiny Gold Coins</div>
                    <div className="text-xl font-black text-amber-300">{currentKid.goldCoins} Gold</div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <button
                      onClick={() =>
                        setKidRoster((prev) =>
                          prev.map((k) =>
                            k.id === currentKid.id ? { ...k, goldCoins: k.goldCoins + 1 } : k
                          )
                        )
                      }
                      className="w-5 h-5 rounded bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 flex items-center justify-center font-bold text-xs"
                      title="Add Gold Coin"
                    >
                      +
                    </button>
                    <button
                      onClick={() =>
                        setKidRoster((prev) =>
                          prev.map((k) =>
                            k.id === currentKid.id ? { ...k, goldCoins: Math.max(0, k.goldCoins - 1) } : k
                          )
                        )
                      }
                      className="w-5 h-5 rounded bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 flex items-center justify-center font-bold text-xs"
                      title="Spend Gold Coin"
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>

              {/* Vitals Grid: Hearts & Hero Stars */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                {/* Visual Hearts Bar */}
                <div className="md:col-span-7 p-4 rounded-2xl bg-slate-950 border border-rose-500/30 shadow-lg space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Heart className="w-5 h-5 text-rose-400 fill-rose-500" />
                      <span className="font-serif text-sm font-bold text-rose-200">
                        Health Hearts ({currentKid.heartsCurrent} / {currentKid.heartsMax})
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => handleKidHeartsChange(-1)}
                        className="px-2 py-0.5 rounded bg-rose-950/60 hover:bg-rose-900 border border-rose-800 text-rose-300 text-xs font-bold"
                        title="Lose 1 Heart"
                      >
                        -1 Heart
                      </button>
                      <button
                        onClick={() => handleKidHeartsChange(1)}
                        className="px-2 py-0.5 rounded bg-emerald-950/60 hover:bg-emerald-900 border border-emerald-800 text-emerald-300 text-xs font-bold"
                        title="Gain 1 Heart"
                      >
                        +1 Heart
                      </button>
                      <button
                        onClick={() => handleKidHeartsChange(currentKid.heartsMax)}
                        className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
                        title="Heal to Full"
                      >
                        Full!
                      </button>
                    </div>
                  </div>

                  {/* Interactive Clickable Hearts */}
                  <div className="flex flex-wrap items-center gap-2 p-3 bg-slate-900/90 rounded-xl border border-slate-800/80 justify-center sm:justify-start">
                    {Array.from({ length: currentKid.heartsMax }).map((_, i) => {
                      const isFull = i < currentKid.heartsCurrent;
                      return (
                        <button
                          key={i}
                          onClick={() => handleToggleHeartSlot(i)}
                          className={`text-3xl transition-transform hover:scale-125 active:scale-95 cursor-pointer ${
                            isFull ? 'drop-shadow-[0_0_8px_rgba(244,63,94,0.6)]' : 'opacity-25 grayscale'
                          }`}
                          title={`Heart ${i + 1} (${isFull ? 'Full - Click to lose' : 'Empty - Click to heal'})`}
                        >
                          ❤️
                        </button>
                      );
                    })}
                  </div>
                  <p className="text-[11px] text-slate-400">
                    💡 <strong>Kids Tip:</strong> Tap hearts when taking scrapes or monster bumps. Drink a potion or eat mom's honey cake to heal!
                  </p>
                </div>

                {/* Hero Stars (Inspiration Tokens) */}
                <div className="md:col-span-5 p-4 rounded-2xl bg-slate-950 border border-amber-500/30 shadow-lg space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                      <span className="font-serif text-sm font-bold text-amber-200">
                        Hero Stars ({currentKid.heroStars} / {currentKid.heroStarsMax})
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => handleKidStarsChange(-1)}
                        className="px-2 py-0.5 rounded bg-slate-850 hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold"
                        title="Spend 1 Star"
                      >
                        Spend 1 ⭐
                      </button>
                      <button
                        onClick={() => handleKidStarsChange(1)}
                        className="px-2 py-0.5 rounded bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 text-xs font-bold"
                        title="Earn 1 Star"
                      >
                        +1 Star
                      </button>
                    </div>
                  </div>

                  {/* Star Tokens Display */}
                  <div className="flex items-center justify-around p-3 bg-slate-900/90 rounded-xl border border-slate-800/80">
                    {Array.from({ length: currentKid.heroStarsMax }).map((_, i) => {
                      const isFilled = i < currentKid.heroStars;
                      return (
                        <button
                          key={i}
                          onClick={() => handleKidStarsChange(isFilled ? -1 : 1)}
                          className={`text-3xl transition-transform hover:scale-125 ${
                            isFilled ? 'text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.6)]' : 'opacity-20 text-slate-500'
                          }`}
                          title={`Hero Star ${i + 1}`}
                        >
                          ⭐
                        </button>
                      );
                    })}
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Awarded for sharing, being brave, or having great ideas! Spend 1 star to reroll any die!
                  </p>
                </div>
              </div>

              {/* The 6 Super-Stats (Big Click-to-Roll Cards!) */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-base font-bold text-slate-200 flex items-center gap-2">
                    <span>🌟 The 6 Super-Stats</span>
                    <span className="text-xs font-sans font-normal text-slate-400">
                      (Click any stat to roll a d20!)
                    </span>
                  </h3>
                  <span className="text-xs text-amber-400 font-semibold">
                    Target: 10+ is a Success!
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                  {Object.entries(currentKid.stats).map(([key, stat]) => {
                    return (
                      <button
                        key={key}
                        onClick={() => rollCheck(stat.name, stat.bonus)}
                        className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-500/60 hover:bg-amber-500/10 transition-all text-center flex flex-col items-center justify-between group shadow-md active:scale-95"
                      >
                        <div className="text-3xl mb-1 group-hover:scale-110 transition-transform">
                          {stat.icon}
                        </div>
                        <div className="text-xs font-bold text-slate-200 group-hover:text-amber-300">
                          {stat.name}
                        </div>
                        <div className="my-1.5 px-3 py-0.5 rounded-lg bg-slate-900 group-hover:bg-amber-500/20 text-lg font-black text-amber-300 border border-slate-800 group-hover:border-amber-500/40">
                          {formatModifier(stat.bonus)}
                        </div>
                        <p className="text-[10px] text-slate-400 line-clamp-2 leading-tight">
                          {stat.hint}
                        </p>
                        <div className="mt-2 text-[10px] text-amber-400 font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Dices className="w-3 h-3" />
                          <span>Roll d20!</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Super Hero Moves & Powers */}
              <div className="space-y-2.5">
                <h3 className="font-serif text-base font-bold text-slate-200 flex items-center gap-2">
                  <span>⚡ Super Hero Moves & Powers</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {currentKid.heroMoves.map((move) => (
                    <div
                      key={move.id}
                      className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between hover:border-amber-500/40 transition-colors shadow-md space-y-3"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-2xl">{move.icon}</span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                            {move.actionType}
                          </span>
                        </div>
                        <h4 className="font-serif text-sm font-bold text-slate-100">
                          {move.name}
                        </h4>
                        <div className="mt-2 p-2 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-amber-300/90 leading-snug">
                          {move.ruleTip}
                        </div>
                        <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                          {move.description}
                        </p>
                      </div>

                      <button
                        onClick={() => {
                          const bonus =
                            move.name.toLowerCase().includes('brawn') || move.ruleTip.includes('Brawn')
                              ? currentKid.stats.brawn.bonus
                              : move.name.toLowerCase().includes('agility') || move.ruleTip.includes('Agility')
                              ? currentKid.stats.agility.bonus
                              : move.name.toLowerCase().includes('heart') || move.ruleTip.includes('Heart')
                              ? currentKid.stats.heart.bonus
                              : currentKid.stats.smile.bonus;
                          rollCheck(move.name, bonus);
                        }}
                        className="w-full flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 font-bold text-xs shadow-sm transition-all active:scale-95"
                      >
                        <Dices className="w-3.5 h-3.5" />
                        <span>Use This Move!</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Row: Companion & Backpack */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                {/* Pet Companion Card */}
                {currentKid.petCompanion && (
                  <div className="md:col-span-5 p-4 rounded-xl bg-slate-950 border border-emerald-500/30 shadow-md space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="text-3xl">{currentKid.petCompanion.icon}</div>
                      <div>
                        <div className="text-[10px] uppercase font-bold text-emerald-400">
                          Pet Companion
                        </div>
                        <h4 className="font-serif text-sm font-bold text-emerald-200">
                          {currentKid.petCompanion.name}
                        </h4>
                      </div>
                    </div>
                    <div className="text-xs text-slate-300">
                      <strong>Species:</strong> {currentKid.petCompanion.species}
                    </div>
                    <div className="p-2.5 rounded bg-emerald-950/20 border border-emerald-800/40 text-xs text-emerald-300/90 leading-relaxed">
                      🐾 <strong>Special Trick:</strong> {currentKid.petCompanion.ability}
                    </div>
                  </div>
                )}

                {/* Magic Backpack */}
                <div className={`${currentKid.petCompanion ? 'md:col-span-7' : 'md:col-span-12'} p-4 rounded-xl bg-slate-950 border border-slate-800 shadow-md space-y-2.5`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Backpack className="w-4 h-4 text-amber-400" />
                      <h4 className="font-serif text-sm font-bold text-slate-200">
                        Magic Backpack & Treats
                      </h4>
                    </div>
                    <span className="text-[11px] text-amber-400/90">
                      Favorite: {currentKid.favoriteTreat}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {currentKid.backpack.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-2 rounded-lg bg-slate-900 border border-slate-800/80 flex items-start gap-2.5"
                      >
                        <span className="text-xl shrink-0">{item.icon}</span>
                        <div>
                          <div className="text-xs font-bold text-slate-200">{item.name}</div>
                          <div className="text-[11px] text-slate-400 leading-tight">
                            {item.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* =========================================================
               STANDARD 5E CHARACTER SHEET
               ========================================================= */
            <div className="max-w-5xl mx-auto space-y-6">
              {/* Standard Header Banner */}
              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h1 className="font-serif text-2xl font-bold text-amber-200">
                      {currentStandard.name}
                    </h1>
                    <span className="px-2.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-300">
                      {currentStandard.classAndLevel}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs">
                      {currentStandard.race}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mt-1">
                    <span>Background: {currentStandard.background}</span>
                    <span>•</span>
                    <span>Alignment: {currentStandard.alignment}</span>
                    <span>•</span>
                    <span>XP: {currentStandard.xp.toLocaleString()}</span>
                  </div>
                </div>

                {/* Inspiration & Proficiency */}
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-center">
                    <div className="text-[10px] uppercase tracking-wider text-slate-400">
                      Proficiency
                    </div>
                    <div className="text-base font-bold text-amber-300">
                      +{currentStandard.proficiencyBonus}
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      setStandardRoster((prev) =>
                        prev.map((s) =>
                          s.id === currentStandard.id ? { ...s, inspiration: !s.inspiration } : s
                        )
                      )
                    }
                    className={`px-3 py-1.5 rounded-lg border flex items-center gap-1.5 text-xs font-semibold transition-colors ${
                      currentStandard.inspiration
                        ? 'bg-amber-500/20 border-amber-500/50 text-amber-300 shadow-sm'
                        : 'bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    <Star
                      className={`w-3.5 h-3.5 ${
                        currentStandard.inspiration ? 'fill-amber-400 text-amber-400' : ''
                      }`}
                    />
                    <span>{currentStandard.inspiration ? 'Inspired!' : 'Inspiration'}</span>
                  </button>
                </div>
              </div>

              {/* Combat Vitals Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 text-center">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 shadow-sm">
                  <div className="text-[10px] uppercase font-bold text-slate-400 flex items-center justify-center gap-1">
                    <Shield className="w-3 h-3 text-amber-400" />
                    <span>Armor Class</span>
                  </div>
                  <div className="text-2xl font-black text-slate-100 mt-1">
                    {currentStandard.armorClass}
                  </div>
                </div>

                <div
                  onClick={() => rollCheck('Initiative', currentStandard.initiative)}
                  className="p-3 rounded-xl bg-slate-950 border border-slate-800 shadow-sm hover:border-amber-500/40 hover:bg-amber-500/10 cursor-pointer group transition-all"
                >
                  <div className="text-[10px] uppercase font-bold text-slate-400 flex items-center justify-center gap-1">
                    <Zap className="w-3 h-3 text-amber-400" />
                    <span>Initiative</span>
                  </div>
                  <div className="text-2xl font-black text-slate-100 mt-1 group-hover:text-amber-300">
                    {formatModifier(currentStandard.initiative)}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 shadow-sm">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Speed</div>
                  <div className="text-2xl font-black text-slate-100 mt-1">
                    {currentStandard.speed}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 shadow-sm">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Passive Perc.</div>
                  <div className="text-2xl font-black text-slate-100 mt-1">
                    {currentStandard.passivePerception}
                  </div>
                </div>

                {/* HP Tracker */}
                <div className="col-span-2 p-3 rounded-xl bg-slate-950 border border-rose-500/30 shadow-sm flex flex-col justify-between">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-rose-300 flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                      Hit Points
                    </span>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleStandardHpChange(-1)}
                        className="px-1.5 py-0.5 rounded bg-rose-950 text-rose-300 font-bold text-[10px]"
                      >
                        -1
                      </button>
                      <button
                        onClick={() => handleStandardHpChange(1)}
                        className="px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 font-bold text-[10px]"
                      >
                        +1
                      </button>
                    </div>
                  </div>
                  <div className="text-xl font-black text-slate-100 my-0.5">
                    {currentStandard.hpCurrent} / {currentStandard.hpMax}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    Hit Dice: {currentStandard.hitDice} • Temp: {currentStandard.hpTemp}
                  </div>
                </div>
              </div>

              {/* Death Saves Row */}
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="font-bold text-slate-300 flex items-center gap-1.5">
                  <span>Death Saves:</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] text-emerald-400 font-semibold">Success:</span>
                    {[0, 1, 2].map((idx) => (
                      <button
                        key={idx}
                        onClick={() => handleStandardDeathSave('successes', idx)}
                        className={`w-4 h-4 rounded-full border transition-all ${
                          idx < currentStandard.deathSaves.successes
                            ? 'bg-emerald-500 border-emerald-400'
                            : 'bg-slate-900 border-slate-700 hover:border-slate-500'
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] text-rose-400 font-semibold">Failure:</span>
                    {[0, 1, 2].map((idx) => (
                      <button
                        key={idx}
                        onClick={() => handleStandardDeathSave('failures', idx)}
                        className={`w-4 h-4 rounded-full border transition-all ${
                          idx < currentStandard.deathSaves.failures
                            ? 'bg-rose-500 border-rose-400'
                            : 'bg-slate-900 border-slate-700 hover:border-slate-500'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* 6 Ability Scores Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
                {(
                  [
                    { key: 'str', label: 'STR', full: 'Strength' },
                    { key: 'dex', label: 'DEX', full: 'Dexterity' },
                    { key: 'con', label: 'CON', full: 'Constitution' },
                    { key: 'int', label: 'INT', full: 'Intelligence' },
                    { key: 'wis', label: 'WIS', full: 'Wisdom' },
                    { key: 'cha', label: 'CHA', full: 'Charisma' }
                  ] as const
                ).map(({ key, label, full }) => {
                  const ability = currentStandard.abilities[key];
                  const saveMod =
                    ability.modifier +
                    (ability.saveProficient ? currentStandard.proficiencyBonus : 0);

                  return (
                    <div
                      key={key}
                      className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center flex flex-col justify-between"
                    >
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        {full}
                      </div>

                      {/* Click to roll ability check */}
                      <button
                        onClick={() => rollCheck(`${full} Check`, ability.modifier)}
                        className="my-1 py-1 rounded bg-slate-900 hover:bg-amber-500/20 hover:border-amber-500/40 border border-slate-800 transition-colors group"
                        title={`Click to roll 1d20 ${formatModifier(ability.modifier)}`}
                      >
                        <div className="text-2xl font-black text-amber-300 group-hover:scale-105 transition-transform">
                          {formatModifier(ability.modifier)}
                        </div>
                        <div className="text-[11px] text-slate-400 font-mono">
                          Score: {ability.score}
                        </div>
                      </button>

                      {/* Click to roll saving throw */}
                      <button
                        onClick={() => rollCheck(`${full} Saving Throw`, saveMod)}
                        className={`mt-1 py-0.5 px-1 rounded text-[10px] font-semibold border flex items-center justify-center gap-1 transition-colors ${
                          ability.saveProficient
                            ? 'bg-amber-500/15 border-amber-500/30 text-amber-300 hover:bg-amber-500/25'
                            : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-850'
                        }`}
                        title="Roll Saving Throw"
                      >
                        <span>Save:</span>
                        <span className="font-mono font-bold">{formatModifier(saveMod)}</span>
                        {ability.saveProficient && <span className="text-[9px]">✅</span>}
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Two Column Layout: Skills & Combat Actions */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                {/* Left Column: Skills List */}
                <div className="md:col-span-5 p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <h3 className="font-serif text-sm font-bold text-slate-200">
                      Skills (Click to Roll)
                    </h3>
                    <span className="text-[10px] text-slate-400">Ability / Mod</span>
                  </div>

                  <div className="space-y-1 max-h-[360px] overflow-y-auto pr-1">
                    {Object.entries(SKILL_DEFINITIONS).map(([skillKey, def]) => {
                      const prof = currentStandard.skills[skillKey];
                      const isProf = !!prof?.proficient;
                      const isExp = !!prof?.expertise;
                      const abilityMod = currentStandard.abilities[def.ability].modifier;
                      const totalMod =
                        abilityMod +
                        (isExp
                          ? currentStandard.proficiencyBonus * 2
                          : isProf
                          ? currentStandard.proficiencyBonus
                          : 0);

                      return (
                        <button
                          key={skillKey}
                          onClick={() => rollCheck(`${def.label} Check`, totalMod)}
                          className="w-full flex items-center justify-between p-1.5 rounded hover:bg-slate-900/80 transition-colors text-left group"
                        >
                          <div className="flex items-center gap-2">
                            <span
                              className={`w-2 h-2 rounded-full ${
                                isExp
                                  ? 'bg-amber-400 ring-2 ring-amber-500/30'
                                  : isProf
                                  ? 'bg-emerald-400'
                                  : 'bg-slate-700'
                              }`}
                            />
                            <span className="text-xs text-slate-300 group-hover:text-amber-300 font-medium">
                              {def.label}
                            </span>
                            <span className="text-[10px] text-slate-500 uppercase font-mono">
                              ({def.ability})
                            </span>
                          </div>
                          <span className="text-xs font-mono font-bold text-slate-200 group-hover:text-amber-300">
                            {formatModifier(totalMod)}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Right Column: Attacks & Spellcasting */}
                <div className="md:col-span-7 space-y-4">
                  {/* Weapon Attacks */}
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <h3 className="font-serif text-sm font-bold text-slate-200 flex items-center gap-1.5">
                        <Sword className="w-4 h-4 text-amber-400" />
                        <span>Attacks & Weapons</span>
                      </h3>
                      <span className="text-[10px] text-slate-400">Click to Roll Attack / Damage</span>
                    </div>

                    <div className="space-y-2">
                      {currentStandard.attacks.map((atk) => (
                        <div
                          key={atk.id}
                          className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex flex-wrap items-center justify-between gap-2"
                        >
                          <div>
                            <div className="text-xs font-bold text-slate-200">{atk.name}</div>
                            <div className="text-[11px] text-slate-400">
                              {atk.damage} {atk.damageType} • {atk.range || 'Melee'}
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => rollCheck(`${atk.name} Attack`, atk.atkBonus)}
                              className="px-2.5 py-1 rounded bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 text-xs font-bold transition-colors"
                              title="Roll Attack"
                            >
                              +{atk.atkBonus} To Hit
                            </button>
                            <button
                              onClick={() => {
                                // Extract dice from string e.g. "2d6 + 4" or "1d8 + 3"
                                const match = atk.damage.match(/(\d+)d(\d+)(?:\s*([+-])\s*(\d+))?/);
                                if (match) {
                                  const count = parseInt(match[1], 10);
                                  const sides = parseInt(match[2], 10);
                                  const sign = match[3] === '-' ? -1 : 1;
                                  const mod = match[4] ? parseInt(match[4], 10) * sign : 0;
                                  rollDamage(atk.name, count, sides, mod);
                                } else {
                                  rollCheck(`${atk.name} Damage`, 0, '1d6');
                                }
                              }}
                              className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-mono font-bold transition-colors"
                              title="Roll Damage"
                            >
                              {atk.damage}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Spellcasting (if available) */}
                  {currentStandard.spellcasting && (
                    <div className="p-4 rounded-xl bg-slate-950 border border-purple-500/30 space-y-2.5">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                        <h3 className="font-serif text-sm font-bold text-purple-200 flex items-center gap-1.5">
                          <Scroll className="w-4 h-4 text-purple-400" />
                          <span>Spellcasting ({currentStandard.spellcasting.spellcastingClass})</span>
                        </h3>
                        <div className="flex items-center gap-3 text-xs">
                          <span className="text-slate-400">
                            DC: <strong className="text-purple-300">{currentStandard.spellcasting.spellSaveDC}</strong>
                          </span>
                          <span className="text-slate-400">
                            Atk: <strong className="text-purple-300">+{currentStandard.spellcasting.spellAttackBonus}</strong>
                          </span>
                        </div>
                      </div>

                      {/* Spell Slots */}
                      <div className="flex flex-wrap items-center gap-2">
                        {currentStandard.spellcasting.slots.map((slot) => (
                          <div
                            key={slot.level}
                            className="px-2 py-1 rounded bg-purple-950/40 border border-purple-800/60 text-xs flex items-center gap-1.5"
                          >
                            <span className="font-bold text-purple-300">Level {slot.level}:</span>
                            <span className="font-mono text-slate-200">
                              {slot.total - slot.expended}/{slot.total}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="text-xs text-slate-400 space-y-1">
                        {currentStandard.spellcasting.spellsKnown.slice(0, 3).map((sp, idx) => (
                          <div key={idx} className="truncate">
                            • {sp}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Currency & Gear */}
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 font-bold text-slate-300">
                      <Coins className="w-4 h-4 text-amber-400" />
                      <span>Coin Purse:</span>
                    </div>
                    <div className="flex items-center gap-3 font-mono font-bold">
                      <span className="text-amber-300">{currentStandard.currency.gp} GP</span>
                      <span className="text-slate-400">{currentStandard.currency.sp} SP</span>
                      <span className="text-amber-600">{currentStandard.currency.cp} CP</span>
                      <span className="text-sky-300">{currentStandard.currency.pp} PP</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features & Roleplay Box */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <h3 className="font-serif text-sm font-bold text-slate-200">
                  Features, Traits & Roleplay
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div>
                    <h4 className="font-semibold text-amber-300 mb-1">Class Features & Traits</h4>
                    <ul className="space-y-1 text-slate-400 list-disc pl-4 marker:text-amber-500">
                      {currentStandard.featuresAndTraits.slice(0, 4).map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-1.5 text-slate-400">
                    <div>
                      <strong className="text-slate-200">Personality:</strong> {currentStandard.personality.traits}
                    </div>
                    <div>
                      <strong className="text-slate-200">Ideal:</strong> {currentStandard.personality.ideals}
                    </div>
                    <div>
                      <strong className="text-slate-200">Bond:</strong> {currentStandard.personality.bonds}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
