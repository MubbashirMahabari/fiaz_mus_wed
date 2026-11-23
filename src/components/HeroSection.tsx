'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  BismillahText,
  CornerFiligree,
  IslamicPatternBg,
  GoldDivider,
  RoyalMonogramSeal,
} from './Ornaments';
import { WEDDING_DATA } from '@/lib/constants';
import { Calendar, MapPin, Sparkles, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onOpenInvitation: () => void;
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenInvitation,
  onExploreClick,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24 pb-14 bg-[#FFF8EB] bg-cream-paper overflow-hidden"
    >
      {/* Subtle Islamic Geometric Pattern Backdrop */}
      <IslamicPatternBg opacity={0.035} />

      {/* Gentle Radial Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] bg-[#E7D4A4]/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Centered Luxury Wedding Invitation Card (Max Width 650px) */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative z-20 w-full max-w-[650px] mx-auto rounded-3xl border-2 border-[#C5A15A] bg-[#FFFDF9] shadow-card-luxury p-2 sm:p-3"
      >
        {/* Inner Inset Antique Gold Border */}
        <div className="relative rounded-2xl border border-[#C5A15A]/70 bg-gradient-to-b from-[#FFFDF9] via-[#FFF8EB] to-[#FFFDF9] p-6 sm:p-10 text-center overflow-hidden">
          {/* Corner Floral Filigrees */}
          <CornerFiligree position="top-left" size={38} className="top-1 left-1" />
          <CornerFiligree position="top-right" size={38} className="top-1 right-1" />
          <CornerFiligree position="bottom-left" size={38} className="bottom-1 left-1" />
          <CornerFiligree position="bottom-right" size={38} className="bottom-1 right-1" />

          {/* Top Royal Seal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center mb-3"
          >
            <RoyalMonogramSeal size={56} />
          </motion.div>

          {/* Bismillah Calligraphy */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mb-2"
          >
            <BismillahText variant="maroon" />
            <p className="font-cormorant italic text-xs text-[#8C6D2D] mt-0.5">
              {WEDDING_DATA.islamicTexts.bismillahEnglish}
            </p>
          </motion.div>

          {/* Invitation Lines */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-1 my-3"
          >
            <p className="font-playfair text-xs sm:text-sm tracking-[0.25em] uppercase text-[#641C32] font-semibold">
              With the blessings of Almighty Allah
            </p>
            <p className="font-cormorant text-sm sm:text-base text-[#3B2525]/85 italic">
              YOU ARE CORDIALLY INVITED TO
            </p>
            <p className="font-cinzel text-xs sm:text-sm tracking-[0.2em] uppercase text-[#8C6D2D] font-bold">
              THE WEDDING CEREMONY OF
            </p>
          </motion.div>

          {/* Decorative Couple Names Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="relative my-5 py-4 px-3 sm:px-6 rounded-2xl border border-[#C5A15A]/40 bg-[#FFFDF9]/80"
          >
            {/* Groom Name */}
            <h1 className="font-playfair text-2xl sm:text-4xl md:text-5xl font-bold tracking-wider text-[#641C32] drop-shadow-sm">
              MOHAMMAD FAIZAN
            </h1>

            {/* Cursive 'With' */}
            <div className="flex items-center justify-center gap-3 my-1 sm:my-1.5">
              <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#C5A15A]" />
              <span className="font-great-vibes text-2xl sm:text-3xl text-[#C5A15A] drop-shadow-sm">
                With
              </span>
              <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#C5A15A]" />
            </div>

            {/* Bride Name */}
            <h1 className="font-playfair text-2xl sm:text-4xl md:text-5xl font-bold tracking-wider text-[#641C32] drop-shadow-sm">
              MUSKAN
            </h1>
          </motion.div>

          {/* Date & Location Line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="my-4"
          >
            <div className="font-playfair text-sm sm:text-base font-bold text-[#641C32] tracking-widest uppercase">
              8th & 9th January 2027
            </div>
            <div className="flex items-center justify-center gap-2 text-xs font-lato text-[#8C6D2D] mt-1 font-semibold">
              <MapPin className="w-3.5 h-3.5 text-[#C5A15A]" />
              <span>Vijayapur, Karnataka, India</span>
            </div>
          </motion.div>

          <GoldDivider className="my-4" />

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2"
          >
            <button
              onClick={onOpenInvitation}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#641C32] hover:bg-[#3F1024] text-[#FFF8EB] font-playfair text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 focus:outline-none"
            >
              <Sparkles className="w-4 h-4 text-[#E7D4A4]" />
              <span>Open Royal Card</span>
            </button>

            <button
              onClick={onExploreClick}
              className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-[#C5A15A] bg-[#FFFDF9] hover:bg-[#FFF8EB] text-[#641C32] font-playfair text-xs sm:text-sm font-semibold tracking-wider transition-colors flex items-center justify-center gap-1.5 focus:outline-none"
            >
              <span>View Ceremony Details</span>
              <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
