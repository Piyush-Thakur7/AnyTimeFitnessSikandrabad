'use client';

import Generator from '@/components/Generator';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 animate-fadeIn relative">
      {/* Hero Section */}
      <section className="text-center space-y-6 mb-16 relative">
        <div className="inline-flex items-center space-x-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-xs font-bold text-violet-650 dark:border-violet-850/40 dark:bg-violet-950/40 dark:text-violet-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
          </span>
          <span className="uppercase tracking-widest font-black text-[9px]">COMPATIBLE WITH FREE FIRE MAX & BGMI</span>
        </div>
        
        <h1 className="text-4xl font-black uppercase tracking-tight sm:text-5xl md:text-6xl leading-none">
          CHOOSE YOUR{' '}
          <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent dark:from-violet-400 dark:via-fuchsia-400 dark:to-pink-400">
            STYLISH NICKNAME
          </span>
        </h1>
        
        <p className="mx-auto max-w-2xl text-sm font-semibold text-slate-500 dark:text-slate-400 md:text-base leading-relaxed">
          The ultimate gaming font generator. Design clean, blank, or symbol-wrapped usernames for mobile multiplayer games, social accounts, and profile IGNs.
        </p>
      </section>

      {/* Game-Specific Quick Access Cards */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-16">
        {/* Free Fire Card */}
        <Link 
          href="/free-fire-name-generator"
          className="group gaming-card rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between min-h-[220px] neon-hover-orange cursor-pointer"
        >
          {/* Subtle themed background overlay */}
          <div className="absolute right-0 top-0 h-32 w-32 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-bl-full transition-transform duration-500 group-hover:scale-110" />
          
          <div className="space-y-4 relative z-10">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center space-x-1.5 rounded-lg bg-orange-500/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-orange-500">
                <span>🔥 FREE FIRE MAX</span>
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase">Limit: 12 Chars</span>
            </div>
            
            <h2 className="text-xl font-black uppercase text-slate-800 dark:text-slate-100 group-hover:text-orange-500 transition-colors">
              FF Nickname Studio
            </h2>
            
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Generate custom names complying with Garena&apos;s character restrictions. Automatically displays space configurations and limit alerts.
            </p>
          </div>
          
          <div className="flex items-center text-xs font-black uppercase tracking-widest text-orange-500 group-hover:translate-x-1 transition-transform pt-4 border-t border-slate-100 dark:border-slate-800">
            <span>ENTER FF STUDIO &rarr;</span>
          </div>
        </Link>

        {/* BGMI Card */}
        <Link 
          href="/bgmi-name-generator"
          className="group gaming-card rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between min-h-[220px] neon-hover-gold cursor-pointer"
        >
          <div className="absolute right-0 top-0 h-32 w-32 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-bl-full transition-transform duration-500 group-hover:scale-110" />
          
          <div className="space-y-4 relative z-10">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center space-x-1.5 rounded-lg bg-amber-500/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-amber-500">
                <span>🎯 BGMI / PUBG</span>
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase">Limit: 14 Chars</span>
            </div>
            
            <h2 className="text-xl font-black uppercase text-slate-800 dark:text-slate-100 group-hover:text-amber-500 transition-colors">
              BGMI Nickname Studio
            </h2>
            
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Design name codes with specialized fonts, esports symbols, and rename card support. Keeps track of PUBG/BGMI size limits.
            </p>
          </div>
          
          <div className="flex items-center text-xs font-black uppercase tracking-widest text-amber-500 group-hover:translate-x-1 transition-transform pt-4 border-t border-slate-100 dark:border-slate-800">
            <span>ENTER BGMI STUDIO &rarr;</span>
          </div>
        </Link>
      </section>

      {/* Main General Generator */}
      <section className="space-y-6 relative">
        <div className="text-center md:text-left">
          <h2 className="text-lg font-black uppercase tracking-widest text-slate-800 dark:text-slate-150">
            ⚡ UNIVERSAL FONTS CONVERTER
          </h2>
          <p className="text-xs text-slate-400 dark:text-slate-500">
            Type below to instantly preview your text in 40+ responsive Unicode fonts.
          </p>
        </div>
        
        <Generator theme="purple" />
      </section>
    </div>
  );
}
