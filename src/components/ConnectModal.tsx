import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Mail, Building, User, MessageSquare } from 'lucide-react';

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

export const ConnectModal: React.FC<ConnectModalProps> = ({
  isOpen,
  onClose,
  defaultTopic = 'General Collaboration',
}) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    interest: defaultTopic,
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `FEL-REQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(id);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="bg-[#1b1b1d] border border-white/15 rounded-lg w-full max-w-lg overflow-hidden flex flex-col shadow-2xl relative cyber-glow"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#201f21]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-[#353437] text-[#c5c0ff] border border-white/5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-[#e5e1e4]">
                Connect with mycatproject
              </h3>
              <p className="text-xs font-mono-tech text-[#928f9e]">
                ESTABLISH ENCRYPTED FELINE TELEMETRY LINK
              </p>
            </div>
          </div>

          <button
            id="close-connect-modal-btn"
            onClick={onClose}
            className="text-[#928f9e] hover:text-white p-2 rounded hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 space-y-4 animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-lg text-[#e5e1e4]">
                Connection Request Dispatched
              </h4>
              <p className="text-xs text-[#c8c4d5] leading-relaxed max-w-sm mx-auto">
                Your dispatch has been queued in the Feline Mesh Gateway. Our engineering team
                will respond to <strong className="text-[#c5c0ff]">{formData.email}</strong> within 24 hours.
              </p>
              <div className="bg-[#201f21] p-3 rounded border border-white/10 font-mono-tech text-xs text-[#c5c0ff] inline-block">
                TICKET ID: {ticketId}
              </div>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#c5c0ff] text-[#281590] rounded font-semibold text-xs font-mono-tech uppercase tracking-wider hover:brightness-110 transition-all"
                >
                  Return to Platform
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono-tech text-[#c8c4d5] mb-1">
                  FULL NAME / CALLSIGN *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#928f9e] absolute left-3 top-2.5" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Alex Mercer"
                    className="w-full bg-[#131315] border border-white/10 focus:border-[#c5c0ff] rounded pl-9 pr-3 py-2 text-xs text-[#e5e1e4] font-mono-tech outline-none transition-all placeholder:text-[#928f9e]/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono-tech text-[#c8c4d5] mb-1">
                  EMAIL ADDRESS *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#928f9e] absolute left-3 top-2.5" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@feline-lab.org"
                    className="w-full bg-[#131315] border border-white/10 focus:border-[#c5c0ff] rounded pl-9 pr-3 py-2 text-xs text-[#e5e1e4] font-mono-tech outline-none transition-all placeholder:text-[#928f9e]/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono-tech text-[#c8c4d5] mb-1">
                  ORGANIZATION / HARDWARE LAB
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-[#928f9e] absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. BioFeline Systems LLC"
                    className="w-full bg-[#131315] border border-white/10 focus:border-[#c5c0ff] rounded pl-9 pr-3 py-2 text-xs text-[#e5e1e4] font-mono-tech outline-none transition-all placeholder:text-[#928f9e]/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono-tech text-[#c8c4d5] mb-1">
                  INQUIRY TRACK
                </label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full bg-[#131315] border border-white/10 focus:border-[#c5c0ff] rounded px-3 py-2 text-xs text-[#e5e1e4] font-mono-tech outline-none transition-all"
                >
                  <option value="General Collaboration">General Technical Inquiry</option>
                  <option value="Technical Consulting">Technical Consulting &amp; Architecture</option>
                  <option value="IoT Development">Custom IoT Hardware / Firmware Design</option>
                  <option value="AI for Felines">Feline ML Behavioral Datasets &amp; Models</option>
                  <option value="Hardware Testing">Collar &amp; Feeder Pilot Program</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono-tech text-[#c8c4d5] mb-1">
                  PROJECT SPECIFICATION OR NOTE
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-[#928f9e] absolute left-3 top-2.5" />
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your hardware requirements or integration goals..."
                    className="w-full bg-[#131315] border border-white/10 focus:border-[#c5c0ff] rounded pl-9 pr-3 py-2 text-xs text-[#e5e1e4] font-mono-tech outline-none transition-all placeholder:text-[#928f9e]/50"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#c5c0ff] text-[#281590] rounded font-semibold text-xs font-mono-tech uppercase tracking-wider hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(197,192,255,0.2)]"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Link Request</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
