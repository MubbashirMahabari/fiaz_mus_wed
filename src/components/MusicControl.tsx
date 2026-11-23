'use client';

import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { ambientSound } from '@/lib/audio';

export const MusicControl: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    ambientSound.init();
  }, []);

  const togglePlay = () => {
    if (!isPlaying) {
      ambientSound.play();
      setIsPlaying(true);
      setIsMuted(false);
    } else {
      ambientSound.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const muted = ambientSound.toggleMute();
    setIsMuted(muted);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-1.5">
      <button
        onClick={togglePlay}
        className={`flex items-center gap-2 px-3 py-2 rounded-full border shadow-md backdrop-blur-md transition-all active:scale-95 focus:outline-none ${
          isPlaying
            ? 'bg-[#641C32] border-[#C5A15A] text-[#FFF8EB]'
            : 'bg-[#FFFDF9] border-[#C5A15A] text-[#641C32] hover:bg-[#FFF8EB]'
        }`}
        aria-label={isPlaying ? 'Pause background ambience' : 'Play wedding ambience'}
        title={isPlaying ? 'Pause ambience' : 'Play serene ambient sound'}
      >
        {isPlaying ? (
          <div className="flex items-center gap-1.5">
            <span className="flex items-end gap-[2px] h-3.5">
              <span className="w-[2.5px] bg-[#E7D4A4] h-2.5 animate-pulse" />
              <span className="w-[2.5px] bg-[#E7D4A4] h-3.5 animate-bounce" />
              <span className="w-[2.5px] bg-[#E7D4A4] h-2 animate-pulse" />
            </span>
            <span className="font-playfair text-[11px] tracking-wider text-[#E7D4A4] hidden sm:inline font-semibold">
              Music On
            </span>
          </div>
        ) : (
          <div className="flex items-center gap-1.5">
            <Music className="w-3.5 h-3.5 text-[#C5A15A]" />
            <span className="font-playfair text-[11px] tracking-wider text-[#641C32] hidden sm:inline font-semibold">
              Play Music
            </span>
          </div>
        )}
      </button>

      {isPlaying && (
        <button
          onClick={toggleMute}
          className="p-2 rounded-full bg-[#FFFDF9] border border-[#C5A15A] text-[#641C32] hover:bg-[#F5EBD8] transition-colors focus:outline-none shadow-sm"
          title={isMuted ? 'Unmute' : 'Mute'}
          aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
        </button>
      )}
    </div>
  );
};
