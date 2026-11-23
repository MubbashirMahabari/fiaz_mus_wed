'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Navigation, CalendarPlus, Utensils } from 'lucide-react';
import { WEDDING_DATA } from '@/lib/constants';
import { CornerFiligree, GoldDivider } from './Ornaments';
import { downloadIcsFile, getGoogleCalendarUrl } from '@/lib/calendar';

export const ValimaCard: React.FC = () => {
  const event = WEDDING_DATA.events.valima;

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
      id="valima"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="relative rounded-3xl border-2 border-[#C5A15A] bg-[#FFFDF9] p-2.5 shadow-card-luxury flex flex-col justify-between"
    >
      <div className="relative rounded-2xl border border-[#C5A15A]/60 bg-[#FFFDF9] p-6 sm:p-8 text-[#3B2525] flex flex-col justify-between h-full">
        <CornerFiligree position="top-left" size={32} className="top-1 left-1 opacity-70" />
        <CornerFiligree position="top-right" size={32} className="top-1 right-1 opacity-70" />

        <div>
          {/* Header Badge */}
          <div className="flex items-center justify-between mb-2">
            <span className="font-amiri text-base text-[#8C6D2D]">
              {event.arabicTitle}
            </span>
            <span className="px-3 py-0.5 rounded-full bg-[#641C32]/10 border border-[#C5A15A] font-playfair text-[10px] tracking-widest uppercase text-[#641C32] font-bold">
              Grand Feast
            </span>
          </div>

          <h3 className="font-playfair text-2xl sm:text-3xl font-bold tracking-wider text-[#641C32] mb-1">
            {event.title}
          </h3>
          <p className="font-cormorant italic text-sm text-[#8C6D2D] mb-3">
            {event.subtitle}
          </p>

          <GoldDivider className="my-3" />

          {/* Details List */}
          <div className="space-y-4 my-6 text-left">
            {/* Date */}
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-[#FFF8EB] border border-[#C5A15A] text-[#641C32] shrink-0 mt-0.5">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <span className="font-lato text-[11px] text-[#8C6D2D] uppercase tracking-wider block font-semibold">
                  Reception Date
                </span>
                <p className="font-playfair text-base sm:text-lg font-bold text-[#641C32]">
                  {event.dateText}
                </p>
                <p className="font-cormorant italic text-xs text-[#3B2525]/75">
                  Valima Celebration Evening
                </p>
              </div>
            </div>

            {/* Time */}
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-[#FFF8EB] border border-[#C5A15A] text-[#641C32] shrink-0 mt-0.5">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="font-lato text-[11px] text-[#8C6D2D] uppercase tracking-wider block font-semibold">
                  Reception Timing
                </span>
                <p className="font-playfair text-base sm:text-lg font-bold text-[#641C32]">
                  {event.timeText}
                </p>
                {event.dinnerText && (
                  <p className="font-lato text-xs text-[#8C6D2D] font-bold flex items-center gap-1 mt-0.5">
                    <Utensils className="w-3 h-3 text-[#641C32]" />
                    <span>{event.dinnerText}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Venue */}
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-[#FFF8EB] border border-[#C5A15A] text-[#641C32] shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="font-lato text-[11px] text-[#8C6D2D] uppercase tracking-wider block font-semibold">
                  Venue & Address
                </span>
                <p className="font-playfair text-base sm:text-lg font-bold text-[#641C32]">
                  {event.venueName}
                </p>
                <p className="font-lato text-xs sm:text-sm text-[#3B2525]/85 leading-relaxed">
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
            className="flex-1 py-2.5 px-4 rounded-xl bg-[#641C32] hover:bg-[#3F1024] text-[#FFF8EB] font-playfair text-xs font-bold tracking-wider active:scale-95 transition-all shadow-md flex items-center justify-center gap-2 focus:outline-none"
          >
            <Navigation className="w-4 h-4 text-[#E7D4A4]" />
            <span>Get Directions</span>
          </button>

          <div className="flex gap-2">
            <button
              onClick={handleDownloadCalendar}
              className="py-2.5 px-3 rounded-xl border border-[#C5A15A] bg-[#FFF8EB] text-[#641C32] font-lato text-xs font-semibold tracking-wider hover:bg-[#F5EBD8] transition-colors flex items-center justify-center gap-1.5 focus:outline-none"
              title="Download iCalendar File (.ics)"
            >
              <CalendarPlus className="w-4 h-4" />
              <span>.ICS</span>
            </button>
            <button
              onClick={handleGoogleCalendar}
              className="py-2.5 px-3 rounded-xl border border-[#C5A15A] bg-[#FFF8EB] text-[#641C32] font-lato text-xs font-semibold tracking-wider hover:bg-[#F5EBD8] transition-colors flex items-center justify-center focus:outline-none"
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
