'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-5 left-5 z-40 p-2.5 rounded-full bg-[#FFFDF9] border-2 border-[#C5A15A] text-[#641C32] shadow-md hover:bg-[#641C32] hover:text-[#FFF8EB] hover:scale-105 active:scale-95 transition-all focus:outline-none"
      aria-label="Scroll back to top"
      title="Back to Top"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
};
