import React, { useState } from 'react';
import { Users, Github, MessageSquare, Terminal, Send, CheckCircle2, Shield } from 'lucide-react';

interface CommunitySectionProps {
  onJoinDeveloperNetwork: () => void;
}

export const CommunitySection: React.FC<CommunitySectionProps> = ({
  onJoinDeveloperNetwork,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 3000);
  };

  return (
    <section id="community" className="py-16 px-6 max-w-6xl mx-auto border-t border-white/5 mt-16 scroll-mt-24">
      <div className="text-center mb-12">
        <h2 className="font-semibold text-2xl sm:text-3xl md:text-[32px] text-[#c5c0ff] tracking-tight">
          Global Feline Mesh Network
        </h2>
        <p className="text-sm font-mono-tech text-[#928f9e] mt-2">
          OPEN STANDARDS • 1,400+ RUNNING HARDWARE NODES • COLLABORATIVE RESEARCH
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Card 1: Open Source Hardware & CAD */}
        <div className="bg-[#1b1b1d] border border-white/10 rounded-lg p-6 cyber-glow flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded bg-[#201f21] border border-white/10 flex items-center justify-center text-[#c5c0ff] mb-4">
              <Github className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-lg text-[#e5e1e4] mb-2">
              Open Feline Hardware CAD
            </h3>
            <p className="text-xs text-[#c8c4d5] leading-relaxed mb-4">
              Free KiCAD schematics, whisker-safe ergonomic 3D print STLs, and low-power ESP32/Nordic firmware modules.
            </p>
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono-tech text-[#c5c0ff] hover:text-white transition-colors"
          >
            <span>Browse GitHub Repositories</span>
            <span>→</span>
          </a>
        </div>

        {/* Card 2: Developer Discord & RFCs */}
        <div className="bg-[#1b1b1d] border border-white/10 rounded-lg p-6 cyber-glow flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded bg-[#201f21] border border-white/10 flex items-center justify-center text-[#c5c0ff] mb-4">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-lg text-[#e5e1e4] mb-2">
              Developer Discord &amp; RFCs
            </h3>
            <p className="text-xs text-[#c8c4d5] leading-relaxed mb-4">
              Join 4,200+ hardware hackers, feline veterinarians, and ML researchers drafting the FELINE-MESH protocol.
            </p>
          </div>
          <button
            onClick={onJoinDeveloperNetwork}
            className="inline-flex items-center gap-2 text-xs font-mono-tech text-[#c5c0ff] hover:text-white transition-colors text-left"
          >
            <span>Join Feline Engineering Discord</span>
            <span>→</span>
          </button>
        </div>

        {/* Card 3: Research & Firmware Dispatch */}
        <div className="bg-[#1b1b1d] border border-white/10 rounded-lg p-6 cyber-glow flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded bg-[#201f21] border border-white/10 flex items-center justify-center text-[#c5c0ff] mb-4">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-lg text-[#e5e1e4] mb-2">
              Feline Tech Dispatch
            </h3>
            <p className="text-xs text-[#c8c4d5] leading-relaxed mb-4">
              Bi-weekly engineering breakdowns, firmware updates, and feline behavioral AI benchmark releases.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="space-y-2">
            <div className="relative">
              <input
                id="community-newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="engineer@domain.com"
                className="w-full bg-[#131315] border border-white/10 focus:border-[#c5c0ff] rounded px-3 py-2 text-xs text-[#e5e1e4] font-mono-tech outline-none transition-all placeholder:text-[#928f9e]/60"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 px-3 bg-[#c5c0ff] text-[#281590] text-xs rounded hover:brightness-110 transition-all flex items-center justify-center"
              >
                <Send className="w-3 h-3" />
              </button>
            </div>
            {subscribed && (
              <p className="text-[11px] font-mono-tech text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Subscribed to Feline Dispatch.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
