import React from 'react';
import Generator from '@/components/Generator';
import { Metadata } from 'next';

// TODO: Verify the Free Fire 12-character limit manually before launching.
const FF_LIMIT = 12;

export const metadata: Metadata = {
  title: 'Free Fire Name Generator — Stylish Nicknames for FF Max',
  description: 'Generate stylish names and fancy fonts for Free Fire. Live 12-character limit counter, invisible spacing symbols, crowns, wings, and step-by-step instructions.',
  keywords: ['free fire name generator', 'ff stylish name', 'free fire nick finder', 'invisible space free fire', 'ff name change'],
};

export default function FreeFireNameGeneratorPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What is the character limit for Free Fire nicknames?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The nickname limit in Free Fire (and Free Fire Max) is exactly 12 characters, including any letters, custom font lookalikes, symbols, and invisible spacing codes.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How do I put a space in my Free Fire name?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Free Fire strips ordinary spacebar inputs. To add spacing, copy the Hangul Filler (U+3164) character from our Invisible Text section and paste it between your words.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How many diamonds are required to change my nickname in Free Fire?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'It costs 390 Diamonds to change your nickname, or you can use a Name Change Card which is frequently available in the guild store or seasonal events.'
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
      <div className="absolute top-0 left-1/4 right-1/4 h-[300px] bg-gradient-to-b from-orange-500/10 to-transparent blur-3xl pointer-events-none z-0" />

      {/* Header and Explainer */}
      <section className="space-y-4 mb-10 text-center md:text-left relative z-10">
        <div className="inline-flex items-center space-x-1.5 rounded-lg bg-orange-500/10 px-2.5 py-1 text-xs font-black uppercase tracking-widest text-orange-500">
          <span>🔥 Free Fire Max Nicknames</span>
        </div>
        <h1 className="text-3xl font-black uppercase tracking-tight text-slate-800 dark:text-slate-100 sm:text-4xl md:text-5xl">
          Free Fire Stylish Name Generator
        </h1>
        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 max-w-3xl leading-relaxed">
          Create premium stylish nicknames for Free Fire Max. Our generator automatically tracks the strict <strong>12-character limit</strong> imposed by Garena, warning you if your custom fonts and symbols exceed the bounds.
        </p>
      </section>

      {/* Generator Component (Orange Theme) */}
      <section className="mb-14 relative z-10">
        <Generator gameLimit={FF_LIMIT} gameName="Free Fire" theme="orange" />
      </section>

      {/* Paste Instructions */}
      <section className="gaming-card rounded-3xl p-6 md:p-8 mb-14 space-y-6 relative z-10">
        <h2 className="text-base font-black uppercase tracking-widest text-slate-800 dark:text-slate-150 flex items-center space-x-2">
          <span>📋 HOW TO CHANGE YOUR NICKNAME IN FREE FIRE</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <ol className="list-decimal pl-5 space-y-3.5 text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
            <li>
              Generate your favorite nickname above and click the <strong className="text-orange-500">Copy</strong> button.
            </li>
            <li>
              Launch the <strong className="text-slate-800 dark:text-slate-200">Free Fire Max</strong> application on your mobile device.
            </li>
            <li>
              Tap your <strong className="text-slate-800 dark:text-slate-200">Avatar banner</strong> in the top-left corner of the lobby screen.
            </li>
            <li>
              Tap the yellow <strong className="text-slate-800 dark:text-slate-200">Edit Notepad Icon</strong> near your current avatar card.
            </li>
            <li>
              Select your nickname edit input field.
            </li>
            <li>
              Paste your copied stylish name into the field and tap <strong className="text-orange-500">Confirm</strong> (requires 390 diamonds or a Name Change Card).
            </li>
          </ol>

          {/* Screenshot placeholder box for premium layout */}
          <div className="rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/50 p-6 text-center dark:bg-slate-950/40 flex flex-col items-center justify-center min-h-[200px]">
            <svg className="h-10 w-10 text-slate-400 dark:text-slate-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">
              [Screenshot: Free Fire Profile Settings]
            </span>
            <span className="text-[11px] text-slate-400 dark:text-slate-500 mt-1 max-w-xs leading-normal">
              Shows Avatar card editor showing nickname modification input.
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
              Why did my Free Fire name get truncated?
            </h3>
            <p className="text-slate-550 dark:text-slate-400 leading-relaxed text-xs">
              If your nickname is cut short, it exceeded the strict 12-character limit. Note that stylish Unicode characters and symbol decorations count as characters, and some complex emojis may occupy 2 to 4 slots in database indexing.
            </p>
          </div>

          <div className="gaming-card rounded-2xl p-5 space-y-2">
            <h3 className="font-extrabold text-slate-800 dark:text-slate-100 uppercase tracking-wide text-xs">
              Can I use emojis in my Free Fire username?
            </h3>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-xs">
              While standard mobile keyboard emojis (like 👍, 😂) are generally rejected or display as white squares, special symbolic diacritics (like ꧁ ꧂, ☬, ༒) are fully supported by Free Fire Max.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
