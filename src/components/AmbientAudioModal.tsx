import React, { useState, useEffect } from 'react';
import {
  soundscapeEngine,
  SOUNDSCAPE_PRESETS,
  SoundscapeType
} from '../utils/audioSynth';
import {
  Volume2,
  VolumeX,
  Play,
  Square,
  Sparkles,
  Radio,
  Sliders
} from 'lucide-react';

interface AmbientAudioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AmbientAudioModal: React.FC<AmbientAudioModalProps> = ({
  isOpen,
  onClose
}) => {
  const [activeSound, setActiveSound] = useState<SoundscapeType | null>(
    soundscapeEngine.getActiveSoundscape()
  );
  const [volume, setVolume] = useState<number>(soundscapeEngine.getVolume());

  useEffect(() => {
    const checkActive = () => {
      setActiveSound(soundscapeEngine.getActiveSoundscape());
    };
    const timer = setInterval(checkActive, 300);
    return () => clearInterval(timer);
  }, []);

  if (!isOpen) return null;

  const handleToggleSound = (id: SoundscapeType) => {
    if (activeSound === id) {
      soundscapeEngine.stopAll();
      setActiveSound(null);
    } else {
      soundscapeEngine.play(id);
      setActiveSound(id);
    }
  };

  const handleVolumeChange = (newVal: number) => {
    setVolume(newVal);
    soundscapeEngine.setVolume(newVal);
  };

  const handleStopAll = () => {
    soundscapeEngine.stopAll();
    setActiveSound(null);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 border border-slate-700 rounded-xl shadow-2xl w-full max-w-xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 py-4 border-b border-slate-800 bg-slate-950 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Radio className="w-4 h-4 animate-pulse" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-100 flex items-center gap-2">
                Atmospheric Soundscapes & Ambience
              </h2>
              <p className="text-xs text-slate-400">
                Procedural Web Audio synthesizer • Zero downloads or streaming lag
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-200 p-1.5 rounded-md hover:bg-slate-800 text-sm font-semibold"
          >
            ✕
          </button>
        </div>

        {/* Master Controls */}
        <div className="p-4 bg-slate-950/60 border-b border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => handleVolumeChange(volume === 0 ? 0.5 : 0)}
              className="text-slate-400 hover:text-amber-400 p-1"
              title="Mute / Unmute"
            >
              {volume === 0 ? (
                <VolumeX className="w-5 h-5 text-red-400" />
              ) : (
                <Volume2 className="w-5 h-5 text-amber-400" />
              )}
            </button>
            <div className="flex items-center gap-2 flex-1 sm:w-48">
              <Sliders className="w-3.5 h-3.5 text-slate-500" />
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
              />
              <span className="text-xs text-slate-400 font-mono w-9 text-right">
                {Math.round(volume * 100)}%
              </span>
            </div>
          </div>

          {activeSound && (
            <button
              onClick={handleStopAll}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-red-950/60 hover:bg-red-900/60 text-red-300 border border-red-800/60 text-xs font-semibold transition-colors"
            >
              <Square className="w-3.5 h-3.5 fill-current" />
              <span>Silence Ambience</span>
            </button>
          )}
        </div>

        {/* Preset Cards Grid */}
        <div className="p-5 space-y-3 overflow-y-auto">
          {SOUNDSCAPE_PRESETS.map((preset) => {
            const isPlaying = activeSound === preset.id;
            return (
              <div
                key={preset.id}
                onClick={() => handleToggleSound(preset.id)}
                className={`p-3.5 rounded-lg border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                  isPlaying
                    ? 'bg-amber-950/40 border-amber-500/60 shadow-lg shadow-amber-950/40 ring-1 ring-amber-500/40'
                    : 'bg-slate-800/50 border-slate-700/60 hover:bg-slate-800 hover:border-slate-600'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-11 h-11 rounded-lg flex items-center justify-center text-2xl border transition-colors ${
                      isPlaying
                        ? 'bg-amber-500/25 border-amber-500/60 scale-105'
                        : 'bg-slate-900 border-slate-700'
                    }`}
                  >
                    {preset.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4
                        className={`text-sm font-bold ${
                          isPlaying ? 'text-amber-300' : 'text-slate-200'
                        }`}
                      >
                        {preset.name}
                      </h4>
                      {isPlaying && (
                        <span className="flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-500/30 text-amber-300 border border-amber-500/50 uppercase tracking-wider">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                          Playing
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400">{preset.subtitle}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      {preset.description}
                    </p>
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleToggleSound(preset.id);
                  }}
                  className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                    isPlaying
                      ? 'bg-amber-500 text-slate-950 border-amber-400 hover:bg-amber-400 shadow-md'
                      : 'bg-slate-900 text-slate-300 border-slate-700 hover:text-amber-300 hover:border-amber-500/50'
                  }`}
                  title={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? (
                    <Square className="w-4 h-4 fill-current" />
                  ) : (
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* Footer tip */}
        <div className="px-5 py-3 border-t border-slate-800 bg-slate-950/80 text-[11px] text-slate-400 flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Soundscapes run continuously in background tabs while you browse notes.
          </span>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
