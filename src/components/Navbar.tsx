import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (programId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'SERVICES', href: '#services' },
    { name: 'ABOUT', href: '#about' },
    { name: 'RESULTS', href: '#results' },
    { name: 'ARTICLES', href: '#articles' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0b0b0b]/92 backdrop-blur-md border-b border-white/5 py-3.5 shadow-xl shadow-black/50'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="flex items-center gap-2 text-lg sm:text-2xl font-display font-black tracking-tight text-white uppercase whitespace-nowrap shrink-0 hover:text-red-500 transition-colors"
          >
            <span>CROSSFIT</span>
            <span className="text-[#e63925]">ROUND ROCK</span>
            <span className="text-[11px] font-mono font-bold text-zinc-300 bg-white/10 px-1.5 py-0.5 rounded border border-white/15">
              TX
            </span>
          </a>

          {/* Zone 2: 4–5 single-line clean text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wider text-zinc-300 uppercase">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#e63925] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action button */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <button
              onClick={() => onOpenBooking()}
              className="px-5 py-2 text-xs font-bold tracking-wider uppercase text-white bg-[#e63925] hover:bg-[#d22b17] rounded shadow-lg shadow-red-950/40 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer"
            >
              BOOK FREE TRIAL
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-2.5">
            <button
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 text-xs font-bold uppercase text-white bg-[#e63925] rounded whitespace-nowrap"
            >
              FREE TRIAL
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111111] border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold tracking-wider text-zinc-300 hover:text-[#e63925] py-2 transition-colors uppercase"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
