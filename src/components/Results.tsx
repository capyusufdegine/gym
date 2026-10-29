import React, { useState } from 'react';
import { Quote, Trophy, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { TRANSFORMATIONS, Transformation } from '../data/gymData';

interface ResultsProps {
  onOpenBooking: () => void;
}

export const Results: React.FC<ResultsProps> = ({ onOpenBooking }) => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Fat Loss', 'Strength', 'Muscle Gain', 'Athletic'];

  const filteredTransformations = filter === 'All'
    ? TRANSFORMATIONS
    : TRANSFORMATIONS.filter(t => t.category === filter);

  return (
    <section id="results" className="py-24 bg-[#0b0b0b] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e63925] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#e63925]" />
              <span>PROVEN TRACK RECORD</span>
            </div>
            <h2 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl tracking-tight text-white uppercase leading-[0.95]">
              REAL CLIENTS. <br />
              <span className="text-white">REAL RESULTS.</span>
            </h2>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#141414] rounded-lg border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-md transition-all cursor-pointer whitespace-nowrap ${
                  filter === cat
                    ? 'bg-[#e63925] text-white shadow'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Transformations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredTransformations.map((item: Transformation) => (
            <div
              key={item.id}
              className="bg-[#121212] border border-white/5 rounded-2xl p-7 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all hover:-translate-y-1 shadow-xl shadow-black/50 group"
            >
              <div className="space-y-6">
                {/* Top header row */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-white group-hover:text-[#e63925] transition-colors">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-zinc-400 mt-0.5">
                      <span className="text-[#e63925] font-semibold">{item.category}</span>
                      <span>·</span>
                      <span className="font-mono">{item.timeframe}</span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wider uppercase">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Verified
                  </span>
                </div>

                {/* Highlight Stats Pill */}
                <div className="p-4 rounded-xl bg-[#181818] border border-white/5 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#e63925]/10 text-[#e63925]">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                      PRIMARY ADAPTATION
                    </div>
                    <div className="font-display font-black text-xl text-white tracking-tight">
                      {item.stats}
                    </div>
                  </div>
                </div>

                {/* Story */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                  {item.story}
                </p>

                {/* Quote */}
                <div className="relative pl-5 border-l-2 border-[#e63925] italic text-xs sm:text-sm text-zinc-200">
                  <Quote className="w-4 h-4 text-[#e63925] absolute -top-1 -left-2 opacity-50" />
                  "{item.quote}"
                </div>
              </div>

              {/* Bottom metric outcome */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-[#e63925]" />
                  <span className="text-zinc-300 font-medium">{item.highlight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#170403] via-[#240806] to-[#121212] border border-[#e63925]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
              Ready to write your own transformation story?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-xl">
              Limited to 15 active 1-on-1 private clients to ensure absolute obsessive attention to detail and accountability.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#e63925] hover:bg-[#d02816] rounded transition-all duration-200 shadow-xl shadow-red-950/60 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap flex items-center gap-2"
          >
            <span>CLAIM YOUR CONSULTATION</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
