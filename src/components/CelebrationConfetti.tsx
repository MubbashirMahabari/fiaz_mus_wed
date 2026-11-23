'use client';

import React from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles } from 'lucide-react';

interface CelebrationConfettiProps {
  buttonText?: string;
}

export const CelebrationConfetti: React.FC<CelebrationConfettiProps> = ({
  buttonText = "Shower Duas & Blessings",
}) => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 60,
      origin: { x: 0.15, y: 0.75 },
      colors: ['#641C32', '#C5A15A', '#FFF8EB', '#E7D4A4', '#3F1024'],
    });

    confetti({
      particleCount: 50,
      angle: 120,
      spread: 60,
      origin: { x: 0.85, y: 0.75 },
      colors: ['#641C32', '#C5A15A', '#FFF8EB', '#E7D4A4', '#3F1024'],
    });

    setTimeout(() => {
      confetti({
        particleCount: 70,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#FFD700', '#C5A15A', '#FFF8EB', '#E7D4A4', '#641C32'],
      });
    }, 200);
  };

  return (
    <button
      onClick={triggerConfetti}
      className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#641C32] hover:bg-[#3F1024] text-[#FFF8EB] border-2 border-[#C5A15A] shadow-md hover:scale-105 active:scale-95 transition-all focus:outline-none"
    >
      <Heart className="w-4 h-4 text-[#E7D4A4] fill-[#E7D4A4] group-hover:scale-110 transition-transform" />
      <span className="font-playfair text-xs font-semibold tracking-wider">
        {buttonText}
      </span>
      <Sparkles className="w-3.5 h-3.5 text-[#E7D4A4]" />
    </button>
  );
};
