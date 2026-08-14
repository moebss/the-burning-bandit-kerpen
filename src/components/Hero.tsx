import { ArrowRight, Phone, Star, MapPin, Sparkles, ChevronDown, ShieldCheck, Flame } from 'lucide-react';
import heroImg from '../images/hero_tattoo.jpg';

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  const scrollToStyles = () => {
    document.getElementById('stile')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0a0a0c] pt-20 pb-16 lg:py-0 border-b border-slate-800/80">
      
      {/* 100vh Full Bleed Photography with Deep Film Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="The Burning Bandit Tattoo Studio Kerpen-Horrem"
          className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-[1.18] scale-105"
        />
        {/* Subtle Dark Gold Ambient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/75 to-[#0a0a0c]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#c9a84c]/15 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center space-y-8 pt-12">
        
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2.5 bg-[#121216]/90 border border-[#c9a84c]/40 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest text-[#c9a84c] backdrop-blur-md shadow-lg">
          <Flame className="w-3.5 h-3.5 text-[#c9a84c]" />
          <span>KULT-TATTOOSTUDIO • HAUPTSTRASSE 231 • KERPEN-HORREM</span>
        </div>

        {/* Massive Outfit Display Headline */}
        <h1 className="font-outfit text-5xl sm:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-[1.05] max-w-5xl mx-auto">
          Custom Tattoos & <br />
          <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#f0dc9e] via-[#c9a84c] to-[#a8882d]">Independent Ink</span>.
        </h1>

        {/* Atmospheric Subtitle */}
        <p className="text-slate-300 text-base sm:text-xl lg:text-2xl font-normal leading-relaxed max-w-3xl mx-auto">
          Echte Unikate, die unter die Haut gehen. Spezialisiert auf fotorealistischen Black & Grey Realismus, filigrane Fine Line Motive, meisterhafte Cover-Ups & steriles Piercing.
        </p>

        {/* Single Confident Primary Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenContact}
            aria-label="Motiv-Besprechung anfragen"
            className="bg-[#c9a84c] hover:bg-[#b8973b] text-slate-950 font-bold text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 rounded-xl shadow-[0_8px_30px_rgba(201,168,76,0.35)] transition-all transform active:scale-98 flex items-center gap-3 cursor-pointer group uppercase tracking-wider"
          >
            <span>Motiv-Besprechung Buchen</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="tel:022739499600"
            className="bg-[#121216]/90 hover:bg-[#1a1a22] text-white font-semibold text-base sm:text-lg px-7 py-4 sm:py-5 rounded-xl border border-slate-800 hover:border-[#c9a84c]/40 backdrop-blur-md transition-all flex items-center gap-2.5"
          >
            <Phone className="w-4 h-4 text-[#c9a84c]" />
            <span className="tabular-nums">02273 9499600</span>
          </a>

          <a
            href="https://wa.me/4922739499600?text=Hallo!%20Ich%20m%C3%B6chte%20gerne%20eine%20Tattoo-Anfrage%20bei%20The%20Burning%20Bandit%20stellen."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#121216]/90 hover:bg-[#1a1a22] text-slate-300 hover:text-white font-semibold text-base sm:text-lg px-6 py-4 sm:py-5 rounded-xl border border-slate-800 transition-all flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#c9a84c]" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* High-Impact Metric Strip */}
        <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center border-t border-slate-800/80 max-w-4xl mx-auto">
          <div className="bg-[#121216]/70 backdrop-blur-sm p-4 rounded-2xl border border-slate-800/90">
            <div className="flex items-center justify-center gap-1 text-[#c9a84c] mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#c9a84c]" />
              ))}
            </div>
            <span className="font-outfit text-2xl font-bold text-white block">4.8 / 5.0</span>
            <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">160+ Google Reviews</span>
          </div>

          <div className="bg-[#121216]/70 backdrop-blur-sm p-4 rounded-2xl border border-slate-800/90">
            <span className="font-outfit text-2xl font-bold text-white block text-[#c9a84c]">12+ Jahre</span>
            <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Studioerfahrung</span>
          </div>

          <div className="bg-[#121216]/70 backdrop-blur-sm p-4 rounded-2xl border border-slate-800/90">
            <span className="font-outfit text-2xl font-bold text-white block flex items-center justify-center gap-1 text-slate-100">
              <ShieldCheck className="w-4 h-4 text-[#c9a84c]" />
              <span>REACH</span>
            </span>
            <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Geprüfte Farb-Sicherheit</span>
          </div>

          <div className="bg-[#121216]/70 backdrop-blur-sm p-4 rounded-2xl border border-slate-800/90">
            <span className="font-outfit text-2xl font-bold text-white block flex items-center justify-center gap-1 text-slate-200">
              <MapPin className="w-4 h-4 text-[#c9a84c]" />
              <span>Kerpen</span>
            </span>
            <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Hauptstraße 231</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToStyles}
          className="pt-6 inline-flex flex-col items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Zu den Tattoo-Stilen scrollen"
        >
          <span className="text-[10px] uppercase tracking-widest">Stile & Galerie entdecken</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#c9a84c]" />
        </button>

      </div>
    </section>
  );
}
