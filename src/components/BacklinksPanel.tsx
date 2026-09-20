import React from 'react';
import { VaultNote } from '../types';
import { BacklinkMap, ForwardLinkMap } from '../utils/vaultExporter';
import { ArrowDownLeft, ArrowUpRight, X, ExternalLink, Hash } from 'lucide-react';

interface BacklinksPanelProps {
  note: VaultNote;
  backlinks: BacklinkMap;
  forwardLinks: ForwardLinkMap;
  onNavigateToNote: (targetTitle: string) => void;
  onClose: () => void;
}

export const BacklinksPanel: React.FC<BacklinksPanelProps> = ({
  note,
  backlinks,
  forwardLinks,
  onNavigateToNote,
  onClose
}) => {
  const incoming = backlinks[note.title] || [];
  const outgoing = forwardLinks[note.title] || [];

  return (
    <div className="w-80 h-full bg-slate-950 border-l border-slate-800 flex flex-col overflow-hidden text-xs">
      <div className="flex items-center justify-between px-3 py-2.5 bg-slate-900/90 border-b border-slate-800">
        <div className="flex items-center gap-1.5 font-semibold text-slate-200">
          <Hash className="w-3.5 h-3.5 text-amber-400" />
          <span>Graph Connections</span>
        </div>
        <button
          onClick={onClose}
          className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-3 space-y-5">
        {/* Incoming Backlinks */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="flex items-center gap-1 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              <ArrowDownLeft className="w-3.5 h-3.5 text-emerald-400" />
              Incoming Backlinks ({incoming.length})
            </span>
          </div>

          {incoming.length === 0 ? (
            <p className="text-slate-500 italic p-2 bg-slate-900/40 rounded border border-slate-800/60">
              No other notes link to this note yet.
            </p>
          ) : (
            <div className="space-y-2">
              {incoming.map((link, idx) => (
                <div
                  key={`${link.sourceId}-${idx}`}
                  onClick={() => onNavigateToNote(link.sourceTitle)}
                  className="p-2.5 bg-slate-900/70 hover:bg-slate-800/80 rounded border border-slate-800/80 cursor-pointer transition-colors group"
                >
                  <div className="flex items-center justify-between text-amber-300 font-medium group-hover:text-amber-200">
                    <span className="truncate">{link.sourceTitle}</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 border border-slate-700/60">
                      {link.sourceCategory}
                    </span>
                  </div>
                  {link.sourceSnippet && (
                    <p className="mt-1 text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                      {link.sourceSnippet}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Outgoing Forward Links */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="flex items-center gap-1 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
              Outgoing Links ({outgoing.length})
            </span>
          </div>

          {outgoing.length === 0 ? (
            <p className="text-slate-500 italic p-2 bg-slate-900/40 rounded border border-slate-800/60">
              This note does not cite other notes.
            </p>
          ) : (
            <div className="flex flex-wrap gap-1.5">
              {outgoing.map((target, idx) => (
                <button
                  key={`${target}-${idx}`}
                  onClick={() => onNavigateToNote(target)}
                  className="flex items-center gap-1 px-2 py-1 bg-slate-900 hover:bg-slate-800 rounded border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-amber-300 text-left transition-colors"
                >
                  <ExternalLink className="w-2.5 h-2.5 text-slate-500" />
                  <span className="truncate max-w-[200px]">{target}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
