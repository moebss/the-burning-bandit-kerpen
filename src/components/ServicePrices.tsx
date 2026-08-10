import { Check, ArrowRight, ShieldCheck } from 'lucide-react';

interface ServicePricesProps {
  onOpenContact: () => void;
}

export default function ServicePrices({ onOpenContact }: ServicePricesProps) {
  const services = [
    {
      title: 'Black & Grey Realismus',
      price: 'ab 120 €',
      time: 'Tagessatz / Stundensatz',
      desc: 'Fotorealistische Porträts, Tierschädel, Chicano & Schatten-Tattoos mit tiefen Kontrasten.',
      highlights: ['Freihand & Stencil Gestaltung', 'Langlebige Schattierung', 'Inkl. Wundnachversorgung']
    },
    {
      title: 'Fine Line & Minimalist',
      price: 'ab 80 €',
      time: '30–60 Min',
      desc: 'Hauchdünne Linien, geometrische Muster, Schriftzüge & filigrane Motive mit Micro-Needling.',
      highlights: ['Präzise 1-Needle Technik', 'Kaum Schwellung', 'Perfekt für erste Tattoos']
    },
    {
      title: 'Cover-Up & Sanierung',
      price: 'ab 150 €',
      time: 'Individuell',
      desc: 'Professionelles Überstechen alter oder ungewünschter Jugendsünden & Narben.',
      highlights: ['Kostenfreie Vorab-Analyse', 'Spezielle Abdeck-Technik', 'Neues Wunschmotiv garantiert']
    },
    {
      title: 'Neo-Traditional & Colour',
      price: 'ab 100 €',
      time: 'Stundensatz',
      desc: 'Kräftige Konturen, lebendige Farbpigmente und moderne Interpretation klassischer Tattoos.',
      highlights: ['REACH-zertifizierte Farben', 'Gegen Ausbleichen geschützt', 'Kräftige Farbsättigung']
    },
    {
      title: 'Piercing & Body Modification',
      price: 'ab 35 €',
      time: '20 Min',
      desc: 'Ohr, Nase, Helix, Tragus, Bauchnabel & Intim – steril gepierct mit Titan-Erstschmuck.',
      highlights: ['Medizinischer Titan-Schmuck', 'Inkl. Pflegemittel & Nachkontrolle', 'Schmerzarm gekühlt']
    },
    {
      title: 'Custom Wannado & Flash',
      price: 'ab 90 €',
      time: 'Variabel',
      desc: 'Exklusive Unikat-Zeichnungen unserer Tattoo Artists – nur einmalig vergeben!',
      highlights: ['100% Unikat-Garantie', 'Sofortige Wunschtermin-Vergabe', 'Sonderpreis für Flashs']
    }
  ];

  return (
    <section id="stile" className="py-20 bg-[#0b0b0e] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-amber-400 uppercase bg-slate-900/90 border border-amber-500/40 px-3.5 py-1.5 rounded-full">
            Leistungen & Tattoo-Stile
          </span>
          <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 text-balance">
            Tattoo-Kunst & Piercings auf Höchstem Niveau
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-4 text-pretty font-normal">
            Jedes Tattoo ist eine einzigartige Erinnerung fürs Leben. Wir setzen Ihr Wunschmotiv präzise & schmerzarm um.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="bg-[#121216] border border-slate-800/80 rounded-3xl p-7 hover:border-amber-500/50 transition-all shadow-lg flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <h3 className="font-syne font-bold text-xl text-white leading-snug">{s.title}</h3>
                  <span className="font-syne font-extrabold text-amber-400 text-lg shrink-0 ml-2">{s.price}</span>
                </div>

                <span className="text-[11px] font-bold text-amber-400/80 uppercase tracking-widest block">Abrechnung: {s.time}</span>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">{s.desc}</p>

                <ul className="space-y-2 text-xs text-slate-300 font-medium pt-2">
                  {s.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={onOpenContact}
                aria-label={`Motiv für ${s.title} anfragen`}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 hover:border-amber-500/50 font-bold text-xs py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer"
              >
                <span>Motiv Anfragen</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
