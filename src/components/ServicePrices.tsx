import { Clock, Sparkles, Check, ArrowRight, ShieldCheck } from 'lucide-react';
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
  const styles = [
    {
      title: 'Black & Grey Realismus',
      price: 'ab 120 €',
      time: 'Tagessatz / Stundensatz',
      image: imgBlackGrey,
      badge: null,
      desc: 'Fotorealistische Porträts, Chicano Art, Tierschädel & Schatten-Tattoos mit tiefen Kontrasten.',
      features: ['Individuelle Stencil- & Freihand-Planung', 'Langlebige, tiefe Schattierungen', 'Inkl. professioneller Wundnachsorge']
    },
    {
      title: 'Fine Line & Minimalist',
      price: 'ab 80 €',
      time: '30–60 Min',
      image: imgFineLine,
      badge: null,
      desc: 'Hauchdünne Linien, florale Botanik, Schriftzüge & filigrane Micro-Needling Kunstwerke.',
      features: ['Präzise 1-Needle Micro-Technik', 'Minimale Schwellung & schnelle Heilung', 'Perfekt für filigrane Erst-Tattoos']
    },
    {
      title: 'Cover-Up & Sanierung',
      price: 'ab 150 €',
      time: 'Nach Aufwand',
      image: imgCoverUp,
      badge: 'Spezialität',
      desc: 'Professionelles Überstechen alter Jugendsünden, verblasster Tattoos oder Operationsnarben.',
      features: ['Kostenlose Vorab-Machbarkeitsanalyse', 'Spezielle Layering-Abdecktechnik', 'Garantiert kein Durchscheinen mehr']
    },
    {
      title: 'Neo-Traditional & Colour',
      price: 'ab 100 €',
      time: 'Stundensatz',
      image: imgGallery1,
      badge: null,
      desc: 'Kräftige Konturen, lebendige Pigmente und moderne Interpretation klassischer Tattoo-Motive.',
      features: ['100% REACH-zertifizierte EU-Farben', 'Maximale Farbsättigung & UV-Schutz', 'Einzigartiges Unikat-Artwork']
    },
    {
      title: 'Custom Wannados & Flash Art',
      price: 'ab 90 €',
      time: 'Variabel',
      image: imgGallery2,
      badge: null,
      desc: 'Exklusive Unikat-Zeichnungen unserer Resident Artists — jedes Motiv wird nur 1x gestochen.',
      features: ['100% Unikat-Garantie auf Lebenszeit', 'Schnelle Termine für Flash-Tage', 'Sonderkonditionen für Wanna-Dos']
    },
    {
      title: 'Steriles Piercing & Schmuck',
      price: 'ab 35 €',
      time: '15–30 Min',
      image: imgStudio,
      badge: null,
      desc: 'Ohr, Nase, Helix, Tragus, Bauchnabel & mehr – steril gepierct mit Titan-Erstschmuck.',
      features: ['Medizinischer Implantat-Titan-Schmuck', 'Inkl. Pflegemittel & Kontrolltermin', 'Schonende & sterile Durchführung']
    }
  ];

  return (
    <section id="stile" className="py-24 bg-[#0a0a0c] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-[#c9a84c] uppercase bg-[#121216] border border-[#c9a84c]/30 px-3.5 py-1.5 rounded-full inline-block">
            Tattoo-Stile & Leistungen
          </span>
          <h2 className="font-outfit text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Handwerkskunst in Perfektion
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-normal">
            Jedes Tattoo ist eine Maßanfertigung. Wir beraten dich ehrlich zu Platzierung, Haltbarkeit und Detailgrad.
          </p>
        </div>

        {/* Cohesive 3x2 Luxury Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {styles.map((service, idx) => (
            <div
              key={idx}
              className={`group bg-[#121216] border rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between transition-all duration-300 ${
                service.badge 
                  ? 'border-[#c9a84c]/60 ring-1 ring-[#c9a84c]/30' 
                  : 'border-slate-800/90 hover:border-slate-700'
              }`}
            >
              <div>
                {/* Visual Header with Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover filter brightness-[0.88] contrast-[1.08] group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-black/20" />
                  
                  {/* Optional Featured Badge */}
                  {service.badge && (
                    <div className="absolute top-4 left-4 bg-[#c9a84c] text-slate-950 text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg">
                      <Sparkles className="w-3 h-3" />
                      <span>{service.badge}</span>
                    </div>
                  )}

                  {/* Price Tag */}
                  <div className="absolute bottom-3 right-3 bg-[#0a0a0c]/90 backdrop-blur-md border border-slate-700 px-3.5 py-1 rounded-xl shadow-lg">
                    <span className="font-outfit font-bold text-[#c9a84c] text-lg sm:text-xl">{service.price}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#c9a84c]" />
                      <span>{service.time}</span>
                    </span>
                  </div>

                  <h3 className="font-outfit text-2xl font-bold text-white leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 pt-2 border-t border-slate-800/80 text-xs text-slate-300">
                    {service.features.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#c9a84c] shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Action Footer per card */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={onOpenContact}
                  className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    service.badge
                      ? 'bg-[#c9a84c] hover:bg-[#b8973b] text-slate-950 shadow-md'
                      : 'bg-[#0a0a0c] hover:bg-slate-900 text-slate-200 border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <span>Motiv anfragen</span>
                  <ArrowRight className="w-3.5 h-3.5 text-current opacity-70 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global Consultation Banner */}
        <div className="mt-14 bg-[#121216] border border-slate-800 p-6 sm:p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-outfit text-xl sm:text-2xl font-bold text-white">
              Eigene Motiv-Idee im Kopf? <span className="text-[#c9a84c]">Wir zeichnen deinen Entwurf!</span>
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm">
              Komm zur kostenlosen Beratung vorbei oder sende uns deine Referenzbilder online.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:022739499600"
              className="bg-[#0a0a0c] hover:bg-slate-900 text-white border border-slate-700 px-5 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
            >
              02273 9499600
            </a>
            <button
              onClick={onOpenContact}
              className="bg-[#c9a84c] hover:bg-[#b8973b] text-slate-950 font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md transition-colors cursor-pointer"
            >
              Motiv Besprechen
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
