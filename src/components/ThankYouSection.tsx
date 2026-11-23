'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { WEDDING_DATA } from '@/lib/constants';
import { CornerFiligree, GoldDivider, RoyalMonogramSeal } from './Ornaments';
import { CelebrationConfetti } from './CelebrationConfetti';
import { Heart, Share2 } from 'lucide-react';

interface ThankYouSectionProps {
  onOpenShare: () => void;
}

export const ThankYouSection: React.FC<ThankYouSectionProps> = ({ onOpenShare }) => {
  return (
    <footer className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#641C32] to-[#3F1024] text-[#FFF8EB] text-center overflow-hidden border-t-2 border-[#C5A15A]">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          {/* Royal Seal */}
          <div className="flex justify-center mb-2">
            <RoyalMonogramSeal size={68} />
          </div>

          {/* JazakAllahu Khairan Arabic */}
          <div className="my-3">
            <span className="font-amiri text-3xl sm:text-4xl text-[#E7D4A4] font-bold block" dir="rtl">
              جزاك الله خيرا
            </span>
            <span className="font-cormorant italic text-xs sm:text-sm text-[#F5EBD8]/80 block mt-0.5">
              May Allah reward you with abundant goodness
            </span>
          </div>

          <GoldDivider className="max-w-xs mx-auto my-3" />

          {/* Closing Message */}
          <p className="font-great-vibes text-2xl sm:text-3xl text-[#E7D4A4]">
            With Love & Duas
          </p>

          <h2 className="font-playfair text-2xl sm:text-4xl font-bold tracking-wider text-[#FFF8EB]">
            MOHAMMAD FAIZAN & MUSKAN
          </h2>

          <p className="font-cormorant italic text-base sm:text-lg text-[#F5EBD8]/90 max-w-md mx-auto leading-relaxed">
            &ldquo;Your presence and blessings mean everything to us.&rdquo;
          </p>

          <p className="font-playfair text-xs sm:text-sm text-[#E7D4A4] font-semibold tracking-wider uppercase">
            Khadim & Mujawar Families
          </p>

          {/* Interactive Buttons */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <CelebrationConfetti buttonText="Shower Duas & Flowers" />

            <button
              onClick={onOpenShare}
              className="px-5 py-2.5 rounded-full border border-[#C5A15A] bg-[#3F1024] hover:bg-[#641C32] text-[#E7D4A4] font-playfair text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-2 focus:outline-none"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share Invitation</span>
            </button>
          </div>

          {/* Subtle Bottom Credit */}
          <div className="pt-10 mt-8 border-t border-[#C5A15A]/20 text-[11px] font-lato text-[#C5A15A]/80 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p>
              Mohammad Faizan & Muskan Wedding • 8th & 9th January 2027 • Vijayapur
            </p>
            <p className="flex items-center gap-1">
              Honoring with <Heart className="w-3 h-3 fill-[#C5A15A]" /> Nikah & Valima
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
