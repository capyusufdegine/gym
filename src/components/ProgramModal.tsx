import React from 'react';
import { X, Check, ArrowRight, Clock, MapPin, DollarSign, Target } from 'lucide-react';
import { Program } from '../data/gymData';

interface ProgramModalProps {
  program: Program | null;
  onClose: () => void;
  onBookProgram: (programId: string) => void;
}

export const ProgramModal: React.FC<ProgramModalProps> = ({
  program,
  onClose,
  onBookProgram,
}) => {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#121212] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh] text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 pr-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#e63925]">
            <span>PROGRAM {program.number}</span>
            <span>·</span>
            <span>{program.duration}</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
            {program.title}
          </h2>
          <p className="text-sm text-zinc-300 leading-relaxed font-normal">
            {program.description}
          </p>
        </div>

        {/* Quick Specs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
          <div className="p-3.5 rounded-xl bg-[#181818] border border-white/5 space-y-1">
            <div className="flex items-center gap-1.5 text-[11px] text-zinc-400 font-mono uppercase">
              <DollarSign className="w-3.5 h-3.5 text-[#e63925]" />
              <span>Investment</span>
            </div>
            <div className="text-sm font-bold text-white font-mono">{program.price}</div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#181818] border border-white/5 space-y-1">
            <div className="flex items-center gap-1.5 text-[11px] text-zinc-400 font-mono uppercase">
              <MapPin className="w-3.5 h-3.5 text-[#e63925]" />
              <span>Format</span>
            </div>
            <div className="text-xs font-bold text-white truncate">{program.format}</div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#181818] border border-white/5 space-y-1">
            <div className="flex items-center gap-1.5 text-[11px] text-zinc-400 font-mono uppercase">
              <Clock className="w-3.5 h-3.5 text-[#e63925]" />
              <span>Schedule</span>
            </div>
            <div className="text-xs font-bold text-white truncate">{program.schedule}</div>
          </div>
        </div>

        {/* What's Included */}
        <div className="space-y-4 my-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
            <Target className="w-4 h-4 text-[#e63925]" />
            <span>Key Deliverables & What’s Included</span>
          </h4>
          <ul className="space-y-2.5">
            {program.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                <div className="w-5 h-5 rounded-full bg-[#e63925]/15 border border-[#e63925]/40 flex items-center justify-center shrink-0 mt-0.5 text-[#e63925]">
                  <Check className="w-3 h-3" />
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Ideal Candidate */}
        <div className="p-4 rounded-xl bg-[#181818] border border-white/5 space-y-1 my-6 text-xs text-zinc-300">
          <span className="font-bold text-white uppercase text-[11px] block">Who this is engineered for:</span>
          <p>{program.idealFor}</p>
        </div>

        {/* Footer actions */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors cursor-pointer text-center"
          >
            Back to Programs
          </button>
          <button
            onClick={() => {
              onClose();
              onBookProgram(program.id);
            }}
            className="w-full sm:w-auto px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#e63925] hover:bg-[#d02816] rounded shadow-lg shadow-red-950/50 flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <span>APPLY / BOOK THIS PROGRAM</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
