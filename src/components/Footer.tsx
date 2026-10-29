import React from 'react';
import { Instagram, Youtube, Twitter, ShieldCheck, MapPin } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080808] border-t border-white/5 py-16 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="font-display font-extrabold text-2xl text-white uppercase tracking-wider block">
              CROSSFIT <span className="text-[#e63925]">ROUND ROCK</span> <span className="text-xs font-mono text-zinc-400">TX</span>
            </a>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              Premier CrossFit affiliate and functional strength community in Round Rock, Texas. Elite coaching, scalable programming, and a relentlessly supportive community.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-zinc-300">
              <MapPin className="w-3.5 h-3.5 text-[#e63925] shrink-0" />
              <span>{GYM_INFO.address}</span>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#social"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-[#141414] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:border-[#e63925] transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#social"
                aria-label="YouTube"
                className="w-8 h-8 rounded-lg bg-[#141414] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:border-[#e63925] transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#social"
                aria-label="Twitter"
                className="w-8 h-8 rounded-lg bg-[#141414] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:border-[#e63925] transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Programs</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-white transition-colors">01. CrossFit Group WODs</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">02. 1-on-1 Personal Coaching</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">03. Nutrition & Macros</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">04. On-Ramp Foundations</a></li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Explore</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-white transition-colors">About Our Box</a></li>
              <li><a href="#results" className="hover:text-white transition-colors">Round Rock Results</a></li>
              <li><a href="#articles" className="hover:text-white transition-colors">Knowledge & Tips</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Location & Hours</a></li>
            </ul>
          </div>

          {/* Facility Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Round Rock Hours</h4>
            <div className="text-xs space-y-1 text-zinc-400">
              <p><span className="text-zinc-200">Mon – Fri:</span> 05:00 – 20:30</p>
              <p><span className="text-zinc-200">Saturday:</span> 07:00 – 14:00</p>
              <p><span className="text-zinc-200">Sunday:</span> 09:00 – 12:00</p>
            </div>
            <div className="pt-2 flex items-center gap-1.5 text-[11px] text-zinc-500">
              <ShieldCheck className="w-3.5 h-3.5 text-[#e63925]" />
              <span>Official CrossFit Affiliate Box</span>
            </div>
          </div>

        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div>
            © {new Date().getFullYear()} CrossFit Round Rock TX. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#terms" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
            <a href="#terms" className="hover:text-zinc-400 transition-colors">Drop-In Waiver</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
