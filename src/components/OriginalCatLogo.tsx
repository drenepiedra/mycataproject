import React from 'react';

interface OriginalCatLogoProps {
  className?: string;
  size?: number;
  glow?: boolean;
}

export const OriginalCatLogo: React.FC<OriginalCatLogoProps> = ({
  className = '',
  size = 80,
  glow = false,
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${
          glow ? 'filter drop-shadow-[0_0_20px_rgba(197,192,255,0.45)]' : ''
        } transition-all duration-300`}
      >
        <defs>
          <linearGradient id="purpleCatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d8b4fe" />
            <stop offset="50%" stopColor="#c5c0ff" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>

        {/* Outer Head & Ears Silhouette - Exact shape rendered in theme purple */}
        <path
          d="M 20 22 L 35 34 C 40 32 60 32 65 34 L 80 22 C 82 38 80 50 78 58 C 76 68 70 78 50 82 C 30 78 24 68 22 58 C 20 50 18 38 20 22 Z"
          fill="url(#purpleCatGrad)"
        />

        {/* Inner Ear Highlights */}
        <path
          d="M 24 27 L 33 34 C 30 35 27 34 26 31 Z"
          fill="#7c3aed"
          opacity="0.8"
        />
        <path
          d="M 76 27 L 67 34 C 70 35 73 34 74 31 Z"
          fill="#7c3aed"
          opacity="0.8"
        />

        {/* Eyes (Glowing cat slit eyes) */}
        <ellipse cx="36" cy="48" rx="5" ry="6" fill="#131315" />
        <ellipse cx="64" cy="48" rx="5" ry="6" fill="#131315" />
        <ellipse cx="36" cy="48" rx="2" ry="5" fill="#64f0ff" />
        <ellipse cx="64" cy="48" rx="2" ry="5" fill="#64f0ff" />
        <circle cx="37" cy="46" r="1" fill="#ffffff" />
        <circle cx="65" cy="46" r="1" fill="#ffffff" />

        {/* Nose & Mouth */}
        <path
          d="M 47 56 L 53 56 L 50 60 Z"
          fill="#7c3aed"
        />
        <path
          d="M 50 60 Q 45 64 42 63 M 50 60 Q 55 64 58 63"
          stroke="#131315"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Whisker Lines */}
        <line x1="14" y1="52" x2="30" y2="54" stroke="#e5e1e4" strokeWidth="1.5" strokeLinecap="round" opacity="0.85" />
        <line x1="12" y1="58" x2="28" y2="58" stroke="#e5e1e4" strokeWidth="1.5" strokeLinecap="round" opacity="0.85" />
        <line x1="86" y1="52" x2="70" y2="54" stroke="#e5e1e4" strokeWidth="1.5" strokeLinecap="round" opacity="0.85" />
        <line x1="88" y1="58" x2="72" y2="58" stroke="#e5e1e4" strokeWidth="1.5" strokeLinecap="round" opacity="0.85" />
      </svg>
    </div>
  );
};
