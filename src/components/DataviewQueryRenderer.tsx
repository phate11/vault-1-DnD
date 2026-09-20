import React, { useState, useMemo } from 'react';
import { VaultNote } from '../types';
import { Table, List, Database, Code2, Eye, ChevronDown, ChevronUp, ExternalLink, Filter } from 'lucide-react';

interface DataviewQueryRendererProps {
  rawQuery: string;
  allNotes: VaultNote[];
  onNavigateToNote: (title: string) => void;
}

interface ParsedQuery {
  type: 'TABLE' | 'LIST' | 'TASK' | 'UNKNOWN';
  fields: string[];
  fromClause: string;
  whereClauses: string[];
  sortField?: string;
  sortOrder: 'ASC' | 'DESC';
}

function parseDataviewQuery(raw: string): ParsedQuery {
  const clean = raw.trim();
  const lines = clean.split('\n').map(l => l.trim()).filter(Boolean);
  
  let type: ParsedQuery['type'] = 'TABLE';
  let fields: string[] = [];
  let fromClause = '';
  const whereClauses: string[] = [];
  let sortField: string | undefined;
  let sortOrder: 'ASC' | 'DESC' = 'ASC';

  const fullText = lines.join(' ');
  
  // Detect Query Type
  if (/^TABLE\b/i.test(fullText)) {
    type = 'TABLE';
    // Extract fields between TABLE and (FROM|WHERE|SORT|$)
    const match = fullText.match(/^TABLE\s+(.*?)(?:\s+FROM\b|\s+WHERE\b|\s+SORT\b|$)/i);
    if (match && match[1].trim()) {
      fields = match[1].split(',').map(f => f.trim()).filter(Boolean);
    }
  } else if (/^LIST\b/i.test(fullText)) {
    type = 'LIST';
  } else if (/^TASK\b/i.test(fullText)) {
    type = 'TASK';
  } else {
    type = 'UNKNOWN';
  }

  // FROM clause (e.g., FROM "Spells" or FROM #creature)
  const fromMatch = fullText.match(/\bFROM\s+([^WHERE|SORT]+)/i);
  if (fromMatch) {
    fromClause = fromMatch[1].trim().replace(/^["']|["']$/g, '');
  }

  // WHERE clause
  const whereMatch = fullText.match(/\bWHERE\s+([^SORT]+)/i);
  if (whereMatch) {
    whereClauses.push(whereMatch[1].trim());
  }

  // SORT clause
  const sortMatch = fullText.match(/\bSORT\s+([a-zA-Z0-9_-]+)(?:\s+(ASC|DESC))?/i);
  if (sortMatch) {
    sortField = sortMatch[1].trim();
    if (sortMatch[2]?.toUpperCase() === 'DESC') {
      sortOrder = 'DESC';
    }
  }

  return {
    type,
    fields: fields.length > 0 ? fields : ['category', 'folder', 'tags'],
    fromClause,
    whereClauses,
    sortField,
    sortOrder
  };
}

export const DataviewQueryRenderer: React.FC<DataviewQueryRendererProps> = ({
  rawQuery,
  allNotes,
  onNavigateToNote
}) => {
  const [showRaw, setShowRaw] = useState(false);
  const [filterQuery, setFilterQuery] = useState('');
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortAsc, setSortAsc] = useState(true);

  const parsed = useMemo(() => parseDataviewQuery(rawQuery), [rawQuery]);

  // Execute query against allNotes
  const results = useMemo(() => {
    let list = [...allNotes];

    // Filter by FROM
    if (parsed.fromClause) {
      const fromLower = parsed.fromClause.toLowerCase();
      if (fromLower.startsWith('#')) {
        const tag = fromLower.slice(1);
        list = list.filter(n => n.tags.some(t => t.toLowerCase() === tag));
      } else {
        // Folder or Category or Path match
        list = list.filter(n =>
          n.folder.toLowerCase().includes(fromLower) ||
          n.category.toLowerCase().includes(fromLower) ||
          n.tags.some(t => t.toLowerCase().includes(fromLower))
        );
      }
    }

    // Filter by WHERE clauses (simple heuristic parser)
    if (parsed.whereClauses.length > 0) {
      for (const where of parsed.whereClauses) {
        const lowerWhere = where.toLowerCase();

        // contains(tags, "xyz") or contains(classes, "xyz")
        const containsMatch = lowerWhere.match(/contains\(\s*([a-z0-9_-]+)\s*,\s*["']([^"']+)["']\s*\)/i);
        if (containsMatch) {
          const field = containsMatch[1];
          const val = containsMatch[2];
          if (field === 'tags') {
            list = list.filter(n => n.tags.some(t => t.toLowerCase().includes(val)));
          } else {
            list = list.filter(n => n.content.toLowerCase().includes(val));
          }
        }

        // field = "val"
        const eqMatch = lowerWhere.match(/([a-z0-9_-]+)\s*=\s*["']([^"']+)["']/i);
        if (eqMatch) {
          const field = eqMatch[1];
          const val = eqMatch[2];
          if (field === 'category') {
            list = list.filter(n => n.category.toLowerCase() === val);
          } else if (field === 'folder') {
            list = list.filter(n => n.folder.toLowerCase() === val);
          }
        }

        // cr > X or cr >= X
        const crGreaterMatch = lowerWhere.match(/cr\s*(>=|>)\s*(\d+)/i);
        if (crGreaterMatch) {
          const num = parseInt(crGreaterMatch[2], 10);
          list = list.filter(n => {
            const crMatch = n.content.match(/\bCR\s*(\d+)/i) || n.content.match(/Challenge\s*(\d+)/i);
            if (crMatch) {
              const crVal = parseInt(crMatch[1], 10);
              return crGreaterMatch[1] === '>=' ? crVal >= num : crVal > num;
            }
            return false;
          });
        }
      }
    }

    // Interactive UI Filter
    if (filterQuery.trim()) {
      const q = filterQuery.toLowerCase();
      list = list.filter(n =>
        n.title.toLowerCase().includes(q) ||
        n.tags.some(t => t.toLowerCase().includes(q)) ||
        n.folder.toLowerCase().includes(q)
      );
    }

    // Initial Sort
    if (parsed.sortField) {
      const sf = parsed.sortField.toLowerCase();
      list.sort((a, b) => {
        const valA = sf === 'title' ? a.title : a.folder;
        const valB = sf === 'title' ? b.title : b.folder;
        const cmp = valA.localeCompare(valB);
        return parsed.sortOrder === 'DESC' ? -cmp : cmp;
      });
    }

    return list;
  }, [allNotes, parsed, filterQuery]);

  // Extract cell value for a note and field
  const getFieldValue = (note: VaultNote, field: string): string => {
    const f = field.toLowerCase();
    if (f === 'file.link' || f === 'note' || f === 'title') {
      return note.title;
    }
    if (f === 'folder') return note.folder;
    if (f === 'category') return note.category;
    if (f === 'tags') return note.tags.map(t => `#${t}`).join(', ');
    
    // Look in note metadata or regex in content
    if (f === 'cr' || f === 'challenge') {
      const m = note.content.match(/(?:Challenge|CR)\s*[:=]?\s*([0-9/]+(?:\s*\([^)]+\))?)/i);
      return m ? m[1] : '—';
    }
    if (f === 'ac' || f === 'armor_class') {
      const m = note.content.match(/Armor Class\s*[:=]?\s*(\d+(?:\s*\([^)]+\))?)/i);
      return m ? m[1] : '—';
    }
    if (f === 'hp' || f === 'hit_points') {
      const m = note.content.match(/Hit Points\s*[:=]?\s*(\d+(?:\s*\([^)]+\))?)/i);
      return m ? m[1] : '—';
    }
    if (f === 'type') {
      const m = note.content.match(/(?:Small|Medium|Large|Huge|Gargantuan)\s+([a-zA-Z\s()]+),\s*(?:lawful|chaotic|neutral|unaligned)/i);
      return m ? m[1].trim() : '—';
    }
    if (f === 'level') {
      const m = note.content.match(/(\d+)(?:st|nd|rd|th)-level/i) || (note.content.includes('cantrip') ? ['cantrip', 'Cantrip'] : null);
      return m ? m[1] : '—';
    }
    if (f === 'school') {
      const m = note.content.match(/(abjuration|conjuration|divination|enchantment|evocation|illusion|necromancy|transmutation)/i);
      return m ? m[1].charAt(0).toUpperCase() + m[1].slice(1) : '—';
    }
    if (f === 'casting_time' || f === 'casting time') {
      const m = note.content.match(/Casting Time\s*[:=]?\s*([^,\n]+)/i);
      return m ? m[1].trim() : '—';
    }

    return '—';
  };

  return (
    <div className="my-5 rounded-lg border border-purple-500/30 bg-slate-950/80 shadow-md overflow-hidden">
      {/* Dataview Header */}
      <div className="flex items-center justify-between px-3.5 py-2 bg-gradient-to-r from-purple-950/40 via-slate-900 to-slate-950 border-b border-purple-500/20 text-xs">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono font-semibold text-[11px] border border-purple-500/30">
            <Database className="w-3.5 h-3.5 text-purple-400" />
            <span>Dataview</span>
          </div>
          <span className="text-slate-400 text-[11px]">
            {parsed.type} • <strong className="text-slate-200">{results.length}</strong> results
            {parsed.fromClause && (
              <span className="ml-1 text-purple-400 font-mono">FROM "{parsed.fromClause}"</span>
            )}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setShowRaw(!showRaw)}
            className="flex items-center gap-1 px-2 py-1 rounded bg-slate-800/80 hover:bg-slate-800 text-slate-300 text-[11px] border border-slate-700 transition-colors"
            title="Toggle Dataview Raw Query"
          >
            {showRaw ? <Eye className="w-3 h-3 text-amber-400" /> : <Code2 className="w-3 h-3 text-purple-400" />}
            <span>{showRaw ? 'Rendered' : 'Query DQL'}</span>
          </button>
        </div>
      </div>

      {showRaw ? (
        <div className="p-3 bg-slate-950 text-purple-300 font-mono text-xs overflow-x-auto border-b border-slate-800 whitespace-pre">
          {rawQuery}
        </div>
      ) : (
        <div>
          {/* Quick inline search for large query result sets */}
          {results.length > 5 && (
            <div className="px-3 py-1.5 bg-slate-900/50 border-b border-slate-800/80 flex items-center gap-2 text-xs">
              <Filter className="w-3 h-3 text-purple-400" />
              <input
                type="text"
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
                placeholder="Filter current results..."
                className="w-full bg-transparent text-slate-200 placeholder-slate-500 focus:outline-none text-[11px]"
              />
            </div>
          )}

          {parsed.type === 'LIST' ? (
            <div className="p-4 divide-y divide-slate-800/60 max-h-96 overflow-y-auto">
              {results.length === 0 ? (
                <div className="text-slate-500 text-xs italic py-2 text-center">
                  No notes matched the Dataview query.
                </div>
              ) : (
                <ul className="space-y-1.5">
                  {results.map((note) => (
                    <li key={note.id} className="flex items-center justify-between text-xs text-slate-300">
                      <button
                        onClick={() => onNavigateToNote(note.title)}
                        className="inline-flex items-center gap-1 text-purple-300 hover:text-purple-200 hover:underline font-medium"
                      >
                        <span>[[{note.title}]]</span>
                      </button>
                      <span className="text-[10px] text-slate-500 font-mono">{note.folder}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            /* TABLE MODE */
            <div className="overflow-x-auto max-h-96 overflow-y-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-purple-950/20 border-b border-purple-500/30 text-purple-300 font-semibold sticky top-0 bg-slate-900 z-10">
                    <th className="px-3 py-2 border-r border-slate-800/80 text-[11px]">File</th>
                    {parsed.fields.map((f, i) => (
                      <th
                        key={i}
                        className="px-3 py-2 border-r border-slate-800/80 last:border-r-0 uppercase tracking-wider text-[10px] text-slate-400 font-mono"
                      >
                        {f}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50">
                  {results.length === 0 ? (
                    <tr>
                      <td colSpan={parsed.fields.length + 1} className="px-4 py-4 text-center text-slate-500 text-xs italic">
                        No notes matched the Dataview criteria.
                      </td>
                    </tr>
                  ) : (
                    results.map((note) => (
                      <tr key={note.id} className="hover:bg-purple-950/15 transition-colors">
                        <td className="px-3 py-1.5 border-r border-slate-800/40 text-slate-200 font-medium whitespace-nowrap">
                          <button
                            onClick={() => onNavigateToNote(note.title)}
                            className="inline-flex items-center gap-1 text-purple-300 hover:text-purple-200 hover:underline cursor-pointer"
                          >
                            <span>[[{note.title}]]</span>
                          </button>
                        </td>
                        {parsed.fields.map((f, i) => (
                          <td
                            key={i}
                            className="px-3 py-1.5 border-r border-slate-800/40 last:border-r-0 text-slate-300 text-[11px]"
                          >
                            {getFieldValue(note, f)}
                          </td>
                        ))}
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
