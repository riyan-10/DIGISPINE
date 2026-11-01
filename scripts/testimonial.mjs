// Exact transcription and provenance: docs/TESTIMONIAL_SOURCE.md.
export const REVIEW = {
  name: 'Sajad Sharabil Sajad', business: 'Varkala Rental Bikes', rating: 5,
  paragraphs: ["Awesome service by Digispine! We gave them our 'Varkala Rental Bikes' Google Business Profile to fix location errors, phone numbers, and SEO issues. They resolved everything within 24 hours.", 'Our page is now fully optimized, and we are getting significantly more calls and customer inquiries. Fast, professional, and super effective team!']
};
export function renderTestimonial() {
 return `<section class="testimonial-section wrap" id="customer-review" aria-labelledby="review-heading"><div class="testimonial-intro" data-reveal><span class="eyebrow">From a customer</span><h2 id="review-heading">What it is like<br><em>working with us.</em></h2><p>Help with a real business problem, in our customer’s own words.</p></div><figure class="review-card" data-reveal><div class="review-top"><span class="review-stars" role="img" aria-label="5 out of 5 stars">★★★★★</span><span class="micro">Google review</span></div><blockquote lang="en" data-original-review>${REVIEW.paragraphs.map(p=>`<p>${p}</p>`).join('')}</blockquote><figcaption><span class="review-avatar" aria-hidden="true">S</span><span><strong>${REVIEW.name}</strong><span class="review-business">${REVIEW.business}</span></span></figcaption></figure></section>`;
}
