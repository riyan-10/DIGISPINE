import assert from 'node:assert/strict';
import { layoutChapterCards } from '../assets/chapter-layout.js';

const cards = [620, 690, 760, 650, 710, 800].map(offsetHeight => ({
  offsetHeight,
  style: { setProperty(name, value) { this[name] = value; } }
}));
// Short/tall phones, landscape, tablet and desktop; CSS supplies the real heights.
for (const [viewport, header] of [[568,80],[667,80],[700,80],[844,80],[390,66],[1024,80],[900,94]]) {
  layoutChapterCards(cards, viewport, header);
  for (const card of cards) {
    const top = parseFloat(card.style['--chapter-top']);
    assert.ok(Number.isFinite(top));
    assert.ok(top <= header + 16, 'Compact cards must clear the header');
    assert.ok(top + card.offsetHeight <= viewport - 16, 'Card bottom must remain reachable before pinning');
    if (viewport >= card.offsetHeight + header + 32) assert.equal(top, header + 16);
  }
}
// A reflow (longer copy / text zoom) must update the inset without a reload.
cards[0].offsetHeight = 950;
layoutChapterCards(cards, 667, 80);
assert.equal(cards[0].style['--chapter-top'], '-299px');
cards[0].offsetHeight = 400;
layoutChapterCards(cards, 844, 80);
assert.equal(cards[0].style['--chapter-top'], '96px');
console.log('Chapter pinning passed: six heights, seven viewports, content reflow and resize. Visual/touch QA remains pending.');
