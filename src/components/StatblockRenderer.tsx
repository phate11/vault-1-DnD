import React, { useState } from 'react';
import { Shield, Heart, Zap, Dices, Code2, Eye, Award } from 'lucide-react';

interface StatblockRendererProps {
  rawContent: string;
  onNavigateToNote?: (title: string) => void;
}

interface StatblockData {
  name: string;
  size: string;
  type: string;
  alignment: string;
  ac: string;
  hp: string;
  speed: string;
  stats: [number, number, number, number, number, number]; // STR, DEX, CON, INT, WIS, CHA
  saves?: string;
  skills?: string;
  damage_vulnerabilities?: string;
  damage_resistances?: string;
  damage_immunities?: string;
  condition_immunities?: string;
  senses?: string;
  languages?: string;
  cr?: string;
  traits: { name: string; desc: string }[];
  actions: { name: string; desc: string }[];
  bonus_actions: { name: string; desc: string }[];
  reactions: { name: string; desc: string }[];
  legendary_actions: { name: string; desc: string }[];
}

function parseStatblock(raw: string): StatblockData {
  const lines = raw.split('\n');
  const data: StatblockData = {
    name: 'Creature',
    size: 'Medium',
    type: 'humanoid',
    alignment: 'unaligned',
    ac: '10',
    hp: '10 (3d8)',
    speed: '30 ft.',
    stats: [10, 10, 10, 10, 10, 10],
    traits: [],
    actions: [],
    bonus_actions: [],
    reactions: [],
    legendary_actions: []
  };

  let currentSection: 'traits' | 'actions' | 'bonus_actions' | 'reactions' | 'legendary_actions' | null = 'traits';
  let currentEntry: { name: string; desc: string } | null = null;
  let inSavesList = false;
  let inSkillsList = false;
  const parsedSaves: string[] = [];
  const parsedSkills: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith('#')) continue;

    // Handle YAML array items for saves / skills
    if (inSavesList && trimmed.startsWith('-')) {
      const saveItem = trimmed.replace(/^-\s*/, '');
      parsedSaves.push(saveItem);
      data.saves = parsedSaves.join(', ');
      continue;
    } else if (inSavesList && !trimmed.startsWith('-')) {
      inSavesList = false;
    }

    if (inSkillsList && trimmed.startsWith('-')) {
      const skillItem = trimmed.replace(/^-\s*/, '');
      parsedSkills.push(skillItem);
      data.skills = parsedSkills.join(', ');
      continue;
    } else if (inSkillsList && !trimmed.startsWith('-')) {
      inSkillsList = false;
    }

    // Detect YAML Keys
    const keyMatch = trimmed.match(/^([a-zA-Z_-]+)\s*:\s*(.*)$/);
    if (keyMatch && !trimmed.startsWith('-')) {
      const key = keyMatch[1].toLowerCase().replace(/[-_]/g, '');
      const value = keyMatch[2].trim().replace(/^["']|["']$/g, '');

      if (key === 'name') data.name = value;
      else if (key === 'size') data.size = value;
      else if (key === 'type') data.type = value;
      else if (key === 'alignment') data.alignment = value;
      else if (key === 'ac' || key === 'armorclass') data.ac = value;
      else if (key === 'hp' || key === 'hitpoints') data.hp = value;
      else if (key === 'speed') data.speed = value;
      else if (key === 'stats') {
        const statsArr = value.replace(/[\[\]]/g, '').split(',').map(s => parseInt(s.trim(), 10));
        if (statsArr.length === 6 && statsArr.every(n => !isNaN(n))) {
          data.stats = statsArr as [number, number, number, number, number, number];
        }
      } else if (key === 'str') data.stats[0] = parseInt(value, 10) || 10;
      else if (key === 'dex') data.stats[1] = parseInt(value, 10) || 10;
      else if (key === 'con') data.stats[2] = parseInt(value, 10) || 10;
      else if (key === 'int') data.stats[3] = parseInt(value, 10) || 10;
      else if (key === 'wis') data.stats[4] = parseInt(value, 10) || 10;
      else if (key === 'cha') data.stats[5] = parseInt(value, 10) || 10;
      else if (key === 'saves' || key === 'savingthrows') {
        if (value) {
          data.saves = value;
        } else {
          inSavesList = true;
        }
      }
      else if (key === 'skills' || key === 'skillsaves') {
        if (value) {
          data.skills = value;
        } else {
          inSkillsList = true;
        }
      }
      else if (key === 'damagevulnerabilities' || key === 'vulnerabilities') data.damage_vulnerabilities = value;
      else if (key === 'damageresistances' || key === 'resistances') data.damage_resistances = value;
      else if (key === 'damageimmunities' || key === 'immunities') data.damage_immunities = value;
      else if (key === 'conditionimmunities') data.condition_immunities = value;
      else if (key === 'senses') data.senses = value;
      else if (key === 'languages') data.languages = value;
      else if (key === 'cr' || key === 'challenge') data.cr = value;
      else if (key === 'traits') {
        currentSection = 'traits';
        currentEntry = null;
      } else if (key === 'actions') {
        currentSection = 'actions';
        currentEntry = null;
      } else if (key === 'bonusactions') {
        currentSection = 'bonus_actions';
        currentEntry = null;
      } else if (key === 'reactions') {
        currentSection = 'reactions';
        currentEntry = null;
      } else if (key === 'legendaryactions') {
        currentSection = 'legendary_actions';
        currentEntry = null;
      }
      continue;
    }

    // Detect array item `- name: ...` or `desc: ...`
    if (trimmed.startsWith('- name:') || trimmed.startsWith('name:')) {
      const entryName = trimmed.replace(/^-\s*name:\s*|^name:\s*/, '').replace(/^["']|["']$/g, '');
      currentEntry = { name: entryName, desc: '' };
      if (currentSection) {
        data[currentSection].push(currentEntry);
      }
      continue;
    }

    if (trimmed.startsWith('desc:') || trimmed.startsWith('- desc:')) {
      const descText = trimmed.replace(/^-\s*desc:\s*|^desc:\s*/, '').replace(/^["']|["']$/g, '');
      if (currentEntry) {
        currentEntry.desc = descText;
      }
      continue;
    }

    // Continuation of desc
    if (currentEntry && trimmed) {
      currentEntry.desc += (currentEntry.desc ? ' ' : '') + trimmed.replace(/^["']|["']$/g, '');
    }
  }

  return data;
}

function getModifier(score: number): string {
  const mod = Math.floor((score - 10) / 2);
  return mod >= 0 ? `+${mod}` : `${mod}`;
}

export const StatblockRenderer: React.FC<StatblockRendererProps> = ({
  rawContent
}) => {
  const [showRaw, setShowRaw] = useState(false);
  const [rollResult, setRollResult] = useState<{ formula: string; total: number; detail: string } | null>(null);

  const data = parseStatblock(rawContent);

  const rollDice = (formula: string) => {
    // Basic dice formula evaluator: e.g. "1d20+9" or "2d6+4"
    const match = formula.match(/(\d+)d(\d+)(?:\s*([+-])\s*(\d+))?/i);
    if (!match) return;

    const count = parseInt(match[1], 10);
    const die = parseInt(match[2], 10);
    const sign = match[3] === '-' ? -1 : 1;
    const modifier = match[4] ? parseInt(match[4], 10) * sign : 0;

    const rolls: number[] = [];
    let sum = 0;
    for (let i = 0; i < count; i++) {
      const r = Math.floor(Math.random() * die) + 1;
      rolls.push(r);
      sum += r;
    }
    const total = sum + modifier;
    const detail = `[${rolls.join(', ')}] ${modifier !== 0 ? (modifier > 0 ? `+ ${modifier}` : `- ${Math.abs(modifier)}`) : ''} = ${total}`;

    setRollResult({ formula, total, detail });
    setTimeout(() => {
      // Keep result visible
    }, 4000);
  };

  const abilityNames = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];

  return (
    <div className="my-6 rounded-lg border-2 border-amber-800/60 bg-gradient-to-b from-[#1c1917] to-[#121110] text-slate-200 shadow-xl overflow-hidden font-serif">
      {/* Top Banner & Mode Toggle */}
      <div className="flex items-center justify-between px-4 py-1.5 bg-amber-950/60 border-b border-amber-900/60 text-xs font-sans">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-amber-900/80 text-amber-300 font-semibold text-[10px] uppercase tracking-wider border border-amber-700/50">
            5e TTRPG Statblock
          </span>
          <span className="text-slate-400 text-[11px]">Obsidian 5e-Statblocks Compatible</span>
        </div>
        <button
          onClick={() => setShowRaw(!showRaw)}
          className="flex items-center gap-1 px-2 py-0.5 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 text-[11px] border border-slate-700"
        >
          {showRaw ? <Eye className="w-3 h-3 text-amber-400" /> : <Code2 className="w-3 h-3 text-amber-400" />}
          <span>{showRaw ? 'Rendered' : 'YAML'}</span>
        </button>
      </div>

      {showRaw ? (
        <pre className="p-4 bg-slate-950 text-amber-200 font-mono text-xs overflow-x-auto whitespace-pre">
          {rawContent}
        </pre>
      ) : (
        <div className="p-5 relative">
          {/* Tapered Top Header Border */}
          <div className="h-1 bg-gradient-to-r from-transparent via-red-700 to-transparent mb-3" />

          {/* Creature Name & Subtitle */}
          <div>
            <h2 className="text-2xl font-bold tracking-wide text-amber-300 font-serif leading-tight">
              {data.name}
            </h2>
            <div className="text-xs italic text-slate-400 font-sans mt-0.5">
              {data.size} {data.type}, {data.alignment}
            </div>
          </div>

          <div className="h-0.5 bg-gradient-to-r from-red-800/80 via-red-700 to-red-800/80 my-3" />

          {/* Vitals: AC, HP, Speed */}
          <div className="space-y-1 text-xs font-sans">
            <div className="flex items-center gap-2">
              <span className="text-red-400 font-bold flex items-center gap-1 w-28">
                <Shield className="w-3.5 h-3.5" /> Armor Class
              </span>
              <span className="text-slate-200">{data.ac}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-400 font-bold flex items-center gap-1 w-28">
                <Heart className="w-3.5 h-3.5" /> Hit Points
              </span>
              <span className="text-slate-200">{data.hp}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-400 font-bold flex items-center gap-1 w-28">
                <Zap className="w-3.5 h-3.5" /> Speed
              </span>
              <span className="text-slate-200">{data.speed}</span>
            </div>
          </div>

          <div className="h-0.5 bg-gradient-to-r from-red-800/80 via-red-700 to-red-800/80 my-3" />

          {/* 6-Column Ability Grid */}
          <div className="grid grid-cols-6 gap-1 text-center bg-amber-950/30 p-2 rounded border border-amber-900/40 my-2 font-sans">
            {abilityNames.map((name, idx) => {
              const score = data.stats[idx] ?? 10;
              const mod = getModifier(score);
              return (
                <div key={name} className="flex flex-col items-center">
                  <span className="text-[11px] font-bold text-amber-400">{name}</span>
                  <span className="text-xs text-slate-200 font-medium">
                    {score} <span className="text-amber-300/90 font-bold">({mod})</span>
                  </span>
                  <button
                    onClick={() => rollDice(`1d20${mod}`)}
                    className="mt-1 text-[9px] px-1 py-0.5 rounded bg-amber-900/40 hover:bg-amber-800/60 text-amber-200 border border-amber-700/40 cursor-pointer flex items-center gap-0.5"
                    title={`Roll ${name} Check (1d20${mod})`}
                  >
                    <Dices className="w-2.5 h-2.5" />
                    <span>Check</span>
                  </button>
                </div>
              );
            })}
          </div>

          <div className="h-0.5 bg-gradient-to-r from-red-800/80 via-red-700 to-red-800/80 my-3" />

          {/* Defenses, Senses, Languages, CR */}
          <div className="space-y-1 text-xs font-sans">
            {data.saves && (
              <div>
                <strong className="text-red-400">Saving Throws: </strong>
                <span className="text-slate-300">{data.saves}</span>
              </div>
            )}
            {data.skills && (
              <div>
                <strong className="text-red-400">Skills: </strong>
                <span className="text-slate-300">{data.skills}</span>
              </div>
            )}
            {data.damage_vulnerabilities && (
              <div>
                <strong className="text-red-400">Damage Vulnerabilities: </strong>
                <span className="text-slate-300">{data.damage_vulnerabilities}</span>
              </div>
            )}
            {data.damage_resistances && (
              <div>
                <strong className="text-red-400">Damage Resistances: </strong>
                <span className="text-slate-300">{data.damage_resistances}</span>
              </div>
            )}
            {data.damage_immunities && (
              <div>
                <strong className="text-red-400">Damage Immunities: </strong>
                <span className="text-slate-300">{data.damage_immunities}</span>
              </div>
            )}
            {data.condition_immunities && (
              <div>
                <strong className="text-red-400">Condition Immunities: </strong>
                <span className="text-slate-300">{data.condition_immunities}</span>
              </div>
            )}
            {data.senses && (
              <div>
                <strong className="text-red-400">Senses: </strong>
                <span className="text-slate-300">{data.senses}</span>
              </div>
            )}
            {data.languages && (
              <div>
                <strong className="text-red-400">Languages: </strong>
                <span className="text-slate-300">{data.languages}</span>
              </div>
            )}
            {data.cr && (
              <div className="flex items-center gap-2 pt-0.5">
                <strong className="text-amber-400 flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-amber-500" /> Challenge:
                </strong>
                <span className="px-1.5 py-0.5 bg-amber-950/80 rounded border border-amber-800 text-amber-300 font-bold text-[11px]">
                  {data.cr}
                </span>
              </div>
            )}
          </div>

          {/* Traits */}
          {data.traits.length > 0 && (
            <div className="mt-4 space-y-2 border-t border-red-900/40 pt-3">
              {data.traits.map((t, idx) => (
                <div key={idx} className="text-xs text-slate-300 leading-relaxed font-sans">
                  <strong className="text-amber-200 font-serif italic text-sm">{t.name}. </strong>
                  <span>{t.desc}</span>
                </div>
              ))}
            </div>
          )}

          {/* Actions */}
          {data.actions.length > 0 && (
            <div className="mt-4 border-t-2 border-red-800/80 pt-2">
              <h3 className="text-base font-serif font-bold text-red-400 border-b border-red-900/60 pb-1 mb-2 tracking-wider">
                ACTIONS
              </h3>
              <div className="space-y-2">
                {data.actions.map((a, idx) => (
                  <div key={idx} className="text-xs text-slate-300 leading-relaxed font-sans">
                    <strong className="text-amber-200 font-serif italic text-sm">{a.name}. </strong>
                    <span>{a.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bonus Actions */}
          {data.bonus_actions.length > 0 && (
            <div className="mt-4 border-t-2 border-red-800/80 pt-2">
              <h3 className="text-base font-serif font-bold text-red-400 border-b border-red-900/60 pb-1 mb-2 tracking-wider">
                BONUS ACTIONS
              </h3>
              <div className="space-y-2">
                {data.bonus_actions.map((ba, idx) => (
                  <div key={idx} className="text-xs text-slate-300 leading-relaxed font-sans">
                    <strong className="text-amber-200 font-serif italic text-sm">{ba.name}. </strong>
                    <span>{ba.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Reactions */}
          {data.reactions.length > 0 && (
            <div className="mt-4 border-t-2 border-red-800/80 pt-2">
              <h3 className="text-base font-serif font-bold text-red-400 border-b border-red-900/60 pb-1 mb-2 tracking-wider">
                REACTIONS
              </h3>
              <div className="space-y-2">
                {data.reactions.map((r, idx) => (
                  <div key={idx} className="text-xs text-slate-300 leading-relaxed font-sans">
                    <strong className="text-amber-200 font-serif italic text-sm">{r.name}. </strong>
                    <span>{r.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Legendary Actions */}
          {data.legendary_actions.length > 0 && (
            <div className="mt-4 border-t-2 border-red-800/80 pt-2">
              <h3 className="text-base font-serif font-bold text-amber-400 border-b border-amber-900/60 pb-1 mb-2 tracking-wider">
                LEGENDARY ACTIONS
              </h3>
              <p className="text-[11px] text-slate-400 italic mb-2 font-sans">
                The creature can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The creature regains spent legendary actions at the start of its turn.
              </p>
              <div className="space-y-2">
                {data.legendary_actions.map((la, idx) => (
                  <div key={idx} className="text-xs text-slate-300 leading-relaxed font-sans">
                    <strong className="text-amber-200 font-serif italic text-sm">{la.name}. </strong>
                    <span>{la.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Dice Roller Notification Overlay */}
          {rollResult && (
            <div className="mt-3 p-2 bg-amber-950/90 border border-amber-500/50 rounded flex items-center justify-between text-xs font-mono text-amber-300">
              <div className="flex items-center gap-2">
                <Dices className="w-4 h-4 text-amber-400 animate-spin" />
                <span>
                  Rolled <strong>{rollResult.formula}</strong>: {rollResult.detail}
                </span>
              </div>
              <button
                onClick={() => setRollResult(null)}
                className="text-[10px] text-slate-400 hover:text-white px-1"
              >
                ✕
              </button>
            </div>
          )}

          {/* Tapered Bottom Border */}
          <div className="h-1 bg-gradient-to-r from-transparent via-red-700 to-transparent mt-4" />
        </div>
      )}
    </div>
  );
};
