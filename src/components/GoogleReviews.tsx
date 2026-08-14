import { Star, CheckCircle } from 'lucide-react';

export default function GoogleReviews() {
  const reviews = [
    {
      name: 'Sebastian W.',
      time: 'vor 3 Wochen',
      rating: 5,
      text: 'Marco hat mein Cover-Up gerettet! Aus einer alten Jugendsünde ist ein absolut geniales Black & Grey Sleeve Kunstwerk geworden. Top Beratung, extrem hygienebewusst und entspannte Atmosphäre.',
      verified: true
    },
    {
      name: 'Laura M.',
      time: 'vor 1 Monat',
      rating: 5,
      text: 'War bei Elena für ein Fine Line Tattoo am Handgelenk. Die Linien sind hauchdünn und messerscharf verheilt. Kann das Studio in Kerpen zu 100% weiterempfehlen!',
      verified: true
    },
    {
      name: 'Patrick B.',
      time: 'vor 2 Monaten',
      rating: 5,
      text: 'Absolutes Lieblings-Tattoostudio im Erftkreis! Sehr faire Preise, ehrliche Beratung und keine Massenabfertigung. Hier nimmt man sich wirklich Zeit für den Kunden.',
      verified: true
    },
    {
      name: 'Melanie H.',
      time: 'vor 2 Wochen',
      rating: 5,
      text: 'Habe mir hier mein erstes Piercing stechen lassen. Super Aufklärung, sterile Einweg-Materialien und Titan-Erstschmuck. Alles perfekt verheilt!',
      verified: true
    }
  ];

  return (
    <section id="bewertungen" className="py-24 bg-[#121216] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#0a0a0c] border border-[#c9a84c]/30 px-4 py-1.5 rounded-full">
            <span className="text-[#c9a84c] font-bold text-sm">G</span>
            <span className="text-xs font-semibold text-slate-300 uppercase tracking-widest">Google Rezensionen</span>
          </div>

          <h2 className="font-outfit text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Echte Kundenerfahrungen
          </h2>

          <div className="flex items-center justify-center gap-2 text-[#c9a84c]">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#c9a84c]" />
              ))}
            </div>
            <span className="font-bold text-white text-lg ml-1">4.8 / 5.0</span>
            <span className="text-xs text-slate-400">(über 160+ Google Bewertungen)</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, idx) => (
            <div key={idx} className="bg-[#0a0a0c] border border-slate-800 rounded-3xl p-6 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-colors shadow-lg">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-[#18181f] border border-slate-700 text-[#c9a84c] font-bold flex items-center justify-center text-sm">
                      {r.name[0]}
                    </div>
                    <div>
                      <span className="font-bold text-white text-sm block">{r.name}</span>
                      <span className="text-[10px] text-slate-400 block">{r.time}</span>
                    </div>
                  </div>
                  {r.verified && (
                    <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-semibold bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded-full">
                      <CheckCircle className="w-3 h-3" />
                      <span>Verifiziert</span>
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1 text-[#c9a84c]">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#c9a84c]" />
                  ))}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed italic font-normal">
                  "{r.text}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Google Maps Link CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://maps.google.com/?q=The+Burning+Bandit+Kerpen+Hauptstraße+231"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors border-b border-slate-700 pb-0.5"
          >
            <span>Alle Google Bewertungen für The Burning Bandit ansehen</span>
          </a>
        </div>

      </div>
    </section>
  );
}
