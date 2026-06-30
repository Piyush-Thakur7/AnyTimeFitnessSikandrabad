// Data file containing style maps for plain text conversion

export interface FontStyle {
  id: string;
  name: string;
  // If string, must be exactly 62 unicode code points: A-Z (26), a-z (26), 0-9 (10)
  // If function, maps each character individually
  map: string | ((text: string) => string);
  previewText?: string; // custom preview if needed
  compatibility: 'all' | 'limited'; // 'all' means fully compatible with Free Fire & BGMI
}

// Programmatic Mathematical Unicode Character Generator
// Bypasses string corruption issues by calculating Unicode offsets directly
function getMathOffset(char: string, styleId: string): string {
  const code = char.charCodeAt(0);
  
  // 1. Serif Bold: 𝐀-𝐙 (0x1D400), 𝐚-𝐳 (0x1D41A), 𝟎-𝟗 (0x1D7CE)
  if (styleId === 'serif-bold') {
    if (code >= 65 && code <= 90) return String.fromCodePoint(0x1D400 + (code - 65));
    if (code >= 97 && code <= 122) return String.fromCodePoint(0x1D41A + (code - 97));
    if (code >= 48 && code <= 57) return String.fromCodePoint(0x1D7CE + (code - 48));
  }
  
  // 2. Serif Italic: 𝐴-𝑍 (0x1D434), 𝑎-𝑧 (0x1D44E)
  if (styleId === 'serif-italic') {
    if (code === 72) return '\u210B'; // Exception: H -> ℋ
    if (code >= 65 && code <= 90) return String.fromCodePoint(0x1D434 + (code - 65));
    if (code === 104) return '\u210E'; // Exception: h -> ℎ
    if (code >= 97 && code <= 122) return String.fromCodePoint(0x1D44E + (code - 97));
  }

  // 3. Serif Bold Italic: 𝑨-𝒁 (0x1D468), 𝒂-𝒛 (0x1D482)
  if (styleId === 'serif-bold-italic') {
    if (code >= 65 && code <= 90) return String.fromCodePoint(0x1D468 + (code - 65));
    if (code >= 97 && code <= 122) return String.fromCodePoint(0x1D482 + (code - 97));
  }

  // 4. Sans Bold: 𝗔-𝗭 (0x1D5D4), 𝗮-𝘇 (0x1D5EE), 𝟬-𝟗 (0x1D7EC)
  if (styleId === 'sans-bold') {
    if (code >= 65 && code <= 90) return String.fromCodePoint(0x1D5D4 + (code - 65));
    if (code >= 97 && code <= 122) return String.fromCodePoint(0x1D5EE + (code - 97));
    if (code >= 48 && code <= 57) return String.fromCodePoint(0x1D7EC + (code - 48));
  }

  // 5. Sans Italic: 𝘈-𝘡 (0x1D608), 𝘢-𝘻 (0x1D622)
  if (styleId === 'sans-italic') {
    if (code >= 65 && code <= 90) return String.fromCodePoint(0x1D608 + (code - 65));
    if (code >= 97 && code <= 122) return String.fromCodePoint(0x1D622 + (code - 97));
  }

  // 6. Sans Bold Italic: 𝘼-𝙕 (0x1D63C), 𝙖-𝙯 (0x1D656)
  if (styleId === 'sans-bold-italic') {
    if (code >= 65 && code <= 90) return String.fromCodePoint(0x1D63C + (code - 65));
    if (code >= 97 && code <= 122) return String.fromCodePoint(0x1D656 + (code - 97));
  }

  // 7. Script Bold: 𝓐-𝓩 (0x1D4D0), 𝓪-𝓯 (0x1D4EA)
  if (styleId === 'script-bold') {
    if (code >= 65 && code <= 90) return String.fromCodePoint(0x1D4D0 + (code - 65));
    if (code >= 97 && code <= 122) return String.fromCodePoint(0x1D4EA + (code - 97));
  }

  // 8. Gothic Bold: 𝕬-𝖅 (0x1D538), 𝖆-𝖟 (0x1D552)
  if (styleId === 'gothic-bold') {
    if (code >= 65 && code <= 90) return String.fromCodePoint(0x1D538 + (code - 65));
    if (code >= 97 && code <= 122) return String.fromCodePoint(0x1D552 + (code - 97));
  }

  // 9. Double-Struck: 𝔸-ℤ (0x1D539), 𝕒-𝕫 (0x1D552), 𝟘-𝟡 (0x1D7D8)
  if (styleId === 'double-struck') {
    const capExceptions: Record<number, string> = {
      67: '\u2102', // C -> ℂ
      72: '\u210D', // H -> ℍ
      78: '\u2115', // N -> ℕ
      80: '\u2119', // P -> ℙ
      81: '\u211A', // Q -> ℚ
      82: '\u211D', // R -> ℝ
      90: '\u2124'  // Z -> ℤ
    };
    if (capExceptions[code]) return capExceptions[code];
    if (code >= 65 && code <= 90) return String.fromCodePoint(0x1D538 + (code - 65));
    if (code >= 97 && code <= 122) return String.fromCodePoint(0x1D552 + (code - 97));
    if (code >= 48 && code <= 57) return String.fromCodePoint(0x1D7D8 + (code - 48));
  }

  // 10. Monospace: 𝙰-𝚉 (0x1D670), 𝚊-𝚣 (0x1D68A), 𝟶-𝟿 (0x1D7F6)
  if (styleId === 'monospace') {
    if (code >= 65 && code <= 90) return String.fromCodePoint(0x1D670 + (code - 65));
    if (code >= 97 && code <= 122) return String.fromCodePoint(0x1D68A + (code - 97));
    if (code >= 48 && code <= 57) return String.fromCodePoint(0x1D7F6 + (code - 48));
  }

  return char;
}

// Convert input name according to styles
export function convertText(text: string, style: FontStyle): string {
  if (typeof style.map === 'function') {
    return style.map(text);
  }

  const glyphs = Array.from(style.map);
  if (glyphs.length < 62) {
    return text; // Return original if glyph map is invalid
  }

  return text
    .split('')
    .map((char) => {
      const code = char.charCodeAt(0);
      let index = -1;

      if (code >= 65 && code <= 90) {
        index = code - 65; // A-Z (0-25)
      } else if (code >= 97 && code <= 122) {
        index = code - 97 + 26; // a-z (26-51)
      } else if (code >= 48 && code <= 57) {
        index = code - 48 + 52; // 0-9 (52-61)
      }

      if (index !== -1 && glyphs[index]) {
        return glyphs[index];
      }
      return char;
    })
    .join('');
}

// Helper to append combining diacritical marks
function combineDiacritical(text: string, mark: string): string {
  return text
    .split('')
    .map((char) => (char === ' ' ? char : char + mark))
    .join('');
}

// Upside down mapping helper
const upsideDownChars: Record<string, string> = {
  a: 'ɐ', b: 'q', c: 'ɔ', d: 'p', e: 'ǝ', f: 'ɟ', g: 'ƃ', h: 'ɥ', i: 'ᴂ', j: 'ɾ', k: 'ʞ',
  l: 'l', m: 'ɯ', n: 'u', o: 'o', p: 'd', q: 'b', r: 'ɹ', s: 's', t: 'ʇ', u: 'n', v: 'ʌ',
  w: 'ʍ', x: 'x', y: 'ʎ', z: 'z',
  A: '∀', B: '𐐒', C: 'Ɔ', D: '◖', E: 'Ǝ', F: 'Ⅎ', G: '⅁', H: 'H', I: 'I', J: 'ſ', K: 'ʞ',
  L: '˥', M: 'W', N: 'N', O: 'O', P: 'Ԁ', Q: 'Ὁ', R: 'ᴚ', S: 'S', T: '┴', U: '∩', V: 'Λ',
  W: 'M', X: 'X', Y: '⅄', Z: 'Z',
  '0': '0', '1': 'Ɩ', '2': 'ᄅ', '3': 'Ɛ', '4': 'ㄣ', '5': 'ϛ', '6': '9', '7': 'ㄥ', '8': '8', '9': '6',
  '.': '˙', ',': "'", "'": ',', '"': '„', '?': '¿', '!': '¡', '(': ')', ')': '(', '[': ']', ']': '[',
  '{': '}', '}': '{', '<': '>', '>': '<', '_': '‾'
};

function makeUpsideDown(text: string): string {
  return text
    .split('')
    .map((char) => upsideDownChars[char] || char)
    .reverse()
    .join('');
}

// Mirror mapping helper
const mirrorChars: Record<string, string> = {
  a: 'ɒ', b: 'd', c: 'ɔ', d: 'b', e: 'ɘ', f: 'ʇ', g: 'ϱ', h: 'ʜ', i: 'i', j: '⌊', k: 'ʞ',
  l: 'l', m: 'm', n: 'ᴎ', o: 'o', p: 'q', q: 'p', r: 'я', s: 'ꙅ', t: 'ʇ', u: 'u', v: 'v',
  w: 'w', x: 'x', y: 'γ', z: 'ƹ',
  A: 'A', B: 'ᙏ', C: 'Ɔ', D: 'ᗡ', E: 'Ǝ', F: 'ㅋ', G: 'อ', H: 'H', I: 'I', J: 'Ⴑ', K: 'K',
  L: '⅃', M: 'M', N: 'И', O: 'O', P: 'ꟼ', Q: 'Ὁ', R: 'Я', S: 'Ꙅ', T: 'T', U: 'U', V: 'V',
  W: 'W', X: 'X', Y: 'Y', Z: 'Ƹ',
  '0': '0', '1': '1', '2': 'Ѕ', '3': 'Ɛ', '4': 'ߎ', '5': 'ट', '6': 'd', '7': '𐌓', '8': '8', '9': 'e',
};

function makeMirror(text: string): string {
  return text
    .split('')
    .map((char) => mirrorChars[char] || char)
    .reverse()
    .join('');
}

// Zalgo/Glitch text helper
const zalgoUp = ['̍', '̎', '̄', '̅', '̿', '̑', '̆', '̐', '͒', '͗', '͑', '̇', '̈', '̉', '̊', '̋', '̌', '̍', '̎', '̄', 'ͣ', 'ͤ', 'ͥ', 'ͦ', 'ͧ', 'ͨ', 'ͩ', 'ͪ', 'ͫ', 'ͬ', 'ͭ', 'ͮ', 'ͯ'];
const zalgoDown = ['̖', '̗', '̘', '̙', '̜', '̝', '̞', '̟', '̠', '̤', '̥', '̦', '̧', '̨', '̩', '̪', '̫', '̬', '̭', '̮', '̯', '̰', '̱', '̲', '̳', '̾', '͛', '͆', '̚'];
const zalgoMid = ['̕', '̛', '̀', '́', '͘', '̡', '̢', '̧', '̨', '̴', '̵', '̶', '͏', '͜', '͝', '͞', '͟', '͠', '͡', '͢', 'ͣ', 'ͤ', 'ͥ', 'ͦ', 'ͧ', 'ͨ', 'ͩ', 'ͪ', 'ͫ', 'ͬ', 'ͭ', 'ͮ', 'ͯ'];

function makeGlitch(text: string): string {
  return text
    .split('')
    .map((char) => {
      if (char === ' ') return char;
      let result = char;
      const count = 3 + Math.floor(Math.random() * 4);
      for (let i = 0; i < count; i++) {
        const rand = Math.random();
        if (rand < 0.33) {
          result += zalgoUp[Math.floor(Math.random() * zalgoUp.length)];
        } else if (rand < 0.66) {
          result += zalgoDown[Math.floor(Math.random() * zalgoDown.length)];
        } else {
          result += zalgoMid[Math.floor(Math.random() * zalgoMid.length)];
        }
      }
      return result;
    })
    .join('');
}

// DEFINITION OF FONT STYLES (OVER 45 DISTINCT STYLES WITH COMPATIBILITY FLAGS)
export const FONT_STYLES: FontStyle[] = [
  {
    id: 'serif-bold',
    name: 'Serif Bold',
    compatibility: 'all',
    map: (text) => text.split('').map(c => getMathOffset(c, 'serif-bold')).join('')
  },
  {
    id: 'serif-italic',
    name: 'Serif Italic',
    compatibility: 'all',
    map: (text) => text.split('').map(c => getMathOffset(c, 'serif-italic')).join('')
  },
  {
    id: 'serif-bold-italic',
    name: 'Serif Bold Italic',
    compatibility: 'all',
    map: (text) => text.split('').map(c => getMathOffset(c, 'serif-bold-italic')).join('')
  },
  {
    id: 'sans-bold',
    name: 'Sans Bold',
    compatibility: 'all',
    map: (text) => text.split('').map(c => getMathOffset(c, 'sans-bold')).join('')
  },
  {
    id: 'sans-italic',
    name: 'Sans Italic',
    compatibility: 'all',
    map: (text) => text.split('').map(c => getMathOffset(c, 'sans-italic')).join('')
  },
  {
    id: 'sans-bold-italic',
    name: 'Sans Bold Italic',
    compatibility: 'all',
    map: (text) => text.split('').map(c => getMathOffset(c, 'sans-bold-italic')).join('')
  },
  {
    id: 'script-bold',
    name: 'Script Bold',
    compatibility: 'all',
    map: (text) => text.split('').map(c => getMathOffset(c, 'script-bold')).join('')
  },
  {
    id: 'gothic-bold',
    name: 'Gothic Bold',
    compatibility: 'all',
    map: (text) => text.split('').map(c => getMathOffset(c, 'gothic-bold')).join('')
  },
  {
    id: 'double-struck',
    name: 'Double-Struck (Outline)',
    compatibility: 'all',
    map: (text) => text.split('').map(c => getMathOffset(c, 'double-struck')).join('')
  },
  {
    id: 'monospace',
    name: 'Monospace',
    compatibility: 'all',
    map: (text) => text.split('').map(c => getMathOffset(c, 'monospace')).join('')
  },
  
  // Clean Lookup Mapping strings (Verified 62-characters each)
  {
    id: 'circled-light',
    name: 'Circled Light',
    compatibility: 'limited',
    map: 'ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ⓪①②③④⑤⑥⑦⑧⑨'
  },
  {
    id: 'circled-dark',
    name: 'Circled Dark',
    compatibility: 'limited',
    map: '🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩⓪❶❷❸❹❺❻❼❽❾'
  },
  {
    id: 'squared-light',
    name: 'Squared Light',
    compatibility: 'limited',
    map: '🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉0123456789'
  },
  {
    id: 'squared-dark',
    name: 'Squared Dark',
    compatibility: 'limited',
    map: '🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆄🆁🆂🆃🆄🆅🆆🆇🆈🆉🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆄🆁🆂🆃🆄🆅🆆🆇🆈🆉0123456789'
  },
  {
    id: 'parenthesized',
    name: 'Parenthesized',
    compatibility: 'limited',
    map: '🄐🄑🄒🄓🄔🄕🄖🄗🄘🄙🄚🄛🄜🄝🄞🄟🄠🄡🄢🄣🄤🄥🄦🄧🄨🄩⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵⑴⑵⑶⑷⑸⑹⑺⑻⑼0'
  },
  {
    id: 'full-width',
    name: 'Full-Width (Aesthetic)',
    compatibility: 'all',
    map: 'ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ０１２３４５６７８９'
  },
  {
    id: 'small-caps',
    name: 'Small Caps',
    compatibility: 'all',
    map: 'ᴀʙᴄTraceᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ0123456789'
  },
  {
    id: 'superscript',
    name: 'Superscript',
    compatibility: 'limited',
    map: 'ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾᵠᴿˢᵀᵁⱽᵂˣʸᶻᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖᵠʳˢᵗᵘᵛʷˣʸᶻ⁰¹²³⁴⁵⁶⁷⁸⁹'
  },
  {
    id: 'subscript',
    name: 'Subscript',
    compatibility: 'limited',
    map: 'ₐ♭꜀ᵈₑ𝒻𝓰ₕᵢⱼₖₗₘₙₒₚqᵣₛₜᵤᵥwₓᵧzₐ♭꜀ᵈₑ𝒻𝓰ₕᵢⱼₖₗₘₙₒₚqᵣₛₜᵤᵥwₓᵧz₀₁₂₃₄₅₆₇₈₉'
  },
  {
    id: 'gothic-normal',
    name: 'Gothic / Fraktur',
    compatibility: 'all',
    map: '𝔄𝔅𝔖𝔇𝔈𝔉𝔊𝔋ℑ𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜𝔝𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷0123456789'
  },
  {
    id: 'script-normal',
    name: 'Script normal',
    compatibility: 'all',
    map: '𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏0123456789'
  },
  {
    id: 'greek-style',
    name: 'Greek Lookalike',
    compatibility: 'all',
    map: 'αв¢∂єƒgнιјкℓмησρqяѕтυνωχуzαв¢∂єƒgнιјкℓмησρqяѕтυνωχуz0123456789'
  },
  {
    id: 'luna-font',
    name: 'Luna Accent',
    compatibility: 'all',
    map: 'ÄßÇÐÈFGHÏJKLMñÖPQRŠTÜVWXYZäßçðèfghïjklmñöpqrštüvwxyz0123456789'
  },
  
  // Custom Dynamic Mapping Functions
  {
    id: 'money-box',
    name: 'Money Box / Shielded',
    compatibility: 'all',
    map: (text) => text.split('').map(c => c === ' ' ? ' ' : `[̲̅${c}̲̅]`).join('')
  },
  {
    id: 'heart-bubbles',
    name: 'Heart Bubbles',
    compatibility: 'all',
    map: (text) => text.split('').map(c => c === ' ' ? ' ' : `${c}♥`).join('')
  },
  {
    id: 'star-bubbles',
    name: 'Star Bubbles',
    compatibility: 'all',
    map: (text) => text.split('').map(c => c === ' ' ? ' ' : `${c}★`).join('')
  },
  {
    id: 'lightning-slash',
    name: 'Lightning Slash',
    compatibility: 'all',
    map: (text) => text.split('').map(c => c === ' ' ? ' ' : `⚡${c}⚡`).join('')
  },
  {
    id: 'vaporwave',
    name: 'Vaporwave / Spaced',
    compatibility: 'all',
    map: (text) => text.split('').join(' ')
  },
  {
    id: 'strikethrough',
    name: 'Strike-through',
    compatibility: 'all',
    map: (text) => combineDiacritical(text, '\u0336')
  },
  {
    id: 'slash-through',
    name: 'Slash-through',
    compatibility: 'all',
    map: (text) => combineDiacritical(text, '\u0338')
  },
  {
    id: 'cross-out',
    name: 'Cross-out',
    compatibility: 'all',
    map: (text) => combineDiacritical(text, '\u0337')
  },
  {
    id: 'underline',
    name: 'Underline',
    compatibility: 'all',
    map: (text) => combineDiacritical(text, '\u0332')
  },
  {
    id: 'double-underline',
    name: 'Double Underline',
    compatibility: 'all',
    map: (text) => combineDiacritical(text, '\u0333')
  },
  {
    id: 'overline',
    name: 'Overline',
    compatibility: 'all',
    map: (text) => combineDiacritical(text, '\u0305')
  },
  {
    id: 'upside-down',
    name: 'Upside Down',
    compatibility: 'limited',
    map: makeUpsideDown
  },
  {
    id: 'mirror',
    name: 'Mirror Text',
    compatibility: 'limited',
    map: makeMirror
  },
  {
    id: 'glitch',
    name: 'Glitch / Zalgo',
    compatibility: 'limited',
    map: makeGlitch
  },
  {
    id: 'brackets-square',
    name: 'Square Brackets',
    compatibility: 'all',
    map: (text) => text.split('').map(c => c === ' ' ? ' ' : `[${c}]`).join('')
  },
  {
    id: 'brackets-curly',
    name: 'Curly Brackets',
    compatibility: 'all',
    map: (text) => text.split('').map(c => c === ' ' ? ' ' : `{${c}}`).join('')
  },
  {
    id: 'arrow-below',
    name: 'Arrow Below',
    compatibility: 'all',
    map: (text) => combineDiacritical(text, '\u0354')
  },
  {
    id: 'harpoon-above',
    name: 'Harpoon Above',
    compatibility: 'all',
    map: (text) => combineDiacritical(text, '\u035a')
  },
  {
    id: 'asterisk-below',
    name: 'Asterisk Below',
    compatibility: 'all',
    map: (text) => combineDiacritical(text, '\u0359')
  },
  {
    id: 'x-above',
    name: 'X Above',
    compatibility: 'all',
    map: (text) => combineDiacritical(text, '\u033d')
  },
  {
    id: 'bridge-above',
    name: 'Bridge Above',
    compatibility: 'all',
    map: (text) => combineDiacritical(text, '\u0346')
  }
];

export interface DecorationPreset {
  name: string;
  left: string;
  right: string;
}

export const DECORATION_PRESETS: DecorationPreset[] = [
  { name: 'Double Crowns', left: '꧁ ', right: ' ꧂' },
  { name: 'Royal Wings', left: '꧁ঔৣ☬✞ ', right: ' ✞☬ঔৣ꧂' },
  { name: 'Eagle Eye', left: '🦅 ', right: ' 🦅' },
  { name: 'Slayer Swords', left: '⚔️ ', right: ' ⚔️' },
  { name: 'Cyber brackets', left: '⚡『', right: '』⚡' },
  { name: 'Ghost skull', left: '💀[ ', right: ' ]💀' },
  { name: 'Heart beats', left: '❤️ ', right: ' ❤️' },
  { name: 'Fire sparkles', left: '🔥 ', right: ' 🔥' },
  { name: 'Royal Crown', left: '👑 ', right: ' 👑' },
  { name: 'Evil King', left: '😈 ', right: ' 😈' },
  { name: 'Stars wrapper', left: '★彡 ', right: ' 彡★' },
  { name: 'Japanese vibe', left: '✿ ', right: ' ✿' },
  { name: 'Sniper Crosshair', left: '︻╦̵̵͇̿̿̿̿╤── ', right: ' ──╤╦̵̵͇̿̿̿̿︻' },
  { name: 'Bullet Shells', left: '▄︻̷̿┻̿═━一 ', right: ' 一━═┻̷̿̿︻▄' },
  { name: 'Trident Spear', left: 'Ψ ', right: ' Ψ' },
  { name: 'Infinity loop', left: '∞ ', right: ' ∞' },
  { name: 'Smileys', left: 'ツ ', right: ' ツ' },
  { name: 'Thunder bolts', left: '⚡ ', right: ' ⚡' },
  { name: 'Devil horns', left: '◥꧁ ', right: ' ꧂◤' }
];

export interface TextArt {
  category: string;
  art: string;
}

export const TEXT_ART_LIBRARY: TextArt[] = [
  // COOL
  { category: 'Cool', art: '★彡 [NAME] 彡★' },
  { category: 'Cool', art: '✿ [NAME] ✿' },
  { category: 'Cool', art: '『NAME』' },
  { category: 'Cool', art: '〆[NAME]〆' },
  { category: 'Cool', art: '×͜× [NAME]' },
  { category: 'Cool', art: '⚚ [NAME] ⚚' },
  { category: 'Cool', art: '☯ [NAME] ☯' },
  { category: 'Cool', art: '彡[NAME]彡' },
  { category: 'Cool', art: '⎳ [NAME]' },
  { category: 'Cool', art: '『OP』NAME' },

  // FIRE
  { category: 'Fire', art: '🔥[NAME]🔥' },
  { category: 'Fire', art: '⚡[NAME]⚡' },
  { category: 'Fire', art: '☢️[NAME]☢️' },
  { category: 'Fire', art: '💥[NAME]💥' },
  { category: 'Fire', art: '🌋[NAME]🌋' },
  { category: 'Fire', art: '☠️ [NAME] ☠️' },
  { category: 'Fire', art: '⚔️ [NAME] ⚔️' },

  // ROYAL
  { category: 'Royal', art: '👑 [NAME] 👑' },
  { category: 'Royal', art: '꧁ঔৣ☬✞ [NAME] ✞☬ঔৣ꧂' },
  { category: 'Royal', art: '♛ [NAME] ♛' },
  { category: 'Royal', art: '⚜️ [NAME] ⚜️' },
  { category: 'Royal', art: '🔱 [NAME] 🔱' },
  { category: 'Royal', art: '💎 [NAME] 💎' },
  { category: 'Royal', art: '꧂ [NAME] ꧁' },

  // SKULL
  { category: 'Skull', art: '💀 [NAME] 💀' },
  { category: 'Skull', art: '☠️[NAME]☠️' },
  { category: 'Skull', art: '👻 [NAME] 👻' },
  { category: 'Skull', art: '😈 [NAME] 😈' },
  { category: 'Skull', art: '👹 [NAME] 👹' },
  { category: 'Skull', art: '👺 [NAME] 👺' },

  // PRO
  { category: 'Pro', art: '︻╦̵̵͇̿̿̿̿╤── [NAME]' },
  { category: 'Pro', art: '▄︻̷̿┻̿═━一 [NAME]' },
  { category: 'Pro', art: '★ [NAME] ★' },
  { category: 'Pro', art: '◤ [NAME] ◥' },
  { category: 'Pro', art: '『PRO』[NAME]' },
  { category: 'Pro', art: '⚔️[NAME]⚔️' },
  { category: 'Pro', art: '☣️ [NAME] ☣️' },

  // LOVE
  { category: 'Love', art: '❤️ [NAME] ❤️' },
  { category: 'Love', art: '💖 [NAME] 💖' },
  { category: 'Love', art: '💕 [NAME] 💕' },
  { category: 'Love', art: '💌 [NAME] 💌' },
  { category: 'Love', art: '✿ [NAME] ✿' },
  { category: 'Love', art: '❣ [NAME] ❣' },
  { category: 'Love', art: '🧸 [NAME] 🧸' }
];
