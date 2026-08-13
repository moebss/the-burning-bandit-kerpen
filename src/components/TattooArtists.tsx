import { Instagram, Calendar, Award, Sparkles } from 'lucide-react';
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
      role: 'Resident Artist & Studioinhaber',
      specialty: 'Black & Grey Realismus, Porträts & Chicano',
      experience: '12+ Jahre Erfahrung',
      image: imgMarco,
      instagram: '@marco_burningbandit',
      bio: 'Spezialisiert auf fotorealistische Porträts, Schatten-Tattoos und großflächige Sleeves. Marco plant jedes Tattoo als individuelles Unikat.',
      status: 'Termine für diesen Monat verfügbar'
    },
    {
      name: 'Elena',
      role: 'Fine Line & Micro-Realism Specialist',
      specialty: 'Fine Line, Floral, Botanik & Minimalismus',
      experience: '8 Jahre Erfahrung',
      image: imgElena,
      instagram: '@elena_fineline_art',
      bio: 'Mit Hauchdünnen Linien und filigranen Details zaubert Elena elegante florale Kunstwerke und feine Micro-Needling Schriftzüge unter die Haut.',
      status: 'Wunschtermine mit kurzer Wartezeit'
    },
    {
      name: 'Kai (Guest Artist)',
      role: 'Colour & Neo-Traditional Specialist',
      specialty: 'Neo-Traditional, Colour & Japanese Art',
      experience: '10 Jahre Erfahrung',
      image: imgStudio,
      instagram: '@kai_neotrad_art',
      bio: 'Reist als internationaler Guest Artist regelmäßig zu uns nach Kerpen. Bekannt für kräftige Linien, lebendige Farbpigmente und ausdrucksstarke Motive.',
      status: 'Gast-Spot im Folgemonat'
    }
  ];

  return (
    <section id="artists" className="py-20 bg-[#0b0b0e] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-[#c9a84c] uppercase bg-[#121216] border border-[#c9a84c]/30 px-3.5 py-1.5 rounded-full inline-block">
            Unsere Tattoo Artists
          </span>
          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Das Team Hinter der Nadel
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-normal max-w-2xl mx-auto">
            Erfahrene Spezialisten für jeden Stil. Finde den passenden Artist für dein Wunschprojekt.
          </p>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist, idx) => (
            <div key={idx} className="group bg-[#121216] border border-slate-800/80 rounded-3xl overflow-hidden hover:border-[#c9a84c]/50 transition-all duration-300 shadow-xl flex flex-col justify-between">
              
              <div>
                {/* Artist Photo Header */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                  <img
                    src={artist.image}
                    alt={`${artist.name} Tattoo Artist in Kerpen`}
                    className="w-full h-full object-cover filter brightness-95 contrast-105 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-black/30" />
                  
                  {/* Experience Badge */}
                  <div className="absolute top-3 left-3 bg-[#0b0b0e]/80 backdrop-blur-md px-3 py-1 rounded-full border border-slate-700/60 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#c9a84c]" />
                    <span className="text-[11px] font-bold text-slate-200 uppercase tracking-wider">{artist.experience}</span>
                  </div>

                  {/* Status Indicator */}
                  <div className="absolute bottom-3 left-3 bg-[#0b0b0e]/90 backdrop-blur-md px-3 py-1 rounded-xl border border-slate-800 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-semibold text-slate-300">{artist.status}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-outfit font-bold text-2xl text-white group-hover:text-[#c9a84c] transition-colors">
                        {artist.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wider mt-0.5">
                        {artist.role}
                      </p>
                    </div>
                    
                    <a
                      href={`https://instagram.com`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-[#0b0b0e] border border-slate-800 text-slate-300 hover:text-[#c9a84c] transition-colors"
                      aria-label={`${artist.name} auf Instagram ansehen`}
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="p-3 rounded-2xl bg-[#0b0b0e]/70 border border-slate-800/60 space-y-1">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#c9a84c]" />
                      <span>Spezialisierung</span>
                    </p>
                    <p className="text-xs font-semibold text-white">
                      {artist.specialty}
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {artist.bio}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={onOpenContact}
                  aria-label={`Termin bei ${artist.name} anfragen`}
                  className="w-full bg-[#1a1a22] hover:bg-[#c9a84c] text-slate-200 hover:text-slate-950 border border-slate-800 hover:border-[#c9a84c] font-bold text-xs py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer shadow-md"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Termin bei {artist.name} anfragen</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
