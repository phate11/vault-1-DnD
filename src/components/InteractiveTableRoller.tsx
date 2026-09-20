import React, { useState } from 'react';
import { Dices, Sparkles, RefreshCw, Check, Trophy } from 'lucide-react';

interface InteractiveTableRollerProps {
  headerRow: string[];
  bodyRows: string[][];
  onDiceRoll?: (notation: string, total: number) => void;
}

export const InteractiveTableRoller: React.FC<InteractiveTableRollerProps> = ({
  headerRow,
  bodyRows,
  onDiceRoll
}) => {
  const [activeRoll, setActiveRoll] = useState<{
    rollValue: number;
    selectedRowIndex: number;
    dieType: string;
  } | null>(null);

  // Check if first column represents dice e.g. "d100", "d20", "d12", "d10", "d8", "d6", "d4", "2d6", "3d6"
  const firstColHeader = headerRow[0]?.toLowerCase().trim() || '';
  const diceMatch = firstColHeader.match(/(?:^|\b)(\d*d\d+)(?:[+-]\d+)?(?:\b|$)/i);

  if (!diceMatch && !firstColHeader.includes('d4') && !firstColHeader.includes('d6') && !firstColHeader.includes('d8') && !firstColHeader.includes('d10') && !firstColHeader.includes('d12') && !firstColHeader.includes('d20') && !firstColHeader.includes('d100')) {
    return null;
  }

  const dieNotation = diceMatch ? diceMatch[1] : 'd20';

  const handleRoll = () => {
    // Parse range in rows
    let max = 20;
    if (dieNotation === 'd100') max = 100;
    else if (dieNotation === 'd20') max = 20;
    else if (dieNotation === 'd12') max = 12;
    else if (dieNotation === 'd10') max = 10;
    else if (dieNotation === 'd8') max = 8;
    else if (dieNotation === 'd6') max = 6;
    else if (dieNotation === 'd4') max = 4;
    else if (dieNotation === '2d6') {
      const d1 = Math.floor(Math.random() * 6) + 1;
      const d2 = Math.floor(Math.random() * 6) + 1;
      const rolled = d1 + d2;
      findMatchingRow(rolled, '2d6');
      return;
    } else if (dieNotation === '3d6') {
      const d1 = Math.floor(Math.random() * 6) + 1;
      const d2 = Math.floor(Math.random() * 6) + 1;
      const d3 = Math.floor(Math.random() * 6) + 1;
      const rolled = d1 + d2 + d3;
      findMatchingRow(rolled, '3d6');
      return;
    }

    const rolled = Math.floor(Math.random() * max) + 1;
    findMatchingRow(rolled, dieNotation);
  };

  const findMatchingRow = (rolled: number, notation: string) => {
    let matchedIdx = 0;

    for (let i = 0; i < bodyRows.length; i++) {
      const cellText = bodyRows[i][0]?.trim() || '';
      // Range check e.g. "01–10", "1-5", "11-15", "8", "10+"
      if (cellText.includes('–') || cellText.includes('-')) {
        const parts = cellText.split(/[–-]/).map((p) => parseInt(p.trim(), 10));
        if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
          // Special case for 00 as 100
          const low = parts[0] === 0 ? 100 : parts[0];
          const high = parts[1] === 0 ? 100 : parts[1];
          const minVal = Math.min(low, high);
          const maxVal = Math.max(low, high);
          if (rolled >= minVal && rolled <= maxVal) {
            matchedIdx = i;
            break;
          }
        }
      } else {
        const num = parseInt(cellText.replace(/[^0-9]/g, ''), 10);
        if (!isNaN(num) && num === rolled) {
          matchedIdx = i;
          break;
        }
      }
    }

    setActiveRoll({
      rollValue: rolled,
      selectedRowIndex: matchedIdx,
      dieType: notation
    });

    if (onDiceRoll) {
      onDiceRoll(notation, rolled);
    }
  };

  return (
    <div className="flex items-center justify-between px-3 py-1.5 bg-amber-500/10 border-b border-amber-500/20 text-xs text-amber-200">
      <div className="flex items-center gap-2">
        <button
          onClick={handleRoll}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold transition-transform active:scale-95 cursor-pointer shadow-sm text-[11px]"
        >
          <Dices className="w-3.5 h-3.5" />
          <span>Roll {dieNotation.toUpperCase()} on Table</span>
        </button>
        {activeRoll && (
          <span className="font-mono text-amber-300 font-bold ml-2">
            Rolled: <span className="text-white bg-amber-600/50 px-1.5 py-0.5 rounded text-[11px]">{activeRoll.rollValue}</span>
          </span>
        )}
      </div>

      {activeRoll && bodyRows[activeRoll.selectedRowIndex] && (
        <div className="truncate max-w-sm text-slate-300 text-[11px] italic">
          Result: <strong className="text-amber-200 not-italic">{bodyRows[activeRoll.selectedRowIndex][1] || bodyRows[activeRoll.selectedRowIndex][0]}</strong>
        </div>
      )}
    </div>
  );
};
