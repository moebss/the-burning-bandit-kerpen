import { Shield, Clock, MapPin, Star } from 'lucide-react';

export default function TrustStrip() {
  return (
    <div className="bg-[#121216] border-b border-slate-800/80 py-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        
        <div className="flex flex-col items-center gap-1.5">
          <MapPin className="w-5 h-5 text-slate-300" />
          <span className="text-xs font-bold text-white">Hauptstraße 231</span>
          <span className="text-[11px] text-slate-400">50169 Kerpen-Horrem</span>
        </div>

        <div className="flex flex-col items-center gap-1.5">
          <Clock className="w-5 h-5 text-slate-300" />
          <span className="text-xs font-bold text-white">Di – Fr: 12:00 – 18:30 Uhr</span>
          <span className="text-[11px] text-slate-400">Sa: 12:00 – 16:00 Uhr</span>
        </div>

        <div className="flex flex-col items-center gap-1.5">
          <Star className="w-5 h-5 text-slate-300 fill-slate-300" />
          <span className="text-xs font-bold text-white">4.8 von 5.0 Sternen</span>
          <span className="text-[11px] text-slate-400">Über 160 Google Rezensionen</span>
        </div>

        <div className="flex flex-col items-center gap-1.5">
          <Shield className="w-5 h-5 text-slate-300" />
          <span className="text-xs font-bold text-white">100% REACH Konform</span>
          <span className="text-[11px] text-slate-400">Zertifizierte Tattoofarben</span>
        </div>

      </div>
    </div>
  );
}
