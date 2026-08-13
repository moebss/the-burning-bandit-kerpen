import logoImg from '../images/logo_bandit_transparent.png';

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0e] text-slate-300 py-12 px-4 sm:px-8 border-t border-slate-800/80 text-xs">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        
        {/* Col 1 */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#121216] border border-[#c9a84c]/40 p-1 flex items-center justify-center shrink-0">
              <img
                src={logoImg}
                alt="The Burning Bandit Logo Emblem"
                className="w-full h-full object-contain filter drop-shadow"
              />
            </div>
            <span className="font-outfit font-bold text-lg text-white block leading-tight">The Burning Bandit</span>
          </div>
          <p className="text-slate-400 leading-relaxed text-[11px]">
            Independent Ink Studio in Kerpen-Horrem. Black & Grey Realismus, Fine Line, Cover-Up & Piercing. 4.8 Sterne auf Google.
          </p>
        </div>

        {/* Col 2 */}
        <div className="space-y-2">
          <span className="font-bold text-white uppercase tracking-wider text-[11px] block">Tattoo-Stile</span>
          <ul className="space-y-1 text-slate-400">
            <li>Black & Grey Realismus</li>
            <li>Fine Line & Micro Ink</li>
            <li>Cover-Up Transformation</li>
            <li>Piercing & Body Modification</li>
          </ul>
        </div>

        {/* Col 3 */}
        <div className="space-y-2">
          <span className="font-bold text-white uppercase tracking-wider text-[11px] block">Kontakt & Studio</span>
          <p className="text-slate-400">Hauptstraße 231, 50169 Kerpen</p>
          <p className="text-slate-400">Tel: 02273 9499600</p>
          <p className="text-slate-400">Di – Fr: 12:00 – 18:30 Uhr</p>
        </div>

        {/* Col 4 */}
        <div className="space-y-2">
          <span className="font-bold text-white uppercase tracking-wider text-[11px] block">Rechtliches</span>
          <ul className="space-y-1 text-slate-400">
            <li><a href="#kontakt" className="hover:text-white">Impressum</a></li>
            <li><a href="#kontakt" className="hover:text-white">Datenschutzerklärung</a></li>
            <li><a href="#kontakt" className="hover:text-white">Einwilligung & Jugendschutz</a></li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-slate-800/80 pt-6 text-center text-slate-500 text-[11px]">
        © {new Date().getFullYear()} The Burning Bandit (Independent Ink) • Umgesetzt mit Rheindorf Digital WebGen OS
      </div>
    </footer>
  );
}
