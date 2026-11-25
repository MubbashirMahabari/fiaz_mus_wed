'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, ChevronUp, Check, Disc3 } from 'lucide-react';
import { ambientSound, ISLAMIC_TRACKS, AudioState } from '@/lib/audio';

export const MusicControl: React.FC = () => {
  const [audioState, setAudioState] = useState<AudioState>({
    isPlaying: false,
    isMuted: false,
    currentTrack: ISLAMIC_TRACKS[0],
    volume: 0.5,
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ambientSound.init();
    const unsubscribe = ambientSound.subscribe((state) => {
      setAudioState(state);
    });

    // Close menu when clicking outside
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      unsubscribe();
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const togglePlay = () => {
    ambientSound.togglePlay();
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    ambientSound.toggleMute();
  };

  const handleSelectTrack = (trackId: string) => {
    ambientSound.selectTrack(trackId);
    if (!audioState.isPlaying) {
      ambientSound.play(trackId);
    }
  };

  const { isPlaying, isMuted, currentTrack } = audioState;

  return (
    <div ref={menuRef} className="fixed bottom-5 right-4 sm:right-6 z-40 flex flex-col items-end">
      {/* Track Selector Popup Menu */}
      {isMenuOpen && (
        <div className="mb-2 w-[calc(100vw-2rem)] max-w-xs sm:w-80 rounded-2xl border-2 border-[#C5A15A] bg-[#FFF8EB] p-3 shadow-2xl backdrop-blur-md animate-fadeIn transition-all">
          {/* Header */}
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#C5A15A]/30">
            <div className="flex items-center gap-1.5">
              <Disc3 className="w-4 h-4 text-[#C5A15A] animate-spin" style={{ animationDuration: '6s' }} />
              <span className="font-playfair text-xs font-bold text-[#641C32] tracking-wider uppercase">
                Trending Islamic Nasheeds
              </span>
            </div>
            <span className="text-[10px] font-sans text-[#8C6D2D] font-medium bg-[#E7D4A4]/40 px-2 py-0.5 rounded-full">
              Wedding Playlist
            </span>
          </div>

          {/* Track List */}
          <div className="space-y-1.5">
            {ISLAMIC_TRACKS.map((track) => {
              const isSelected = track.id === currentTrack.id;
              return (
                <button
                  key={track.id}
                  onClick={() => handleSelectTrack(track.id)}
                  className={`w-full text-left p-2.5 rounded-xl transition-all flex items-center justify-between group focus:outline-none ${
                    isSelected
                      ? 'bg-[#641C32] text-[#FFF8EB] border border-[#C5A15A]'
                      : 'hover:bg-[#F5EBD8] text-[#3B2525] border border-transparent'
                  }`}
                >
                  <div className="flex-1 min-w-0 pr-2">
                    <div className="flex items-center gap-1.5">
                      <p
                        className={`text-xs font-playfair font-bold truncate ${
                          isSelected ? 'text-[#FFF8EB]' : 'text-[#641C32]'
                        }`}
                      >
                        {track.title}
                      </p>
                      {track.arabicTitle && (
                        <span
                          className={`text-[10px] font-amiri px-1.5 py-0.2 rounded ${
                            isSelected
                              ? 'bg-[#E7D4A4]/20 text-[#E7D4A4]'
                              : 'bg-[#C5A15A]/15 text-[#8C6D2D]'
                          }`}
                        >
                          {track.arabicTitle}
                        </span>
                      )}
                    </div>
                    <p
                      className={`text-[10px] truncate mt-0.5 ${
                        isSelected ? 'text-[#E7D4A4]' : 'text-[#3B2525]/70'
                      }`}
                    >
                      {track.artist} • {track.description}
                    </p>
                  </div>

                  <div className="flex-shrink-0 flex items-center gap-1">
                    {isSelected && isPlaying && !isMuted ? (
                      <span className="flex items-end gap-[2px] h-3">
                        <span className="w-[2px] bg-[#E7D4A4] h-2 animate-pulse" />
                        <span className="w-[2px] bg-[#E7D4A4] h-3 animate-bounce" />
                        <span className="w-[2px] bg-[#E7D4A4] h-1.5 animate-pulse" />
                      </span>
                    ) : isSelected ? (
                      <Check className="w-3.5 h-3.5 text-[#E7D4A4]" />
                    ) : (
                      <Play className="w-3 h-3 text-[#C5A15A] opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-2.5 pt-2 border-t border-[#C5A15A]/20 flex items-center justify-between text-[10px] text-[#3B2525]/70">
            <span>✨ Pure Islamic wedding atmosphere</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-[#641C32] font-semibold hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Main Floating Audio Pill */}
      <div className="flex items-center gap-1 sm:gap-1.5 bg-[#FFFDF9]/95 backdrop-blur-md p-1 rounded-full border-2 border-[#C5A15A] shadow-xl hover:shadow-2xl transition-all">
        {/* Play / Pause Pill */}
        <button
          onClick={togglePlay}
          className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full transition-all active:scale-95 focus:outline-none flex-shrink-0 ${
            isPlaying
              ? 'bg-[#641C32] text-[#FFF8EB]'
              : 'bg-[#FFF8EB] text-[#641C32] hover:bg-[#F5EBD8]'
          }`}
          aria-label={isPlaying ? 'Pause Islamic Nasheed' : 'Play Islamic Wedding Nasheed'}
          title={isPlaying ? 'Pause nasheed' : 'Play trending Islamic wedding nasheed'}
        >
          {isPlaying ? (
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <span className="flex items-end gap-[2px] h-3.5 flex-shrink-0">
                <span className="w-[2px] bg-[#E7D4A4] h-2.5 animate-pulse" />
                <span className="w-[2px] bg-[#E7D4A4] h-3.5 animate-bounce" />
                <span className="w-[2px] bg-[#E7D4A4] h-2 animate-pulse" />
              </span>
              {/* Title hidden on ALL mobile screens — only shown on sm (640px+) and above */}
              <div className="hidden sm:flex flex-col text-left min-w-0">
                <span className="font-playfair text-[11px] tracking-wider text-[#E7D4A4] font-semibold leading-tight w-[140px] truncate">
                  {currentTrack.title}
                </span>
                <span className="text-[9px] text-[#FFF8EB]/75 tracking-tight -mt-0.5 truncate w-[140px]">
                  {currentTrack.artist}
                </span>
              </div>
              <Pause className="w-3.5 h-3.5 text-[#E7D4A4] sm:ml-1 flex-shrink-0" />
            </div>
          ) : (
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <div className="w-5 h-5 rounded-full bg-[#641C32] flex items-center justify-center text-[#FFF8EB] flex-shrink-0">
                <Play className="w-2.5 h-2.5 ml-0.5" />
              </div>
              {/* Label hidden on ALL mobile screens */}
              <div className="hidden sm:flex flex-col text-left">
                <span className="font-playfair text-[11px] tracking-wider text-[#641C32] font-bold leading-tight">
                  Play Nasheed
                </span>
                <span className="text-[9px] text-[#8C6D2D] tracking-tight -mt-0.5">
                  Trending Islamic Audio
                </span>
              </div>
            </div>
          )}
        </button>

        {/* Mute Button (when playing) */}
        {isPlaying && (
          <button
            onClick={toggleMute}
            className="p-1.5 rounded-full text-[#641C32] hover:bg-[#F5EBD8] transition-colors focus:outline-none flex-shrink-0"
            title={isMuted ? 'Unmute' : 'Mute'}
            aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
          >
            {isMuted ? (
              <VolumeX className="w-3.5 h-3.5 text-red-700 flex-shrink-0" />
            ) : (
              <Volume2 className="w-3.5 h-3.5 text-[#C5A15A] flex-shrink-0" />
            )}
          </button>
        )}

        {/* Playlist Switcher Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`p-1.5 sm:px-2.5 sm:py-1.5 rounded-full text-[10px] font-playfair font-semibold transition-colors flex items-center gap-1 focus:outline-none flex-shrink-0 ${
            isMenuOpen
              ? 'bg-[#C5A15A] text-[#FFF8EB]'
              : 'text-[#641C32] hover:bg-[#F5EBD8]'
          }`}
          title="Select Trending Islamic Nasheed"
          aria-label="Select trending Islamic nasheed playlist"
        >
          <span className="hidden sm:inline">Nasheed</span>
          <ChevronUp
            className={`w-3.5 h-3.5 flex-shrink-0 transition-transform duration-200 ${
              isMenuOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
      </div>
    </div>
  );
};
