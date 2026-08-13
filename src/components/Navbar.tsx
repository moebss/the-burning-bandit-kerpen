import { Phone, Calendar } from 'lucide-react';
import logoImg from '../images/logo_bandit_transparent.png';

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 bg-[#0b0b0e]/95 backdrop-blur-md border-b border-slate-800/80 py-3 px-4 sm:px-8 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo with Official Mascot Emblem */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-xl bg-[#121216] border border-[#c9a84c]/40 p-1 flex items-center justify-center shadow-sm shrink-0 group-hover:border-[#c9a84c] transition-colors">
            <img
              src={logoImg}
              alt="The Burning Bandit Tattoo Studio Logo"
              className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform"
            />
          </div>
          <div>
            <span className="font-outfit font-bold text-xl tracking-tight text-white block leading-none group-hover:text-[#c9a84c] transition-colors">
              The Burning Bandit
            </span>
            <span className="text-[10px] font-semibold text-[#c9a84c] tracking-widest uppercase block mt-1">
              Tattoo Studio • Kerpen
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-slate-300 uppercase tracking-widest">
          <a href="#stile" className="hover:text-[#c9a84c] transition-colors">Tattoo Stile</a>
          <a href="#ueber-uns" className="hover:text-[#c9a84c] transition-colors">Studio & Team</a>
          <a href="#artists" className="hover:text-[#c9a84c] transition-colors">Artists</a>
          <a href="#coverup" className="hover:text-[#c9a84c] transition-colors">Cover-Up</a>
          <a href="#rechner" className="hover:text-[#c9a84c] transition-colors">Stundenschätzer</a>
          <a href="#faq" className="hover:text-[#c9a84c] transition-colors">FAQ</a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="tel:022739499600"
            aria-label="Anrufen bei The Burning Bandit Kerpen"
            className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-200 bg-[#121216] hover:bg-slate-800 border border-slate-800 px-4 py-2.5 rounded-xl transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-slate-400" />
            <span>02273 9499600</span>
          </a>

          <button
            onClick={onOpenContact}
            aria-label="Tattoo Termin anfragen"
            className="bg-[#c9a84c] hover:bg-[#b8973b] text-slate-950 font-bold text-xs px-6 py-2.5 rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer uppercase tracking-wider"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Termin Anfragen</span>
          </button>
        </div>

      </div>
    </header>
  );
}
