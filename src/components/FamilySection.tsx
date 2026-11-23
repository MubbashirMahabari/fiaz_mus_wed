'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { WEDDING_DATA } from '@/lib/constants';
import { CornerFiligree, GoldDivider, RoyalMonogramSeal } from './Ornaments';
import { Heart } from 'lucide-react';

export const FamilySection: React.FC = () => {
  const { family } = WEDDING_DATA;

  return (
    <section
      id="family"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#FFF8EB] relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl border-2 border-[#C5A15A] bg-[#FFFDF9] p-2.5 shadow-card-luxury"
        >
          <div className="relative rounded-2xl border border-[#C5A15A]/60 bg-[#FFFDF9] p-6 sm:p-12 text-center">
            <CornerFiligree position="top-left" size={36} className="top-1 left-1 opacity-70" />
            <CornerFiligree position="top-right" size={36} className="top-1 right-1 opacity-70" />
            <CornerFiligree position="bottom-left" size={36} className="bottom-1 left-1 opacity-70" />
            <CornerFiligree position="bottom-right" size={36} className="bottom-1 right-1 opacity-70" />

            <div className="flex justify-center mb-3">
              <RoyalMonogramSeal size={60} />
            </div>

            <span className="font-playfair text-xs sm:text-sm tracking-[0.25em] uppercase text-[#8C6D2D] font-semibold block mb-1">
              Family Honors
            </span>

            <h2 className="font-playfair text-xl sm:text-3xl font-bold text-[#641C32] tracking-wider mb-4">
              {family.header}
            </h2>

            <GoldDivider className="max-w-xs mx-auto my-3" />

            {/* Elders and Family Heads */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto my-6 text-center">
              <div className="p-3.5 rounded-xl bg-[#FFF8EB] border border-[#C5A15A]/50 shadow-sm">
                <span className="font-lato text-[10px] uppercase tracking-wider text-[#8C6D2D] block font-bold">
                  Elder & Patron
                </span>
                <h3 className="font-playfair text-base sm:text-lg font-bold text-[#641C32] mt-0.5">
                  MR. BASHEER AHMED
                </h3>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FFF8EB] border border-[#C5A15A]/50 shadow-sm">
                <span className="font-lato text-[10px] uppercase tracking-wider text-[#8C6D2D] block font-bold">
                  Family Head
                </span>
                <h3 className="font-playfair text-base sm:text-lg font-bold text-[#641C32] mt-0.5">
                  MOHAMMAD IBRAHIM URF HAJI SAHEB KHADIM
                </h3>
              </div>
            </div>

            {/* Families Line */}
            <div className="my-4">
              <span className="font-playfair text-base sm:text-lg text-[#641C32] font-semibold tracking-wide">
                {family.familyNames}
              </span>
            </div>

            <GoldDivider className="max-w-xs mx-auto my-4" />

            {/* Warm Invitation Message */}
            <blockquote className="font-cormorant italic text-base sm:text-lg text-[#3B2525]/90 max-w-xl mx-auto leading-relaxed my-3">
              &ldquo;{family.message}&rdquo;
            </blockquote>

            <div className="mt-5 flex items-center justify-center gap-1.5 text-[#8C6D2D] text-xs font-lato tracking-widest uppercase font-bold">
              <Heart className="w-3.5 h-3.5 fill-[#C5A15A] text-[#C5A15A]" />
              <span>Khadim & Mujawar Families</span>
              <Heart className="w-3.5 h-3.5 fill-[#C5A15A] text-[#C5A15A]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
