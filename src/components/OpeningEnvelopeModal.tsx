'use client';

import React, { useState } from 'react';
import { X, Sparkles, ChevronDown } from 'lucide-react';
import { RoyalMonogramSeal, BismillahText, CornerFiligree, GoldDivider } from './Ornaments';
import { WEDDING_DATA } from '@/lib/constants';
import confetti from 'canvas-confetti';

interface OpeningEnvelopeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToCeremonies: () => void;
}

export const OpeningEnvelopeModal: React.FC<OpeningEnvelopeModalProps> = ({
  isOpen,
  onClose,
  onProceedToCeremonies,
}) => {
  const [isOpened, setIsOpened] = useState(false);

  if (!isOpen) return null;

  const handleOpenSeal = () => {
    setIsOpened(true);
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.5 },
      colors: ['#C5A15A', '#E7D4A4', '#FFF8EB', '#641C32'],
    });
  };

  const handleScrollAndClose = () => {
    onClose();
    onProceedToCeremonies();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/70 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      {/* Background Backdrop Click */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-xl my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 sm:-right-2 text-[#FFF8EB] hover:text-[#C5A15A] p-1.5 transition-colors focus:outline-none"
          aria-label="Close royal card modal"
        >
          <X className="w-6 h-6" />
        </button>

        {!isOpened ? (
          /* Sealed Royal Card View */
          <div className="relative rounded-3xl border-2 border-[#C5A15A] bg-[#641C32] p-2.5 shadow-2xl">
            <div className="relative rounded-2xl border border-[#C5A15A]/60 bg-gradient-to-b from-[#641C32] to-[#3F1024] p-8 sm:p-12 text-[#FFF8EB] text-center flex flex-col items-center justify-between min-h-[380px] sm:min-h-[440px]">
              <CornerFiligree position="top-left" size={38} className="top-1 left-1" />
              <CornerFiligree position="top-right" size={38} className="top-1 right-1" />
              <CornerFiligree position="bottom-left" size={38} className="bottom-1 left-1" />
              <CornerFiligree position="bottom-right" size={38} className="bottom-1 right-1" />

              <div>
                <span className="font-playfair text-xs tracking-[0.25em] uppercase text-[#E7D4A4] font-semibold block">
                  Official Royal Invitation
                </span>
                <p className="font-cormorant italic text-xs text-[#FFF8EB]/75 mt-0.5">
                  Solemnization of Nikah & Grand Valima Reception
                </p>
              </div>

              {/* Center Interactive Wax Seal */}
              <div
                onClick={handleOpenSeal}
                className="cursor-pointer group relative my-6 flex flex-col items-center justify-center transition-transform hover:scale-105 active:scale-95"
              >
                <div className="absolute -inset-3 rounded-full bg-[#C5A15A]/25 blur-md group-hover:bg-[#C5A15A]/40 transition-all animate-pulse" />
                <RoyalMonogramSeal size={100} />
                <span className="mt-3 px-4 py-1 rounded-full bg-[#C5A15A]/20 border border-[#C5A15A] text-[#FFF8EB] font-playfair text-[11px] tracking-widest uppercase flex items-center gap-1.5 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-[#E7D4A4]" />
                  <span>Click To Open Card</span>
                </span>
              </div>

              <div>
                <h3 className="font-playfair text-base sm:text-lg font-bold text-[#FFF8EB] tracking-wider">
                  MOHAMMAD FAIZAN & MUSKAN
                </h3>
                <p className="font-lato text-xs text-[#C5A15A] tracking-widest uppercase font-semibold mt-0.5">
                  8th & 9th January 2027 • Vijayapur
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* Opened Parchment Invitation */
          <div className="relative rounded-3xl border-2 border-[#C5A15A] bg-[#FFFDF9] p-2.5 shadow-2xl animate-fadeIn">
            <div className="relative rounded-2xl border border-[#C5A15A]/60 bg-[#FFFDF9] p-6 sm:p-8 text-[#3B2525] text-center">
              <CornerFiligree position="top-left" size={36} className="top-1 left-1 opacity-70" />
              <CornerFiligree position="top-right" size={36} className="top-1 right-1 opacity-70" />
              <CornerFiligree position="bottom-left" size={36} className="bottom-1 left-1 opacity-70" />
              <CornerFiligree position="bottom-right" size={36} className="bottom-1 right-1 opacity-70" />

              <BismillahText variant="maroon" />

              <p className="font-playfair text-xs tracking-[0.2em] uppercase text-[#641C32] font-semibold mt-1">
                {WEDDING_DATA.islamicTexts.invitationGreeting}
              </p>
              <p className="font-cormorant italic text-sm text-[#3B2525]/80">
                You Are Cordially Invited To Celebrate The Wedding Ceremony of
              </p>

              {/* Couple Display */}
              <div className="my-4 py-3 border-y border-[#C5A15A]/30">
                <h4 className="font-playfair text-xl sm:text-2xl font-bold text-[#641C32] tracking-wider">
                  MOHAMMAD FAIZAN
                </h4>
                <span className="font-great-vibes text-2xl text-[#C5A15A] block my-0.5">
                  With
                </span>
                <h4 className="font-playfair text-xl sm:text-2xl font-bold text-[#641C32] tracking-wider">
                  MUSKAN
                </h4>
              </div>

              {/* Event Summary Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4 text-left">
                <div className="p-3 rounded-xl bg-[#641C32] text-[#FFF8EB] border border-[#C5A15A]">
                  <span className="font-playfair text-[11px] font-bold text-[#E7D4A4] uppercase tracking-wider block">
                    AQAD CEREMONY
                  </span>
                  <p className="font-playfair text-xs font-bold mt-0.5">
                    Friday, 8th January 2027
                  </p>
                  <p className="font-lato text-[11px] text-[#F5EBD8]/80">
                    11:30 AM • 30th Rajjab 1448
                  </p>
                  <p className="font-lato text-[11px] text-[#E7D4A4] mt-0.5 font-semibold">
                    J.B. Garden Hall, Vijayapur
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#FFF8EB] text-[#3B2525] border border-[#C5A15A]">
                  <span className="font-playfair text-[11px] font-bold text-[#641C32] uppercase tracking-wider block">
                    VALIMA RECEPTION
                  </span>
                  <p className="font-playfair text-xs font-bold text-[#641C32] mt-0.5">
                    Saturday, 9th January 2027
                  </p>
                  <p className="font-lato text-[11px] text-[#3B2525]/80">
                    7:00 PM onwards • Dinner after 7 PM
                  </p>
                  <p className="font-lato text-[11px] text-[#8C6D2D] mt-0.5 font-semibold">
                    Alamgiri Function Hall, Vijayapur
                  </p>
                </div>
              </div>

              <GoldDivider className="my-3 max-w-xs mx-auto" />

              <p className="font-cormorant italic text-xs text-[#3B2525]/80 max-w-md mx-auto">
                &ldquo;{WEDDING_DATA.family.message}&rdquo;
              </p>

              <button
                onClick={handleScrollAndClose}
                className="mt-4 px-6 py-2.5 rounded-full bg-[#641C32] hover:bg-[#3F1024] text-[#FFF8EB] font-playfair text-xs font-bold tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-1.5 mx-auto focus:outline-none"
              >
                <span>Explore Full Website</span>
                <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
