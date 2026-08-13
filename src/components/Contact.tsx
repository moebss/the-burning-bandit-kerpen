import { useState } from 'react';
import { Phone, MapPin, Clock, Send, CheckCircle, Navigation } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="py-20 bg-[#0b0b0e] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Left Info & Google Maps Mini-Map Column */}
          <div className="space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <span className="text-xs font-semibold tracking-widest text-[#c9a84c] uppercase bg-[#121216] border border-[#c9a84c]/30 px-3.5 py-1.5 rounded-full">
                Kontakt & Anfahrt
              </span>

              <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Sichern Sie sich Ihren <span className="italic font-normal text-[#c9a84c]">Tattoo-Termin</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Haben Sie eine konkrete Idee, ein Foto oder möchten Sie ein Cover-Up besprechen? Rufen Sie uns direkt an oder senden Sie uns Ihre Wünsche über das Formular!
              </p>

              <div className="space-y-3 pt-2 text-xs font-medium text-slate-200">
                <div className="flex items-center justify-between bg-[#121216] p-4 rounded-2xl border border-slate-800">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-[#c9a84c] shrink-0" />
                    <div>
                      <span className="font-bold text-white block text-sm">Adresse:</span>
                      <span>Hauptstraße 231, 50169 Kerpen</span>
                    </div>
                  </div>
                  <a
                    href="https://maps.google.com/?q=The+Burning+Bandit+Kerpen+Hauptstraße+231"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-[#c9a84c] hover:text-white transition-colors shrink-0"
                    aria-label="Route in Google Maps öffnen"
                  >
                    <Navigation className="w-4 h-4" />
                  </a>
                </div>

                <div className="flex items-center gap-3 bg-[#121216] p-4 rounded-2xl border border-slate-800">
                  <Phone className="w-5 h-5 text-[#c9a84c] shrink-0" />
                  <div>
                    <span className="font-bold text-white block text-sm">Telefon:</span>
                    <span>02273 9499600</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-[#121216] p-4 rounded-2xl border border-slate-800">
                  <Clock className="w-5 h-5 text-[#c9a84c] shrink-0" />
                  <div>
                    <span className="font-bold text-white block text-sm">Öffnungszeiten:</span>
                    <span>Di – Fr: 12:00 – 18:30 Uhr | Sa: 12:00 – 16:00 Uhr</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Google Maps Mini-Map Card */}
            <div className="bg-[#121216] border border-slate-800 rounded-3xl overflow-hidden shadow-lg p-2 mt-4">
              <iframe
                title="Google Maps Anfahrt The Burning Bandit Kerpen"
                src="https://maps.google.com/maps?q=Hauptstrasse%20231%2C%2050169%20Kerpen&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-52 sm:h-60 rounded-2xl border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>

          </div>

          {/* Right Column: Dark Container Form */}
          <div className="bg-[#121216] border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-center">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle className="w-12 h-12 text-[#c9a84c] mx-auto" />
                <h3 className="font-outfit font-bold text-2xl text-white">Vielen Dank!</h3>
                <p className="text-xs text-slate-300">Deine Tattoo-Anfrage ist bei uns eingegangen. Wir melden uns innerhalb von 24 Stunden bei dir!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <h3 className="font-outfit font-bold text-2xl text-white mb-2">Motiv-Anfrage Senden</h3>
                
                <div>
                  <label className="block text-slate-300 font-bold mb-1">Dein Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="z. B. Max Mustermann"
                    className="w-full bg-[#0b0b0e] border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#c9a84c]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-bold mb-1">Telefon / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="0171 1234567"
                      className="w-full bg-[#0b0b0e] border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#c9a84c]"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-bold mb-1">Wunsch-Stil</label>
                    <select className="w-full bg-[#0b0b0e] border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#c9a84c]">
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
                    className="w-full bg-[#0b0b0e] border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-[#c9a84c]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#c9a84c] hover:bg-[#b8973b] text-slate-950 font-bold text-xs uppercase tracking-wider py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
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
