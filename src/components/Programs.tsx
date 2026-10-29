import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Program, PROGRAMS } from '../data/gymData';

interface ProgramsProps {
  onSelectProgram: (program: Program) => void;
  onOpenBooking: (programId?: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onSelectProgram, onOpenBooking }) => {
  return (
    <section id="services" className="py-24 bg-[#0e0e0e] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e63925] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#e63925]" />
              <span>WHAT I OFFER</span>
            </div>
            <h2 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl tracking-tight text-white uppercase leading-[0.95]">
              PROGRAMS <br />
              <span className="text-white">BUILT TO WIN</span>
            </h2>
          </div>

          <div className="max-w-md lg:text-right space-y-4">
            <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">
              Every program is designed with one goal in mind — getting you the results you came here for. No fluff, no filler.
            </p>
            <div>
              <button
                onClick={() => onOpenBooking()}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#e63925] hover:bg-[#d02816] rounded transition-all duration-200 shadow-md shadow-red-950/40 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap group"
              >
                <span>VIEW ALL PROGRAMS</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS.map((prog) => {
            const isRedCard = prog.isFeatured;

            return (
              <div
                key={prog.id}
                onClick={() => onSelectProgram(prog)}
                className={`relative group rounded-xl p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                  isRedCard
                    ? 'bg-[#d72c1d] text-white shadow-2xl shadow-red-950/60 hover:bg-[#c82416] hover:-translate-y-1'
                    : 'bg-[#141414] text-zinc-200 border border-white/5 hover:border-white/20 hover:bg-[#181818] hover:-translate-y-1'
                }`}
              >
                {/* Top Section */}
                <div className="space-y-6">
                  {/* Program Number index */}
                  <div className={`text-xs font-mono font-medium tracking-wider pb-3 border-b ${
                    isRedCard ? 'text-white/70 border-white/20' : 'text-zinc-500 border-white/10'
                  }`}>
                    {prog.number}
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight uppercase leading-tight text-white">
                    {prog.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-xs sm:text-sm leading-relaxed ${
                    isRedCard ? 'text-white/90' : 'text-zinc-400'
                  }`}>
                    {prog.description}
                  </p>
                </div>

                {/* Bottom Action */}
                <div className="pt-8">
                  <div className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                    isRedCard ? 'text-white group-hover:underline underline-offset-4' : 'text-zinc-400 group-hover:text-[#e63925]'
                  }`}>
                    <span>LEARN MORE</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Subtle top indicator on featured */}
                {isRedCard && (
                  <span className="absolute -top-3 right-6 bg-black text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded border border-white/20">
                    POPULAR
                  </span>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
