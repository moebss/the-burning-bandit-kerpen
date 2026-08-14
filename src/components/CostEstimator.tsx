import { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CostEstimatorProps {
  onOpenContact: () => void;
}

export default function CostEstimator({ onOpenContact }: CostEstimatorProps) {
  const [step, setStep] = useState(1);
  const [style, setStyle] = useState('blackgrey');
  const [size, setSize] = useState('mittel');
  const [complexity, setComplexity] = useState('detail');

  const calculateEstimate = () => {
    let base = 120;
    if (style === 'fineline') base = 80;
    if (style === 'coverup') base = 160;
    if (style === 'colour') base = 130;

    if (size === 'klein') base += 30;
    if (size === 'mittel') base += 100;
    if (size === 'gross') base += 280;

    if (complexity === 'coverup_hard') base += 80;
    if (complexity === 'realismus') base += 60;

    return { min: base, max: Math.round(base * 1.35) };
  };

  const est = calculateEstimate();

  return (
    <section id="rechner" className="py-24 bg-[#0a0a0c] border-b border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs font-semibold tracking-widest text-[#c9a84c] uppercase bg-[#121216] border border-[#c9a84c]/30 px-3.5 py-1.5 rounded-full inline-block">
            Tattoo-Kalkulator & Motiv-Finder
          </span>
          <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-white">
            Preiseinschätzung in 3 Schritten
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-normal max-w-xl mx-auto">
            Wähle deinen Wunsch-Stil, Größe und Detailgrad für eine transparente Vorab-Kalkulation.
          </p>
        </div>

        <div className="bg-[#121216] border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
          
          {/* Step Bar */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <span className="text-xs font-bold uppercase text-[#c9a84c] tracking-widest">
              Schritt {step} von 3
            </span>
            <div className="flex items-center gap-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all ${
                    step === i ? 'w-8 bg-[#c9a84c]' : step > i ? 'w-4 bg-slate-600' : 'w-2 bg-slate-800'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Step 1: Stil */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="font-outfit font-bold text-2xl text-white">1. Welcher Tattoo-Stil soll es werden?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: 'blackgrey', label: 'Black & Grey Realismus', desc: 'Schatten, Porträts & Tiefe' },
                  { id: 'fineline', label: 'Fine Line & Minimalismus', desc: 'Filigran, dünne Linien, Schrift' },
                  { id: 'coverup', label: 'Cover-Up & Narbenüberdeckung', desc: 'Alte Motive überstechen' },
                  { id: 'colour', label: 'Neo-Traditional & Colour', desc: 'Farbintensiv & kräftige Kontur' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setStyle(item.id)}
                    className={`p-5 rounded-2xl text-left border transition-all cursor-pointer ${
                      style === item.id 
                        ? 'bg-[#0a0a0c] border-[#c9a84c] shadow-lg text-white ring-1 ring-[#c9a84c]' 
                        : 'bg-[#0a0a0c]/50 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <span className="font-outfit font-bold block text-base text-white">{item.label}</span>
                    <span className="text-xs text-slate-400 block mt-1.5 leading-relaxed">{item.desc}</span>
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStep(2)}
                className="mt-6 bg-[#c9a84c] hover:bg-[#b8973b] text-slate-950 font-bold text-xs px-8 py-4 rounded-xl flex items-center gap-2 ml-auto uppercase tracking-wider cursor-pointer shadow-md transition-colors"
              >
                <span>Weiter zu Schritt 2</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Step 2: Größe */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="font-outfit font-bold text-2xl text-white">2. Wie groß wird das Motiv ungefähr?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { id: 'klein', label: 'Klein (bis 10 cm)', desc: 'Handgelenk, Knöchel, Nacken' },
                  { id: 'mittel', label: 'Mittel (10–20 cm)', desc: 'Unterarm, Oberarm, Wade' },
                  { id: 'gross', label: 'Groß (20+ cm / Sleeve)', desc: 'Full Sleeve, Rücken, Oberschenkel' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSize(item.id)}
                    className={`p-5 rounded-2xl text-left border transition-all cursor-pointer ${
                      size === item.id 
                        ? 'bg-[#0a0a0c] border-[#c9a84c] shadow-lg text-white ring-1 ring-[#c9a84c]' 
                        : 'bg-[#0a0a0c]/50 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <span className="font-outfit font-bold block text-base text-white">{item.label}</span>
                    <span className="text-xs text-slate-400 block mt-1.5 leading-relaxed">{item.desc}</span>
                  </button>
                ))}
              </div>
              <div className="flex items-center justify-between pt-4">
                <button
                  onClick={() => setStep(1)}
                  className="text-slate-400 hover:text-white text-xs font-semibold uppercase tracking-wider cursor-pointer"
                >
                  Zurück
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="bg-[#c9a84c] hover:bg-[#b8973b] text-slate-950 font-bold text-xs px-8 py-4 rounded-xl flex items-center gap-2 uppercase tracking-wider cursor-pointer shadow-md transition-colors"
                >
                  <span>Weiter zu Schritt 3</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Detailgrad & Kalkulation */}
          {step === 3 && (
            <div className="space-y-6">
              <h3 className="font-outfit font-bold text-2xl text-white">3. Wie hoch ist der gewünschte Detailgrad?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { id: 'clean', label: 'Minimalistisch / Clean', desc: 'Klare Linien, wenig Schatten' },
                  { id: 'detail', label: 'Hoher Detailgrad', desc: 'Ausgearbeitete Schattierungen' },
                  { id: 'realismus', label: 'Fotorealismus / Custom', desc: 'Maximale Tiefe & Detailfülle' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setComplexity(item.id)}
                    className={`p-5 rounded-2xl text-left border transition-all cursor-pointer ${
                      complexity === item.id 
                        ? 'bg-[#0a0a0c] border-[#c9a84c] shadow-lg text-white ring-1 ring-[#c9a84c]' 
                        : 'bg-[#0a0a0c]/50 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <span className="font-outfit font-bold block text-base text-white">{item.label}</span>
                    <span className="text-xs text-slate-400 block mt-1.5 leading-relaxed">{item.desc}</span>
                  </button>
                ))}
              </div>

              {/* Result Box */}
              <div className="bg-[#0a0a0c] border border-[#c9a84c]/40 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest block">Geschätzter Richtpreis:</span>
                  <span className="font-outfit text-3xl sm:text-4xl font-extrabold text-white block mt-1">
                    ca. <span className="text-[#c9a84c]">{est.min} € – {est.max} €</span>
                  </span>
                  <span className="text-[11px] text-slate-400 mt-1 block">Inkl. Vorgespräch, Stencil & steriler Nachsorge</span>
                </div>

                <button
                  onClick={onOpenContact}
                  className="w-full sm:w-auto bg-[#c9a84c] hover:bg-[#b8973b] text-slate-950 font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-lg transition-colors"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Motiv jetzt unverbindlich anfragen</span>
                </button>
              </div>

              <button
                onClick={() => setStep(2)}
                className="text-slate-400 hover:text-white text-xs font-semibold uppercase tracking-wider cursor-pointer block"
              >
                Zurück zu Schritt 2
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
