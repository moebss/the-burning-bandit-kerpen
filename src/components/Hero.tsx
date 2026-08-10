import { Star, CheckCircle2, ShieldCheck, ArrowRight, Flame, Skull } from 'lucide-react';
import heroImg from '../images/hero_tattoo.jpg';

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0e] border-b border-slate-800/80">
      
      {/* Subtle Warm Ambient Glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-[#c9a84c]/10 blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto min-h-[calc(100vh-5rem)] flex flex-col lg:flex-row items-stretch">
        
        {/* Left 50% Content Column */}
        <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-8 py-12 lg:py-20 flex flex-col justify-center">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 bg-[#121216] border border-[#c9a84c]/30 px-4 py-1.5 rounded-full shadow-sm w-fit mb-6">
            <div className="flex items-center gap-1 text-slate-200">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-slate-200 text-slate-200" />
              ))}
            </div>
            <span className="text-xs font-bold text-[#c9a84c] tracking-wider uppercase">
              4.8 ★ bei 160+ Google-Bewertungen
            </span>
          </div>

          {/* Headline - Outfit Display */}
          <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white text-balance leading-[1.12] mb-6">
            Custom Tattoos & <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#e5c97b] via-[#c9a84c] to-[#a8882d]">Independent Ink</span>.
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
              className="bg-[#c9a84c] hover:bg-[#b8973b] text-slate-950 font-bold text-base px-8 py-4 rounded-xl shadow-lg transition-all transform active:scale-98 flex items-center justify-center gap-3 cursor-pointer group uppercase tracking-wider"
            >
              <span>Motiv-Besprechung Buchen</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://wa.me/4922739499600?text=Hallo!%20Ich%20m%C3%B6chte%20gerne%20eine%20Tattoo-Anfrage%20bei%20The%20Burning%20Bandit%20stellen."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#121216] hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-base px-6 py-4 rounded-xl shadow-xs transition-colors text-center flex items-center justify-center gap-2 uppercase tracking-wider"
            >
              <span>WhatsApp Direkt</span>
            </a>
          </div>

          {/* Trust Checkmarks */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-semibold text-slate-300 border-t border-slate-800/80 pt-6">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#c9a84c] shrink-0" />
              <span>REACH-Konforme Farben</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#c9a84c] shrink-0" />
              <span>100% Einweg-Nadeln</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#c9a84c] shrink-0" />
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
          
          {/* Floating Badge */}
          <div className="absolute bottom-8 left-8 right-8 lg:left-auto lg:right-8 lg:max-w-xs bg-[#0b0b0e]/95 backdrop-blur-md p-4 rounded-2xl border border-slate-800 shadow-2xl z-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#121216] text-[#c9a84c] flex items-center justify-center font-bold text-lg border border-[#c9a84c]/30 shrink-0">
                <Skull className="w-5 h-5 text-[#c9a84c]" />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Kult-Studio Kerpen</p>
                <p className="text-[11px] text-[#c9a84c] font-normal mt-0.5">Hauptstraße 231 • 50169 Kerpen</p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
