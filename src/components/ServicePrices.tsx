import { Check, ArrowRight, ShieldCheck } from 'lucide-react';
import imgBlackGrey from '../images/tattoo_blackgrey.jpg';
import imgFineLine from '../images/tattoo_fineline.jpg';
import imgCoverUp from '../images/tattoo_coverup.jpg';
import imgGallery1 from '../images/gallery_1.jpg';
import imgGallery2 from '../images/gallery_2.jpg';
import imgStudio from '../images/studio_interior.jpg';

interface ServicePricesProps {
  onOpenContact: () => void;
}

export default function ServicePrices({ onOpenContact }: ServicePricesProps) {
  const services = [
    {
      title: 'Black & Grey Realismus',
      price: 'ab 120 €',
      time: 'Tagessatz / Stundensatz',
      image: imgBlackGrey,
      desc: 'Fotorealistische Porträts, Tierschädel, Chicano & Schatten-Tattoos mit tiefen Kontrasten.',
      highlights: ['Freihand & Stencil Gestaltung', 'Langlebige Schattierung', 'Inkl. Wundnachversorgung']
    },
    {
      title: 'Fine Line & Minimalist',
      price: 'ab 80 €',
      time: '30–60 Min',
      image: imgFineLine,
      desc: 'Hauchdünne Linien, geometrische Muster, Schriftzüge & filigrane Motive mit Micro-Needling.',
      highlights: ['Präzise 1-Needle Technik', 'Kaum Schwellung', 'Perfekt für erste Tattoos']
    },
    {
      title: 'Cover-Up & Sanierung',
      price: 'ab 150 €',
      time: 'Individuell',
      image: imgCoverUp,
      desc: 'Professionelles Überstechen alter oder ungewünschter Jugendsünden & Narben.',
      highlights: ['Kostenfreie Vorab-Analyse', 'Spezielle Abdeck-Technik', 'Neues Wunschmotiv garantiert']
    },
    {
      title: 'Neo-Traditional & Colour',
      price: 'ab 100 €',
      time: 'Stundensatz',
      image: imgGallery1,
      desc: 'Kräftige Konturen, lebendige Farbpigmente und moderne Interpretation klassischer Tattoos.',
      highlights: ['REACH-zertifizierte Farben', 'Gegen Ausbleichen geschützt', 'Kräftige Farbsättigung']
    },
    {
      title: 'Piercing & Body Modification',
      price: 'ab 35 €',
      time: '20 Min',
      image: imgGallery2,
      desc: 'Ohr, Nase, Helix, Tragus, Bauchnabel & Intim – steril gepierct mit Titan-Erstschmuck.',
      highlights: ['Medizinischer Titan-Schmuck', 'Inkl. Pflegemittel & Nachkontrolle', 'Schmerzarm gekühlt']
    },
    {
      title: 'Custom Wannado & Flash',
      price: 'ab 90 €',
      time: 'Variabel',
      image: imgStudio,
      desc: 'Exklusive Unikat-Zeichnungen unserer Tattoo Artists – nur einmalig vergeben!',
      highlights: ['100% Unikat-Garantie', 'Sofortige Wunschtermin-Vergabe', 'Sonderpreis für Flashs']
    }
  ];

  return (
    <section id="stile" className="py-20 bg-[#0b0b0e] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-[#c9a84c] uppercase bg-[#121216] border border-[#c9a84c]/30 px-3.5 py-1.5 rounded-full inline-block">
            Leistungen & Tattoo-Stile
          </span>
          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Tattoo-Kunst & Piercings auf Höchstem Niveau
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-normal max-w-2xl mx-auto">
            Jedes Tattoo ist eine einzigartige Erinnerung fürs Leben. Wir setzen Ihr Wunschmotiv präzise & schmerzarm um.
          </p>
        </div>

        {/* Services Grid with Visual Impression Header Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="group bg-[#121216] border border-slate-800/80 rounded-3xl overflow-hidden hover:border-[#c9a84c]/50 transition-all duration-300 shadow-xl flex flex-col justify-between">
              
              <div>
                {/* Visual Header Impression Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover filter brightness-90 contrast-105 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-black/30" />
                  
                  {/* Floating Price Tag */}
                  <div className="absolute bottom-3 right-3 bg-[#0b0b0e]/90 backdrop-blur-md border border-[#c9a84c]/40 px-3.5 py-1 rounded-xl shadow-lg">
                    <span className="font-outfit font-extrabold text-[#c9a84c] text-lg">{s.price}</span>
                  </div>

                  {/* Rating/Shield Badge */}
                  <div className="absolute top-3 left-3 bg-[#0b0b0e]/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-slate-700/60 flex items-center gap-1.5">
                    <ShieldCheck className="w-3 h-3 text-[#c9a84c]" />
                    <span className="text-[11px] font-bold text-slate-200 uppercase tracking-wider">REACH-Safe</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-4">
                  <h3 className="font-outfit font-bold text-xl text-white leading-snug group-hover:text-[#c9a84c] transition-colors">
                    {s.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {s.desc}
                  </p>

                  <ul className="space-y-2 text-xs text-slate-300 font-medium pt-2 border-t border-slate-800/80">
                    {s.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#c9a84c] shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={onOpenContact}
                  aria-label={`Motiv für ${s.title} anfragen`}
                  className="w-full bg-[#c9a84c] hover:bg-[#b8973b] text-slate-950 font-bold text-xs py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer shadow-md group-hover:shadow-lg"
                >
                  <span>Motiv Anfragen</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
