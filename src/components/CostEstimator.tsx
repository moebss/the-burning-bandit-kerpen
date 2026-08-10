import { useState } from 'react';
import { ArrowRight, Calculator } from 'lucide-react';

interface CostEstimatorProps {
  onOpenContact: () => void;
}

export default function CostEstimator({ onOpenContact }: CostEstimatorProps) {
  const [step, setStep] = useState(1);
  const [tattooSize, setTattooSize] = useState('mittel');
  const [detailLevel, setDetailLevel] = useState('realismus');
  const [bodyPart, setBodyPart] = useState('unterarm');

  const calculateEstimate = () => {
    let hours = 2;
    if (tattooSize === 'klein') hours = 1;
    if (tattooSize === 'groß') hours = 4;
    if (tattooSize === 'sleeve') hours = 8;

    if (detailLevel === 'realismus') hours += 1;
    if (detailLevel === 'coverup') hours += 2;

    const price = hours * 100;
    return { hours, price };
  };

  const est = calculateEstimate();

  return (
    <section id="rechner" className="py-20 bg-[#0b0b0e] border-b border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-amber-400 uppercase bg-slate-900/90 border border-amber-500/40 px-3.5 py-1.5 rounded-full">
            Tattoo-Rechner
          </span>
          <h2 className="font-syne text-3xl sm:text-4xl font-extrabold text-white mt-4">
            Dauer & Richtpreis Schätzen
          </h2>
          <p className="text-slate-300 text-sm mt-2 font-normal">
            Wählen Sie Wunschgröße, Detailgrad und Körperstelle – berechnen Sie in 15 Sekunden Aufwand & Orientierungspreis.
          </p>
        </div>

        <div className="bg-[#121216] border border-slate-800/80 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8">
          
          {/* Step Indicator */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <span className="text-xs font-bold uppercase text-amber-400 tracking-widest">Schritt {step} von 3</span>
            <div className="flex items-center gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`w-2.5 h-2.5 rounded-full ${step >= i ? 'bg-amber-400' : 'bg-slate-800'}`} />
              ))}
            </div>
          </div>

          {/* Step 1: Größe */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="font-syne font-bold text-xl text-white">1. Wie groß soll Ihr Tattoo ungefähr werden?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { id: 'klein', label: 'Klein (bis 5 cm)', sub: 'Schriftzug / Micro' },
                  { id: 'mittel', label: 'Mittel (5–15 cm)', sub: 'Unterarm / Wade' },
                  { id: 'groß', label: 'Groß (15–25 cm)', sub: 'Oberarm / Oberschenkel' },
                  { id: 'sleeve', label: 'Full Sleeve / Rücken', sub: 'Ganzes Projekt' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setTattooSize(item.id)}
                    className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                      tattooSize === item.id 
                        ? 'bg-slate-900 border-amber-400 shadow-md text-white' 
                        : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <span className="font-bold block text-sm">{item.label}</span>
                    <span className="text-xs text-slate-400 block mt-1">{item.sub}</span>
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStep(2)}
                className="mt-6 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs px-6 py-3 rounded-xl flex items-center gap-2 ml-auto uppercase tracking-wider cursor-pointer"
              >
                <span>Weiter zu Schritt 2</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Step 2: Detailgrad */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="font-syne font-bold text-xl text-white">2. Welchen Stil & Detailgrad bevorzugen Sie?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { id: 'fineline', label: 'Fine Line / Minimalist', sub: 'Hauchdünne Linien' },
                  { id: 'realismus', label: 'Black & Grey Realismus', sub: 'Tiefe Schattierung' },
                  { id: 'coverup', label: 'Cover-Up Projekt', sub: 'Alt-Tattoo überdecken' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setDetailLevel(item.id)}
                    className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                      detailLevel === item.id 
                        ? 'bg-slate-900 border-amber-400 shadow-md text-white' 
                        : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <span className="font-bold block text-sm">{item.label}</span>
                    <span className="text-xs text-slate-400 block mt-1">{item.sub}</span>
                  </button>
                ))}
              </div>
              <div className="flex justify-between mt-6">
                <button onClick={() => setStep(1)} className="text-xs font-bold text-slate-400 hover:underline">Zurück</button>
                <button
                  onClick={() => setStep(3)}
                  className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs px-6 py-3 rounded-xl flex items-center gap-2 uppercase tracking-wider cursor-pointer"
                >
                  <span>Weiter zu Schritt 3</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Ergebnis */}
          {step === 3 && (
            <div className="space-y-6">
              <h3 className="font-syne font-bold text-xl text-white">3. Wo soll das Tattoo platziert werden?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { id: 'unterarm', label: 'Arm / Beine', sub: 'Standardplatzierung' },
                  { id: 'brust', label: 'Brust / Rippen', sub: 'Empfindliche Zone' },
                  { id: 'ruecken', label: 'Rücken / Schulter', sub: 'Große Leinwand' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setBodyPart(item.id)}
                    className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                      bodyPart === item.id 
                        ? 'bg-slate-900 border-amber-400 shadow-md text-white' 
                        : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <span className="font-bold block text-sm">{item.label}</span>
                    <span className="text-xs text-slate-400 block mt-1">{item.sub}</span>
                  </button>
                ))}
              </div>

              {/* Result Box */}
              <div className="bg-[#0b0b0e] text-white p-6 rounded-2xl border border-amber-500/40 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl">
                <div>
                  <span className="text-xs text-amber-400 font-bold uppercase tracking-wider block">Voraussichtlicher Zeit- & Finanzbedarf:</span>
                  <span className="font-syne font-extrabold text-3xl text-white">ca. {est.hours} Stunden ({est.price} €)</span>
                  <span className="text-[11px] text-slate-400 block mt-1">Unverbindliche Orientierung • Endpreis nach Vorab-Beratung</span>
                </div>

                <button
                  onClick={onOpenContact}
                  className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs px-6 py-3.5 rounded-xl transition-all shadow-md uppercase tracking-wider cursor-pointer"
                >
                  Motiv Besprechen
                </button>
              </div>

              <button onClick={() => setStep(2)} className="text-xs font-bold text-slate-400 hover:underline">Zurück zu Schritt 2</button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
