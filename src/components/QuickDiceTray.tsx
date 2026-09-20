import React, { useState } from 'react';
import { Dices, Sparkles, ChevronDown, ChevronUp, RefreshCw, Copy, Check } from 'lucide-react';

export interface DiceRollResult {
  formula?: string;
  notation: string;
  rolls: number[];
  modifier: number;
  total: number;
  timestamp: Date;
  label?: string;
}

export function parseAndRoll(notation: string): DiceRollResult | null {
  const cleaned = notation.trim().replace(/\s+/g, '');
  const match = cleaned.match(/^(\d*)d(\d+)([+-]\d+)?$/i);
  if (!match) return null;

  const count = match[1] ? parseInt(match[1], 10) : 1;
  const sides = parseInt(match[2], 10);
  const modifier = match[3] ? parseInt(match[3], 10) : 0;

  if (count <= 0 || count > 100 || sides <= 0 || sides > 1000) return null;

  const rolls: number[] = [];
  let sum = 0;
  for (let i = 0; i < count; i++) {
    const val = Math.floor(Math.random() * sides) + 1;
    rolls.push(val);
    sum += val;
  }

  return {
    notation,
    rolls,
    modifier,
    total: sum + modifier,
    timestamp: new Date()
  };
}

interface QuickDiceTrayProps {
  recentRoll?: DiceRollResult | null;
  onRoll?: (result: DiceRollResult) => void;
}

export const QuickDiceTray: React.FC<QuickDiceTrayProps> = ({ recentRoll, onRoll }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [customDice, setCustomDice] = useState('');
  const [rollHistory, setRollHistory] = useState<DiceRollResult[]>([]);
  const [copied, setCopied] = useState(false);

  // Sync recent roll from external inline clicks
  React.useEffect(() => {
    if (recentRoll) {
      setRollHistory((prev) => [recentRoll, ...prev.slice(0, 19)]);
    }
  }, [recentRoll]);

  const executeRoll = (notation: string) => {
    const res = parseAndRoll(notation);
    if (res) {
      setRollHistory((prev) => [res, ...prev.slice(0, 19)]);
      if (onRoll) onRoll(res);
    }
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customDice.trim()) {
      executeRoll(customDice);
      setCustomDice('');
    }
  };

  const standardDice = ['d4', 'd6', 'd8', 'd10', 'd12', 'd20', 'd100'];

  const latest = rollHistory[0];

  return (
    <div className="fixed bottom-4 right-4 z-40">
      {isOpen ? (
        <div className="w-80 bg-slate-900/95 backdrop-blur border border-amber-500/40 rounded-xl shadow-2xl p-4 text-slate-100 flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-3 duration-200">
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2 font-semibold text-sm text-amber-300">
              <Dices className="w-4 h-4 text-amber-400" />
              <span>D&D Session Dice Tray</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-slate-200"
              title="Minimize Tray"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Die Buttons */}
          <div className="grid grid-cols-7 gap-1">
            {standardDice.map((die) => (
              <button
                key={die}
                onClick={() => executeRoll(die)}
                className="px-1.5 py-1.5 rounded-lg bg-slate-800/80 hover:bg-amber-500/20 hover:border-amber-500/50 border border-slate-700/60 text-xs font-mono font-medium text-amber-200 transition-colors text-center cursor-pointer shadow-sm active:scale-95"
              >
                {die}
              </button>
            ))}
          </div>

          {/* Custom Input */}
          <form onSubmit={handleCustomSubmit} className="flex gap-2">
            <input
              type="text"
              placeholder="e.g. 2d6+3, 1d20+7, 4d8"
              value={customDice}
              onChange={(e) => setCustomDice(e.target.value)}
              className="flex-1 px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500 font-mono"
            />
            <button
              type="submit"
              className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs rounded-lg transition-colors cursor-pointer shadow"
            >
              Roll
            </button>
          </form>

          {/* Latest Roll Result Display */}
          {latest && (
            <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-amber-400">
                  {latest.label || latest.notation}
                </span>
                <div className="text-2xl font-black text-amber-200 font-mono flex items-baseline gap-2">
                  <span>{latest.total}</span>
                  {latest.rolls.length > 1 && (
                    <span className="text-[11px] font-normal text-slate-400">
                      [{latest.rolls.join(' + ')}]{latest.modifier !== 0 ? ` ${latest.modifier > 0 ? `+ ${latest.modifier}` : `- ${Math.abs(latest.modifier)}`}` : ''}
                    </span>
                  )}
                  {latest.rolls.length === 1 && latest.modifier !== 0 && (
                    <span className="text-[11px] font-normal text-slate-400">
                      [{latest.rolls[0]} {latest.modifier > 0 ? `+ ${latest.modifier}` : `- ${Math.abs(latest.modifier)}`}]
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => executeRoll(latest.notation)}
                  className="p-1.5 rounded hover:bg-amber-500/20 text-amber-400 hover:text-amber-200 transition-colors"
                  title="Reroll"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* History */}
          {rollHistory.length > 1 && (
            <div className="max-h-28 overflow-y-auto space-y-1 text-[11px] border-t border-slate-800 pt-2 font-mono">
              <span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-1">
                Recent Rolls
              </span>
              {rollHistory.slice(1, 6).map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between px-2 py-0.5 rounded bg-slate-950/60 text-slate-400"
                >
                  <span className="truncate max-w-[170px]">{item.label || item.notation}</span>
                  <span className="font-bold text-amber-300 ml-2">{item.total}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-3 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-medium text-xs rounded-full shadow-lg transition-transform hover:scale-105 cursor-pointer border border-amber-400"
          title="Open Dice Tray"
        >
          <Dices className="w-4 h-4" />
          <span>Dice Tray</span>
          {latest && (
            <span className="px-1.5 py-0.5 rounded-full bg-slate-950 text-amber-300 font-mono text-[10px] font-bold">
              {latest.total}
            </span>
          )}
        </button>
      )}
    </div>
  );
};
