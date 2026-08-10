import { useState } from 'react';
import gallery1 from '../images/gallery_1.jpg';
import studioImg from '../images/studio_interior.jpg';

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section id="coverup" className="py-20 bg-[#121216] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-amber-400 uppercase bg-slate-900/90 border border-amber-500/40 px-3.5 py-1.5 rounded-full">
            Cover-Up Transformation
          </span>
          <h2 className="font-syne text-3xl sm:text-4xl font-extrabold text-white mt-4">
            Altes Tattoo vs. Neues Wunschmotiv
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 font-normal">
            Ziehen Sie den Schieberegler, um zu sehen, wie wir alte Jugendsünden in ein beeindruckendes Black & Grey Kunstwerk verwandeln.
          </p>
        </div>

        {/* Interactive Slider Container */}
        <div className="max-w-3xl mx-auto relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-500/30">
          
          {/* After Image (Right Side) */}
          <img
            src={gallery1}
            alt="Nachher: Perfektes Cover-Up Tattoo"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <span className="absolute top-4 right-4 bg-amber-500 text-slate-950 font-extrabold text-xs px-3.5 py-1 rounded-full shadow-md z-10 uppercase tracking-wider">
            NACHHER: Gelungenes Cover-Up
          </span>

          {/* Before Image (Left Side clipped) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src={studioImg}
              alt="Vorher: Altes verblasstes Tattoo"
              className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-75 brightness-75"
              style={{ width: '100%', maxWidth: 'none' }}
            />
            <span className="absolute top-4 left-4 bg-slate-900 text-white font-bold text-xs px-3.5 py-1 rounded-full shadow-md z-10 uppercase tracking-wider border border-slate-700">
              VORHER: Alt-Tattoo
            </span>
          </div>

          {/* Slider Handle Divider Line */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-amber-400 cursor-ew-resize z-20 shadow-xl"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-amber-500 text-slate-950 border-2 border-white flex items-center justify-center text-xs font-bold shadow-2xl">
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
          />
        </div>

      </div>
    </section>
  );
}
