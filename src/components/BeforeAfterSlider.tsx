import { useState } from 'react';
import imgCoverUp from '../images/tattoo_coverup.jpg';
import imgBlackGrey from '../images/tattoo_blackgrey.jpg';

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section id="coverup" className="py-24 bg-[#0a0a0c] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-semibold tracking-widest text-[#c9a84c] uppercase bg-[#121216] border border-[#c9a84c]/30 px-3.5 py-1.5 rounded-full inline-block">
            Cover-Up Transformation
          </span>
          <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-white">
            Altes Motiv vs. Neues Unikat
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-normal">
            Ziehe den Schieberegler, um die Transformation eines alten Tattoos in ein meisterhaftes Black & Grey Motiv zu sehen.
          </p>
        </div>

        {/* Interactive Slider Container */}
        <div className="max-w-3xl mx-auto relative aspect-[4/3] sm:aspect-video rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
          
          {/* After Image (Right Side) */}
          <img
            src={imgBlackGrey}
            alt="Nachher: Perfektes Black and Grey Tattoo"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <span className="absolute top-4 right-4 bg-[#c9a84c] text-slate-950 font-bold text-xs px-3.5 py-1.5 rounded-full shadow-md z-10 uppercase tracking-wider">
            Nachher: Neues Motiv
          </span>

          {/* Before Image (Left Side clipped) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src={imgCoverUp}
              alt="Vorher: Altes verblasstes Tattoo"
              className="absolute inset-0 w-full h-full object-cover filter contrast-90 brightness-85"
              style={{ width: '100%', maxWidth: 'none' }}
            />
            <span className="absolute top-4 left-4 bg-slate-900/90 text-white font-bold text-xs px-3.5 py-1.5 rounded-full shadow-md z-10 uppercase tracking-wider border border-slate-700">
              Vorher: Alt-Tattoo
            </span>
          </div>

          {/* Slider Handle Divider Line */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-[#c9a84c] cursor-ew-resize z-20 shadow-xl"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#c9a84c] text-slate-950 border-2 border-white flex items-center justify-center text-xs font-bold shadow-2xl">
              ↔
            </div>
          </div>

          {/* Invisible Range Input Control */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
            aria-label="Cover Up Vorher Nachher Slider"
          />
        </div>

      </div>
    </section>
  );
}
