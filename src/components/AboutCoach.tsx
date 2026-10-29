import React from 'react';
import { Award, ShieldCheck, Dumbbell, Zap, Flame, Target, MapPin } from 'lucide-react';
import { COACH_DETAILS, GYM_INFO } from '../data/gymData';

interface AboutCoachProps {
  onOpenBooking: () => void;
}

export const AboutCoach: React.FC<AboutCoachProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-24 bg-[#0d0d0d] border-t border-white/5 relative overflow-hidden">
      {/* Background glow accent */}
      <div 
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-20"
        style={{ background: '#e63925' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual & Certifications Badge */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#141414]">
              <img
                src="/images/marcus-coach-portrait.jpg"
                alt="CrossFit Round Rock TX Head Coaching Staff"
                className="w-full h-auto object-cover filter contrast-[1.05]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-xs font-mono uppercase tracking-widest text-[#e63925] font-bold flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>ROUND ROCK, TEXAS</span>
                </div>
                <div className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
                  CROSSFIT ROUND ROCK
                </div>
                <p className="text-xs text-zinc-300 mt-1">
                  12+ Years Transforming Lives, Building Strength & Fostering Community in TX
                </p>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="bg-[#141414] border border-white/10 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#e63925]">
                <Award className="w-4 h-4" />
                <span>Certified Credentials & Box Accreditations</span>
              </div>
              <ul className="space-y-2 text-xs text-zinc-300 font-medium">
                {COACH_DETAILS.certifications.map((cert) => (
                  <li key={cert} className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#e63925] shrink-0 mt-0.5" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Philosophy & Bio */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e63925] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#e63925]" />
                <span>THE ROUND ROCK ETHOS</span>
              </div>
              <h2 className="font-display font-black text-5xl sm:text-6xl tracking-tight text-white uppercase leading-[0.95]">
                BUILT BY COMMUNITY. <br />
                <span className="text-[#e63925]">PROVEN</span> BY PERFORMANCE.
              </h2>
            </div>

            <p className="text-base text-zinc-300 leading-relaxed">
              "At CrossFit Round Rock TX, we believe physical capability is the bedrock of a fulfilling life. We don’t care if you have never touched a barbell or if you can snatch 250 lbs — when you walk through our doors in Round Rock, you get world-class coaching, zero ego, and a family that wants you to win."
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {COACH_DETAILS.philosophy.map((pillar, idx) => (
                <div
                  key={pillar.title}
                  className="p-5 rounded-xl bg-[#141414] border border-white/5 hover:border-white/20 transition-all space-y-2"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#e63925]/10 border border-[#e63925]/30 flex items-center justify-center text-[#e63925]">
                      {idx === 0 && <Dumbbell className="w-4 h-4" />}
                      {idx === 1 && <Zap className="w-4 h-4" />}
                      {idx === 2 && <Flame className="w-4 h-4" />}
                      {idx === 3 && <Target className="w-4 h-4" />}
                    </div>
                    <h4 className="font-display font-black text-lg text-white uppercase tracking-tight">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats Band */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl bg-[#111111] border border-white/5">
              <div>
                <div className="font-display font-black text-2xl sm:text-3xl text-white tabular-nums">
                  12+
                </div>
                <div className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold">
                  Years in Round Rock
                </div>
              </div>
              <div>
                <div className="font-display font-black text-2xl sm:text-3xl text-[#e63925] tabular-nums">
                  500+
                </div>
                <div className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold">
                  Local Athletes
                </div>
              </div>
              <div>
                <div className="font-display font-black text-2xl sm:text-3xl text-white tabular-nums">
                  14,000+
                </div>
                <div className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold">
                  WODs Coached
                </div>
              </div>
              <div>
                <div className="font-display font-black text-2xl sm:text-3xl text-[#e63925] tabular-nums">
                  100%
                </div>
                <div className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold">
                  Commitment
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#e63925] hover:bg-[#d02816] rounded shadow-lg shadow-red-950/40 transition-all hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
              >
                DROP IN OR BOOK A FREE TRIAL
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
