import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Article, ARTICLES } from '../data/gymData';

interface ArticlesProps {
  onSelectArticle: (article: Article) => void;
}

export const Articles: React.FC<ArticlesProps> = ({ onSelectArticle }) => {
  return (
    <section id="articles" className="py-24 bg-[#0a0a0a] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e63925] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#e63925]" />
              <span>KNOWLEDGE & TIPS</span>
            </div>
            <h2 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl tracking-tight text-white uppercase leading-[0.95]">
              FORGE YOUR <br />
              <span className="text-white">MINDSET</span>
            </h2>
          </div>

          <div>
            <button
              onClick={() => onSelectArticle(ARTICLES[0])}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-white bg-[#141414] hover:bg-[#1a1a1a] border border-white/10 rounded transition-all duration-200 cursor-pointer whitespace-nowrap group"
            >
              <span>ALL ARTICLES</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((art) => {
            const isRedCard = art.isFeatured;

            return (
              <div
                key={art.id}
                onClick={() => onSelectArticle(art)}
                className="group rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 cursor-pointer shadow-xl shadow-black/60 border border-white/5"
              >
                {/* Article Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#181818]">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>

                {/* Article Content Box */}
                <div
                  className={`p-6 sm:p-7 flex-1 flex flex-col justify-between transition-colors ${
                    isRedCard
                      ? 'bg-[#d72c1d] text-white'
                      : 'bg-[#121212] text-zinc-200 group-hover:bg-[#161616]'
                  }`}
                >
                  <div className="space-y-3.5">
                    {/* Category Tag */}
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded ${
                          isRedCard
                            ? 'bg-black/30 text-white'
                            : 'bg-[#e63925] text-white'
                        }`}
                      >
                        {art.tag}
                      </span>
                      <span className={`text-[11px] font-mono ${isRedCard ? 'text-white/70' : 'text-zinc-500'}`}>
                        {art.readTime}
                      </span>
                    </div>

                    {/* Headline */}
                    <h3 className="font-display font-extrabold text-xl sm:text-2xl leading-snug tracking-tight uppercase text-white group-hover:text-white/95">
                      {art.title}
                    </h3>

                    {/* Description */}
                    <p
                      className={`text-xs sm:text-sm leading-relaxed line-clamp-3 font-normal ${
                        isRedCard ? 'text-white/90' : 'text-zinc-400'
                      }`}
                    >
                      {art.description}
                    </p>
                  </div>

                  {/* Card Footer: Date & Read More */}
                  <div
                    className={`pt-6 mt-6 border-t flex items-center justify-between text-xs ${
                      isRedCard
                        ? 'border-white/20 text-white'
                        : 'border-white/10 text-zinc-400'
                    }`}
                  >
                    <span className="font-mono text-[11px]">{art.date}</span>
                    <div className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider group-hover:underline underline-offset-4">
                      <span>READ MORE</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
