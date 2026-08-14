import { Calendar, Award, Sparkles, ArrowRight } from 'lucide-react';
import imgMarco from '../images/artist_marco.jpg';
import imgElena from '../images/artist_elena.jpg';
import imgStudio from '../images/studio_interior.jpg';

interface TattooArtistsProps {
  onOpenContact: () => void;
}

export default function TattooArtists({ onOpenContact }: TattooArtistsProps) {
  const artists = [
    {
      name: 'Marco',
      role: 'Resident Artist & Inhaber',
      specialty: 'Black & Grey Realismus, Porträts & Chicano',
      experience: '12+ Jahre Erfahrung',
      image: imgMarco,
      instagram: '@marco_burningbandit',
      bio: 'Spezialisiert auf fotorealistische Porträts, Schatten-Tattoos und großflächige Sleeves. Marco plant jedes Tattoo als unverwechselbares Unikat.',
      status: 'Termine für diesen Monat verfügbar'
    },
    {
      name: 'Elena',
      role: 'Fine Line & Micro-Realism Specialist',
      specialty: 'Fine Line, Floral, Botanik & Minimalismus',
      experience: '8 Jahre Erfahrung',
      image: imgElena,
      instagram: '@elena_fineline_art',
      bio: 'Mit hauchdünnen Nadeln und filigraner Präzision erschafft Elena elegante florale Kunstwerke und feine Schriftzüge unter der Haut.',
      status: 'Wunschtermine mit kurzer Wartezeit'
    },
    {
      name: 'Guest Spots & Flash Artists',
      role: 'Internationale Gast-Künstler',
      specialty: 'Neo-Traditional, Colour & Japanese Art',
      experience: 'Regelmäßige Gast-Spots',
      image: imgStudio,
      instagram: '@theburningbandit',
      bio: 'Wir laden regelmäßig renommierte Gast-Artists aus ganz Europa zu uns nach Kerpen ein. Perfekt für außergewöhnliche Stile und einmalige Wanna-Dos.',
      status: 'Aktuelle Gast-Termine anfragen'
    }
  ];

  return (
    <section id="artists" className="py-24 bg-[#121216] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-[#c9a84c] uppercase bg-[#0a0a0c] border border-[#c9a84c]/30 px-3.5 py-1.5 rounded-full inline-block">
            Unsere Tattoo Artists
          </span>
          <h2 className="font-outfit text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Das Team Hinter der Nadel
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-normal max-w-2xl mx-auto">
            Erfahrene Spezialisten für jeden Stil. Finde den passenden Artist für dein Wunschprojekt.
          </p>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {artists.map((artist, idx) => (
            <div
              key={idx}
              className="group bg-[#0a0a0c] border border-slate-800 rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between hover:border-[#c9a84c]/40 transition-all duration-300"
            >
              <div>
                {/* Artist Photo */}
                <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-slate-900">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover filter brightness-[0.9] contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent" />
                  
                  <div className="absolute top-4 right-4 bg-[#121216]/90 backdrop-blur-md border border-slate-700 text-[#c9a84c] text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {artist.experience}
                  </div>
                </div>

                {/* Artist Info */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <h3 className="font-outfit text-2xl font-bold text-white">{artist.name}</h3>
                    <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-wider mt-0.5">
                      {artist.role}
                    </p>
                  </div>

                  <div className="bg-[#121216] p-3.5 rounded-2xl border border-slate-800/80">
                    <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider block">Spezialgebiet:</span>
                    <span className="text-xs font-medium text-slate-200 block mt-0.5">{artist.specialty}</span>
                  </div>

                  <p className="text-slate-400 text-xs leading-relaxed">
                    {artist.bio}
                  </p>

                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 pt-2 border-t border-slate-800">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{artist.status}</span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0">
                <button
                  onClick={onOpenContact}
                  className="w-full bg-[#121216] hover:bg-[#1c1c24] text-white border border-slate-800 hover:border-[#c9a84c]/40 text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <Calendar className="w-4 h-4 text-[#c9a84c]" />
                  <span>Termin bei {artist.name.split(' ')[0]} Anfragen</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
