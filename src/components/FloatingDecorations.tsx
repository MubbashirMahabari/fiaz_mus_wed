'use client';

import React, { useEffect, useState } from 'react';
import { TwinklingGoldenStardust } from './TwinklingGoldenStardust';

interface Petal {
  id: number;
  x: number;
  size: number;
  speed: number;
  delay: number;
  rotateSpeed: number;
  color: 'maroon' | 'gold';
}

/**
 * Luxury Wedding Background Atmosphere
 * - Twinkling Golden Stardust (Canvas Engine with 4-point sparkle stars)
 * - CSS Sparkling Gold Cross Stars in outer margins
 * - Drifting Velvet Rose & Golden Petals
 * - Ambient Living Warm Light Orbs
 */
export const FloatingDecorations: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    setMounted(true);

    const floralPetals: Petal[] = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      x: Math.random() * 94 + 3,
      size: Math.random() * 8 + 12,
      speed: Math.random() * 12 + 14,
      delay: Math.random() * 8,
      rotateSpeed: Math.random() * 6 + 6,
      color: i % 2 === 0 ? 'maroon' : 'gold',
    }));
    setPetals(floralPetals);
  }, []);

  if (!mounted) return null;

  // Prominent fixed twinkling stars located in the background margins around the card
  const ambientStars = [
    { top: '14%', left: '8%', size: 20, delay: '0s', dur: '3.2s' },
    { top: '22%', right: '9%', size: 24, delay: '1.2s', dur: '3.8s' },
    { top: '38%', left: '5%', size: 18, delay: '2.1s', dur: '2.9s' },
    { top: '48%', right: '7%', size: 22, delay: '0.8s', dur: '3.5s' },
    { top: '65%', left: '10%', size: 26, delay: '1.7s', dur: '4.1s' },
    { top: '78%', right: '11%', size: 19, delay: '2.5s', dur: '3.0s' },
    { top: '88%', left: '6%', size: 22, delay: '0.5s', dur: '3.6s' },
    { top: '92%', right: '8%', size: 24, delay: '1.9s', dur: '3.4s' },
  ];

  return (
    <div
      className="fixed inset-0 pointer-events-none z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* 1. Dedicated Canvas Twinkling Golden Stardust Engine */}
      <TwinklingGoldenStardust />

      {/* 2. Ambient Living Warm Glow Orbs (Subtle breathing light) */}
      <div className="absolute top-[12%] left-[6%] w-[380px] sm:w-[580px] h-[380px] sm:h-[580px] rounded-full bg-gradient-to-br from-[#E7D4A4]/15 via-[#C5A15A]/10 to-transparent blur-[90px] animate-ambientGlow1" />
      <div className="absolute top-[58%] right-[6%] w-[320px] sm:w-[520px] h-[320px] sm:h-[520px] rounded-full bg-gradient-to-br from-[#641C32]/10 via-[#C5A15A]/12 to-transparent blur-[100px] animate-ambientGlow2" />

      {/* 3. Prominent Twinkling Golden Sparkle Stars in Background Margins */}
      {ambientStars.map((star, idx) => (
        <div
          key={`ambient-star-${idx}`}
          className="absolute hidden sm:block animate-twinkleStar"
          style={{
            top: star.top,
            left: star.left,
            right: star.right,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: star.delay,
            animationDuration: star.dur,
          }}
        >
          <svg viewBox="0 0 40 40" fill="none" className="w-full h-full drop-shadow-[0_0_6px_rgba(184,134,11,0.5)]">
            {/* 4-point Diamond Star */}
            <path
              d="M20 2 C20 12, 28 20, 38 20 C28 20, 20 28, 20 38 C20 28, 12 20, 2 20 C12 20, 20 12, 20 2 Z"
              fill="url(#starGoldGrad)"
            />
            {/* 4 diagonal sparks */}
            <line x1="12" y1="12" x2="28" y2="28" stroke="#B8860B" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="28" y1="12" x2="12" y2="28" stroke="#B8860B" strokeWidth="1.2" strokeLinecap="round" />
            {/* Center Nucleus */}
            <circle cx="20" cy="20" r="3" fill="#FFFDF5" />
            <defs>
              <linearGradient id="starGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFDF5" />
                <stop offset="35%" stopColor="#E5A93B" />
                <stop offset="70%" stopColor="#C5A15A" />
                <stop offset="100%" stopColor="#996515" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ))}

      {/* 4. Drifting Velvet Rose & Golden Petals */}
      {petals.map((petal) => (
        <div
          key={`petal-${petal.id}`}
          className="absolute animate-driftPetal"
          style={{
            left: `${petal.x}%`,
            top: '-40px',
            animationDuration: `${petal.speed}s`,
            animationDelay: `${petal.delay}s`,
          }}
        >
          <svg
            width={petal.size}
            height={petal.size * 1.3}
            viewBox="0 0 30 40"
            fill="none"
            className="animate-spinPetal"
            style={{
              animationDuration: `${petal.rotateSpeed}s`,
              opacity: petal.color === 'maroon' ? 0.35 : 0.45,
            }}
          >
            {petal.color === 'maroon' ? (
              <path
                d="M15 0 C25 8, 30 25, 15 40 C0 25, 5 8, 15 0 Z"
                fill="url(#rosePetalGrad)"
              />
            ) : (
              <path
                d="M15 0 C28 10, 26 28, 15 38 C4 28, 2 10, 15 0 Z"
                fill="url(#goldPetalGrad)"
              />
            )}
            <defs>
              <linearGradient id="rosePetalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8A2542" />
                <stop offset="60%" stopColor="#641C32" />
                <stop offset="100%" stopColor="#3F1024" />
              </linearGradient>
              <linearGradient id="goldPetalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF8EB" />
                <stop offset="40%" stopColor="#E7D4A4" />
                <stop offset="100%" stopColor="#C5A15A" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ))}

      <style jsx>{`
        @keyframes ambientGlow1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(40px, 30px) scale(1.08);
          }
        }
        @keyframes ambientGlow2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-30px, -40px) scale(1.1);
          }
        }
        @keyframes twinkleStar {
          0%, 100% {
            transform: scale(0.7) rotate(0deg);
            opacity: 0.35;
          }
          50% {
            transform: scale(1.2) rotate(15deg);
            opacity: 0.95;
          }
        }
        @keyframes driftPetal {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          50% {
            transform: translateY(55vh) translateX(40px);
            opacity: 0.75;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(115vh) translateX(-30px);
            opacity: 0;
          }
        }
        @keyframes spinPetal {
          0% {
            transform: rotate(0deg) rotateY(0deg);
          }
          50% {
            transform: rotate(180deg) rotateY(180deg);
          }
          100% {
            transform: rotate(360deg) rotateY(360deg);
          }
        }
        .animate-ambientGlow1 {
          animation: ambientGlow1 16s ease-in-out infinite;
        }
        .animate-ambientGlow2 {
          animation: ambientGlow2 18s ease-in-out infinite;
        }
        .animate-twinkleStar {
          animation-name: twinkleStar;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        .animate-driftPetal {
          animation-name: driftPetal;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        .animate-spinPetal {
          animation-name: spinPetal;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
};
