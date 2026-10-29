import React from 'react';
import { X, Calendar, Clock, CheckCircle2, Share2 } from 'lucide-react';
import { Article } from '../data/gymData';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onOpenBooking,
}) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-[#121212] border border-white/10 rounded-2xl shadow-2xl overflow-y-auto max-h-[92vh] text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 p-2 rounded-lg bg-black/60 hover:bg-black/90 text-zinc-300 hover:text-white transition-colors cursor-pointer border border-white/10"
          aria-label="Close article modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Banner of Modal */}
        <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full overflow-hidden bg-[#181818]">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/50 to-transparent" />
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-10 space-y-8 -mt-8 relative z-10">
          
          {/* Header Metadata */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded bg-[#e63925] text-white">
                {article.tag}
              </span>
              <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {article.date}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readTime}
                </span>
              </div>
            </div>

            <h1 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight leading-tight">
              {article.title}
            </h1>
          </div>

          {/* Lead intro */}
          <p className="text-base sm:text-lg text-zinc-200 font-medium leading-relaxed border-l-2 border-[#e63925] pl-4">
            {article.content.lead}
          </p>

          {/* Sections */}
          <div className="space-y-6 text-zinc-300">
            {article.content.sections.map((sec, i) => (
              <div key={i} className="space-y-2">
                <h3 className="font-display font-bold text-xl text-white uppercase tracking-tight">
                  {sec.heading}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-300">
                  {sec.body}
                </p>
              </div>
            ))}
          </div>

          {/* Takeaways Box */}
          <div className="p-6 rounded-xl bg-[#181818] border border-white/10 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#e63925] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Key Practical Takeaways</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
              {article.content.takeaways.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e63925] mt-1.5 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Coach CTA within Article */}
          <div className="p-6 rounded-xl bg-gradient-to-r from-[#1f0604] to-[#141414] border border-[#e63925]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-sm font-bold text-white uppercase">Want personalized guidance?</div>
              <p className="text-xs text-zinc-400">Marcus Reid designs tailored workouts and meal plans for your exact biology.</p>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#e63925] hover:bg-[#d02816] rounded transition-all whitespace-nowrap cursor-pointer"
            >
              BOOK CONSULTATION
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
