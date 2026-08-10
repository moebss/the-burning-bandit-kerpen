import { Shield, Flame, Award, CheckCircle2 } from 'lucide-react';
import studioImg from '../images/studio_interior.jpg';

export default function AboutUs() {
  return (
    <section id="ueber-uns" className="py-20 bg-[#121216] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Studio Image Column */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-500/30">
              <img
                src={studioImg}
                alt="The Burning Bandit Studio Ambiente Kerpen"
                className="w-full h-[450px] object-cover filter contrast-105"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-[#0b0b0e] text-white p-5 rounded-2xl border border-amber-500/50 shadow-2xl max-w-xs">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-amber-400 shrink-0" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-400">Independent Ink Studio</p>
                  <p className="text-[11px] text-slate-300 font-normal mt-0.5">Hauptstraße 231 in Kerpen-Horrem</p>
                </div>
              </div>
            </div>
          </div>

          {/* Story Column */}
          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest text-amber-400 uppercase bg-slate-900/90 border border-amber-500/40 px-3.5 py-1.5 rounded-full">
              Das Studio & Unsere Philosophie
            </span>

            <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Kult-Tattoo & Piercing in <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Kerpen-Horrem</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              <strong className="text-white font-semibold">The Burning Bandit (Independent Ink)</strong> steht seit Jahren für kompromisslose Tattookunst, ehrliche Beratung und höchste Hygiene. Über 160 zufriedene Kunden bewerten uns mit <strong className="text-amber-400 font-semibold">4.8 von 5 Sternen auf Google</strong>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs font-medium text-slate-200">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Strikte Hygiene & medizinische Sterilisation</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>100% REACH-konforme Marken-Tattoofarben</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Kostenloses Beratungsgespräch vor jedem Tattoo</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Erfahrene Tätowierer & Piercer vor Ort</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center font-bold text-amber-400 text-xl">
                <Flame className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <span className="font-syne font-bold text-white text-base block">The Burning Bandit Team</span>
                <span className="text-xs text-slate-400 block">Hauptstraße 231, 50169 Kerpen</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
