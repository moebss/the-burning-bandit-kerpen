import { Star, CheckCircle2, ShieldCheck, ArrowRight, Flame, Skull } from 'lucide-react';
import heroImg from '../images/hero_tattoo.jpg';

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0e] border-b border-slate-800/80">
      
      {/* Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto min-h-[calc(100vh-5rem)] flex flex-col lg:flex-row items-stretch">
        
        {/* Left 50% Content */}
        <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-8 py-12 lg:py-20 flex flex-col justify-center">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 bg-slate-900/90 border border-amber-500/40 px-4 py-1.5 rounded-full shadow-sm w-fit mb-6">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-amber-400 tracking-widest uppercase">
              4.8 ★ bei 160+ Google-Bewertungen
            </span>
          </div>

          {/* Headline - Syne Display */}
          <h1 className="font-syne text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white text-balance leading-[1.1] mb-6">
            Custom Tattoos & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500">Independent Ink</span>.
          </h1>

          {/* Subline */}
          <p className="text-base sm:text-lg text-slate-300 text-pretty mb-8 max-w-xl font-normal leading-relaxed">
            Willkommen bei <strong className="text-white font-semibold">The Burning Bandit</strong> in Kerpen-Horrem. Wir erschaffen einzigartige Black & Grey Realismus Tattoos, feine Minimalist Linien, expressive Neo-Traditional Works & professionelle Piercings.
          </p>

          {/* Primary CTA + WhatsApp Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <button
              onClick={onOpenContact}
              aria-label="Tattoo Motiv anfragen"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold text-base px-8 py-4 rounded-xl shadow-xl shadow-amber-500/25 transition-all transform active:scale-98 flex items-center justify-center gap-3 cursor-pointer group uppercase tracking-wider"
            >
              <span>Motiv-Besprechung Buchen</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://wa.me/4922739499600?text=Hallo!%20Ich%20m%C3%B6chte%20gerne%20eine%20Tattoo-Anfrage%20bei%20The%20Burning%20Bandit%20stellen."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base px-6 py-4 rounded-xl shadow-md transition-colors text-center flex items-center justify-center gap-2 uppercase tracking-wider"
            >
              <span>WhatsApp Direkt</span>
            </a>
          </div>

          {/* Trust Checkmarks */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-medium text-slate-300 border-t border-slate-800/80 pt-6">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>REACH-Konforme Farben</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>100% Einweg-Nadeln</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Höchste Hygiene-Standards</span>
            </div>
          </div>

        </div>

        {/* Right 50% Image Column */}
        <div className="w-full lg:w-1/2 relative min-h-[450px] lg:min-h-full overflow-hidden bg-slate-950">
          <img
            src={heroImg}
            alt="The Burning Bandit Tattoo Studio in Action"
            className="absolute inset-0 w-full h-full object-cover object-center filter brightness-90 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0e] via-transparent to-transparent lg:hidden" />
          
          {/* Floating Glassmorphism Badge */}
          <div className="absolute bottom-8 left-8 right-8 lg:left-auto lg:right-8 lg:max-w-xs bg-[#0b0b0e]/90 backdrop-blur-md p-4 rounded-2xl border border-amber-500/40 shadow-2xl z-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-lg border border-amber-500/40 shrink-0">
                <Skull className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Kult-Studio Kerpen</p>
                <p className="text-[11px] text-amber-400 font-semibold mt-0.5">Hauptstraße 231 • 50169 Kerpen</p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
