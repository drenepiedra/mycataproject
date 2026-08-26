import React, { useState } from 'react';
import { Cpu, ChevronDown, ChevronUp, Radio, ShieldCheck, Zap } from 'lucide-react';

export const SystemArchitecture: React.FC = () => {
  const [showDeepArchitecture, setShowDeepArchitecture] = useState(false);

  const architectureLayers = [
    {
      layer: 'Layer 01 — Biological & Behavioral Sensing',
      description: 'Micro-watt load cells, acoustic crunch spectrometers, and non-intrusive collar IMUs that respect feline whisker sensitivity and nocturnal sleep rhythms.',
      icon: Radio,
    },
    {
      layer: 'Layer 02 — Embedded Edge Firmware',
      description: 'Zero-jitter Rust/C firmware executing on low-power Nordic and ESP32 silicon with encrypted mesh sync and sub-millisecond local telemetry.',
      icon: Zap,
    },
    {
      layer: 'Layer 03 — Feline Neural Inference',
      description: 'TinyML on-device models predicting metabolic intake patterns, hydration dips, and spatial territory dynamics without sending raw video streams.',
      icon: Cpu,
    },
    {
      layer: 'Layer 04 — Safe Habitat Integration',
      description: 'Matter & Zigbee bridges that effortlessly sync feeder schedules, air purification, and perimeter safety directly with your existing smart home.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="about" className="py-16 px-6 max-w-6xl mx-auto relative scroll-mt-24">
      <div className="bg-[#1b1b1d] border border-white/10 rounded-lg p-8 sm:p-12 cyber-glow relative overflow-hidden backdrop-blur-sm transition-all hover:border-white/15">
        {/* Top-Right Decorative Chip Graphic */}
        <div className="absolute top-6 right-6 opacity-20 pointer-events-none">
          <svg
            className="w-16 h-16 sm:w-20 sm:h-20 text-[#c5c0ff]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <rect x="9" y="9" width="6" height="6" />
            <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
          </svg>
        </div>

        <div className="max-w-3xl relative z-10">
          <h2 className="font-semibold text-2xl sm:text-3xl md:text-[32px] text-[#c5c0ff] mb-6 tracking-tight">
            System Architecture &amp; Biology
          </h2>

          <p className="text-[#c8c4d5] text-base sm:text-lg mb-4 leading-relaxed font-normal">
            We are a specialized collective of hardware engineers, software developers, and feline behavioral
            analysts. Our mission is to bridge the gap between advanced technology and fundamental cat needs.
          </p>

          <p className="text-[#c8c4d5] text-base sm:text-lg leading-relaxed font-normal">
            By applying rigorous engineering principles to everyday feline challenges, we develop solutions
            that are not only technologically sound but intrinsically aligned with natural behaviors.
          </p>

          {/* Interactive Deep Architecture Toggle */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <button
              id="toggle-deep-architecture-btn"
              onClick={() => setShowDeepArchitecture(!showDeepArchitecture)}
              className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-[#c5c0ff] hover:text-white transition-colors group"
            >
              <span>{showDeepArchitecture ? 'Hide Engineering Pipeline' : 'Inspect 4-Tier Architecture Pipeline'}</span>
              {showDeepArchitecture ? (
                <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
              ) : (
                <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              )}
            </button>

            {showDeepArchitecture && (
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fadeIn">
                {architectureLayers.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-[#201f21] border border-white/10 rounded p-4 cyber-glow flex flex-col justify-between"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded bg-[#353437] text-[#c5c0ff]">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="font-mono-tech text-xs text-[#c5c0ff] font-semibold">
                          {item.layer}
                        </span>
                      </div>
                      <p className="text-xs text-[#c8c4d5] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
