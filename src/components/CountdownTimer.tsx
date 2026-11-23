'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GoldDivider, CornerFiligree } from './Ornaments';
import { WEDDING_DATA } from '@/lib/constants';
import { Sparkles } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  isPassed: boolean;
}

export const CountdownTimer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'nikah' | 'valima'>('nikah');
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    isPassed: false,
  });

  const calculateRemaining = (targetIso: string): TimeLeft => {
    const target = new Date(targetIso).getTime();
    const now = new Date().getTime();
    const diff = target - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, isPassed: true };
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    return { days, hours, minutes, isPassed: false };
  };

  useEffect(() => {
    const update = () => {
      const targetIso =
        activeTab === 'nikah'
          ? WEDDING_DATA.events.nikah.startDateIso
          : WEDDING_DATA.events.valima.startDateIso;
      setTimeLeft(calculateRemaining(targetIso));
    };

    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, [activeTab]);

  const counters = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
  ];

  const currentEvent =
    activeTab === 'nikah' ? WEDDING_DATA.events.nikah : WEDDING_DATA.events.valima;

  return (
    <section
      id="countdown"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#FFF8EB] relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-2 mb-8"
        >
          <span className="font-playfair text-xs sm:text-sm tracking-[0.25em] uppercase text-[#8C6D2D] font-semibold">
            Counting The Blessed Moments
          </span>
          <h2 className="font-playfair text-2xl sm:text-4xl font-bold text-[#641C32] tracking-wider">
            Wedding Countdown
          </h2>
          <p className="font-cormorant italic text-base sm:text-lg text-[#3B2525]/80">
            Awaiting the auspicious celebration in Vijayapur, Karnataka (Asia/Kolkata IST)
          </p>
          <GoldDivider className="max-w-xs mx-auto my-3" />
        </motion.div>

        {/* Tab Toggle for Nikah and Valima */}
        <div className="inline-flex p-1 rounded-full bg-[#FFFDF9] border border-[#C5A15A] shadow-sm mb-10">
          <button
            onClick={() => setActiveTab('nikah')}
            className={`px-5 py-2 rounded-full font-playfair text-xs sm:text-sm font-semibold tracking-wider transition-all focus:outline-none ${
              activeTab === 'nikah'
                ? 'bg-[#641C32] text-[#FFF8EB] shadow-sm'
                : 'text-[#641C32] hover:text-[#3F1024]'
            }`}
          >
            AQAD CEREMONY (8 Jan)
          </button>
          <button
            onClick={() => setActiveTab('valima')}
            className={`px-5 py-2 rounded-full font-playfair text-xs sm:text-sm font-semibold tracking-wider transition-all focus:outline-none ${
              activeTab === 'valima'
                ? 'bg-[#641C32] text-[#FFF8EB] shadow-sm'
                : 'text-[#641C32] hover:text-[#3F1024]'
            }`}
          >
            VALIMA RECEPTION (9 Jan)
          </button>
        </div>

        {/* 3 Aligned Counters: DAYS | HOURS | MINUTES */}
        {!timeLeft.isPassed ? (
          <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-xl mx-auto">
            {counters.map((counter, idx) => (
              <motion.div
                key={counter.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative rounded-2xl border-2 border-[#C5A15A] bg-[#641C32] p-2 sm:p-2.5 shadow-maroon-luxury"
              >
                <div className="relative rounded-xl border border-[#C5A15A]/50 bg-gradient-to-b from-[#641C32] to-[#3F1024] p-4 sm:p-6 flex flex-col items-center justify-center overflow-hidden">
                  <CornerFiligree position="top-left" size={20} className="top-1 left-1 opacity-60" />
                  <CornerFiligree position="top-right" size={20} className="top-1 right-1 opacity-60" />

                  <span className="font-playfair text-3xl sm:text-5xl font-bold text-[#FFF8EB] drop-shadow-sm">
                    {String(counter.value).padStart(2, '0')}
                  </span>
                  <span className="font-lato text-[11px] sm:text-xs uppercase tracking-widest text-[#E7D4A4] mt-1.5 sm:mt-2 font-bold">
                    {counter.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Event Date Passed / Ongoing Message */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 rounded-2xl border-2 border-[#C5A15A] bg-[#641C32] text-[#FFF8EB] max-w-lg mx-auto shadow-maroon-luxury"
          >
            <Sparkles className="w-8 h-8 text-[#E7D4A4] mx-auto mb-2" />
            <h3 className="font-playfair text-xl sm:text-2xl font-bold text-[#E7D4A4]">
              Alhamdulillah! The Celebration Is Taking Place
            </h3>
            <p className="font-cormorant italic text-base text-[#FFF8EB] mt-2">
              May Allah bless Mohammad Faizan & Muskan with eternal joy, peace, and prosperity.
            </p>
          </motion.div>
        )}

        {/* Selected Event Context */}
        <div className="mt-8 text-xs sm:text-sm font-lato text-[#8C6D2D] font-semibold">
          <span>{currentEvent.title}</span> • <span>{currentEvent.dateText}</span> • <span>{currentEvent.timeText}</span>
        </div>
      </div>
    </section>
  );
};
