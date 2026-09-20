import React, { useState, useEffect } from 'react';
import { VaultNote } from '../types';
import { DataviewQueryRenderer } from './DataviewQueryRenderer';
import { StatblockRenderer } from './StatblockRenderer';
import { LeafletMapRenderer } from './LeafletMapRenderer';
import { InteractiveTableRoller } from './InteractiveTableRoller';
import { parseAndRoll, DiceRollResult } from './QuickDiceTray';
import {
  FileText,
  Copy,
  Check,
  Download,
  Share2,
  Tag,
  Folder,
  Eye,
  Code2,
  ExternalLink,
  Layers,
  Sparkles,
  Info,
  AlertTriangle,
  Flame,
  Scroll,
  Shield,
  Coins,
  Dices,
  Edit3,
  Save,
  Trash2,
  PlusCircle,
  Wand2,
  Undo2,
  UserCheck
} from 'lucide-react';

interface NoteViewerProps {
  note: VaultNote;
  onNavigateToNote: (targetTitle: string) => void;
  onOpenGraph: () => void;
  backlinkCount: number;
  onToggleBacklinks: () => void;
  isBacklinksOpen: boolean;
  allNotes?: VaultNote[];
  onTriggerDiceRoll?: (roll: DiceRollResult) => void;
  onUpdateNote?: (updatedNote: VaultNote) => void;
  onDeleteNote?: (noteId: string) => void;
  onOpenWorldbuilder?: () => void;
  onOpenCharacterSheets?: () => void;
}

export const NoteViewer: React.FC<NoteViewerProps> = ({
  note,
  onNavigateToNote,
  onOpenGraph,
  backlinkCount,
  onToggleBacklinks,
  isBacklinksOpen,
  allNotes = [],
  onTriggerDiceRoll,
  onUpdateNote,
  onDeleteNote,
  onOpenWorldbuilder,
  onOpenCharacterSheets
}) => {
  const [viewMode, setViewMode] = useState<'rendered' | 'raw' | 'edit'>('rendered');
  const [copied, setCopied] = useState(false);
  const [editBuffer, setEditBuffer] = useState(note.content);
  const [hasSaved, setHasSaved] = useState(false);

  // Sync editBuffer whenever note changes
  useEffect(() => {
    setEditBuffer(note.content);
    setViewMode('rendered');
  }, [note.id, note.content]);

  const handleCopy = () => {
    navigator.clipboard.writeText(note.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([note.content], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${note.title.replace(/[\\/:*?"<>|]/g, '-')}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleSaveEdit = () => {
    if (onUpdateNote) {
      // Parse frontmatter from edited buffer if title changed
      const matchTitle = editBuffer.match(/^title:\s*(.+)$/m);
      const newTitle = matchTitle ? matchTitle[1].trim() : note.title;
      const matchFolder = editBuffer.match(/^folder:\s*(.+)$/m);
      const newFolder = matchFolder ? matchFolder[1].trim() : note.folder;

      const updated: VaultNote = {
        ...note,
        title: newTitle,
        folder: newFolder,
        content: editBuffer
      };
      onUpdateNote(updated);
      setHasSaved(true);
      setTimeout(() => setHasSaved(false), 2000);
      setViewMode('rendered');
    }
  };

  const insertSnippet = (prefix: string, suffix = '') => {
    setEditBuffer((prev) => prev + `\n${prefix}${suffix}\n`);
  };

  // Parse YAML frontmatter and content body
  const frontmatterMatch = note.content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  const frontmatterRaw = frontmatterMatch ? frontmatterMatch[1] : null;
  const bodyContent = frontmatterMatch ? frontmatterMatch[2] : note.content;

  // Simple, elegant Markdown renderer with [[wikilink]] interception, tables, code blocks, and callouts
  const renderMarkdown = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];

      // 1. Code Blocks (```lang ... ```)
      if (line.trim().startsWith('```')) {
        const lang = line.trim().replace(/^```/, '').trim().toLowerCase();
        const codeLines: string[] = [];
        i++;
        while (i < lines.length && !lines[i].trim().startsWith('```')) {
          codeLines.push(lines[i]);
          i++;
        }
        i++; // skip closing ```
        const rawCode = codeLines.join('\n');
        const key = `code-${i}`;

        if (lang === 'dataview') {
          elements.push(
            <DataviewQueryRenderer
              key={key}
              rawQuery={rawCode}
              allNotes={allNotes}
              onNavigateToNote={onNavigateToNote}
            />
          );
        } else if (
          lang === 'statblock' ||
          lang === 'ttrpg-statblock' ||
          lang === 'dnd-statblock' ||
          lang === 'monster' ||
          lang === '5e-statblock' ||
          lang === 'fantasy-statblock'
        ) {
          elements.push(
            <StatblockRenderer
              key={key}
              rawContent={rawCode}
              onNavigateToNote={onNavigateToNote}
            />
          );
        } else if (lang === 'leaflet') {
          elements.push(
            <LeafletMapRenderer
              key={key}
              rawContent={rawCode}
              onNavigateToNote={onNavigateToNote}
            />
          );
        } else {
          // Standard code block
          elements.push(
            <div key={key} className="my-4 rounded-md border border-slate-800 bg-slate-950 overflow-hidden font-mono text-xs">
              {lang && (
                <div className="px-3 py-1 bg-slate-900 border-b border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
                  <span>{lang}</span>
                  <button
                    onClick={() => navigator.clipboard.writeText(rawCode)}
                    className="hover:text-amber-300 transition-colors cursor-pointer"
                  >
                    Copy
                  </button>
                </div>
              )}
              <pre className="p-3 text-slate-300 overflow-x-auto whitespace-pre">
                {rawCode}
              </pre>
            </div>
          );
        }
        continue;
      }

      // 2. Obsidian Callouts (> [!type] Title) or Quotes (> quote)
      if (line.startsWith('>')) {
        const calloutMatch = line.match(/^>\s*\[!([a-zA-Z0-9_-]+)\]\s*(.*)$/);
        if (calloutMatch) {
          const type = calloutMatch[1].toLowerCase();
          const customTitle = calloutMatch[2].trim() || type.toUpperCase();
          const calloutLines: string[] = [];
          i++;
          while (i < lines.length && (lines[i].startsWith('>') || lines[i].startsWith('  '))) {
            calloutLines.push(lines[i].replace(/^>\s?/, ''));
            i++;
          }

          // Callout styling based on type
          let borderColor = 'border-cyan-500/60 bg-cyan-950/20 text-cyan-200';
          let icon = <Info className="w-4 h-4 text-cyan-400" />;

          if (type === 'tarokka') {
            borderColor = 'border-purple-500/60 bg-purple-950/25 text-purple-200';
            icon = <Sparkles className="w-4 h-4 text-purple-400" />;
          } else if (type === 'statblock' || type === 'monster') {
            borderColor = 'border-red-600/60 bg-red-950/25 text-red-200';
            icon = <Shield className="w-4 h-4 text-red-400" />;
          } else if (type === 'spell' || type === 'magic') {
            borderColor = 'border-indigo-500/60 bg-indigo-950/25 text-indigo-200';
            icon = <Flame className="w-4 h-4 text-indigo-400" />;
          } else if (type === 'lore' || type === 'story') {
            borderColor = 'border-amber-500/60 bg-amber-950/25 text-amber-200';
            icon = <Scroll className="w-4 h-4 text-amber-400" />;
          } else if (type === 'loot' || type === 'treasure') {
            borderColor = 'border-yellow-500/60 bg-yellow-950/25 text-yellow-200';
            icon = <Coins className="w-4 h-4 text-yellow-400" />;
          } else if (type === 'warning' || type === 'danger') {
            borderColor = 'border-orange-500/60 bg-orange-950/25 text-orange-200';
            icon = <AlertTriangle className="w-4 h-4 text-orange-400" />;
          } else if (type === 'dm' || type === 'gm') {
            borderColor = 'border-rose-600/60 bg-rose-950/25 text-rose-200';
            icon = <Shield className="w-4 h-4 text-rose-400" />;
          }

          elements.push(
            <div key={`callout-${i}`} className={`my-4 rounded-md border-l-4 p-3.5 ${borderColor} shadow-sm`}>
              <div className="flex items-center gap-2 font-semibold text-xs mb-1.5 uppercase tracking-wide">
                {icon}
                <span>{customTitle}</span>
              </div>
              <div className="text-xs text-slate-300 space-y-1 pl-6">
                {calloutLines.map((cl, clIdx) => (
                  <p key={clIdx}>{renderInline(cl, `cl-${i}-${clIdx}`)}</p>
                ))}
              </div>
            </div>
          );
          continue;
        } else {
          // Standard blockquote
          const quoteLines: string[] = [];
          while (i < lines.length && lines[i].startsWith('>')) {
            quoteLines.push(lines[i].replace(/^>\s?/, ''));
            i++;
          }
          elements.push(
            <blockquote
              key={`quote-${i}`}
              className="border-l-4 border-amber-500/80 bg-amber-500/5 px-4 py-2 my-2 text-slate-300 italic rounded-r text-sm"
            >
              {quoteLines.map((ql, qIdx) => (
                <p key={qIdx}>{renderInline(ql, `ql-${i}-${qIdx}`)}</p>
              ))}
            </blockquote>
          );
          continue;
        }
      }

      // 3. Tables (| ... |)
      if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
        const tableLines: string[] = [];
        while (i < lines.length && lines[i].trim().startsWith('|') && lines[i].trim().endsWith('|')) {
          tableLines.push(lines[i]);
          i++;
        }
        elements.push(renderTable(tableLines, `tbl-${i}`));
        continue;
      }

      // 4. Headers
      if (line.startsWith('# ')) {
        elements.push(
          <h1
            key={i}
            id={slugify(line.replace('# ', ''))}
            className="text-2xl font-bold text-slate-100 mt-6 mb-3 pb-2 border-b border-slate-700/60"
          >
            {renderInline(line.replace('# ', ''), i)}
          </h1>
        );
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2
            key={i}
            id={slugify(line.replace('## ', ''))}
            className="text-xl font-semibold text-amber-300 mt-6 mb-2 pt-2 border-b border-slate-800"
          >
            {renderInline(line.replace('## ', ''), i)}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3
            key={i}
            id={slugify(line.replace('### ', ''))}
            className="text-lg font-medium text-amber-100 mt-4 mb-1.5 flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
            {renderInline(line.replace('### ', ''), i)}
          </h3>
        );
      } else if (line.startsWith('#### ')) {
        elements.push(
          <h4
            key={i}
            className="text-base font-medium text-slate-200 mt-3 mb-1"
          >
            {renderInline(line.replace('#### ', ''), i)}
          </h4>
        );
      } else if (line.startsWith('---')) {
        elements.push(<hr key={i} className="my-5 border-slate-800" />);
      } else if (line.startsWith('- ') || line.startsWith('* ')) {
        elements.push(
          <div key={i} className="flex items-start gap-2 ml-4 my-1 text-slate-300 text-sm">
            <span className="text-amber-400 font-bold select-none">•</span>
            <div>{renderInline(line.slice(2), i)}</div>
          </div>
        );
      } else if (/^\d+\.\s/.test(line)) {
        const num = line.match(/^(\d+)\.\s/)?.[1];
        elements.push(
          <div key={i} className="flex items-start gap-2 ml-4 my-1 text-slate-300 text-sm">
            <span className="text-amber-400 font-semibold select-none">{num}.</span>
            <div>{renderInline(line.replace(/^\d+\.\s/, ''), i)}</div>
          </div>
        );
      } else if (line.trim() === '') {
        elements.push(<div key={i} className="h-2" />);
      } else {
        elements.push(
          <p key={i} className="my-1.5 text-slate-300 text-sm leading-relaxed">
            {renderInline(line, i)}
          </p>
        );
      }

      i++;
    }

    return elements;
  };

  const renderTable = (rows: string[], key: string) => {
    if (rows.length < 2) return null;
    const headerRow = rows[0]
      .split('|')
      .slice(1, -1)
      .map((c) => c.trim());
    const bodyRows = rows.slice(2).map((row) =>
      row
        .split('|')
        .slice(1, -1)
        .map((c) => c.trim())
    );

    return (
      <div key={key} className="my-4 overflow-x-auto rounded-md border border-slate-800 bg-slate-900/60 shadow-inner">
        <InteractiveTableRoller
          headerRow={headerRow}
          bodyRows={bodyRows}
          onDiceRoll={(notation, total) => {
            if (onTriggerDiceRoll) {
              onTriggerDiceRoll({
                notation,
                rolls: [total],
                modifier: 0,
                total,
                timestamp: new Date()
              });
            }
          }}
        />
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-slate-800/80 border-b border-slate-700 text-amber-300 font-semibold">
              {headerRow.map((h, i) => (
                <th key={i} className="px-3 py-2 border-r border-slate-700/50 last:border-r-0">
                  {renderInline(h, `th-${i}`)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {bodyRows.map((row, rIndex) => (
              <tr key={rIndex} className="hover:bg-slate-800/30 transition-colors">
                {row.map((cell, cIndex) => (
                  <td key={cIndex} className="px-3 py-1.5 border-r border-slate-800/40 last:border-r-0 text-slate-300">
                    {renderInline(cell, `td-${rIndex}-${cIndex}`)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const renderInline = (text: string, keySeed: string | number): React.ReactNode => {
    // Replace [[TargetNote|Alias]] or [[TargetNote]]
    const parts: React.ReactNode[] = [];
    const linkRegex = /\[\[([^\]|#]+)(?:#([^\]|]+))?(?:\|([^\]]+))?\]\]/g;
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(parseFormatting(text.slice(lastIndex, match.index), `${keySeed}-${lastIndex}`));
      }

      const targetTitle = match[1].trim();
      const targetAnchor = match[2]?.trim();
      const displayText = match[3]?.trim() || targetTitle;

      parts.push(
        <button
          key={`wikilink-${match.index}`}
          onClick={() => onNavigateToNote(targetTitle)}
          className="inline-flex items-center gap-0.5 px-1.5 py-0.5 mx-0.5 text-xs font-medium rounded bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 hover:text-amber-200 border border-amber-500/30 transition-colors cursor-pointer"
          title={`Jump to note: ${targetTitle}${targetAnchor ? ` #${targetAnchor}` : ''}`}
        >
          <span className="text-amber-500 font-bold select-none text-[10px]">[[</span>
          {displayText}
          <span className="text-amber-500 font-bold select-none text-[10px]">]]</span>
        </button>
      );

      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      parts.push(parseFormatting(text.slice(lastIndex), `${keySeed}-${lastIndex}`));
    }

    return parts;
  };

  const parseDiceInString = (text: string, seed: string): React.ReactNode => {
    // Matches dice formulas like 1d20+5, 2d6, 8d6, 1d10-1
    const diceRegex = /\b(\d*d\d+(?:[+-]\d+)?)\b/gi;
    const tokens: React.ReactNode[] = [];
    let lastIdx = 0;
    let diceMatch;

    while ((diceMatch = diceRegex.exec(text)) !== null) {
      if (diceMatch.index > lastIdx) {
        tokens.push(text.slice(lastIdx, diceMatch.index));
      }

      const notation = diceMatch[1];
      tokens.push(
        <button
          key={`dice-${seed}-${diceMatch.index}`}
          onClick={(e) => {
            e.stopPropagation();
            const rollRes = parseAndRoll(notation);
            if (rollRes && onTriggerDiceRoll) {
              onTriggerDiceRoll(rollRes);
            }
          }}
          className="inline-flex items-center gap-0.5 px-1.5 py-0.5 mx-0.5 bg-amber-500/15 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 rounded font-mono text-xs font-semibold cursor-pointer transition-colors active:scale-95"
          title={`Click to roll ${notation}`}
        >
          <Dices className="w-3 h-3 text-amber-400" />
          <span>{notation}</span>
        </button>
      );

      lastIdx = diceMatch.index + diceMatch[0].length;
    }

    if (lastIdx < text.length) {
      tokens.push(text.slice(lastIdx));
    }

    return tokens;
  };

  const parseFormatting = (str: string, seed: string): React.ReactNode => {
    // Parse bold **text**, italics *text*, inline code `code`
    const subParts: React.ReactNode[] = [];
    const regex = /(\*\*.*?\*\*|\*.*?\*|`.*?`)/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(str)) !== null) {
      if (match.index > lastIndex) {
        subParts.push(parseDiceInString(str.slice(lastIndex, match.index), `${seed}-${lastIndex}`));
      }
      const token = match[0];
      if (token.startsWith('**') && token.endsWith('**')) {
        subParts.push(
          <strong key={`${seed}-${match.index}`} className="font-semibold text-slate-100">
            {parseDiceInString(token.slice(2, -2), `${seed}-strong-${match.index}`)}
          </strong>
        );
      } else if (token.startsWith('*') && token.endsWith('*')) {
        subParts.push(
          <em key={`${seed}-${match.index}`} className="italic text-slate-200">
            {parseDiceInString(token.slice(1, -1), `${seed}-em-${match.index}`)}
          </em>
        );
      } else if (token.startsWith('`') && token.endsWith('`')) {
        subParts.push(
          <code
            key={`${seed}-${match.index}`}
            className="px-1 py-0.5 bg-slate-800 text-amber-300 rounded text-xs font-mono border border-slate-700"
          >
            {token.slice(1, -1)}
          </code>
        );
      }
      lastIndex = match.index + token.length;
    }

    if (lastIndex < str.length) {
      subParts.push(parseDiceInString(str.slice(lastIndex), `${seed}-${lastIndex}`));
    }

    return subParts;
  };

  const slugify = (text: string) => {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  return (
    <div className="flex flex-col h-full bg-slate-900 overflow-hidden border-x border-slate-800">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950 border-b border-slate-800">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="flex items-center gap-1 text-slate-300 font-medium">
            <Folder className="w-3.5 h-3.5 text-amber-500" />
            {note.folder}
          </span>
          <span>/</span>
          <span className="text-slate-100 font-semibold">{note.title}</span>
          <span className="ml-2 px-2 py-0.5 rounded-full bg-slate-800 text-[10px] text-amber-400 border border-slate-700">
            {note.category}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded p-0.5 mr-2">
            <button
              onClick={() => setViewMode('rendered')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs transition-colors ${
                viewMode === 'rendered'
                  ? 'bg-amber-500/20 text-amber-300 font-medium'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              Preview
            </button>
            <button
              onClick={() => setViewMode('raw')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs transition-colors ${
                viewMode === 'raw'
                  ? 'bg-amber-500/20 text-amber-300 font-medium'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              Raw .md
            </button>
            <button
              onClick={() => setViewMode('edit')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs transition-colors ${
                viewMode === 'edit'
                  ? 'bg-amber-500/20 text-amber-300 font-medium'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Edit3 className="w-3.5 h-3.5" />
              Edit Note
            </button>
          </div>

          {onOpenWorldbuilder && note.category === 'Template' && (
            <button
              onClick={onOpenWorldbuilder}
              className="flex items-center gap-1.5 px-2.5 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded text-xs font-semibold shadow-sm transition-colors mr-1"
              title="Spawn a new note based on this template"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Use Template</span>
            </button>
          )}

          {onDeleteNote && note.id.startsWith('homebrew-') && (
            <button
              onClick={() => {
                if (window.confirm(`Are you sure you want to delete note "${note.title}"?`)) {
                  onDeleteNote(note.id);
                }
              }}
              className="flex items-center gap-1 px-2 py-1 bg-red-950/40 hover:bg-red-900/60 border border-red-800/60 text-red-300 rounded text-xs transition-colors"
              title="Delete this custom note"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          )}

          {onOpenCharacterSheets &&
            (note.category === 'Character' ||
              note.folder.includes('Characters') ||
              note.tags.includes('character') ||
              note.title.toLowerCase().includes('character sheet')) && (
              <button
                onClick={onOpenCharacterSheets}
                className="flex items-center gap-1.5 px-2.5 py-1 bg-gradient-to-r from-amber-500/25 to-amber-600/25 hover:from-amber-500/35 hover:to-amber-600/35 border border-amber-500/50 text-amber-300 rounded text-xs font-semibold shadow-sm transition-colors cursor-pointer"
                title="Launch Interactive 5e / Kids Character Sheet Studio"
              >
                <UserCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Interactive Sheet</span>
              </button>
            )}

          <button
            onClick={onToggleBacklinks}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded border text-xs transition-colors ${
              isBacklinksOpen
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border-slate-700'
            }`}
            title="Toggle Backlinks & Outbound Links"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Links ({backlinkCount})</span>
          </button>

          <button
            onClick={onOpenGraph}
            className="flex items-center gap-1 px-2 py-1 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 rounded text-xs transition-colors"
            title="Focus in Graph View"
          >
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            Graph
          </button>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1 px-2 py-1 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 rounded text-xs transition-colors"
            title="Copy Note Markdown"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
            {copied ? 'Copied' : 'Copy'}
          </button>

          <button
            onClick={handleDownload}
            className="flex items-center gap-1 px-2 py-1 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 rounded text-xs transition-colors"
            title="Download this markdown note"
          >
            <Download className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Content Pane */}
      <div className="flex-1 overflow-y-auto p-6 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          {viewMode === 'edit' ? (
            <div className="flex flex-col gap-3">
              {/* Editor Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 bg-slate-950 border border-slate-800 rounded-lg">
                <div className="flex flex-wrap items-center gap-1.5 text-xs">
                  <button
                    onClick={() => insertSnippet('[[Note Title]]')}
                    className="px-2 py-1 bg-slate-900 hover:bg-slate-850 border border-slate-700 rounded text-slate-300 font-mono"
                    title="Insert Wikilink"
                  >
                    [[Wikilink]]
                  </button>
                  <button
                    onClick={() => insertSnippet('> [!note] Callout Title\n> Callout message body goes here.')}
                    className="px-2 py-1 bg-slate-900 hover:bg-slate-850 border border-slate-700 rounded text-slate-300 font-mono"
                    title="Insert 5e Callout"
                  >
                    [!callout]
                  </button>
                  <button
                    onClick={() => insertSnippet('```statblock\nname: "Custom Monster"\nsize: "Medium"\ntype: "humanoid"\nalignment: "neutral"\nac: 15\nhp: 45\nspeed: "30 ft."\nstats: [14, 12, 14, 10, 12, 10]\ncr: "2"\nactions:\n  - name: "Shortsword"\n    desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage."\n```')}
                    className="px-2 py-1 bg-slate-900 hover:bg-slate-850 border border-slate-700 rounded text-slate-300 font-mono"
                    title="Insert 5e Statblock"
                  >
                    ```statblock
                  </button>
                  <button
                    onClick={() => insertSnippet('| d6 | Result Description |\n|---|---|\n| 1 | First unexpected event. |\n| 2 | Second rumor heard. |\n| 3 | Third discovery found. |')}
                    className="px-2 py-1 bg-slate-900 hover:bg-slate-850 border border-slate-700 rounded text-slate-300 font-mono"
                    title="Insert Rollable Table"
                  >
                    | Table |
                  </button>
                  <button
                    onClick={() => insertSnippet('- [ ] Task or clue to uncover')}
                    className="px-2 py-1 bg-slate-900 hover:bg-slate-850 border border-slate-700 rounded text-slate-300 font-mono"
                    title="Insert Checklist Item"
                  >
                    [x] Checkbox
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setEditBuffer(note.content);
                      setViewMode('rendered');
                    }}
                    className="px-3 py-1 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-400 hover:text-slate-200 rounded text-xs font-medium transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveEdit}
                    className="px-4 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded text-xs shadow-md shadow-amber-950/40 flex items-center gap-1.5 transition-colors"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>Save Note</span>
                  </button>
                </div>
              </div>

              {/* Textarea */}
              <div className="relative">
                <textarea
                  value={editBuffer}
                  onChange={(e) => setEditBuffer(e.target.value)}
                  className="w-full h-[65vh] p-4 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 font-mono text-xs leading-relaxed focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 resize-none selection:bg-amber-500/30"
                  spellCheck={false}
                />
                <div className="absolute bottom-3 right-4 text-[11px] text-slate-500 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800">
                  {editBuffer.length} characters • {editBuffer.split('\n').length} lines
                </div>
              </div>
            </div>
          ) : viewMode === 'raw' ? (
            <pre className="p-4 bg-slate-950 text-slate-300 font-mono text-xs rounded border border-slate-800 overflow-x-auto whitespace-pre-wrap leading-relaxed select-text">
              {note.content}
            </pre>
          ) : (
            <div>
              {/* Template Banner if viewing a template */}
              {note.category === 'Template' && onOpenWorldbuilder && (
                <div className="mb-4 p-3.5 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                    <p className="text-xs text-amber-200">
                      <strong>Worldbuilding Template:</strong> Ready to build your homebrew world? Spawn an editable note pre-configured from this template!
                    </p>
                  </div>
                  <button
                    onClick={onOpenWorldbuilder}
                    className="px-3 py-1.5 rounded-md bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shrink-0 flex items-center gap-1 shadow-sm transition-colors"
                  >
                    <PlusCircle className="w-3.5 h-3.5" />
                    <span>Create from Template</span>
                  </button>
                </div>
              )}

              {/* Custom Note Indicator */}
              {note.id.startsWith('homebrew-') && (
                <div className="mb-4 p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between text-xs text-emerald-300">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <strong>Custom Note:</strong> Saved in your vault session & included in Obsidian exports.
                  </span>
                  <button
                    onClick={() => setViewMode('edit')}
                    className="px-2.5 py-1 rounded bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-200 text-[11px] font-medium transition-colors flex items-center gap-1"
                  >
                    <Edit3 className="w-3 h-3" />
                    <span>Edit Markdown</span>
                  </button>
                </div>
              )}

              {/* Obsidian Properties Box */}
              <div className="mb-6 p-3 bg-slate-950/80 rounded-md border border-slate-800 text-xs">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                  <Tag className="w-3 h-3 text-amber-400" />
                  Obsidian Metadata & Properties
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500 w-16">Folder:</span>
                    <span className="font-mono text-amber-300">{note.folder}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500 w-16">Category:</span>
                    <span className="font-medium text-slate-200">{note.category}</span>
                  </div>
                  <div className="flex items-center gap-2 sm:col-span-2">
                    <span className="text-slate-500 w-16">Tags:</span>
                    <div className="flex flex-wrap gap-1">
                      {note.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 text-[11px]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {note.aliases && note.aliases.length > 0 && (
                    <div className="flex items-center gap-2 sm:col-span-2">
                      <span className="text-slate-500 w-16">Aliases:</span>
                      <span className="text-slate-400">{note.aliases.join(', ')}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Rendered Body */}
              <div className="prose prose-invert max-w-none">
                {renderMarkdown(bodyContent)}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
