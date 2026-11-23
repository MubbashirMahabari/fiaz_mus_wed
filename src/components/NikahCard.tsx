'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Navigation, CalendarPlus } from 'lucide-react';
import { WEDDING_DATA } from '@/lib/constants';
import { CornerFiligree, GoldDivider } from './Ornaments';
import { downloadIcsFile, getGoogleCalendarUrl } from '@/lib/calendar';

export const NikahCard: React.FC = () => {
  const event = WEDDING_DATA.events.nikah;

  const handleDownloadCalendar = () => {
    downloadIcsFile(event);
  };

  const handleGoogleCalendar = () => {
    window.open(getGoogleCalendarUrl(event), '_blank', 'noopener,noreferrer');
  };

  const handleGetDirections = () => {
    window.open(event.mapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      id="nikah"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative rounded-3xl border-2 border-[#C5A15A] bg-[#641C32] p-2.5 shadow-maroon-luxury flex flex-col justify-between"
    >
      <div className="relative rounded-2xl border border-[#C5A15A]/60 bg-gradient-to-b from-[#641C32] to-[#3F1024] p-6 sm:p-8 text-[#FFF8EB] flex flex-col justify-between h-full">
        <CornerFiligree position="top-left" size={32} className="top-1 left-1" />
        <CornerFiligree position="top-right" size={32} className="top-1 right-1" />

        <div>
          {/* Header Badge */}
          <div className="flex items-center justify-between mb-2">
            <span className="font-amiri text-base text-[#E7D4A4]">
              {event.arabicTitle}
            </span>
            <span className="px-3 py-0.5 rounded-full bg-[#3F1024] border border-[#C5A15A]/60 font-playfair text-[10px] tracking-widest uppercase text-[#E7D4A4] font-bold">
              Solemnization
            </span>
          </div>

          <h3 className="font-playfair text-2xl sm:text-3xl font-bold tracking-wider text-[#FFF8EB] mb-1">
            {event.title}
          </h3>
          <p className="font-cormorant italic text-sm text-[#E7D4A4]/90 mb-3">
            {event.subtitle}
          </p>

          <GoldDivider className="my-3" />

          {/* Details List */}
          <div className="space-y-4 my-6 text-left">
            {/* Date */}
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-[#3F1024] border border-[#C5A15A]/50 text-[#E7D4A4] shrink-0 mt-0.5">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <span className="font-lato text-[11px] text-[#C5A15A] uppercase tracking-wider block font-semibold">
                  Date & Hijri
                </span>
                <p className="font-playfair text-base sm:text-lg font-bold text-[#FFF8EB]">
                  {event.dateText}
                </p>
                {event.hijriDate && (
                  <p className="font-cormorant italic text-xs text-[#E7D4A4]">
                    {event.hijriDate}
                  </p>
                )}
              </div>
            </div>

            {/* Time */}
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-[#3F1024] border border-[#C5A15A]/50 text-[#E7D4A4] shrink-0 mt-0.5">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="font-lato text-[11px] text-[#C5A15A] uppercase tracking-wider block font-semibold">
                  Auspicious Time
                </span>
                <p className="font-playfair text-base sm:text-lg font-bold text-[#FFF8EB]">
                  {event.timeText}
                </p>
                <p className="font-cormorant italic text-xs text-[#F5EBD8]/75">
                  Insha'Allah at the auspicious hour
                </p>
              </div>
            </div>

            {/* Venue */}
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-[#3F1024] border border-[#C5A15A]/50 text-[#E7D4A4] shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="font-lato text-[11px] text-[#C5A15A] uppercase tracking-wider block font-semibold">
                  Venue & Address
                </span>
                <p className="font-playfair text-base sm:text-lg font-bold text-[#FFF8EB]">
                  {event.venueName}
                </p>
                <p className="font-lato text-xs sm:text-sm text-[#F5EBD8]/85 leading-relaxed">
                  {event.venueAddress}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="pt-4 border-t border-[#C5A15A]/30 flex flex-col sm:flex-row gap-2.5">
          <button
            onClick={handleGetDirections}
            className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#C5A15A] via-[#E7D4A4] to-[#C5A15A] text-[#3F1024] font-playfair text-xs font-bold tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-md flex items-center justify-center gap-2 focus:outline-none"
          >
            <Navigation className="w-4 h-4" />
            <span>Get Directions</span>
          </button>

          <div className="flex gap-2">
            <button
              onClick={handleDownloadCalendar}
              className="py-2.5 px-3 rounded-xl border border-[#C5A15A] bg-[#3F1024] text-[#E7D4A4] font-lato text-xs font-semibold tracking-wider hover:bg-[#641C32] transition-colors flex items-center justify-center gap-1.5 focus:outline-none"
              title="Download iCalendar File (.ics)"
            >
              <CalendarPlus className="w-4 h-4" />
              <span>.ICS</span>
            </button>
            <button
              onClick={handleGoogleCalendar}
              className="py-2.5 px-3 rounded-xl border border-[#C5A15A] bg-[#3F1024] text-[#E7D4A4] font-lato text-xs font-semibold tracking-wider hover:bg-[#641C32] transition-colors flex items-center justify-center focus:outline-none"
              title="Add to Google Calendar"
            >
              Google
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
