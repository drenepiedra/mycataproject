import React, { useState } from 'react';
import { X, Terminal, Copy, Check, Code, Zap, Key } from 'lucide-react';

interface DeveloperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeveloperModal: React.FC<DeveloperModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'quickstart' | 'api' | 'tester' | 'keys'>('quickstart');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [apiKey, setApiKey] = useState('fel_live_99a8b72c91834f810aa64');
  const [isGeneratingKey, setIsGeneratingKey] = useState(false);
  const [testPayload, setTestPayload] = useState(JSON.stringify({
    collar_id: 'TRK-902-FELINE',
    action: 'POLL_HYDRATION_IMU',
    whisker_safe_mode: true,
  }, null, 2));
  const [testResponse, setTestResponse] = useState<string | null>(null);
  const [isSendingTest, setIsSendingTest] = useState(false);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleGenerateKey = () => {
    setIsGeneratingKey(true);
    setTimeout(() => {
      const randomHex = Array.from({ length: 24 }, () =>
        Math.floor(Math.random() * 16).toString(16)
      ).join('');
      setApiKey(`fel_live_${randomHex}`);
      setIsGeneratingKey(false);
    }, 600);
  };

  const handleSendTest = () => {
    setIsSendingTest(true);
    setTimeout(() => {
      setTestResponse(JSON.stringify({
        status: 200,
        mesh_status: 'ACK_VERIFIED',
        collar_id: 'TRK-902-FELINE',
        latency_ms: 1.84,
        telemetry: {
          battery_pct: 93.4,
          daily_drinking_events: 5,
          total_volume_ml: 185.0,
          current_posture: 'FELINE_LOAF',
          stress_index: 0.04,
        },
        timestamp: new Date().toISOString(),
      }, null, 2));
      setIsSendingTest(false);
    }, 500);
  };

  const tsCode = `import { FelineMeshClient } from '@mycatproject/sdk';

const client = new FelineMeshClient({
  apiKey: '${apiKey}',
  region: 'global-mesh'
});

// Subscribe to real-time collar telemetry
const unsubscribe = client.telemetry.subscribe('TRK-902-FELINE', (event) => {
  console.log('Feline IMU & Eating Cadence:', event.metrics);
  if (event.hydrationAlert) {
    console.warn('Hydration alert triggered for subject');
  }
});`;

  const pythonCode = `from mycatproject import FelineClient

client = FelineClient(api_key="${apiKey}")

# Query eating patterns & bowl calibration
autofeeder = client.get_node("NODE-AF-US-08")
stats = autofeeder.dispense_with_crunch_verify(grams=20.0)
print(f"Dispensed: {stats.actual_grams}g, Whisker Clearance: 100%")`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="bg-[#1b1b1d] border border-white/15 rounded-lg w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl relative cyber-glow"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#201f21]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-[#353437] text-[#c5c0ff] border border-white/5">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-lg sm:text-xl text-[#e5e1e4]">
                Feline Developer Portal
              </h3>
              <p className="text-xs font-mono-tech text-[#928f9e]">
                FELINE-MESH PROTOCOL SPEC v3.8.2 • CLIENT SDK &amp; API RUNTIME
              </p>
            </div>
          </div>

          <button
            id="close-developer-modal-btn"
            onClick={onClose}
            className="text-[#928f9e] hover:text-white p-2 rounded hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-white/10 bg-[#131315]/70 px-6 gap-6 font-mono-tech text-xs">
          <button
            onClick={() => setActiveTab('quickstart')}
            className={`py-3 border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'quickstart'
                ? 'border-[#c5c0ff] text-[#c5c0ff] font-semibold'
                : 'border-transparent text-[#928f9e] hover:text-[#e5e1e4]'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            Client SDKs
          </button>
          <button
            onClick={() => setActiveTab('tester')}
            className={`py-3 border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'tester'
                ? 'border-[#c5c0ff] text-[#c5c0ff] font-semibold'
                : 'border-transparent text-[#928f9e] hover:text-[#e5e1e4]'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            Live Endpoint Sandbox
          </button>
          <button
            onClick={() => setActiveTab('keys')}
            className={`py-3 border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'keys'
                ? 'border-[#c5c0ff] text-[#c5c0ff] font-semibold'
                : 'border-transparent text-[#928f9e] hover:text-[#e5e1e4]'
            }`}
          >
            <Key className="w-3.5 h-3.5" />
            API Keys
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-grow">
          {activeTab === 'quickstart' && (
            <div className="space-y-6 animate-fadeIn font-mono-tech text-xs">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#c5c0ff] font-semibold">1. TypeScript / Node.js SDK</span>
                  <button
                    onClick={() => copyToClipboard(tsCode, 1)}
                    className="flex items-center gap-1 text-[#928f9e] hover:text-[#c5c0ff] transition-colors"
                  >
                    {copiedIndex === 1 ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedIndex === 1 ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <div className="bg-[#0e0e10] p-4 rounded border border-white/10 text-[#c8c4d5] overflow-x-auto">
                  <pre>{tsCode}</pre>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#c5c0ff] font-semibold">2. Python Bio-Analytics Client</span>
                  <button
                    onClick={() => copyToClipboard(pythonCode, 2)}
                    className="flex items-center gap-1 text-[#928f9e] hover:text-[#c5c0ff] transition-colors"
                  >
                    {copiedIndex === 2 ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedIndex === 2 ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <div className="bg-[#0e0e10] p-4 rounded border border-white/10 text-[#c8c4d5] overflow-x-auto">
                  <pre>{pythonCode}</pre>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tester' && (
            <div className="space-y-4 animate-fadeIn font-mono-tech text-xs">
              <div className="text-[#928f9e]">
                Transmit JSON-RPC commands to simulated feline hardware node:
              </div>

              <div>
                <label className="block text-[#c5c0ff] mb-1.5 font-semibold">
                  Request Payload (POST /v1/nodes/command):
                </label>
                <textarea
                  rows={5}
                  value={testPayload}
                  onChange={(e) => setTestPayload(e.target.value)}
                  className="w-full bg-[#0e0e10] border border-white/15 focus:border-[#c5c0ff] rounded p-3 text-[#e5e1e4] outline-none font-mono-tech"
                />
              </div>

              <div className="flex justify-end">
                <button
                  onClick={handleSendTest}
                  disabled={isSendingTest}
                  className="px-4 py-2 bg-[#c5c0ff] text-[#281590] rounded font-semibold text-xs flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all"
                >
                  <Zap className={`w-3.5 h-3.5 ${isSendingTest ? 'animate-spin' : ''}`} />
                  {isSendingTest ? 'Dispatching to Mesh...' : 'Execute Request'}
                </button>
              </div>

              {testResponse && (
                <div className="mt-4">
                  <div className="text-emerald-400 font-semibold mb-1.5 flex items-center gap-1.5">
                    <span>Response Payload (200 OK):</span>
                  </div>
                  <div className="bg-[#0e0e10] p-3.5 rounded border border-emerald-500/30 text-emerald-300 overflow-x-auto">
                    <pre>{testResponse}</pre>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'keys' && (
            <div className="space-y-6 animate-fadeIn font-mono-tech text-xs">
              <div className="bg-[#201f21] p-4 rounded border border-white/10 space-y-4">
                <div>
                  <label className="block text-[#928f9e] mb-1">YOUR ACTIVE API KEY:</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      readOnly
                      value={apiKey}
                      className="flex-grow bg-[#0e0e10] border border-white/10 rounded px-3 py-2 text-[#c5c0ff] font-mono-tech"
                    />
                    <button
                      onClick={() => copyToClipboard(apiKey, 3)}
                      className="px-3 py-2 bg-[#353437] hover:bg-[#39393b] text-[#e5e1e4] rounded border border-white/5 flex items-center gap-1"
                    >
                      {copiedIndex === 3 ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedIndex === 3 ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <span className="text-[#928f9e] text-[11px]">
                    Rate Limit: 10,000 requests / minute across edge nodes
                  </span>
                  <button
                    onClick={handleGenerateKey}
                    disabled={isGeneratingKey}
                    className="px-3 py-1.5 bg-[#c5c0ff]/10 border border-[#c5c0ff]/40 text-[#c5c0ff] hover:bg-[#c5c0ff]/20 rounded text-xs transition-colors"
                  >
                    {isGeneratingKey ? 'Rotating Secret...' : 'Roll New Secret Key'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#201f21] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded bg-[#c5c0ff] text-[#281590] font-semibold text-xs font-mono-tech hover:brightness-110 transition-all"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
