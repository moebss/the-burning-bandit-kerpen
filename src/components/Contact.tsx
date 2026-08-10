import { useState } from 'react';
import { Phone, MapPin, Clock, Send, CheckCircle, Flame } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="py-20 bg-[#0b0b0e] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Info Column */}
          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest text-amber-400 uppercase bg-slate-900/90 border border-amber-500/40 px-3.5 py-1.5 rounded-full">
              Kontakt & Anfahrt
            </span>

            <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Sichern Sie sich Ihren <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Tattoo-Termin</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Haben Sie eine konkrete Idee, ein Foto oder möchten Sie ein Cover-Up besprechen? Rufen Sie uns direkt an oder senden Sie uns Ihre Wünsche über das Formular!
            </p>

            <div className="space-y-4 pt-4 text-xs font-medium text-slate-200">
              <div className="flex items-center gap-3 bg-[#121216] p-4 rounded-2xl border border-slate-800">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <span className="font-bold text-white block text-sm">Adresse:</span>
                  <span>Hauptstraße 231, 50169 Kerpen-Horrem</span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-[#121216] p-4 rounded-2xl border border-slate-800">
                <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <span className="font-bold text-white block text-sm">Telefon:</span>
                  <span>02273 9499600</span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-[#121216] p-4 rounded-2xl border border-slate-800">
                <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <span className="font-bold text-white block text-sm">Öffnungszeiten:</span>
                  <span>Di – Fr: 12:00 – 18:30 Uhr | Sa: 12:00 – 16:00 Uhr</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Dark Container Form */}
          <div className="bg-[#121216] border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle className="w-12 h-12 text-amber-400 mx-auto" />
                <h3 className="font-syne font-bold text-2xl text-white">Vielen Dank!</h3>
                <p className="text-xs text-slate-300">Deine Tattoo-Anfrage ist bei uns eingegangen. Wir melden uns innerhalb von 24 Stunden bei dir!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <h3 className="font-syne font-bold text-2xl text-white mb-2">Motiv-Anfrage Senden</h3>
                
                <div>
                  <label className="block text-slate-300 font-bold mb-1">Dein Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="z. B. Max Mustermann"
                    className="w-full bg-[#0b0b0e] border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-bold mb-1">Telefon / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="0171 1234567"
                      className="w-full bg-[#0b0b0e] border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-bold mb-1">Wunsch-Stil</label>
                    <select className="w-full bg-[#0b0b0e] border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-400">
                      <option>Black & Grey Realismus</option>
                      <option>Fine Line & Minimalist</option>
                      <option>Cover-Up Projekt</option>
                      <option>Neo-Traditional / Colour</option>
                      <option>Piercing</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1">Körperstelle & Motiv-Beschreibung</label>
                  <textarea
                    rows={3}
                    placeholder="Wo soll das Tattoo hin und was wünschst du dir? (z. B. Unterarm, Kompass & Rose)"
                    className="w-full bg-[#0b0b0e] border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold text-xs uppercase tracking-wider py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Unverbindlich Anfragen</span>
                </button>

                <p className="text-[10px] text-slate-400 text-center pt-2">
                  100% Kostenlos & Unverbindlich • Echte Tätowierer-Antwort innerhalb von 24h.
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
