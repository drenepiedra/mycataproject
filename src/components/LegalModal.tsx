import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface LegalModalProps {
  type: 'terms' | 'privacy' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="bg-[#1b1b1d] border border-white/15 rounded-lg w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl relative cyber-glow"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#201f21]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-[#353437] text-[#c5c0ff] border border-white/5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-[#e5e1e4]">
                {type === 'terms' ? 'Terms of Hardware & Protocol Service' : 'Feline Data Privacy Policy'}
              </h3>
              <p className="text-xs font-mono-tech text-[#928f9e]">
                MYCATPROJECT OPEN SPECIFICATION &amp; BIO-TELEMETRY CHARTER
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-[#928f9e] hover:text-white p-2 rounded hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4 text-xs text-[#c8c4d5] leading-relaxed">
          {type === 'terms' ? (
            <>
              <h4 className="text-sm font-semibold text-[#c5c0ff]">1. Engineering &amp; Hardware Deployment</h4>
              <p>
                All hardware schematics, firmware binaries, and CAD files provided by mycatproject are licensed for both open-source educational tinkering and commercial device integration under the Apache-2.0 and CERN-OHL-P hardware licenses.
              </p>
              <h4 className="text-sm font-semibold text-[#c5c0ff]">2. Animal Safety &amp; Whisker Clearance Mandate</h4>
              <p>
                Any physical feeder, wearable collar, or robotic accessory manufactured using mycatproject specifications must strictly satisfy the <em>ISO-23849 Feline Whisker-Clearance</em> and <em>UL 2900-2</em> acoustic noise threshold (&lt;18 dB) to guarantee zero stress induction in household felines.
              </p>
              <h4 className="text-sm font-semibold text-[#c5c0ff]">3. Mesh Protocol Participation</h4>
              <p>
                Collar nodes operating on the sub-GHz or Bluetooth mesh network transmit encrypted, anonymized metabolic telemetry. You retain full ownership and localized sovereignty over your cat's health data.
              </p>
            </>
          ) : (
            <>
              <h4 className="text-sm font-semibold text-[#c5c0ff]">1. Local-First Feline Biometric Data</h4>
              <p>
                All continuous eating crunch audio data, IMU acceleration vectors, and litter box weight metrics are processed on-device (Edge TinyML). Raw audio or video never leaves your local mesh gateway without explicit hardware token approval.
              </p>
              <h4 className="text-sm font-semibold text-[#c5c0ff]">2. GPS &amp; Spatial Privacy</h4>
              <p>
                Feline territory coordinates are encrypted with localized zero-knowledge public keys. Cloud relays only observe cryptographic heartbeat confirmations, preventing tracking of private home perimeters.
              </p>
              <h4 className="text-sm font-semibold text-[#c5c0ff]">3. Veterinary Research Contribution</h4>
              <p>
                Users may opt-in to donate anonymized hydration and renal risk profiles to open-source veterinary universities to advance feline longevity research globally.
              </p>
            </>
          )}
        </div>

        <div className="px-6 py-4 border-t border-white/10 bg-[#201f21] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded bg-[#c5c0ff] text-[#281590] font-semibold text-xs font-mono-tech hover:brightness-110 transition-all"
          >
            I Understand &amp; Agree
          </button>
        </div>
      </div>
    </div>
  );
};
