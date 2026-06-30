import React from 'react';
import Generator from '@/components/Generator';
import { Metadata } from 'next';

// TODO: Verify the BGMI 14-character limit manually before launching.
const BGMI_LIMIT = 14;

export const metadata: Metadata = {
  title: 'BGMI Name Generator — Stylish Nicknames for BGMI & PUBG Mobile',
  description: 'Generate stylish names and fancy fonts for BGMI (Battlegrounds Mobile India). Live 14-character limit counter, special symbols, rename card guide, and instructions.',
  keywords: ['bgmi name generator', 'stylish name for bgmi', 'bgmi symbols', 'bgmi rename card', 'pubg nickname finder'],
};

export default function BgmiNameGeneratorPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What is the character limit for BGMI names?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The character limit for nicknames in BGMI (Battlegrounds Mobile India) is exactly 14 characters, which includes custom fonts, symbols, and invisible unicode space codes.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How do you get a Rename Card in BGMI?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'You can buy a Rename Card in the Shop for 180 UC under the treasures tab, get it for free by leveling up (specifically level 3 and level 10), or obtain one from returner missions if you have been offline for 30+ days.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How to put spaces in a BGMI nickname?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'BGMI does not allow standard spaces. To add spacing gaps, use the Hangul Filler (U+3164) code. Copy the invisible character from our tool and paste it to insert spaces.'
        }
      }
    ]
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 animate-fadeIn relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Themed Background Overlay */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[300px] bg-gradient-to-b from-amber-500/10 to-transparent blur-3xl pointer-events-none z-0" />

      {/* Header and Explainer */}
      <section className="space-y-4 mb-10 text-center md:text-left relative z-10">
        <div className="inline-flex items-center space-x-1.5 rounded-lg bg-amber-500/10 px-2.5 py-1 text-xs font-black uppercase tracking-widest text-amber-500">
          <span>🎯 Battlegrounds Mobile India</span>
        </div>
        <h1 className="text-3xl font-black uppercase tracking-tight text-slate-800 dark:text-slate-100 sm:text-4xl md:text-5xl">
          BGMI Stylish Name Generator
        </h1>
        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 max-w-3xl leading-relaxed">
          Design premium, stylish gaming handles for BGMI. Our generator dynamically reviews your nickname size relative to the <strong>14-character limit</strong> used in BGMI & PUBG, ensuring your name saves cleanly without truncation.
        </p>
      </section>

      {/* Generator Component (Gold Theme) */}
      <section className="mb-14 relative z-10">
        <Generator gameLimit={BGMI_LIMIT} gameName="BGMI" theme="gold" />
      </section>

      {/* Paste Instructions */}
      <section className="gaming-card rounded-3xl p-6 md:p-8 mb-14 space-y-6 relative z-10">
        <h2 className="text-base font-black uppercase tracking-widest text-slate-800 dark:text-slate-100 flex items-center space-x-2">
          <span>📋 HOW TO USE RENAME CARD IN BGMI</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <ol className="list-decimal pl-5 space-y-3.5 text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
            <li>
              Generate your stylish BGMI name in the tool above and click <strong className="text-amber-500">Copy</strong>.
            </li>
            <li>
              Launch <strong>BGMI (Battlegrounds Mobile India)</strong> on your phone.
            </li>
            <li>
              Go to your <strong>Inventory</strong> from the bottom menu.
            </li>
            <li>
              Tap the <strong>Crate Icon</strong> (last icon in the inventory menu).
            </li>
            <li>
              Find and tap your <strong>Rename Card</strong> (ID icon), then tap <strong>Use</strong>.
            </li>
            <li>
              Tap inside the text box, paste your copied name, and tap <strong>OK</strong> to confirm.
            </li>
          </ol>

          {/* Screenshot placeholder box for premium layout */}
          <div className="rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/50 p-6 text-center dark:bg-slate-950/40 flex flex-col items-center justify-center min-h-[200px]">
            <svg className="h-10 w-10 text-slate-400 dark:text-slate-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">
              [Screenshot: BGMI Rename Card Dialog]
            </span>
            <span className="text-[11px] text-slate-400 dark:text-slate-500 mt-1 max-w-xs leading-normal">
              Shows Inventory layout and Rename Card usage confirmation prompt.
            </span>
          </div>
        </div>
      </section>

      {/* Manual FAQ Text Blocks */}
      <section className="space-y-6 relative z-10">
        <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
          ❓ FREQUENTLY ASKED QUESTIONS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="gaming-card rounded-2xl p-5 space-y-2">
            <h3 className="font-extrabold text-slate-800 dark:text-slate-100 uppercase tracking-wide text-xs">
              Why does my name change say "Name already taken"?
            </h3>
            <p className="text-slate-550 dark:text-slate-400 leading-relaxed text-xs">
              If another player is using the exact same characters, the game will prevent duplicates. Try adding an invisible character code, tiny decorative symbols, or a clan tag to make your name completely unique.
            </p>
          </div>

          <div className="gaming-card rounded-2xl p-5 space-y-2">
            <h3 className="font-extrabold text-slate-800 dark:text-slate-100 uppercase tracking-wide text-xs">
              Which special characters are supported by BGMI?
            </h3>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-xs">
              BGMI is based on the PUBG Mobile engine, which supports symbols like 乂, 𝕏, 卍, 么, 乙, and Japanese kana. Many fancy script alphabets and invisible spacers are also fully compatible.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
