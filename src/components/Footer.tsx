interface FooterProps {
  onOpenLegal: (type: 'impressum' | 'datenschutz') => void;
}

export default function Footer({ onOpenLegal }: FooterProps) {
  return (
    <footer className="bg-[#0a0a0c] text-slate-300 py-14 px-4 sm:px-8 border-t border-slate-800/80 text-xs">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        
        {/* Col 1 */}
        <div className="space-y-3">
          <span className="font-outfit font-bold text-lg text-white block">The Burning Bandit</span>
          <p className="text-slate-400 leading-relaxed text-xs">
            Kult Tattoo- & Piercing-Studio in Kerpen-Horrem. Black & Grey Realismus, Fine Line, Cover-Up & professionelle Piercings.
          </p>
        </div>

        {/* Col 2 */}
        <div className="space-y-2">
          <span className="font-bold text-white uppercase tracking-wider text-xs block">Stile & Services</span>
          <ul className="space-y-1.5 text-slate-400">
            <li>Black & Grey Realismus</li>
            <li>Fine Line & Micro-Needling</li>
            <li>Cover-Up & Narbenüberdeckung</li>
            <li>Neo-Traditional & Colour</li>
            <li>Steriles Piercing & Titan-Schmuck</li>
          </ul>
        </div>

        {/* Col 3 */}
        <div className="space-y-2">
          <span className="font-bold text-white uppercase tracking-wider text-xs block">Studio & Kontakt</span>
          <p className="text-slate-400">Hauptstraße 231, 50169 Kerpen-Horrem</p>
          <p className="text-slate-400">Tel: <a href="tel:022739499600" className="text-slate-300 hover:text-white underline">02273 9499600</a></p>
          <p className="text-slate-400">Di – Fr: 12:00 – 18:30 Uhr<br />Sa: 12:00 – 16:00 Uhr</p>
        </div>

        {/* Col 4 */}
        <div className="space-y-2">
          <span className="font-bold text-white uppercase tracking-wider text-xs block">Rechtliches</span>
          <ul className="space-y-1.5 text-slate-400">
            <li>
              <button 
                onClick={() => onOpenLegal('impressum')}
                className="hover:text-white cursor-pointer transition-colors underline"
              >
                Impressum
              </button>
            </li>
            <li>
              <button 
                onClick={() => onOpenLegal('datenschutz')}
                className="hover:text-white cursor-pointer transition-colors underline"
              >
                Datenschutzerklärung
              </button>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-xs">
        <div>
          © {new Date().getFullYear()} The Burning Bandit (Independent Ink) • Alle Rechte vorbehalten.
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-400">Hauptstraße 231 • 50169 Kerpen-Horrem</span>
        </div>
      </div>
    </footer>
  );
}
