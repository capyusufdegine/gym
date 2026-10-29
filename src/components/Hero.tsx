import React from 'react';
import { ArrowRight, CheckCircle2, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onViewPrograms: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onViewPrograms }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-24 pb-16 lg:pt-28 lg:pb-24 overflow-hidden bg-[#0c0c0c]">
      {/* Background radial gradient glow */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 65% 35%, rgba(185, 28, 16, 0.42) 0%, rgba(95, 12, 8, 0.25) 35%, rgba(12, 12, 12, 0.95) 75%, #0c0c0c 100%)'
        }}
      />

      {/* Subtle giant background watermark "CROSSFIT ROUND ROCK" */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center select-none pointer-events-none font-display font-black text-[9.5vw] leading-none text-[#ff2e17]/[0.05] tracking-tight uppercase z-0"
      >
        CROSSFIT ROUND ROCK
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-6 space-y-6 lg:space-y-8 text-left">
            {/* Kicker badge */}
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e63925]">
              <span className="w-2 h-2 rounded-full bg-[#e63925]" />
              <span>PREMIER CROSSFIT & STRENGTH BOX · ROUND ROCK, TX</span>
            </div>

            {/* Monumental Headline */}
            <h1 className="font-display font-black text-6xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.92] text-white uppercase" style={{ textWrap: 'balance' }}>
              FORGE YOUR <br />
              <span className="text-white">BEST SELF</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-lg leading-relaxed font-normal">
              Round Rock’s premier CrossFit & personal training community — constantly varied functional movement, expert coaching, and real results.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-[#e63925] hover:bg-[#d02816] rounded transition-all duration-200 shadow-xl shadow-red-950/50 hover:shadow-red-800/60 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap group"
              >
                <span>BOOK A FREE TRIAL SESSION</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onViewPrograms}
                className="inline-flex items-center justify-center px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-zinc-300 hover:text-white transition-colors cursor-pointer whitespace-nowrap hover:underline underline-offset-8"
              >
                VIEW PROGRAMS
              </button>
            </div>

            {/* Trust markers */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-zinc-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#e63925]" />
                <span>Round Rock, TX Community</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#e63925]" />
                <span>Level 3 Certified Coaches</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#e63925]" />
                <span>100% Scalable for All Levels</span>
              </div>
            </div>
          </div>

          {/* Right Column: Coach Visual & Floating Metric Cards */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[520px]">
              {/* Backlit glow container */}
              <div className="absolute -inset-4 bg-gradient-to-t from-[#e63925]/30 to-transparent blur-3xl opacity-60 rounded-full" />

              {/* Coach Image frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/80 border border-white/10 aspect-[4/5] bg-[#141414]">
                <img
                  src="/images/marcus-coach-portrait.jpg"
                  alt="CrossFit Round Rock TX Head Coach"
                  className="w-full h-full object-cover object-top filter contrast-[1.05]"
                  referrerPolicy="no-referrer"
                />

                {/* Bottom subtle gradient scrim to ground image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent opacity-40 pointer-events-none" />
              </div>

              {/* Floating Metric Card 1 (Red solid) */}
              <div className="absolute -bottom-6 left-4 sm:-left-6 w-44 sm:w-52 p-4 sm:p-5 rounded-xl bg-[#d72c1d] text-white shadow-2xl shadow-black/60 border border-red-400/20 transform transition-all duration-300 hover:-translate-y-1">
                <div className="font-display font-black text-3xl sm:text-4xl leading-tight tabular-nums">
                  100%
                </div>
                <div className="text-[11px] sm:text-xs text-white/90 font-medium leading-snug mt-1">
                  Athlete Satisfaction Guaranteed — every WOD is scaled to your ability.
                </div>
              </div>

              {/* Floating Metric Card 2 (Glassmorphism dark frosted) */}
              <div className="absolute -bottom-6 right-4 sm:-right-4 w-44 sm:w-52 p-4 sm:p-5 rounded-xl bg-[#18181b]/85 backdrop-blur-md text-white shadow-2xl shadow-black/80 border border-white/15 transform transition-all duration-300 hover:-translate-y-1">
                <div className="font-display font-black text-3xl sm:text-4xl leading-tight tabular-nums text-white">
                  500+
                </div>
                <div className="text-[11px] sm:text-xs text-zinc-300 font-medium leading-snug mt-1">
                  Athletes Trained in Round Rock, TX — from beginners to competitors.
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
