'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BlessingText, CornerFiligree, GoldDivider } from './Ornaments';
import { WEDDING_DATA } from '@/lib/constants';

export const IslamicBlessing: React.FC = () => {
  const { islamicTexts } = WEDDING_DATA;

  return (
    <section
      id="blessings"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF8EB] via-[#641C32] to-[#FFF8EB] text-[#FFF8EB] relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl border-2 border-[#C5A15A] bg-[#641C32] p-2.5 shadow-maroon-luxury"
        >
          {/* Inner Inset Frame */}
          <div className="relative rounded-2xl border border-[#C5A15A]/60 bg-gradient-to-b from-[#641C32] via-[#4A1025] to-[#3F1024] p-6 sm:p-12 text-center overflow-hidden">
            <CornerFiligree position="top-left" size={38} className="top-1 left-1" />
            <CornerFiligree position="top-right" size={38} className="top-1 right-1" />
            <CornerFiligree position="bottom-left" size={38} className="bottom-1 left-1" />
            <CornerFiligree position="bottom-right" size={38} className="bottom-1 right-1" />

            <span className="font-playfair text-xs sm:text-sm tracking-[0.25em] uppercase text-[#E7D4A4] font-semibold block mb-2">
              The Sunnah Blessing
            </span>

            {/* Arabic Dua */}
            <div className="my-5">
              <BlessingText variant="gold" />
            </div>

            {/* Transliteration */}
            <p className="font-cormorant italic text-sm sm:text-base text-[#E7D4A4]/95 tracking-wide mb-2 max-w-xl mx-auto">
              &ldquo;{islamicTexts.blessingDuaTransliteration}&rdquo;
            </p>

            {/* Translation */}
            <blockquote className="font-playfair text-base sm:text-xl font-medium text-[#FFF8EB] tracking-wide max-w-xl mx-auto my-3 leading-relaxed">
              {islamicTexts.blessingDuaEnglish}
            </blockquote>

            <span className="font-lato text-xs text-[#C5A15A] tracking-widest uppercase font-semibold block mt-1">
              [{islamicTexts.blessingReference}]
            </span>

            <GoldDivider className="my-5 max-w-xs mx-auto" />

            {/* Hazrat Ali Quote */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="max-w-xl mx-auto space-y-2 pt-1"
            >
              <blockquote className="font-playfair text-base sm:text-xl font-medium text-[#FFF8EB] tracking-wide max-w-xl mx-auto my-3 leading-relaxed">
                Behtareen hamsafar woh hai jo tumhe Allah ke qareeb kar de.
              </blockquote>
              <span className="font-playfair text-[11px] sm:text-xs tracking-[0.2em] uppercase text-[#C5A15A] font-semibold block">
                — Hazrat Ali ibn Abi Talib (R.A.)
              </span>
            </motion.div>

            <GoldDivider className="my-5 max-w-xs mx-auto" />

            {/* Quranic Verse */}
            {/* <div className="space-y-1.5 max-w-xl mx-auto pt-1">
              <p className="font-amiri text-base sm:text-lg text-[#E7D4A4] leading-relaxed" dir="rtl">
                {islamicTexts.quranicVerseArabic}
              </p>
              <p className="font-cormorant italic text-xs sm:text-sm text-[#F5EBD8]/85 leading-relaxed">
                &ldquo;{islamicTexts.quranicVerseEnglish}&rdquo;
              </p>
              <span className="font-lato text-[11px] text-[#C5A15A] tracking-wider uppercase font-semibold block">
                — {islamicTexts.quranicReference}
              </span>
            </div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
