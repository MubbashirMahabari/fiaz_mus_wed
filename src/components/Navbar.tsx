'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Share2, Volume2, VolumeX, Heart } from 'lucide-react';
import { RoyalMonogramSeal } from './Ornaments';
import { ambientSound } from '@/lib/audio';

interface NavbarProps {
  onOpenCard: () => void;
  onOpenShare: () => void;
  onShowerBlessings: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCard,
  onOpenShare,
  onShowerBlessings,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    ambientSound.init();
    const unsub = ambientSound.subscribe((state) => {
      setIsPlayingMusic(state.isPlaying);
      setIsMuted(state.isMuted);
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      unsub();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToggleMusic = () => {
    ambientSound.togglePlay();
  };

  const navLinks = [
    { label: 'The Couple', href: '#couple' },
    { label: 'Blessings', href: '#blessings' },
    { label: 'Countdown', href: '#countdown' },
    { label: 'Nikah', href: '#nikah' },
    { label: 'Valima', href: '#valima' },
    { label: 'Venues', href: '#venues' },
    { label: 'Family', href: '#family' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FFF8EB]/95 backdrop-blur-md py-2.5 border-b border-[#C5A15A]/40 shadow-sm'
            : 'bg-[#FFF8EB]/80 backdrop-blur-sm py-3.5 border-b border-[#C5A15A]/20'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo: F&M */}
          <a
            href="#hero"
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="Mohammad Faizan & Muskan"
          >
            <RoyalMonogramSeal size={38} />
            <div className="flex flex-col text-left">
              <span className="font-playfair text-sm sm:text-base font-bold text-[#641C32] tracking-wider leading-tight">
                Faizan & Muskan
              </span>
              <span className="font-lato text-[10px] tracking-widest text-[#C5A15A] uppercase font-semibold">
                8 • 9 Jan 2027
              </span>
            </div>
          </a>

          {/* Desktop Centered Horizontal Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="font-playfair text-xs xl:text-sm tracking-wider text-[#3B2525]/85 hover:text-[#641C32] transition-colors relative py-1 focus:outline-none after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[1.5px] after:bg-[#C5A15A] hover:after:w-full after:transition-all after:duration-300 font-medium"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Actions: Ambient Sound, Duas, Share, Invitation Card */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Music Toggle */}
            <button
              onClick={handleToggleMusic}
              className={`p-2 rounded-full border transition-all focus:outline-none flex items-center justify-center ${
                isPlayingMusic && !isMuted
                  ? 'border-[#C5A15A] bg-[#641C32] text-[#E7D4A4] shadow-sm'
                  : 'border-[#C5A15A]/50 bg-[#FFFDF9] text-[#641C32] hover:border-[#C5A15A]'
              }`}
              title={
                !isPlayingMusic
                  ? 'Play gentle wedding ambience'
                  : isMuted
                  ? 'Unmute ambient sound'
                  : 'Mute ambient sound'
              }
              aria-label="Ambient sound toggle"
            >
              {isPlayingMusic && !isMuted ? (
                <Volume2 className="w-4 h-4 animate-pulse" />
              ) : (
                <VolumeX className="w-4 h-4" />
              )}
            </button>

            {/* Send Duas Confetti */}
            <button
              onClick={onShowerBlessings}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#C5A15A]/60 bg-[#641C32] text-[#FFF8EB] text-xs font-playfair tracking-wider hover:bg-[#3F1024] hover:scale-105 active:scale-95 transition-all shadow-sm focus:outline-none"
              title="Shower Blessings"
            >
              <Heart className="w-3.5 h-3.5 text-[#E7D4A4] fill-[#E7D4A4]" />
              <span>Send Duas</span>
            </button>

            {/* Share Button */}
            <button
              onClick={onOpenShare}
              className="p-2 rounded-full border border-[#C5A15A]/50 bg-[#FFFDF9] text-[#641C32] hover:bg-[#F5EBD8] transition-colors focus:outline-none"
              title="Share Invitation"
              aria-label="Share Invitation"
            >
              <Share2 className="w-4 h-4" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg border border-[#C5A15A]/40 bg-[#FFFDF9] text-[#641C32] hover:bg-[#F5EBD8] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-[#FFFDF9] border-l border-[#C5A15A]/40 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-[#C5A15A]/30 pb-4">
              <div className="flex items-center gap-2">
                <RoyalMonogramSeal size={36} />
                <div className="flex flex-col text-left">
                  <span className="font-playfair text-sm font-bold text-[#641C32]">
                    Faizan & Muskan
                  </span>
                  <span className="font-lato text-[10px] text-[#C5A15A] uppercase tracking-wider">
                    Wedding Invitation
                  </span>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-full hover:bg-[#F5EBD8] text-[#641C32]"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Links */}
            <nav className="flex flex-col gap-2 my-auto py-6">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="font-playfair text-base tracking-wider text-[#3B2525] hover:text-[#641C32] hover:bg-[#FFF8EB] text-left py-2.5 px-3 rounded-lg border-b border-[#C5A15A]/10 transition-colors font-medium focus:outline-none"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Drawer Footer Actions */}
            <div className="flex flex-col gap-2.5 pt-4 border-t border-[#C5A15A]/30">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCard();
                }}
                className="w-full py-2.5 rounded-xl bg-[#641C32] text-[#FFF8EB] font-playfair font-semibold text-xs tracking-wider shadow-sm"
              >
                Open Invitation Card
              </button>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onShowerBlessings();
                  }}
                  className="flex-1 py-2 rounded-xl border border-[#C5A15A] bg-[#FFF8EB] text-[#641C32] font-playfair text-xs font-semibold flex items-center justify-center gap-1.5"
                >
                  <Heart className="w-3.5 h-3.5 fill-[#641C32]" />
                  <span>Send Duas</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenShare();
                  }}
                  className="flex-1 py-2 rounded-xl border border-[#C5A15A] bg-[#FFF8EB] text-[#641C32] font-playfair text-xs font-semibold flex items-center justify-center gap-1.5"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
