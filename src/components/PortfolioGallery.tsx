import { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

import heroImg from '../images/hero_tattoo.jpg';
import gallery1 from '../images/gallery_1.jpg';
import gallery2 from '../images/gallery_2.jpg';
import studioImg from '../images/studio_interior.jpg';

interface PortfolioGalleryProps {
  onOpenContact: () => void;
}

export default function PortfolioGallery({ onOpenContact }: PortfolioGalleryProps) {
  const [filter, setFilter] = useState('all');

  const items = [
    {
      title: 'Black & Grey Realismus Sleeve',
      category: 'realism',
      img: gallery1,
      tag: 'Realismus',
      desc: 'Tiefschwarze Kontraste & fotorealistische Schattierung.'
    },
    {
      title: 'Fine Line Botanical Ink',
      category: 'fineline',
      img: gallery2,
      tag: 'Fine Line',
      desc: 'Filigrane Blüten-Linien mit 1-Needle Präzision.'
    },
    {
      title: 'Custom Bandit Skull Work',
      category: 'realism',
      img: heroImg,
      tag: 'Custom Flash',
      desc: 'Exklusiv angefertigtes Motiv nach Kundenwunsch.'
    },
    {
      title: 'Cover-Up Transformation',
      category: 'coverup',
      img: studioImg,
      tag: 'Cover-Up',
      desc: 'Altes Motiv perfekt mit tiefen Schattierungen überdeckt.'
    }
  ];

  const filteredItems = filter === 'all' ? items : items.filter(i => i.category === filter);

  return (
    <section id="galerie-grid" className="py-20 bg-[#0b0b0e] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-amber-400 uppercase bg-slate-900/90 border border-amber-500/40 px-3.5 py-1.5 rounded-full">
            Portfolio & Inspiration
          </span>
          <h2 className="font-syne text-3xl sm:text-4xl font-extrabold text-white mt-4">
            Echte Arbeiten aus Unserem Studio
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 font-normal">
            Lassen Sie sich von unseren geheilten Tattoos inspirieren. Jedes Werk ist ein unverwechselbares Unikat.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'Alle Tattoos' },
              { id: 'realism', label: 'Black & Grey Realismus' },
              { id: 'fineline', label: 'Fine Line & Micro' },
              { id: 'coverup', label: 'Cover-Up Works' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`text-xs font-bold px-4 py-2 rounded-xl transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div key={idx} className="bg-[#121216] border border-slate-800/80 rounded-3xl overflow-hidden shadow-xl hover:border-amber-500/50 transition-all flex flex-col justify-between group">
              <div className="relative aspect-4/3 overflow-hidden bg-slate-950">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                />
                <span className="absolute top-3 right-3 bg-[#0b0b0e]/90 text-amber-400 border border-amber-500/30 font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-xs">
                  {item.tag}
                </span>
              </div>

              <div className="p-5 space-y-2 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-syne font-bold text-lg text-white">{item.title}</h3>
                  <p className="text-xs text-slate-400 font-normal leading-relaxed mt-1">{item.desc}</p>
                </div>

                <button
                  onClick={onOpenContact}
                  className="mt-4 w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-3 rounded-xl border border-slate-700 transition-all flex items-center justify-center gap-1.5 uppercase tracking-wider cursor-pointer"
                >
                  <span>Motiv Besprechen</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
