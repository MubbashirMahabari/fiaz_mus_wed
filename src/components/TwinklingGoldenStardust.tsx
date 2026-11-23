'use client';

import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  vx: number;
  vy: number;
  color: string;
  glowColor: string;
  isCrossStar: boolean; // 4-point diamond sparkle star (✦)
  rotation: number;
  rotationSpeed: number;
}

interface CursorParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  decay: number;
  color: string;
}

/**
 * Twinkling Golden Stardust Component
 * - 85+ vibrant celestial 4-point sparkle stars (✦) and golden dust motes
 * - High contrast rich antique gold (#B8860B, #C5A15A, #D4AF37) clearly visible on cream (#FFF8EB)
 * - Organic sinusoidal twinkling & slow celestial upward drift
 * - Interactive sparkle trail on mouse move / touch
 * - Fixed z-10 overlay with pointer-events-none for 100% click-through reliability
 */
export const TwinklingGoldenStardust: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // High-contrast, rich royal gold palette designed to stand out crisply on cream backgrounds
    const goldPalette = [
      { core: '#B8860B', glow: 'rgba(184, 134, 11, 0.45)', center: '#FFFDF5' }, // Dark Goldenrod
      { core: '#C5A15A', glow: 'rgba(197, 161, 90, 0.50)', center: '#FFFFFF' }, // Antique Gold
      { core: '#D4AF37', glow: 'rgba(212, 175, 55, 0.45)', center: '#FFF8EB' }, // Metallic Gold
      { core: '#996515', glow: 'rgba(153, 101, 21, 0.40)', center: '#F5EBD8' }, // Deep Amber Gold
      { core: '#E5A93B', glow: 'rgba(229, 169, 59, 0.45)', center: '#FFFFFF' }, // Warm Radiant Gold
    ];

    // Number of stars scaled to viewport
    const starCount = Math.min(Math.floor((width * height) / 12000), 95);
    const stars: Star[] = [];

    for (let i = 0; i < starCount; i++) {
      const palette = goldPalette[Math.floor(Math.random() * goldPalette.length)];
      const isCross = Math.random() < 0.55; // 55% are 4-point cross diamond stars
      // Distinctly visible sizes
      const size = isCross ? Math.random() * 3.5 + 3.5 : Math.random() * 2.5 + 1.8;

      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size,
        baseAlpha: Math.random() * 0.35 + 0.35,
        alpha: Math.random() * 0.6 + 0.4,
        twinkleSpeed: Math.random() * 0.045 + 0.02,
        twinklePhase: Math.random() * Math.PI * 2,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -(Math.random() * 0.4 + 0.15), // Gentle upward drift
        color: palette.core,
        glowColor: palette.glow,
        isCrossStar: isCross,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.01,
      });
    }

    // Interactive cursor particles
    const cursorParticles: CursorParticle[] = [];

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      if (prefersReducedMotion) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      if (Math.random() < 0.5) {
        const palette = goldPalette[Math.floor(Math.random() * goldPalette.length)];
        cursorParticles.push({
          x: clientX + (Math.random() - 0.5) * 20,
          y: clientY + (Math.random() - 0.5) * 20,
          vx: (Math.random() - 0.5) * 1.0,
          vy: (Math.random() - 0.5) * 1.0 - 0.4,
          size: Math.random() * 3 + 2.5,
          alpha: 0.9,
          decay: Math.random() * 0.03 + 0.015,
          color: palette.core,
        });
      }
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Draw 4-point Diamond Sparkle Star (✦) with radiant gold arms & glowing nucleus
    const drawCrossStar = (
      cx: number,
      cy: number,
      size: number,
      color: string,
      glow: string,
      alpha: number,
      rotation: number
    ) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rotation);
      ctx.globalAlpha = Math.max(0.1, Math.min(1, alpha));

      // 1. Soft gold radial glow halo
      const glowGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 3);
      glowGrad.addColorStop(0, glow);
      glowGrad.addColorStop(1, 'rgba(197, 161, 90, 0)');
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(0, 0, size * 3, 0, Math.PI * 2);
      ctx.fill();

      // 2. 4-Point Diamond Sparkle Star (✦)
      ctx.fillStyle = color;
      ctx.beginPath();
      const armLength = size * 2.6;
      const armWidth = size * 0.4;

      // Vertical ray
      ctx.moveTo(0, -armLength);
      ctx.quadraticCurveTo(armWidth, 0, 0, armLength);
      ctx.quadraticCurveTo(-armWidth, 0, 0, -armLength);

      // Horizontal ray
      ctx.moveTo(-armLength, 0);
      ctx.quadraticCurveTo(0, armWidth, armLength, 0);
      ctx.quadraticCurveTo(0, -armWidth, -armLength, 0);
      ctx.fill();

      // 3. Diagonal micro-sparks for 8-point celestial sparkle effect
      ctx.beginPath();
      const diagLength = armLength * 0.45;
      const diagWidth = armWidth * 0.3;
      ctx.moveTo(diagLength * 0.7, -diagLength * 0.7);
      ctx.lineTo(-diagLength * 0.7, diagLength * 0.7);
      ctx.moveTo(-diagLength * 0.7, -diagLength * 0.7);
      ctx.lineTo(diagLength * 0.7, diagLength * 0.7);
      ctx.strokeStyle = color;
      ctx.lineWidth = diagWidth;
      ctx.stroke();

      // 4. Sparkling White-Gold Nucleus (Center)
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.5, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFDF5';
      ctx.fill();

      ctx.restore();
    };

    // Draw circular glowing dust mote
    const drawDustMote = (
      cx: number,
      cy: number,
      radius: number,
      color: string,
      glow: string,
      alpha: number
    ) => {
      ctx.save();
      ctx.globalAlpha = Math.max(0.1, Math.min(1, alpha));

      // Glow halo
      const glowGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius * 3.2);
      glowGrad.addColorStop(0, glow);
      glowGrad.addColorStop(1, 'rgba(197, 161, 90, 0)');
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 3.2, 0, Math.PI * 2);
      ctx.fill();

      // Core dot
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();

      // Shiny center
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 0.4, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    let tick = 0;

    // Animation Loop
    const render = () => {
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);
      tick++;

      // 1. Render and update celestial golden stardust
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        // Twinkle calculation: sinusoidal wave creates organic pulsing
        s.twinklePhase += s.twinkleSpeed;
        const twinkleFactor = (Math.sin(s.twinklePhase) + 1) / 2; // 0 to 1
        s.alpha = s.baseAlpha + twinkleFactor * (1 - s.baseAlpha);

        // Position drift
        if (!prefersReducedMotion) {
          s.x += s.vx + Math.sin(tick * 0.012 + s.twinklePhase) * 0.2;
          s.y += s.vy;
          s.rotation += s.rotationSpeed;

          // Wrap-around boundaries
          if (s.y < -30) {
            s.y = height + 25;
            s.x = Math.random() * width;
          }
          if (s.x < -30) s.x = width + 25;
          if (s.x > width + 30) s.x = -25;
        }

        // Draw star
        if (s.isCrossStar) {
          drawCrossStar(
            s.x,
            s.y,
            s.size,
            s.color,
            s.glowColor,
            s.alpha,
            s.rotation
          );
        } else {
          drawDustMote(s.x, s.y, s.size, s.color, s.glowColor, s.alpha);
        }
      }

      // 2. Render and update interactive cursor stardust trail
      for (let j = cursorParticles.length - 1; j >= 0; j--) {
        const cp = cursorParticles[j];
        cp.x += cp.vx;
        cp.y += cp.vy;
        cp.alpha -= cp.decay;

        if (cp.alpha <= 0) {
          cursorParticles.splice(j, 1);
        } else {
          drawCrossStar(
            cp.x,
            cp.y,
            cp.size,
            cp.color,
            'rgba(197, 161, 90, 0.6)',
            cp.alpha,
            tick * 0.05
          );
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 w-full h-full"
      aria-hidden="true"
    />
  );
};
