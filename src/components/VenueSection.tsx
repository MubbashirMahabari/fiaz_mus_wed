'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { WEDDING_DATA } from '@/lib/constants';
import { CornerFiligree, GoldDivider } from './Ornaments';

export const VenueSection: React.FC = () => {
  const { nikah, valima } = WEDDING_DATA.events;

  return (
    <section
      id="venues"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#FFF8EB] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-2 mb-12"
        >
          <span className="font-playfair text-xs sm:text-sm tracking-[0.25em] uppercase text-[#8C6D2D] font-semibold">
            Wedding Destinations
          </span>
          <h2 className="font-playfair text-2xl sm:text-4xl font-bold text-[#641C32] tracking-wider">
            Venues & Locations
          </h2>
          <p className="font-cormorant italic text-base sm:text-lg text-[#3B2525]/80 max-w-lg mx-auto">
            Easily locate the ceremony halls in the historic city of Vijayapur, Karnataka.
          </p>
          <GoldDivider className="max-w-xs mx-auto my-3" />
        </motion.div>

        {/* Two Balanced Venue Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Venue 1: J.B. Garden Hall (Nikah) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl border-2 border-[#C5A15A] bg-[#FFFDF9] p-2.5 shadow-card-luxury flex flex-col justify-between"
          >
            <div className="relative rounded-2xl border border-[#C5A15A]/60 bg-[#FFFDF9] p-6 sm:p-7 flex flex-col justify-between h-full">
              <CornerFiligree position="top-left" size={30} className="top-1 left-1 opacity-70" />
              <CornerFiligree position="top-right" size={30} className="top-1 right-1 opacity-70" />

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-3 py-0.5 rounded-full bg-[#641C32] text-[#FFF8EB] font-playfair text-[10px] font-bold tracking-wider uppercase">
                    Nikah Venue
                  </span>
                  <span className="font-lato text-xs text-[#8C6D2D] font-semibold">
                    Friday, 8th Jan 2027
                  </span>
                </div>

                <h3 className="font-playfair text-xl sm:text-2xl font-bold text-[#641C32] mb-1">
                  {nikah.venueName}
                </h3>
                <p className="font-lato text-xs sm:text-sm text-[#3B2525]/85 flex items-start gap-1.5 mb-4">
                  <MapPin className="w-4 h-4 text-[#C5A15A] shrink-0 mt-0.5" />
                  <span>{nikah.venueAddress}</span>
                </p>

                {/* Map Embed Frame */}
                <div className="w-full h-52 sm:h-60 rounded-xl overflow-hidden border border-[#C5A15A]/50 bg-[#F5EBD8]">
                  <iframe
                    title="J.B. Garden Hall Map"
                    src={nikah.embedMapsUrl}
                    className="w-full h-full border-0 filter saturate-90"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-[#C5A15A]/30 flex gap-2.5">
                <a
                  href={nikah.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-[#641C32] hover:bg-[#3F1024] text-[#FFF8EB] font-playfair text-xs font-bold tracking-wider active:scale-95 transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4 text-[#E7D4A4]" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={nikah.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl border border-[#C5A15A] bg-[#FFF8EB] text-[#641C32] hover:bg-[#F5EBD8] transition-colors flex items-center justify-center"
                  title="Open in Google Maps"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Venue 2: Alamgiri Function Hall (Valima) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative rounded-3xl border-2 border-[#C5A15A] bg-[#FFFDF9] p-2.5 shadow-card-luxury flex flex-col justify-between"
          >
            <div className="relative rounded-2xl border border-[#C5A15A]/60 bg-[#FFFDF9] p-6 sm:p-7 flex flex-col justify-between h-full">
              <CornerFiligree position="top-left" size={30} className="top-1 left-1 opacity-70" />
              <CornerFiligree position="top-right" size={30} className="top-1 right-1 opacity-70" />

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-3 py-0.5 rounded-full bg-[#8C6D2D] text-[#FFF8EB] font-playfair text-[10px] font-bold tracking-wider uppercase">
                    Valima Venue
                  </span>
                  <span className="font-lato text-xs text-[#8C6D2D] font-semibold">
                    Saturday, 9th Jan 2027
                  </span>
                </div>

                <h3 className="font-playfair text-xl sm:text-2xl font-bold text-[#641C32] mb-1">
                  {valima.venueName}
                </h3>
                <p className="font-lato text-xs sm:text-sm text-[#3B2525]/85 flex items-start gap-1.5 mb-4">
                  <MapPin className="w-4 h-4 text-[#C5A15A] shrink-0 mt-0.5" />
                  <span>{valima.venueAddress}</span>
                </p>

                {/* Map Embed Frame */}
                <div className="w-full h-52 sm:h-60 rounded-xl overflow-hidden border border-[#C5A15A]/50 bg-[#F5EBD8]">
                  <iframe
                    title="Alamgiri Function Hall Map"
                    src={valima.embedMapsUrl}
                    className="w-full h-full border-0 filter saturate-90"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-[#C5A15A]/30 flex gap-2.5">
                <a
                  href={valima.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-[#641C32] hover:bg-[#3F1024] text-[#FFF8EB] font-playfair text-xs font-bold tracking-wider active:scale-95 transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4 text-[#E7D4A4]" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={valima.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl border border-[#C5A15A] bg-[#FFF8EB] text-[#641C32] hover:bg-[#F5EBD8] transition-colors flex items-center justify-center"
                  title="Open in Google Maps"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
