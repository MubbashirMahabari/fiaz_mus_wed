'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { FloatingDecorations } from '@/components/FloatingDecorations';
import { HeroSection } from '@/components/HeroSection';
import { OpeningEnvelopeModal } from '@/components/OpeningEnvelopeModal';
import { CoupleSection } from '@/components/CoupleSection';
import { IslamicBlessing } from '@/components/IslamicBlessing';
import { NikahCard } from '@/components/NikahCard';
import { ValimaCard } from '@/components/ValimaCard';
import { CountdownTimer } from '@/components/CountdownTimer';
import { VenueSection } from '@/components/VenueSection';
import { FamilySection } from '@/components/FamilySection';
import { ThankYouSection } from '@/components/ThankYouSection';
import { ShareInvitationModal } from '@/components/ShareInvitation';
import { MusicControl } from '@/components/MusicControl';
import { BackToTop } from '@/components/BackToTop';
import { GoldDivider } from '@/components/Ornaments';
import confetti from 'canvas-confetti';

export default function Home() {
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);

  const handleShowerBlessings = () => {
    confetti({
      particleCount: 60,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#641C32', '#C5A15A', '#FFF8EB', '#E7D4A4', '#3F1024'],
    });
  };

  const scrollToCeremonies = () => {
    const el = document.getElementById('ceremonies');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FFF8EB] text-[#3B2525] selection:bg-[#641C32] selection:text-[#E7D4A4] overflow-x-hidden">
      {/* Living Background Atmosphere Animation */}
      <FloatingDecorations />

      {/* Top Navbar */}
      <Navbar
        onOpenCard={() => setEnvelopeOpen(true)}
        onOpenShare={() => setShareModalOpen(true)}
        onShowerBlessings={handleShowerBlessings}
      />

      {/* Hero Section */}
      <HeroSection
        onOpenInvitation={() => setEnvelopeOpen(true)}
        onExploreClick={scrollToCeremonies}
      />

      {/* The Couple Section */}
      <CoupleSection />

      {/* Islamic Sunnah Blessing */}
      <IslamicBlessing />

      {/* The Sacred Ceremonies (AQAD & VALIMA) */}
      <section
        id="ceremonies"
        className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#FFF8EB] relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center space-y-2 mb-12 sm:mb-14"
          >
            <span className="font-playfair text-xs sm:text-sm tracking-[0.25em] uppercase text-[#8C6D2D] font-semibold">
              Sacred Unions & Celebrations
            </span>
            <h2 className="font-playfair text-2xl sm:text-4xl font-bold text-[#641C32] tracking-wider">
              The Wedding Ceremonies
            </h2>
            <p className="font-cormorant italic text-base sm:text-lg text-[#3B2525]/80 max-w-lg mx-auto">
              We warmly request the honor of your presence and duas at both auspicious gatherings.
            </p>
            <GoldDivider className="max-w-xs mx-auto my-3" />
          </motion.div>

          {/* Balanced Two-Column Cards Grid: Desktop side-by-side, Mobile stacked */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            <NikahCard />
            <ValimaCard />
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <CountdownTimer />

      {/* Venues & Maps */}
      <VenueSection />

      {/* Family Compliments */}
      <FamilySection />

      {/* Footer & Gratitude */}
      <ThankYouSection onOpenShare={() => setShareModalOpen(true)} />

      {/* Opening Royal Card Modal */}
      <OpeningEnvelopeModal
        isOpen={envelopeOpen}
        onClose={() => setEnvelopeOpen(false)}
        onProceedToCeremonies={scrollToCeremonies}
      />

      {/* Share Invitation Drawer/Modal */}
      <ShareInvitationModal
        isOpen={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
      />

      {/* Ambient Audio Controller */}
      <MusicControl />

      {/* Back to Top */}
      <BackToTop />
    </div>
  );
}
