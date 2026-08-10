import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Sind eure Tattoofarben nach der aktuellen EU REACH-Verordnung zugelassen?',
      a: 'Ja, 100%! Wir verwenden im The Burning Bandit ausschließlich REACH-konforme Tattoofarben zertifizierter deutscher Hersteller. Alle Pigmente entsprechen den strengen EU-Sicherheitsstandards.'
    },
    {
      q: 'Muss ich vorher einen Beratungstermin ausmachen oder kann ich einfach vorbeikommen?',
      a: 'Für kleine Flashs oder Piercings können Sie während der Öffnungszeiten (Di–Fr 12–18:30 Uhr, Sa 12–16 Uhr) vorbeikommen. Für größere Tattoos empfehlen wir eine kurze Absprache per WhatsApp oder über unser Formular.'
    },
    {
      q: 'Wie funktioniert ein Cover-Up bei einem alten oder dunklen Tattoo?',
      a: 'Wir analysieren Ihr bestehendes Tattoo kostenfrei. Durch gezielten Einsatz von dunkleren Kontrasten und neuen Strukturen entwerfen wir ein Motiv, das die Altlasten vollständig unsichtbar macht.'
    },
    {
      q: 'Wie bereite ich mich am besten auf meinen Tattoo-Termin vor?',
      a: 'Schlafen Sie ausreichend, trinken Sie genug Wasser und essen Sie vorher eine kohlenhydratreiche Mahlzeit. Verzichten Sie 24 Stunden vorher auf Alkohol und blutverdünnende Medikamente.'
    },
    {
      q: 'Welche Zahlungsmöglichkeiten bietet das Studio an?',
      a: 'Sie können bei uns bequem bar oder per EC-Karte / Kontaktlos (Apple Pay, Google Pay) bezahlen.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-[#121216] border-b border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-amber-400 uppercase bg-slate-900/90 border border-amber-500/40 px-3.5 py-1.5 rounded-full">
            Häufige Fragen
          </span>
          <h2 className="font-syne text-3xl sm:text-4xl font-extrabold text-white mt-4">
            Fragen & Antworten (FAQ)
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-[#0b0b0e] border border-slate-800 rounded-2xl overflow-hidden shadow-sm">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left p-5 flex items-center justify-between font-syne font-bold text-white text-base focus:outline-none"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-amber-400 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              
              {openIndex === idx && (
                <div className="px-5 pb-5 text-xs text-slate-300 leading-relaxed font-normal border-t border-slate-800/60 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
