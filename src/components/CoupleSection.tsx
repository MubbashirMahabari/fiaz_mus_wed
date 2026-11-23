'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GoldDivider, CornerFiligree, DecorativePhotoPlaceholder } from './Ornaments';
import { WEDDING_DATA } from '@/lib/constants';

export const CoupleSection: React.FC = () => {
  const { groom, bride } = WEDDING_DATA.couple;

  return (
    <section
      id="couple"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#FFF8EB] relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-2 mb-12 sm:mb-16"
        >
          <span className="font-playfair text-xs sm:text-sm tracking-[0.25em] uppercase text-[#8C6D2D] font-semibold">
            In The Name Of Allah, The Most Merciful
          </span>
          <h2 className="font-playfair text-2xl sm:text-4xl font-bold text-[#641C32] tracking-wider">
            The Happy Couple
          </h2>
          <p className="font-cormorant italic text-base sm:text-lg text-[#3B2525]/80 max-w-lg mx-auto">
            Two souls united with the blessings of Almighty Allah, embarking on a sacred journey of faith, love, and companionship.
          </p>
          <GoldDivider className="max-w-xs mx-auto my-3" />
        </motion.div>

        {/* Two-Column Cards Layout with Center '&' Symbol */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_auto_1fr] gap-8 md:gap-10 items-center justify-center">
          {/* Groom Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-sm mx-auto"
          >
            <div className="relative rounded-2xl border-2 border-[#C5A15A] bg-[#FFFDF9] p-2.5 shadow-card-luxury">
              <div className="relative rounded-xl border border-[#C5A15A]/60 bg-[#FFFDF9] p-5 sm:p-6 text-center">
                <CornerFiligree position="top-left" size={28} className="top-1 left-1 opacity-70" />
                <CornerFiligree position="top-right" size={28} className="top-1 right-1 opacity-70" />

                {/* Decorative Arched Placeholder */}
                <div className="mb-4">
                  <DecorativePhotoPlaceholder
                    initials="MF"
                    arabicName={groom.arabicName}
                    name={groom.name}
                    role="Groom"
                  />
                </div>

                {/* Details */}
                <h3 className="font-playfair text-xl sm:text-2xl font-bold text-[#641C32] tracking-wide">
                  {groom.name}
                </h3>
                <div className="inline-block px-3 py-1 mt-1.5 rounded-full bg-[#641C32]/10 border border-[#C5A15A]/40 text-[#641C32] text-xs font-lato font-bold tracking-wider uppercase">
                  {groom.qualification}
                </div>
                <p className="font-cormorant italic text-sm text-[#3B2525]/75 mt-2.5">
                  {groom.description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Centered Ampersand Emblem */}
          <div className="hidden lg:flex flex-col items-center justify-center my-auto px-2">
            <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-[#C5A15A]" />
            <div className="w-12 h-12 rounded-full border-2 border-[#C5A15A] bg-[#641C32] flex items-center justify-center shadow-md my-2">
              <span className="font-great-vibes text-2xl text-[#E7D4A4] pt-0.5">
                &
              </span>
            </div>
            <div className="w-[1px] h-12 bg-gradient-to-t from-transparent to-[#C5A15A]" />
          </div>

          {/* Bride Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-sm mx-auto"
          >
            <div className="relative rounded-2xl border-2 border-[#C5A15A] bg-[#FFFDF9] p-2.5 shadow-card-luxury">
              <div className="relative rounded-xl border border-[#C5A15A]/60 bg-[#FFFDF9] p-5 sm:p-6 text-center">
                <CornerFiligree position="top-left" size={28} className="top-1 left-1 opacity-70" />
                <CornerFiligree position="top-right" size={28} className="top-1 right-1 opacity-70" />

                {/* Decorative Arched Placeholder */}
                <div className="mb-4">
                  <DecorativePhotoPlaceholder
                    initials="M"
                    arabicName={bride.arabicName}
                    name={bride.name}
                    role="Bride"
                  />
                </div>

                {/* Details */}
                <h3 className="font-playfair text-xl sm:text-2xl font-bold text-[#641C32] tracking-wide">
                  {bride.name}
                </h3>
                <div className="inline-block px-3 py-1 mt-1.5 rounded-full bg-[#641C32]/10 border border-[#C5A15A]/40 text-[#641C32] text-xs font-lato font-bold tracking-wider uppercase">
                  {bride.qualification}
                </div>
                <p className="font-cormorant italic text-sm text-[#3B2525]/75 mt-2.5">
                  {bride.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
