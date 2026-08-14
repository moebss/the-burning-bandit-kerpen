import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export interface LegalModalsProps {
  type: 'impressum' | 'datenschutz' | null;
  onClose: () => void;
}

export default function LegalModals({ type, onClose }: LegalModalsProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (type) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 animate-in fade-in duration-300">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md" 
        onClick={onClose}
        aria-hidden="true"
      />
      <div 
        className="relative w-full max-w-3xl max-h-[85vh] bg-[#121216] border border-[#262630] text-slate-200 rounded-3xl shadow-2xl flex flex-col z-10"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <h2 id="modal-title" className="font-outfit text-2xl font-bold text-white">
            {type === 'impressum' ? 'Impressum' : 'Datenschutzerklärung'}
          </h2>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors cursor-pointer"
            aria-label="Schließen"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 sm:p-8 overflow-y-auto overscroll-contain text-slate-300 text-sm leading-relaxed space-y-4">
          {type === 'impressum' ? (
            <>
              <h3 className="font-outfit font-bold text-white text-lg">Angaben gemäß § 5 DDG</h3>
              <p>
                The Burning Bandit (Independent Ink)<br />
                Inhaber: The Burning Bandit Team<br />
                Hauptstraße 231<br />
                50169 Kerpen-Horrem
              </p>
              
              <h3 className="font-outfit font-bold text-white text-lg pt-2">Kontakt</h3>
              <p>
                Telefon: 02273 9499600<br />
                E-Mail: kontakt@the-burning-bandit.de
              </p>
              
              <h3 className="font-outfit font-bold text-white text-lg pt-2">Aufsichtsbehörde & Berufsbezeichnung</h3>
              <p>
                Gewerbeamt der Stadt Kerpen<br />
                Berufsbezeichnung: Tätowier- & Piercinggewerbe<br />
                Verliehen in: Bundesrepublik Deutschland
              </p>
              
              <h3 className="font-outfit font-bold text-white text-lg pt-2">Streitbeilegung</h3>
              <p className="text-xs text-slate-400">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit. Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </>
          ) : (
            <>
              <h3 className="font-outfit font-bold text-white text-lg">1. Datenschutz auf einen Blick</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
              
              <h3 className="font-outfit font-bold text-white text-lg pt-2">2. Verantwortliche Stelle</h3>
              <p>
                The Burning Bandit<br />
                Hauptstraße 231<br />
                50169 Kerpen-Horrem<br />
                Telefon: 02273 9499600
              </p>
              
              <h3 className="font-outfit font-bold text-white text-lg pt-2">3. Datenerfassung auf dieser Website</h3>
              <p>
                <strong>Kontaktformular & Motiv-Anfragen:</strong> Wenn Sie uns per Kontaktformular oder WhatsApp Anfragen zukommen lassen, werden Ihre Angaben zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p>
                <strong>Schriftarten (Self-Hosted):</strong> Diese Seite nutzt lokal eingebundene Schriftarten (@fontsource) ohne Verbindung zu externen Servern wie Google Fonts. Ein Datentransfer an Drittanbieter findet nicht statt.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
