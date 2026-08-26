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
                {type === 'terms' ? 'Términos de Servicio y Garantía de Hardware' : 'Política de Privacidad y Protección de Datos'}
              </h3>
              <p className="text-xs font-mono-tech text-[#928f9e]">
                MYCATPROJECT • COMPONENTES &amp; INGENIERÍA TECNOLÓGICA
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
              <h4 className="text-sm font-semibold text-[#c5c0ff]">1. Calidad de Componentes e Integración</h4>
              <p>
                Todos los componentes y módulos provistos a través de nuestra plataforma y tienda oficial (component.awwhitedevs.com) cuentan con verificación de funcionamiento y especificaciones técnicas oficiales para desarrollo de prototipos y producción.
              </p>
              <h4 className="text-sm font-semibold text-[#c5c0ff]">2. Seguridad y Estándares Técnicos</h4>
              <p>
                Nuestros diseños y proyectos de hardware implementan protecciones de sobretensión, bajo consumo energético y aislamiento seguro para operar de manera confiable en entornos domésticos e industriales.
              </p>
              <h4 className="text-sm font-semibold text-[#c5c0ff]">3. Propiedad Intelectual y Soporte</h4>
              <p>
                Brindamos soporte técnico directo sobre nuestros productos y servicios a medida, respetando la confidencialidad y requerimientos específicos de cada cliente.
              </p>
            </>
          ) : (
            <>
              <h4 className="text-sm font-semibold text-[#c5c0ff]">1. Tratamiento de Información Personal</h4>
              <p>
                Los datos de contacto provistos a través de nuestro formulario o correo electrónico se utilizan exclusivamente para responder a tus consultas comerciales y prestar los servicios técnicos solicitados.
              </p>
              <h4 className="text-sm font-semibold text-[#c5c0ff]">2. Privacidad y Seguridad</h4>
              <p>
                No compartimos, vendemos ni cedemos datos personales a terceros. Toda comunicación se gestiona bajo estrictos criterios de confidencialidad y buenas prácticas de seguridad informática.
              </p>
              <h4 className="text-sm font-semibold text-[#c5c0ff]">3. Contacto Directo</h4>
              <p>
                Para cualquier solicitud relacionada con tus datos o proyectos, puedes comunicarte directamente al correo electrónico oficial: drenepiedra@gmail.com.
              </p>
            </>
          )}
        </div>

        <div className="px-6 py-4 border-t border-white/10 bg-[#201f21] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded bg-[#c5c0ff] text-[#281590] font-semibold text-xs font-mono-tech hover:brightness-110 transition-all"
          >
            Entendido y Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};
