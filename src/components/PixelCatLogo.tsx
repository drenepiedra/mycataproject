import React from 'react';

interface PixelCatLogoProps {
  className?: string;
  size?: number;
  glow?: boolean;
}

export const PixelCatLogo: React.FC<PixelCatLogoProps> = ({
  className = '',
  size = 64,
  glow = false,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${
        glow ? 'filter drop-shadow-[0_0_16px_rgba(197,192,255,0.45)]' : ''
      }`}
      shapeRendering="crispEdges"
    >
      {/* Outer Glow / Silhouette matrix in vibrant matching lilac #c5c0ff / purple #a855f7 */}
      
      {/* Left Ear */}
      <rect x="8" y="4" width="8" height="8" fill="#c5c0ff" />
      <rect x="12" y="8" width="8" height="8" fill="#c5c0ff" />
      <rect x="16" y="12" width="8" height="8" fill="#c5c0ff" />
      <rect x="12" y="12" width="4" height="4" fill="#a855f7" />

      {/* Right Ear */}
      <rect x="48" y="4" width="8" height="8" fill="#c5c0ff" />
      <rect x="44" y="8" width="8" height="8" fill="#c5c0ff" />
      <rect x="40" y="12" width="8" height="8" fill="#c5c0ff" />
      <rect x="48" y="12" width="4" height="4" fill="#a855f7" />

      {/* Head & Crown Top */}
      <rect x="24" y="12" width="16" height="8" fill="#c5c0ff" />
      <rect x="12" y="16" width="40" height="24" fill="#c5c0ff" />
      <rect x="8" y="20" width="48" height="16" fill="#c5c0ff" />

      {/* Cheeks */}
      <rect x="4" y="24" width="8" height="12" fill="#c5c0ff" />
      <rect x="52" y="24" width="8" height="12" fill="#c5c0ff" />

      {/* Eyes (High-tech Glowing Iris) */}
      {/* Left Eye */}
      <rect x="16" y="24" width="8" height="8" fill="#1b1b1d" />
      <rect x="16" y="24" width="4" height="4" fill="#64f0ff" />
      <rect x="20" y="28" width="4" height="4" fill="#ffffff" />

      {/* Right Eye */}
      <rect x="40" y="24" width="8" height="8" fill="#1b1b1d" />
      <rect x="40" y="24" width="4" height="4" fill="#64f0ff" />
      <rect x="44" y="28" width="4" height="4" fill="#ffffff" />

      {/* Nose & Whiskers Center */}
      <rect x="30" y="30" width="4" height="4" fill="#a855f7" />
      <rect x="28" y="34" width="8" height="2" fill="#201f21" />

      {/* Whisker details */}
      <rect x="6" y="28" width="6" height="2" fill="#e5e1e4" />
      <rect x="4" y="32" width="8" height="2" fill="#e5e1e4" />
      <rect x="52" y="28" width="6" height="2" fill="#e5e1e4" />
      <rect x="52" y="32" width="8" height="2" fill="#e5e1e4" />

      {/* Collar & Tech Charm */}
      <rect x="16" y="40" width="32" height="6" fill="#7c3aed" />
      <rect x="28" y="44" width="8" height="6" fill="#c5c0ff" />
      <rect x="30" y="46" width="4" height="2" fill="#64f0ff" />

      {/* Body Core */}
      <rect x="16" y="46" width="32" height="12" fill="#c5c0ff" />
      <rect x="20" y="58" width="8" height="4" fill="#a855f7" />
      <rect x="36" y="58" width="8" height="4" fill="#a855f7" />
    </svg>
  );
};
