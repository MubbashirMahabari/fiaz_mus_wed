'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

/**
 * Full-screen scroll-hint overlay shown on page load.
 * Disappears automatically when the user scrolls (or after 7 s).
 * Uses pointer-events: none so the page underneath remains interactive.
 */
export const ScrollHintOverlay: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const dismiss = () => setVisible(false);

    // Dismiss on any scroll
    window.addEventListener('scroll', dismiss, { once: true, passive: true });

    // Auto-dismiss after 7 seconds
    const timer = setTimeout(dismiss, 10000);

    return () => {
      window.removeEventListener('scroll', dismiss);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="scroll-hint-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          transition={{ duration: 0.5 }}
          /* pointer-events-none so users can still interact with the page beneath */
          className="fixed inset-0 z-[60] pointer-events-none flex flex-col"
        >
          {/* ── Strong dark overlay covering the full viewport ── */}
          <div className="absolute inset-0 bg-[#0D0408]/75" />
          {/* ── Extra deep gradient at the bottom to anchor the text ── */}
          <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#0D0408]/95 via-[#1A0810]/70 to-transparent" />

          {/* ── Scroll hint content anchored to the bottom ── */}
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center pb-10 sm:pb-14 gap-4">

            {/* Arabic tagline */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="font-amiri text-[#F5E6C0] text-base sm:text-lg tracking-wide drop-shadow-lg"
            >
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
            </motion.p>

            {/* Hazrat Ali Quote */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.8 }}
              className="text-center px-6 max-w-xs sm:max-w-sm space-y-1"
            >
              <p className="font-cormorant italic text-sm sm:text-[25px] leading-relaxed text-[#F5E6C0] drop-shadow-md">
                &ldquo;Behtareen hamsafar woh hai jo tumhe Allah ke qareeb kar de.&rdquo;
              </p>
              <p className="font-playfair text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#C5A15A]">
                — Hazrat Ali ibn Abi Talib (R.A.)
              </p>
            </motion.div>

            {/* Couple names */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.7 }}
              className="text-center space-y-1"
            >
              <p className="font-playfair text-xl sm:text-2xl font-bold text-[#FFF8EB] tracking-widest drop-shadow-lg">
                Faizan <span className="text-[#C5A15A] mx-1">✦</span> Muskan
              </p>
              <p className="font-cormorant italic text-sm sm:text-base text-[#E7D4A4] tracking-wider">
                Nikah · 8 Jan 2027 &nbsp;|&nbsp; Valima · 9 Jan 2027
              </p>
            </motion.div>

            {/* Thin gold divider */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="w-24 h-px bg-gradient-to-r from-transparent via-[#C5A15A] to-transparent"
            />

            {/* Scroll label */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="font-playfair text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#E7D4A4]"
            >
              Scroll to explore
            </motion.p>

            {/* Animated bouncing chevron */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
                className="flex flex-col items-center gap-1"
              >
                <ChevronDown className="w-5 h-5 text-[#C5A15A] drop-shadow-md" />
                <ChevronDown className="w-4 h-4 text-[#C5A15A]/50 -mt-3" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
