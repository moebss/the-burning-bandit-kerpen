import { Phone, Calendar, Flame } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 bg-[#0b0b0e]/95 backdrop-blur-md border-b border-slate-800/80 py-4 px-4 sm:px-8 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-600/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold text-lg shadow-sm shrink-0">
            <Flame className="w-5 h-5 text-amber-400 animate-pulse" />
          </div>
          <div>
            <span className="font-syne font-bold text-xl tracking-tight text-white block leading-none">The Burning Bandit</span>
            <span className="text-[10px] font-bold text-amber-400 tracking-widest uppercase block mt-1">Independent Ink • Kerpen</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-bold text-slate-300 uppercase tracking-widest">
          <a href="#stile" className="hover:text-amber-400 transition-colors">Tattoo Stile</a>
          <a href="#ueber-uns" className="hover:text-amber-400 transition-colors">Studio & Team</a>
          <a href="#galerie-grid" className="hover:text-amber-400 transition-colors">Portfolio</a>
          <a href="#coverup" className="hover:text-amber-400 transition-colors">Cover-Up</a>
          <a href="#rechner" className="hover:text-amber-400 transition-colors">Stundenschätzer</a>
          <a href="#faq" className="hover:text-amber-400 transition-colors">FAQ</a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="tel:022739499600"
            aria-label="Anrufen bei The Burning Bandit Kerpen"
            className="hidden sm:flex items-center gap-2 text-xs font-bold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 px-4 py-2.5 rounded-xl transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>02273 9499600</span>
          </a>

          <button
            onClick={onOpenContact}
            aria-label="Tattoo Termin anfragen"
            className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-slate-950 font-extrabold text-xs px-6 py-2.5 rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2 cursor-pointer uppercase tracking-wider"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Termin Anfragen</span>
          </button>
        </div>

      </div>
    </header>
  );
}
