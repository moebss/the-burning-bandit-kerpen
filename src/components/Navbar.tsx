import { useState } from 'react';
import { Phone, Calendar, Menu, X } from 'lucide-react';
import logoImg from '../images/logo_bandit_transparent.png';

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0b0b0e]/95 backdrop-blur-md border-b border-slate-800/80 py-3 px-4 sm:px-8 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo with Official Mascot Emblem */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#121216] border border-[#c9a84c]/40 p-1 flex items-center justify-center shadow-sm shrink-0 group-hover:border-[#c9a84c] transition-colors">
            <img
              src={logoImg}
              alt="The Burning Bandit Tattoo Studio Logo"
              className="w-full h-full object-contain filter drop-shadow group-hover:scale-105 transition-transform"
            />
          </div>
          <div>
            <span className="font-outfit font-bold text-lg sm:text-xl tracking-tight text-white block leading-none group-hover:text-[#c9a84c] transition-colors">
              The Burning Bandit
            </span>
            <span className="text-[9px] sm:text-[10px] font-semibold text-[#c9a84c] tracking-widest uppercase block mt-1">
              Tattoo Studio • Kerpen
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-slate-300 uppercase tracking-widest">
          <a href="#stile" className="hover:text-[#c9a84c] transition-colors">Tattoo Stile</a>
          <a href="#ueber-uns" className="hover:text-[#c9a84c] transition-colors">Studio & Team</a>
          <a href="#artists" className="hover:text-[#c9a84c] transition-colors">Artists</a>
          <a href="#bewertungen" className="hover:text-[#c9a84c] transition-colors">Bewertungen</a>
          <a href="#rechner" className="hover:text-[#c9a84c] transition-colors">Stundenschätzer</a>
          <a href="#faq" className="hover:text-[#c9a84c] transition-colors">FAQ</a>
        </nav>

        {/* Action Buttons & Mobile Menu Toggle */}
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
            className="hidden sm:flex bg-[#c9a84c] hover:bg-[#b8973b] text-slate-950 font-bold text-xs px-6 py-2.5 rounded-xl shadow-md transition-all items-center gap-2 cursor-pointer uppercase tracking-wider"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Termin Anfragen</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menü öffnen"
            className="md:hidden p-2.5 rounded-xl bg-[#121216] border border-slate-800 text-slate-200 hover:text-[#c9a84c] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden pt-4 pb-6 px-4 border-t border-slate-800/80 bg-[#0b0b0e] space-y-3 mt-3 animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-2 text-sm font-semibold text-slate-200 uppercase tracking-wider">
            <a href="#stile" onClick={handleNavClick} className="p-2.5 rounded-lg hover:bg-[#121216] hover:text-[#c9a84c]">Tattoo Stile</a>
            <a href="#ueber-uns" onClick={handleNavClick} className="p-2.5 rounded-lg hover:bg-[#121216] hover:text-[#c9a84c]">Studio & Team</a>
            <a href="#artists" onClick={handleNavClick} className="p-2.5 rounded-lg hover:bg-[#121216] hover:text-[#c9a84c]">Artists</a>
            <a href="#bewertungen" onClick={handleNavClick} className="p-2.5 rounded-lg hover:bg-[#121216] hover:text-[#c9a84c]">Bewertungen</a>
            <a href="#rechner" onClick={handleNavClick} className="p-2.5 rounded-lg hover:bg-[#121216] hover:text-[#c9a84c]">Stundenschätzer</a>
            <a href="#faq" onClick={handleNavClick} className="p-2.5 rounded-lg hover:bg-[#121216] hover:text-[#c9a84c]">FAQ</a>
          </nav>
          
          <button
            onClick={() => { handleNavClick(); onOpenContact(); }}
            className="w-full bg-[#c9a84c] text-slate-950 font-bold text-xs py-3 rounded-xl uppercase tracking-wider flex items-center justify-center gap-2 mt-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Termin Anfragen</span>
          </button>
        </div>
      )}
    </header>
  );
}
