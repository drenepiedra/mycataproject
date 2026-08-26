import React from 'react';
import { Deployment } from '../types';
import { Wifi, Crosshair, Shield, Activity, ArrowUpRight } from 'lucide-react';

interface ActiveDeploymentsProps {
  deployments: Deployment[];
  onSelectDeployment: (deployment: Deployment) => void;
}

export const ActiveDeployments: React.FC<ActiveDeploymentsProps> = ({
  deployments,
  onSelectDeployment,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'router':
        return <Wifi className="w-12 h-12 text-[#c5c0ff]" />;
      case 'my_location':
        return <Crosshair className="w-12 h-12 text-[#c5c0ff]" />;
      case 'security':
        return <Shield className="w-12 h-12 text-[#c5c0ff]" />;
      default:
        return <Activity className="w-12 h-12 text-[#c5c0ff]" />;
    }
  };

  return (
    <section id="projects" className="py-16 px-6 max-w-6xl mx-auto scroll-mt-24">
      <div className="text-center mb-12">
        <h2 className="font-semibold text-2xl sm:text-3xl md:text-[32px] text-[#c5c0ff] tracking-tight">
          Active Deployments
        </h2>
        <p className="text-sm font-mono-tech text-[#928f9e] mt-2">
          LIVE HARDWARE NODES &amp; DISTRIBUTED SENSOR FLEET
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {deployments.map((item) => (
          <div
            key={item.id}
            id={`deployment-card-${item.id}`}
            onClick={() => onSelectDeployment(item)}
            className="bg-[#201f21] border border-white/10 rounded-lg p-6 cyber-glow flex flex-col group hover:border-[#c5c0ff]/50 transition-all duration-300 cursor-pointer relative overflow-hidden"
          >
            {/* Visual Icon Container */}
            <div className="h-48 bg-[#353437] rounded mb-6 overflow-hidden relative flex items-center justify-center border border-white/5 group-hover:bg-[#39393b] transition-colors">
              <div className="absolute inset-0 flex items-center justify-center opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                {getIcon(item.iconName)}
              </div>

              {/* Sub-grid pattern inside icon box */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

              {/* Top right quick inspect badge on hover */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-[#131315]/80 backdrop-blur-sm p-1.5 rounded border border-white/10 text-[#c5c0ff]">
                <ArrowUpRight className="w-4 h-4" />
              </div>

              {/* Live indicator tag in corner */}
              <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#131315]/90 border border-white/10 text-[10px] font-mono-tech text-[#c5c0ff]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>ONLINE</span>
              </div>
            </div>

            {/* Category Tags */}
            <div className="flex items-center gap-2 mb-3">
              {item.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className={`px-2 py-0.5 font-mono-tech text-[10px] uppercase rounded-[2px] tracking-wider ${
                    tag.type === 'primary'
                      ? 'bg-[#c5c0ff]/20 text-[#c5c0ff] border border-[#c5c0ff]/30'
                      : 'bg-[#b8c4ff]/20 text-[#b8c4ff] border border-[#b8c4ff]/30'
                  }`}
                >
                  {tag.label}
                </span>
              ))}
            </div>

            {/* Title */}
            <h3 className="font-semibold text-xl text-[#e5e1e4] mb-2 group-hover:text-[#c5c0ff] transition-colors">
              {item.name}
            </h3>

            {/* Description */}
            <p className="text-sm text-[#c8c4d5] leading-relaxed flex-grow font-normal">
              {item.description}
            </p>

            {/* Quick Metrics Footer */}
            <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono-tech text-[#928f9e]">
              <span className="group-hover:text-[#c5c0ff] transition-colors">
                Specs &amp; Telemetry
              </span>
              <span className="text-[#c5c0ff] opacity-80 group-hover:opacity-100 flex items-center gap-1">
                View Deep Dive →
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
