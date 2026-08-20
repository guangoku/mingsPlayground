/**
 * Density audit for /gap-year. Paste into the browser console on the page.
 *
 * Two lessons are baked in:
 *  - Expand every disclosure FIRST. Text hidden inside 多说两句 and the story
 *    cards is still text the reader meets, and measuring only what is visible
 *    hides the worst offenders.
 *  - Judge SENTENCE length, not paragraph length. The ZH came from a spoken
 *    script, so it arrives as full sentences; a deck-style scroll wants short
 *    ones. Sentence length is also width-independent, unlike line counts.
 */
(() => {
  const MAX_SENTENCE = 30; // ZH chars
  // Disclosures can nest, so open repeatedly until nothing new appears.
  for (let i = 0; i < 3; i++) {
    document.querySelectorAll('button[aria-expanded="false"]').forEach((b) => b.click());
  }

  const long = [];
  const rows = [];
  document.querySelectorAll('.gy-slide').forEach((s) => {
    const sentences = [];
    s.querySelectorAll('p, li').forEach((p) => {
      p.innerText
        .trim()
        .split(/[。！？.!?]/)
        .map((x) => x.trim())
        .filter(Boolean)
        .forEach((sent) => {
          sentences.push(sent);
          if (sent.length > MAX_SENTENCE) {
            long.push({ section: s.id.replace('gy-', ''), len: sent.length, sent });
          }
        });
    });
    rows.push({
      id: s.id.replace('gy-', ''),
      screens: +(s.getBoundingClientRect().height / innerHeight).toFixed(2),
      chars: s.innerText.trim().length,
      longestSentence: sentences.reduce((a, x) => Math.max(a, x.length), 0),
      visuals: s.querySelectorAll('img').length + s.querySelectorAll('svg').length,
    });
  });

  const flags = rows
    .filter((r) => r.longestSentence > MAX_SENTENCE || r.screens > 1.3 || (r.chars > 150 && r.visuals < 2))
    .map((r) => `${r.id}: ${r.longestSentence}ch sentence, ${r.screens} screens, ${r.visuals} visuals`);

  console.table(rows);
  console.log('OVER BUDGET:', flags);
  console.log('LONG SENTENCES:', long.sort((a, b) => b.len - a.len));
  return { rows, flags, long };
})();
