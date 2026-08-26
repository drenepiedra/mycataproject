import React, { useState, useEffect } from 'react';
import { TelemetryLog } from '../types';
import { INITIAL_TELEMETRY_LOGS } from '../data/deployments';
import { X, Activity, Play, Pause, Trash2, Radio, Server, Signal } from 'lucide-react';

interface LiveTelemetryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LiveTelemetryDrawer: React.FC<LiveTelemetryDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const [logs, setLogs] = useState<TelemetryLog[]>(INITIAL_TELEMETRY_LOGS);
  const [isLiveStreaming, setIsLiveStreaming] = useState(true);

  // Periodic simulated live packet updates
  useEffect(() => {
    if (!isLiveStreaming) return;

    const interval = setInterval(() => {
      const devices = [
        { name: 'AutoFeeder_#204', node: 'NODE-AF-US-08' },
        { name: 'TrackerPro_#812', node: 'NODE-TRK-77' },
        { name: 'BioMonitor_#109', node: 'NODE-ENV-03' },
        { name: 'CollarArray_#44', node: 'NODE-TRK-102' },
        { name: 'SmartLitter_#07', node: 'NODE-LIT-09' },
      ];
      const randomDevice = devices[Math.floor(Math.random() * devices.length)];

      const events = [
        `IMU gait symmetry index measured at ${(0.96 + Math.random() * 0.03).toFixed(3)}. No limb stiffness detected.`,
        `Kibble dispenser completed cycle in ${(1.2 + Math.random() * 0.2).toFixed(2)}s. Sensor torque within nominal band.`,
        `Sub-GHz LoRaWAN beacon ack in 3.1ms. RSSI: -68 dBm (Strong link).`,
        `Ambient particulate scan: PM2.5 at ${Math.floor(3 + Math.random() * 3)} µg/m³. Clean feline breathing air.`,
        `Purr harmonics detected at 26.4 Hz fundamental. Dopamine behavioral state: Relaxed.`,
      ];
      const randomEvent = events[Math.floor(Math.random() * events.length)];

      const now = new Date();
      const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(
        now.getMinutes()
      ).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}.${String(
        now.getMilliseconds()
      ).padStart(3, '0')}`;

      const newLog: TelemetryLog = {
        timestamp: timeStr,
        device: randomDevice.name,
        nodeId: randomDevice.node,
        event: randomEvent,
        type: Math.random() > 0.3 ? 'telemetry' : 'info',
      };

      setLogs((prev) => [newLog, ...prev.slice(0, 24)]);
    }, 2800);

    return () => clearInterval(interval);
  }, [isLiveStreaming]);

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div
        className="w-full max-w-xl bg-[#1b1b1d] border-l border-white/15 h-full flex flex-col shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#201f21]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-[#353437] text-[#c5c0ff] border border-white/5">
              <Activity className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-base sm:text-lg text-[#e5e1e4]">
                  Feline Mesh Live Stream
                </h3>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              </div>
              <p className="text-xs font-mono-tech text-[#928f9e]">
                REAL-TIME HARDWARE HEARTBEAT &amp; BIOMETRIC STREAM
              </p>
            </div>
          </div>

          <button
            id="close-telemetry-drawer-btn"
            onClick={onClose}
            className="text-[#928f9e] hover:text-white p-2 rounded hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Global Node Summary bar */}
        <div className="grid grid-cols-3 gap-2 px-6 py-3 border-b border-white/10 bg-[#131315]/80 text-xs font-mono-tech">
          <div className="flex items-center gap-2 text-[#928f9e]">
            <Server className="w-3.5 h-3.5 text-[#c5c0ff]" />
            <span>NODES: <strong className="text-[#e5e1e4]">1,420</strong></span>
          </div>
          <div className="flex items-center gap-2 text-[#928f9e]">
            <Signal className="w-3.5 h-3.5 text-emerald-400" />
            <span>LINK: <strong className="text-[#e5e1e4]">99.98%</strong></span>
          </div>
          <div className="flex items-center gap-2 text-[#928f9e]">
            <Radio className="w-3.5 h-3.5 text-[#b8c4ff]" />
            <span>LATENCY: <strong className="text-[#e5e1e4]">3.8ms</strong></span>
          </div>
        </div>

        {/* Control toolbar */}
        <div className="flex items-center justify-between px-6 py-2.5 bg-[#201f21] border-b border-white/10 text-xs font-mono-tech">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsLiveStreaming(!isLiveStreaming)}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#353437] hover:bg-[#39393b] text-[#e5e1e4] border border-white/5 transition-colors"
            >
              {isLiveStreaming ? (
                <>
                  <Pause className="w-3 h-3 text-amber-400" />
                  <span>Pause Stream</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 text-emerald-400" />
                  <span>Resume Stream</span>
                </>
              )}
            </button>
            <button
              onClick={() => setLogs([])}
              className="flex items-center gap-1.5 px-2 py-1 rounded hover:bg-white/5 text-[#928f9e] hover:text-[#e5e1e4] transition-colors"
            >
              <Trash2 className="w-3 h-3" />
              <span>Clear</span>
            </button>
          </div>

          <span className="text-[#928f9e] text-[11px]">
            {logs.length} packet events buffered
          </span>
        </div>

        {/* Stream Log list */}
        <div className="p-6 overflow-y-auto space-y-3 flex-grow font-mono-tech text-xs">
          {logs.length === 0 ? (
            <div className="text-center py-16 text-[#928f9e]">
              No packet events in buffer. Press Resume to capture live events.
            </div>
          ) : (
            logs.map((log, index) => (
              <div
                key={index}
                className="bg-[#201f21] border border-white/5 rounded p-3 cyber-glow space-y-1.5 transition-all hover:border-white/20 animate-fadeIn"
              >
                <div className="flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-2">
                    <span className="text-[#c5c0ff] font-semibold">{log.device}</span>
                    <span className="text-[#928f9e]">({log.nodeId})</span>
                  </div>
                  <span className="text-[#928f9e]">{log.timestamp}</span>
                </div>
                <p className="text-xs text-[#c8c4d5] leading-relaxed">
                  {log.event}
                </p>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-white/10 bg-[#201f21] flex justify-between items-center text-xs font-mono-tech">
          <span className="text-[#928f9e]">PROTOCOL: FELINE-MESH (W3C BIO-IOT)</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded bg-[#c5c0ff] text-[#281590] font-semibold hover:brightness-110 transition-all"
          >
            Close Feed
          </button>
        </div>
      </div>
    </div>
  );
};
