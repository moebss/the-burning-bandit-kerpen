import { Phone, Calendar, MessageSquare } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenContact: () => void;
}

export default function MobileStickyBar({ onOpenContact }: MobileStickyBarProps) {
  return (
    <aside
      aria-label="Mobile Schnellzugriff Leiste"
      className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-[#0b0b0e]/95 backdrop-blur-md border-t border-slate-800/90 p-3 shadow-2xl"
    >
      <div className="grid grid-cols-3 gap-2 text-center">
        
        {/* Call Button */}
        <a
          href="tel:022739499600"
          className="bg-[#121216] active:bg-slate-800 border border-slate-800 text-slate-200 py-3 rounded-xl flex flex-col items-center justify-center gap-1 shadow-xs"
        >
          <Phone className="w-4 h-4 text-[#c9a84c]" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Anrufen</span>
        </a>

        {/* WhatsApp Direct */}
        <a
          href="https://wa.me/4922739499600?text=Hallo!%20Ich%20m%C3%B6chte%20gerne%20eine%20Tattoo-Anfrage%20bei%20The%20Burning%20Bandit%20stellen."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-700 active:bg-emerald-800 text-white py-3 rounded-xl flex flex-col items-center justify-center gap-1 shadow-xs"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
        </a>

        {/* Termin Anfragen */}
        <button
          onClick={onOpenContact}
          className="bg-[#c9a84c] active:bg-[#b8973b] text-slate-950 py-3 rounded-xl flex flex-col items-center justify-center gap-1 shadow-md font-bold cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          <span className="text-[10px] font-extrabold uppercase tracking-wider">Termin</span>
        </button>

      </div>
    </aside>
  );
}
