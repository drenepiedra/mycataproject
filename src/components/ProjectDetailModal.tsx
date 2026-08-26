import React, { useState } from 'react';
import { Deployment } from '../types';
import { X, Wifi, Crosshair, Shield, Cpu, RefreshCw, CheckCircle2, Download, Terminal, Layers } from 'lucide-react';

interface ProjectDetailModalProps {
  deployment: Deployment | null;
  onClose: () => void;
  onOpenDeveloper: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  deployment,
  onClose,
  onOpenDeveloper,
}) => {
  if (!deployment) return null;

  const [activeTab, setActiveTab] = useState<'telemetry' | 'specs' | 'schematic'>('telemetry');
  const [telemetryState, setTelemetryState] = useState(deployment.fullSpecs.liveTelemetry);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [pingSuccess, setPingSuccess] = useState(false);

  const handleSimulatePing = () => {
    setIsRefreshing(true);
    setPingSuccess(false);
    setTimeout(() => {
      setTelemetryState((prev) =>
        prev.map((item) => {
          const numericVal = parseFloat(item.value);
          if (!isNaN(numericVal)) {
            const jitter = (Math.random() * 0.4 - 0.2).toFixed(1);
            return {
              ...item,
              value: (numericVal + parseFloat(jitter)).toFixed(1),
            };
          }
          return item;
        })
      );
      setIsRefreshing(false);
      setPingSuccess(true);
      setTimeout(() => setPingSuccess(false), 2500);
    }, 600);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'router':
        return <Wifi className="w-6 h-6 text-[#c5c0ff]" />;
      case 'my_location':
        return <Crosshair className="w-6 h-6 text-[#c5c0ff]" />;
      case 'security':
        return <Shield className="w-6 h-6 text-[#c5c0ff]" />;
      default:
        return <Cpu className="w-6 h-6 text-[#c5c0ff]" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="bg-[#1b1b1d] border border-white/15 rounded-lg w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl relative cyber-glow"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#201f21]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-[#353437] border border-white/5">
              {getIcon(deployment.iconName)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-lg sm:text-xl text-[#e5e1e4]">
                  {deployment.name}
                </h3>
                <span className="px-2 py-0.5 rounded font-mono-tech text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {deployment.fullSpecs.status}
                </span>
              </div>
              <p className="text-xs font-mono-tech text-[#928f9e]">
                FIRMWARE: {deployment.fullSpecs.firmwareVersion} • {deployment.fullSpecs.felineSafetyStandard}
              </p>
            </div>
          </div>

          <button
            id="close-project-modal-btn"
            onClick={onClose}
            className="text-[#928f9e] hover:text-white p-2 rounded hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-white/10 bg-[#131315]/70 px-6 gap-6 font-mono-tech text-xs">
          <button
            onClick={() => setActiveTab('telemetry')}
            className={`py-3 border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'telemetry'
                ? 'border-[#c5c0ff] text-[#c5c0ff] font-semibold'
                : 'border-transparent text-[#928f9e] hover:text-[#e5e1e4]'
            }`}
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
            Live Telemetry Feed
          </button>
          <button
            onClick={() => setActiveTab('specs')}
            className={`py-3 border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'specs'
                ? 'border-[#c5c0ff] text-[#c5c0ff] font-semibold'
                : 'border-transparent text-[#928f9e] hover:text-[#e5e1e4]'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            Hardware &amp; Safety Specs
          </button>
          <button
            onClick={() => setActiveTab('schematic')}
            className={`py-3 border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'schematic'
                ? 'border-[#c5c0ff] text-[#c5c0ff] font-semibold'
                : 'border-transparent text-[#928f9e] hover:text-[#e5e1e4]'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            Protocol &amp; Pinout
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-grow">
          {activeTab === 'telemetry' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between bg-[#201f21] p-4 rounded border border-white/10">
                <div>
                  <div className="text-xs text-[#928f9e] font-mono-tech uppercase">Active Sensor Telemetry</div>
                  <div className="text-sm text-[#e5e1e4] mt-0.5">
                    Continuous 10Hz sampling over encrypted feline mesh node
                  </div>
                </div>
                <button
                  onClick={handleSimulatePing}
                  disabled={isRefreshing}
                  className="px-3 py-1.5 bg-[#c5c0ff] text-[#281590] rounded text-xs font-mono-tech font-semibold flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
                  Ping Node
                </button>
              </div>

              {pingSuccess && (
                <div className="p-2.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono-tech flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Sub-millisecond packet received. Cryptographic signature verified.</span>
                </div>
              )}

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {telemetryState.map((metric, idx) => (
                  <div
                    key={idx}
                    className="bg-[#201f21] border border-white/10 rounded p-4 cyber-glow flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between text-xs font-mono-tech text-[#928f9e] mb-2">
                      <span>{metric.metricName}</span>
                      <span className="text-emerald-400">● Nominal</span>
                    </div>
                    <div className="text-2xl font-mono-tech font-bold text-[#c5c0ff]">
                      {metric.value} <span className="text-sm font-normal text-[#c8c4d5]">{metric.unit}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Hardware Overview text */}
              <div className="bg-[#131315] p-4 rounded border border-white/5 space-y-2">
                <div className="text-xs font-mono-tech text-[#c5c0ff] uppercase">Deployment Narrative:</div>
                <p className="text-xs text-[#c8c4d5] leading-relaxed">
                  {deployment.description}
                </p>
              </div>
            </div>
          )}

          {activeTab === 'specs' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono-tech">
                <div className="bg-[#201f21] p-3 rounded border border-white/10">
                  <span className="text-[#928f9e] block mb-1">MICROCONTROLLER &amp; NPU:</span>
                  <span className="text-[#e5e1e4]">{deployment.fullSpecs.mcu}</span>
                </div>
                <div className="bg-[#201f21] p-3 rounded border border-white/10">
                  <span className="text-[#928f9e] block mb-1">POWER PROFILE:</span>
                  <span className="text-[#e5e1e4]">{deployment.fullSpecs.powerConsumption}</span>
                </div>
                <div className="bg-[#201f21] p-3 rounded border border-white/10">
                  <span className="text-[#928f9e] block mb-1">CONNECTIVITY STACK:</span>
                  <span className="text-[#c5c0ff]">{deployment.fullSpecs.connectivity.join(', ')}</span>
                </div>
                <div className="bg-[#201f21] p-3 rounded border border-white/10">
                  <span className="text-[#928f9e] block mb-1">SAFETY COMPLIANCE:</span>
                  <span className="text-emerald-300">{deployment.fullSpecs.felineSafetyStandard}</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono-tech text-[#c5c0ff] uppercase mb-3">
                  Engineering Innovations:
                </h4>
                <ul className="space-y-2 text-xs text-[#c8c4d5]">
                  {deployment.fullSpecs.keyFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 bg-[#201f21] p-2.5 rounded border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-[#c5c0ff] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'schematic' && (
            <div className="space-y-4 animate-fadeIn font-mono-tech text-xs">
              <div className="bg-[#0e0e10] p-4 rounded border border-white/10 text-[#c8c4d5] overflow-x-auto leading-tight">
                <pre className="text-[#c5c0ff]">
{`[FELINE MESH PACKET FRAME v3.8]
+---------------------------------------------------------+
| PREAMBLE (4B) | NODE_ID (8B) | TIMESTAMP (8B) | SEQ (2B)|
+---------------------------------------------------------+
| TELEMETRY PAYLOAD:                                      |
|  - Acoustic Freq FFT: [0x4A, 0x9B, 0x11, 0xFF]         |
|  - Load Cell Tare (g): 0x0026 (38.2g)                   |
|  - IMU Feline Gait Vector: { x: +0.02, y: -0.98, z: 0 }  |
|  - Battery Voltage: 3.94V (0x0F64)                      |
+---------------------------------------------------------+
| CRC32 (4B): 0x8FA492B1                                  |
+---------------------------------------------------------+`}
                </pre>
              </div>

              <div className="flex items-center justify-between bg-[#201f21] p-3 rounded border border-white/10">
                <span className="text-[#928f9e]">Need raw MQTT topics or REST endpoints?</span>
                <button
                  onClick={() => {
                    onClose();
                    onOpenDeveloper();
                  }}
                  className="px-3 py-1.5 bg-transparent border border-[#c5c0ff] text-[#c5c0ff] hover:bg-[#c5c0ff]/10 rounded text-xs"
                >
                  Open Developer API Guide →
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#201f21] flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs font-mono-tech text-[#928f9e]">
            SYSTEM_ID: <span className="text-[#e5e1e4]">{deployment.id.toUpperCase()}</span>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => {
                alert(`Downloaded SDK bundle for ${deployment.name} (${deployment.fullSpecs.firmwareVersion})`);
              }}
              className="px-4 py-2 rounded bg-[#353437] hover:bg-[#39393b] text-[#e5e1e4] text-xs font-mono-tech flex items-center gap-2 border border-white/5 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              Download Schematics (CAD/ZIP)
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded bg-[#c5c0ff] text-[#281590] font-semibold text-xs font-mono-tech hover:brightness-110 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
