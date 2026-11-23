'use client';

import React, { useState } from 'react';
import { X, Share2, Copy, Check, MessageSquare } from 'lucide-react';
import { WHATSAPP_INVITATION_TEXT, getWhatsAppShareUrl, shareInvitation } from '@/lib/whatsapp';
import { CornerFiligree, RoyalMonogramSeal } from './Ornaments';

interface ShareInvitationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareInvitationModal: React.FC<ShareInvitationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(
        `${WHATSAPP_INVITATION_TEXT}\n\n${window.location.href}`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleNativeShare = async () => {
    await shareInvitation(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const whatsappUrl = getWhatsAppShareUrl();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-lg bg-[#FFFDF9] text-[#3B2525] rounded-3xl border-2 border-[#C5A15A] shadow-2xl p-6 sm:p-8">
        <CornerFiligree position="top-left" size={32} className="top-1 left-1 opacity-70" />
        <CornerFiligree position="top-right" size={32} className="top-1 right-1 opacity-70" />
        <CornerFiligree position="bottom-left" size={32} className="bottom-1 left-1 opacity-70" />
        <CornerFiligree position="bottom-right" size={32} className="bottom-1 right-1 opacity-70" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#3B2525]/70 hover:text-[#641C32] p-1.5 focus:outline-none"
          aria-label="Close share dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          <RoyalMonogramSeal size={52} className="mx-auto mb-2" />
          <h3 className="font-playfair text-xl sm:text-2xl font-bold text-[#641C32]">
            Share Invitation
          </h3>
          <p className="font-cormorant italic text-sm text-[#3B2525]/80 mt-0.5">
            Share this blessed invitation with your family and loved ones.
          </p>
        </div>

        {/* Message Preview Box */}
        <div className="my-5 p-4 rounded-xl bg-[#FFF8EB] border border-[#C5A15A]/40 max-h-48 overflow-y-auto text-left text-xs font-lato text-[#3B2525]/90 whitespace-pre-line leading-relaxed shadow-inner">
          {WHATSAPP_INVITATION_TEXT}
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5">
          {/* WhatsApp Direct Share */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-playfair text-xs font-bold tracking-wider flex items-center justify-center gap-2 shadow-md transition-transform active:scale-95"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Share on WhatsApp</span>
          </a>

          {/* Web Share API */}
          <button
            onClick={handleNativeShare}
            className="w-full py-2.5 px-4 rounded-xl bg-[#641C32] hover:bg-[#3F1024] text-[#FFF8EB] font-playfair text-xs font-bold tracking-wider flex items-center justify-center gap-2 shadow-md transition-transform active:scale-95 focus:outline-none"
          >
            <Share2 className="w-4 h-4 text-[#E7D4A4]" />
            <span>Share via Other Apps</span>
          </button>

          {/* Copy Message to Clipboard */}
          <button
            onClick={handleCopy}
            className="w-full py-2 px-4 rounded-xl border border-[#C5A15A] bg-[#FFF8EB] hover:bg-[#F5EBD8] text-[#641C32] font-lato text-xs font-semibold tracking-wider flex items-center justify-center gap-2 transition-colors focus:outline-none"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 font-bold">
                  Invitation Message Copied!
                </span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#C5A15A]" />
                <span>Copy Full Invitation Text & Link</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
