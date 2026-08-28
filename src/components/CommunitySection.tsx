import React, { useState } from 'react';
import { Mail, Copy, Check, ExternalLink, ShoppingBag, MessageSquare, Send, Sparkles } from 'lucide-react';

export const CommunitySection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const myEmail = 'drenepiedra@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(myEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="community" className="py-16 px-6 max-w-6xl mx-auto border-t border-white/5 mt-16 scroll-mt-24">
      <div className="text-center mb-12">
        <h2 className="font-semibold text-2xl sm:text-3xl md:text-[32px] text-[#c5c0ff] tracking-tight">
          Hablemos de tu Próximo Proyecto
        </h2>
        <p className="text-sm font-mono-tech text-[#928f9e] mt-2">
          CONTACTO DIRECTO • ASESORÍA PERSONALIZADA • RESPUESTA RÁPIDA
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Card 1: Contacto Principal con Correo Destacado */}
        <div className="bg-[#1b1b1d] border border-[#c5c0ff]/30 rounded-lg p-6 sm:p-8 cyber-glow flex flex-col lg:col-span-2 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded bg-[#201f21] border border-[#c5c0ff]/30 flex items-center justify-center text-[#c5c0ff]">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono-tech text-xs text-[#c5c0ff] uppercase tracking-wider block">
                Canal de Contacto Oficial
              </span>
              <h3 className="font-semibold text-xl text-[#e5e1e4]">
                Escríbenos Directamente
              </h3>
            </div>
          </div>

          <p className="text-sm text-[#c8c4d5] leading-relaxed mb-6 font-normal">
            ¿Tienes una idea de hardware, necesitas asesoría técnica o quieres colaborar en un desarrollo? Estamos a tu disposición para responder cualquier consulta.
          </p>

          {/* Email Box Highlighted */}
          <div className="bg-[#131315] border border-white/10 rounded-lg p-4 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <div className="p-2 rounded bg-[#c5c0ff]/10 text-[#c5c0ff] shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left min-w-0">
                <span className="text-[11px] font-mono-tech text-[#928f9e] uppercase block">
                  Correo electrónico
                </span>
                <a
                  href={`mailto:${myEmail}`}
                  className="text-sm sm:text-base font-mono-tech font-bold text-[#c5c0ff] hover:underline break-all"
                >
                  {myEmail}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                id="copy-email-btn"
                onClick={handleCopyEmail}
                className="px-3 py-2 rounded bg-[#201f21] hover:bg-[#2c2b2e] border border-white/10 text-xs font-mono-tech text-[#c8c4d5] hover:text-[#c5c0ff] transition-all flex items-center gap-1.5"
                title="Copiar correo al portapapeles"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">¡Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${myEmail}`}
                className="px-4 py-2 rounded bg-[#c5c0ff] text-[#281590] text-xs font-mono-tech font-semibold hover:brightness-110 transition-all flex items-center gap-1.5"
              >
                <span>Enviar Email</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Message Form */}
          <form onSubmit={handleSendMessage} className="space-y-3 pt-4 border-t border-white/10">
            <span className="text-xs font-mono-tech text-[#928f9e] uppercase block">
              O envíanos un mensaje rápido desde aquí:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                required
                placeholder="Tu Nombre"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-[#131315] border border-white/10 focus:border-[#c5c0ff] rounded px-3 py-2 text-xs text-[#e5e1e4] font-mono-tech outline-none transition-all"
              />
              <input
                type="email"
                required
                placeholder="Tu Correo Electrónico"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-[#131315] border border-white/10 focus:border-[#c5c0ff] rounded px-3 py-2 text-xs text-[#e5e1e4] font-mono-tech outline-none transition-all"
              />
            </div>
            <textarea
              required
              rows={2}
              placeholder="Cuéntanos brevemente sobre tu proyecto o consulta..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-[#131315] border border-white/10 focus:border-[#c5c0ff] rounded px-3 py-2 text-xs text-[#e5e1e4] font-mono-tech outline-none transition-all resize-none"
            />
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              {messageSent ? (
                <span className="text-xs font-mono-tech text-emerald-400 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 shrink-0" /> ¡Mensaje enviado con éxito!
                </span>
              ) : (
                <span className="text-[11px] font-mono-tech text-[#928f9e]">
                  Respuesta garantizada en menos de 24 horas
                </span>
              )}
              <button
                type="submit"
                className="px-5 py-2 bg-[#c5c0ff]/20 hover:bg-[#c5c0ff]/30 text-[#c5c0ff] border border-[#c5c0ff]/40 rounded text-xs font-mono-tech uppercase tracking-wider transition-all flex items-center gap-1.5 shrink-0"
              >
                <Send className="w-3 h-3" />
                <span>Enviar Mensaje</span>
              </button>
            </div>
          </form>
        </div>

        {/* Card 2: Enlaces a Tienda y Redes */}
        <div className="bg-[#1b1b1d] border border-white/10 rounded-lg p-6 cyber-glow flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded bg-[#201f21] border border-white/10 flex items-center justify-center text-[#c5c0ff] mb-4">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-lg text-[#e5e1e4] mb-2">
              1. Tienda Oficial Online
            </h3>
            <h3 className="font-semibold text-lg text-[#e5e1e4] mb-2">
              2. Academia de Desarrollo
            </h3>
            <p className="text-xs text-[#c8c4d5] leading-relaxed mb-4">
              Visita nuestra tienda y academia para adquirir componentes de hardware, componentes para prototipos y sensores certificados.
            </p>
          </div>

          <div className="space-y-3">
            <a
              href="https://component.aewhitedevs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 bg-[#c5c0ff] text-[#281590] rounded text-xs font-mono-tech font-semibold uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2 min-w-0"
            >
              <span className="truncate">component.aewhitedevs.com</span>
              <ExternalLink className="w-3.5 h-3.5 shrink-0" />
            </a>
            <a
              href="https://drenepiedra.github.io/AcademyLearn/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 bg-[#c5c0ff] text-[#281590] rounded text-xs font-mono-tech font-semibold uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2 min-w-0"
            >
              <span className="truncate">drenepiedra.github.io/AcademyLearn/</span>
              <ExternalLink className="w-3.5 h-3.5 shrink-0" />
            </a>

            <div className="p-3 rounded bg-[#131315] border border-white/5 text-xs text-[#c8c4d5] space-y-1">
              <div className="font-mono-tech text-[10px] text-[#928f9e] uppercase">
                Ubicación &amp; Despachos:
              </div>
              <p className="text-xs text-[#e5e1e4]">
                California #17 / Regla y Caridad .rpto Modelo . mncipio Regla
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
