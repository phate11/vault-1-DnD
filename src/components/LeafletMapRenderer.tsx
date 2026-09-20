import React, { useState } from 'react';
import { MapPin, Navigation, Compass, Code2, Eye, ExternalLink, Castle, Home, Skull, ShieldAlert } from 'lucide-react';

interface LeafletMarker {
  type: string;
  lat: number;
  long: number;
  label: string;
  link?: string;
}

interface LeafletMapRendererProps {
  rawContent: string;
  onNavigateToNote: (title: string) => void;
}

function parseLeaflet(raw: string): {
  id: string;
  image?: string;
  lat: number;
  long: number;
  unit: string;
  scale: number;
  markers: LeafletMarker[];
} {
  const lines = raw.split('\n');
  let id = 'map';
  let image: string | undefined;
  let lat = 50;
  let long = 50;
  let unit = 'miles';
  let scale = 1;
  const markers: LeafletMarker[] = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    if (trimmed.startsWith('id:')) id = trimmed.replace('id:', '').trim();
    else if (trimmed.startsWith('image:')) image = trimmed.replace('image:', '').trim();
    else if (trimmed.startsWith('lat:')) lat = parseFloat(trimmed.replace('lat:', '').trim()) || 50;
    else if (trimmed.startsWith('long:')) long = parseFloat(trimmed.replace('long:', '').trim()) || 50;
    else if (trimmed.startsWith('unit:')) unit = trimmed.replace('unit:', '').trim();
    else if (trimmed.startsWith('scale:')) scale = parseFloat(trimmed.replace('scale:', '').trim()) || 1;
    else if (trimmed.startsWith('marker:')) {
      const parts = trimmed.replace('marker:', '').split(',').map(s => s.trim());
      if (parts.length >= 4) {
        const type = parts[0];
        const mLat = parseFloat(parts[1]) || 0;
        const mLong = parseFloat(parts[2]) || 0;
        const label = parts[3];
        let link = parts[4];
        if (link) {
          link = link.replace(/[\[\]]/g, '').trim();
        }
        markers.push({ type, lat: mLat, long: mLong, label, link });
      }
    }
  }

  return { id, image, lat, long, unit, scale, markers };
}

export const LeafletMapRenderer: React.FC<LeafletMapRendererProps> = ({
  rawContent,
  onNavigateToNote
}) => {
  const [showRaw, setShowRaw] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState<LeafletMarker | null>(null);

  const data = parseLeaflet(rawContent);

  const getMarkerIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'castle':
        return <Castle className="w-4 h-4 text-rose-400" />;
      case 'town':
      case 'village':
        return <Home className="w-4 h-4 text-emerald-400" />;
      case 'dungeon':
      case 'boss':
        return <Skull className="w-4 h-4 text-purple-400" />;
      case 'danger':
        return <ShieldAlert className="w-4 h-4 text-amber-400" />;
      default:
        return <MapPin className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <div className="my-6 rounded-lg border border-emerald-500/30 bg-slate-950/90 shadow-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-3.5 py-2 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-950 border-b border-emerald-500/20 text-xs">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono font-semibold text-[11px] border border-emerald-500/30">
            <Compass className="w-3.5 h-3.5 text-emerald-400" />
            <span>Obsidian Leaflet</span>
          </div>
          <span className="text-slate-300 font-medium capitalize">
            {data.id.replace(/-/g, ' ')}
          </span>
          <span className="text-slate-500 text-[11px]">
            ({data.markers.length} points of interest)
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] text-slate-500 font-mono">
            Scale: 1 {data.unit} = {data.scale}px
          </span>
          <button
            onClick={() => setShowRaw(!showRaw)}
            className="flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] border border-slate-700 transition-colors"
          >
            {showRaw ? <Eye className="w-3 h-3 text-emerald-400" /> : <Code2 className="w-3 h-3 text-emerald-400" />}
            <span>{showRaw ? 'Map View' : 'Leaflet Code'}</span>
          </button>
        </div>
      </div>

      {showRaw ? (
        <pre className="p-4 bg-slate-950 text-emerald-300 font-mono text-xs overflow-x-auto whitespace-pre">
          {rawContent}
        </pre>
      ) : (
        <div className="p-4 space-y-4">
          {/* Tactical Map Grid Canvas / Visualization */}
          <div className="relative w-full h-64 rounded-md border border-slate-800 bg-slate-900/80 overflow-hidden flex flex-col justify-between p-3 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]">
            {/* Top Info overlay */}
            <div className="flex items-center justify-between z-10">
              <div className="px-2 py-1 bg-slate-950/80 rounded border border-slate-800 text-[10px] text-slate-400 font-mono flex items-center gap-1.5 backdrop-blur-sm">
                <Navigation className="w-3 h-3 text-emerald-400" />
                <span>Center: {data.lat}°N, {data.long}°W</span>
              </div>
              <div className="px-2 py-1 bg-slate-950/80 rounded border border-slate-800 text-[10px] text-emerald-400 font-mono backdrop-blur-sm">
                Interactive Coordinates
              </div>
            </div>

            {/* Tactical Grid Pin Points */}
            <div className="relative w-full h-full my-2">
              {data.markers.map((m, idx) => {
                // Approximate pin position on tactical grid
                const left = `${Math.min(92, Math.max(8, m.long))}%`;
                const top = `${Math.min(85, Math.max(15, 100 - m.lat))}%`;
                const isSelected = selectedMarker?.label === m.label;

                return (
                  <div
                    key={idx}
                    style={{ left, top }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-20"
                    onClick={() => setSelectedMarker(m)}
                  >
                    <div
                      className={`p-1 rounded-full border shadow-lg transition-transform transform group-hover:scale-125 ${
                        isSelected
                          ? 'bg-amber-500 text-slate-950 border-white ring-2 ring-amber-400'
                          : 'bg-slate-950/90 border-emerald-500/60 text-emerald-400'
                      }`}
                    >
                      {getMarkerIcon(m.type)}
                    </div>
                    {/* Tooltip */}
                    <div className="hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2 py-0.5 rounded bg-slate-950 text-white text-[10px] whitespace-nowrap border border-slate-700 shadow-xl pointer-events-none z-30 font-sans">
                      {m.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom active pin preview */}
            <div className="z-10">
              {selectedMarker ? (
                <div className="p-2 bg-slate-950/90 rounded border border-amber-500/40 flex items-center justify-between text-xs backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    {getMarkerIcon(selectedMarker.type)}
                    <div>
                      <div className="font-semibold text-amber-300">{selectedMarker.label}</div>
                      <div className="text-[10px] text-slate-400 font-mono">
                        Coordinates: [{selectedMarker.lat}, {selectedMarker.long}]
                      </div>
                    </div>
                  </div>
                  {selectedMarker.link && (
                    <button
                      onClick={() => onNavigateToNote(selectedMarker.link!)}
                      className="flex items-center gap-1 px-2 py-1 rounded bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs border border-amber-500/40 transition-colors"
                    >
                      <span>Open Note</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  )}
                </div>
              ) : (
                <div className="text-center text-[11px] text-slate-500 italic">
                  Click any marker on the tactical map or choose from the list below.
                </div>
              )}
            </div>
          </div>

          {/* Markers List */}
          <div>
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              Regional Points of Interest & Linked Locations
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {data.markers.map((m, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedMarker(m)}
                  className={`p-2 rounded border text-xs flex items-center justify-between cursor-pointer transition-colors ${
                    selectedMarker?.label === m.label
                      ? 'bg-emerald-950/30 border-emerald-500/60'
                      : 'bg-slate-900/60 hover:bg-slate-900 border-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {getMarkerIcon(m.type)}
                    <div>
                      <div className="text-slate-200 font-medium">{m.label}</div>
                      <div className="text-[10px] text-slate-500 font-mono">
                        {m.type} • [{m.lat}, {m.long}]
                      </div>
                    </div>
                  </div>
                  {m.link && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onNavigateToNote(m.link!);
                      }}
                      className="p-1 rounded hover:bg-slate-800 text-emerald-400 hover:text-emerald-300 transition-colors"
                      title={`Jump to note: ${m.link}`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
