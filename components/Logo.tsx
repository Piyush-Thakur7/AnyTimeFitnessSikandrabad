'use client';

import React, { useState } from 'react';

export default function Logo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="flex items-center space-x-2 sm:space-x-3 cursor-pointer select-none group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Interactive Esports Logo (Sized responsively) */}
      <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14">
        {/* Glow effect background */}
        <div className={`absolute inset-0 rounded-full bg-violet-500/20 blur-md transition-all duration-500 scale-90 ${
          isHovered ? 'scale-120 bg-fuchsia-500/30' : ''
        }`} />
        
        <svg 
          viewBox="0 0 100 100" 
          className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 transition-all duration-500 transform ${
            isHovered 
              ? 'scale-115 rotate-2 -translate-y-0.5 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]' 
              : 'scale-100 rotate-0 translate-y-0 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]'
          }`}
        >
          <defs>
            {/* Neon RGB Gradients */}
            <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
            
            <linearGradient id="crownGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#fef08a" />
            </linearGradient>

            <linearGradient id="swordGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>

            <linearGradient id="bannerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e1b4b" />
              <stop offset="50%" stopColor="#312e81" />
              <stop offset="100%" stopColor="#1e1b4b" />
            </linearGradient>
          </defs>

          {/* BACKGROUND: Crossed Swords */}
          <g className={`transition-transform duration-700 origin-center ${isHovered ? 'rotate-12 scale-105' : ''}`}>
            <path d="M 15 15 L 45 45 L 35 48 L 12 25 Z" fill="url(#swordGrad)" opacity="0.9" />
            <path d="M 85 15 L 55 45 L 65 48 L 88 25 Z" fill="url(#swordGrad)" opacity="0.9" />
            <circle cx="35" cy="35" r="3" fill="#ffffff" opacity="0.8" />
            <circle cx="65" cy="65" r="3" fill="#ffffff" opacity="0.8" />
          </g>

          {/* MAIN SHIELD */}
          <path
            d="M 50 20 
               C 68 20, 80 28, 80 50 
               C 80 72, 65 85, 50 92 
               C 35 85, 20 72, 20 50 
               C 20 28, 32 20, 50 20 Z"
            fill="#090d16"
            stroke="url(#shieldGrad)"
            strokeWidth="3"
          />

          {/* Shield Inner Border */}
          <path
            d="M 50 25 
               C 64 25, 74 31, 74 50 
               C 74 67, 62 78, 50 84 
               C 38 78, 26 67, 26 50 
               C 26 31, 36 25, 50 25 Z"
            fill="none"
            stroke={isHovered ? "#22c55e" : "#a855f7"}
            strokeWidth="1.5"
            strokeDasharray={isHovered ? "6 3" : "none"}
          />

          {/* SHIELD CREST: Crown */}
          <path
            d="M 38 42 L 42 52 L 50 45 L 58 52 L 62 42 L 56 46 L 50 36 L 44 46 Z"
            fill="url(#crownGrad)"
            stroke="#d97706"
            strokeWidth="1.5"
            className={`transition-all duration-500 origin-center ${isHovered ? 'scale-110 -translate-y-1' : ''}`}
          />
          
          <circle cx="50" cy="35" r="1.5" fill="#ffffff" className={isHovered ? 'animate-ping' : ''} />

          {/* FOREGROUND: Banner */}
          <polygon points="10,60 90,60 82,74 18,74" fill="url(#bannerGrad)" stroke="url(#shieldGrad)" strokeWidth="2" />
          <line x1="13" y1="63" x2="87" y2="63" stroke="#a855f7" strokeWidth="1" opacity="0.6" />
          <line x1="20" y1="71" x2="80" y2="71" stroke="#ec4899" strokeWidth="1" opacity="0.6" />

          <text
            x="50"
            y="70"
            fill="#ffffff"
            fontSize="10"
            fontWeight="900"
            textAnchor="middle"
            letterSpacing="2"
            fontFamily="monospace"
            className="select-none tracking-widest font-black"
          >
            {isHovered ? '☠' : '⚔'}
          </text>
        </svg>
      </div>

      {/* Title Text Section - Sized responsively to fit on mobile viewports */}
      <div className="flex flex-col">
        <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-black uppercase tracking-wider bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent dark:from-violet-400 dark:via-fuchsia-400 dark:to-pink-400 transition-all duration-300">
          {isHovered ? '🆂🆃🆈🅻🅴🅽🅰🅼🅴' : '꧁ SᴛʏʟᴇNᴀᴍᴇ ꧂'}
        </span>
        <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 flex items-center space-x-1 transition-colors group-hover:text-cyan-400">
          <span className="hidden xs:inline">🎮 GAMING NICKNAME LAB</span>
          <span className="xs:hidden">🎮 G-LAB</span>
        </span>
      </div>
    </div>
  );
}
