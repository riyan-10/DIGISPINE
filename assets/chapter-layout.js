// Tall chapters scroll through their content before pinning at the bottom.
// Use untransformed heights so the scroll-driven scale cannot feed back into layout.
export function layoutChapterCards(cards, viewportHeight, headerHeight) {
  const insets = cards.map(card => Math.min(headerHeight + 16, viewportHeight - card.offsetHeight - 16));
  cards.forEach((card, index) => card.style.setProperty('--chapter-top', `${insets[index]}px`));
}
