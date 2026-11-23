import React from "react";

/**
 * Corner Filigree - Elegant Antique Gold Corner Ornament
 */
export const CornerFiligree: React.FC<{
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
  size?: number;
}> = ({ position = "top-left", className = "", size = 36 }) => {
  let rotation = "rotate-0";
  if (position === "top-right") rotation = "rotate-90";
  if (position === "bottom-right") rotation = "rotate-180";
  if (position === "bottom-left") rotation = "-rotate-90";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute pointer-events-none text-[#C5A15A] transition-transform ${rotation} ${className}`}
      aria-hidden="true"
    >
      <path
        d="M6 6 H40 C40 24 24 40 6 40 Z"
        fill="currentColor"
        fillOpacity="0.12"
      />
      <path
        d="M6 6 C24 6 40 22 40 40 C30 28 22 22 14 18 C18 14 22 10 6 6 Z"
        fill="url(#goldGradCorner)"
      />
      <path
        d="M10 6 H74 M6 10 V74"
        stroke="url(#goldGradCorner)"
        strokeWidth="1.5"
        strokeDasharray="2 3"
      />
      <circle cx="20" cy="20" r="4" fill="url(#goldGradCorner)" />
      <circle cx="32" cy="11" r="2.2" fill="url(#goldGradCorner)" />
      <circle cx="11" cy="32" r="2.2" fill="url(#goldGradCorner)" />
      <defs>
        <linearGradient
          id="goldGradCorner"
          x1="0"
          y1="0"
          x2="80"
          y2="80"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E7D4A4" />
          <stop offset="0.5" stopColor="#C5A15A" />
          <stop offset="1" stopColor="#9B7835" />
        </linearGradient>
      </defs>
    </svg>
  );
};

/**
 * Double Antique Gold Border Container
 */
export const DoubleGoldCard: React.FC<{
  className?: string;
  children: React.ReactNode;
  variant?: "cream" | "maroon";
}> = ({ className = "", children, variant = "cream" }) => {
  const isMaroon = variant === "maroon";

  return (
    <div
      className={`relative rounded-2xl border-2 border-[#C5A15A] p-2 ${
        isMaroon
          ? "bg-[#641C32] text-[#FFF8EB] shadow-maroon-luxury"
          : "bg-[#FFFDF9] text-[#3B2525] shadow-card-luxury"
      } ${className}`}
    >
      {/* Inner Inset Thin Border */}
      <div
        className={`relative rounded-xl border border-[#C5A15A]/60 p-5 sm:p-7 overflow-hidden ${
          isMaroon
            ? "bg-gradient-to-b from-[#641C32] to-[#3F1024]"
            : "bg-[#FFFDF9]"
        }`}
      >
        <CornerFiligree
          position="top-left"
          size={32}
          className="top-1 left-1"
        />
        <CornerFiligree
          position="top-right"
          size={32}
          className="top-1 right-1"
        />
        <CornerFiligree
          position="bottom-left"
          size={32}
          className="bottom-1 left-1"
        />
        <CornerFiligree
          position="bottom-right"
          size={32}
          className="bottom-1 right-1"
        />
        {children}
      </div>
    </div>
  );
};

/**
 * Bismillah Calligraphy (SVG)
 */
export const BismillahText: React.FC<{
  className?: string;
  variant?: "gold" | "maroon";
}> = ({ className = "", variant = "gold" }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center my-1 select-none ${className}`}
    >
      <span
        className={`font-amiri text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide leading-relaxed ${
          variant === "maroon" ? "text-[#641C32]" : "text-gold-gradient"
        }`}
        dir="rtl"
      >
        بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
      </span>
    </div>
  );
};

/**
 * Sunnah Blessing Dua Calligraphy
 */
export const BlessingText: React.FC<{
  className?: string;
  variant?: "gold" | "maroon";
}> = ({ className = "", variant = "gold" }) => {
  return (
    <div className={`text-center my-2 select-none ${className}`}>
      <p
        className={`font-amiri text-xl sm:text-2xl md:text-3xl font-bold leading-loose tracking-wide ${
          variant === "maroon" ? "text-[#641C32]" : "text-gold-gradient"
        }`}
        dir="rtl"
      >
        بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
      </p>
    </div>
  );
};

/**
 * Gold Ornamental Divider with Diamond Rosette
 */
export const GoldDivider: React.FC<{
  className?: string;
  label?: string;
}> = ({ className = "", label }) => {
  return (
    <div
      className={`flex items-center justify-center gap-2.5 my-4 ${className}`}
    >
      <div className="h-[1px] flex-1 max-w-[90px] sm:max-w-[140px] bg-gradient-to-r from-transparent via-[#C5A15A] to-[#E7D4A4]" />
      <div className="flex items-center gap-1 text-[#C5A15A]">
        <span className="w-1.5 h-1.5 rotate-45 bg-[#C5A15A]" />
        <span className="w-2.5 h-2.5 rotate-45 border border-[#C5A15A] bg-[#FFF8EB] flex items-center justify-center">
          <span className="w-1 h-1 bg-[#C5A15A]" />
        </span>
        {label && (
          <span className="font-playfair text-[11px] uppercase tracking-widest px-1.5 text-[#C5A15A]">
            {label}
          </span>
        )}
        <span className="w-2.5 h-2.5 rotate-45 border border-[#C5A15A] bg-[#FFF8EB] flex items-center justify-center">
          <span className="w-1 h-1 bg-[#C5A15A]" />
        </span>
        <span className="w-1.5 h-1.5 rotate-45 bg-[#C5A15A]" />
      </div>
      <div className="h-[1px] flex-1 max-w-[90px] sm:max-w-[140px] bg-gradient-to-l from-transparent via-[#C5A15A] to-[#E7D4A4]" />
    </div>
  );
};

/**
 * Royal Monogram Seal "F&M"
 */
export const RoyalMonogramSeal: React.FC<{
  className?: string;
  size?: number;
}> = ({ className = "", size = 52 }) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
      >
        <defs>
          <linearGradient id="sealGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF8EB" />
            <stop offset="35%" stopColor="#E7D4A4" />
            <stop offset="70%" stopColor="#C5A15A" />
            <stop offset="100%" stopColor="#9B7835" />
          </linearGradient>
          <linearGradient id="sealMaroonBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#641C32" />
            <stop offset="100%" stopColor="#3F1024" />
          </linearGradient>
        </defs>

        <circle
          cx="50"
          cy="50"
          r="47"
          stroke="url(#sealGoldGrad)"
          strokeWidth="1.2"
          strokeDasharray="3 2"
        />
        <circle
          cx="50"
          cy="50"
          r="43"
          fill="url(#sealMaroonBg)"
          stroke="url(#sealGoldGrad)"
          strokeWidth="1.8"
        />
        <circle
          cx="50"
          cy="50"
          r="39"
          stroke="url(#sealGoldGrad)"
          strokeWidth="0.8"
          opacity="0.6"
        />

        <text
          x="50%"
          y="56%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="'Playfair Display', 'Cinzel', serif"
          fontSize="22"
          fontWeight="700"
          letterSpacing="1.5"
          fill="url(#sealGoldGrad)"
        >
          F&M
        </text>

        <circle cx="50" cy="23" r="1.5" fill="#E7D4A4" />
        <circle cx="50" cy="77" r="1.5" fill="#E7D4A4" />
      </svg>
    </div>
  );
};

/**
 * Islamic Geometric Star Tile Pattern (Subtle repeating backdrop)
 */
export const IslamicPatternBg: React.FC<{
  className?: string;
  opacity?: number;
}> = ({ className = "", opacity = 0.04 }) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none bg-repeat animate-pattern-drift ${className}`}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C5A15A' fill-opacity='1'%3E%3Cpath d='M30 0L37 23L60 30L37 37L30 60L23 37L0 30L23 23Z' fill='none' stroke='%23C5A15A' stroke-width='0.7'/%3E%3Ccircle cx='30' cy='30' r='9' fill='none' stroke='%23C5A15A' stroke-width='0.5'/%3E%3Cpath d='M0 0L8 8M60 0L52 8M0 60L8 52M60 60L52 52' stroke='%23C5A15A' stroke-width='0.5'/%3E%3C/g%3E%3C/svg%3E")`,
        opacity: opacity,
      }}
    />
  );
};

/**
 * Groom & Bride Luxury Monogram Emblem Placeholders
 * Replaces cartoon/black silhouette cards with authentic Mughal-inspired arched emblem stationery
 */
export const DecorativePhotoPlaceholder: React.FC<{
  initials: string;
  arabicName: string;
  name: string;
  role: string;
}> = ({ initials, arabicName, name, role }) => {
  return (
    <div className="relative aspect-[4/5] w-full rounded-t-[46%] rounded-b-xl overflow-hidden border-2 border-[#C5A15A] bg-gradient-to-b from-[#FFFDF9] via-[#F5EBD8] to-[#FFF8EB] p-4 flex flex-col items-center justify-between text-center shadow-inner group">
      {/* Corner Ornaments */}
      <CornerFiligree
        position="top-left"
        size={28}
        className="top-1 left-1 opacity-70"
      />
      <CornerFiligree
        position="top-right"
        size={28}
        className="top-1 right-1 opacity-70"
      />
      <CornerFiligree
        position="bottom-left"
        size={28}
        className="bottom-1 left-1 opacity-70"
      />
      <CornerFiligree
        position="bottom-right"
        size={28}
        className="bottom-1 right-1 opacity-70"
      />

      {/* Decorative Arch Crest */}
      <div className="w-full flex justify-center pt-2">
        <span className="font-amiri text-lg sm:text-xl text-[#641C32] font-bold">
          {arabicName}
        </span>
      </div>

      {/* Center Royal Medallion */}
      <div className="relative my-auto flex flex-col items-center justify-center">
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-[#C5A15A] bg-[#641C32] flex flex-col items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-500">
          <span className="font-playfair text-2xl sm:text-3xl font-bold text-gold-light tracking-wider">
            {initials}
          </span>
          <span className="w-8 h-[1px] bg-[#C5A15A] my-1" />
          <span className="font-cinzel text-[10px] tracking-widest uppercase text-[#E7D4A4]">
            {role}
          </span>
        </div>
      </div>

      {/* Bottom Label Plate */}
      <div className="w-full pb-2">
        <span className="font-playfair text-base sm:text-lg font-bold text-[#641C32] block">
          {name}
        </span>
      </div>
    </div>
  );
};
