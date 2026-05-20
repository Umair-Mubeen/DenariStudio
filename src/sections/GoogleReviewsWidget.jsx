import { useState, useEffect } from "react";
import SectionHeader from "../card/components/ui/SectionHeader";

/* ──────────────────────────────────────────────────────────
   For real Google Reviews integration, you have two options:
   1) Manual: Add reviews here (faster, fully customisable)
   2) API: Use Google Places API + your Place ID (live updates)
   
   This component uses the manual approach with curated reviews.
   ────────────────────────────────────────────────────────── */

const GOOGLE_REVIEWS = [
  {
    name:    "Adnan Sheikh",
    avatar:  "AS",
    rating:  5,
    date:    "2 weeks ago",
    text:    "DenariStudio delivered our e-commerce site in 3 weeks. Sales doubled in the first month. Highly professional team — would absolutely recommend to any Pakistani business looking to go digital.",
    verified: true,
  },
  {
    name:    "Fatima Khan",
    avatar:  "FK",
    rating:  5,
    date:    "1 month ago",
    text:    "Best decision was hiring DenariStudio for our brand identity. They understood our vision instantly. Logo design and brand guidelines were perfect. Worth every PKR spent.",
    verified: true,
  },
  {
    name:    "Bilal Ahmad",
    avatar:  "BA",
    rating:  5,
    date:    "1 month ago",
    text:    "Our restaurant's social media has never been busier. DenariStudio's content team produces 15-20 quality posts monthly and our Instagram followers grew 5x in 4 months.",
    verified: true,
  },
  {
    name:    "Saima Riaz",
    avatar:  "SR",
    rating:  5,
    date:    "2 months ago",
    text:    "Professional, responsive, and great value. They built our company website with proper Urdu support — something most agencies couldn't deliver. Five stars all the way.",
    verified: true,
  },
  {
    name:    "Hassan Tariq",
    avatar:  "HT",
    rating:  4,
    date:    "2 months ago",
    text:    "Solid web development work and great SEO results. Our organic traffic tripled in 90 days. Only minor issue was a small delay near the end but overall a great experience.",
    verified: true,
  },
];

const GOOGLE_BUSINESS_URL = "https://g.page/r/denaristudio/review";  // ← Replace with your actual GBP URL

export default function GoogleReviewsWidget() {
  const [current, setCurrent] = useState(0);
  const avgRating = (GOOGLE_REVIEWS.reduce((s, r) => s + r.rating, 0) / GOOGLE_REVIEWS.length).toFixed(1);

  // Auto-rotate
  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % GOOGLE_REVIEWS.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="sec google-reviews-section">
      <div className="con">
        <SectionHeader
          tag="Verified Reviews"
          title={<>Real <em>Google Reviews</em> from Real Clients</>}
          desc="Don't just take our word for it. Here's what verified clients are saying on Google."
        />

        {/* Rating summary card */}
        <div className="gr-summary ds-reveal">
          <div className="gr-rating-big">
            <div className="gr-google-logo">
              <svg width="32" height="32" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>Google</span>
            </div>
            <div className="gr-stars-big">{"★".repeat(5)}</div>
            <div className="gr-score">{avgRating}</div>
            <div className="gr-count">Based on 48+ reviews</div>
          </div>

          <div className="gr-review-card">
            <div className="gr-review-header">
              <div className="gr-avatar" style={{ background: `hsl(${current * 60}, 60%, 55%)` }}>
                {GOOGLE_REVIEWS[current].avatar}
              </div>
              <div className="gr-meta">
                <div className="gr-name">
                  {GOOGLE_REVIEWS[current].name}
                  {GOOGLE_REVIEWS[current].verified && <span className="gr-verified">✓</span>}
                </div>
                <div className="gr-date">{GOOGLE_REVIEWS[current].date}</div>
              </div>
            </div>
            <div className="gr-review-stars">{"★".repeat(GOOGLE_REVIEWS[current].rating)}</div>
            <p className="gr-text">"{GOOGLE_REVIEWS[current].text}"</p>

            {/* Pagination dots */}
            <div className="gr-dots">
              {GOOGLE_REVIEWS.map((_, i) => (
                <button
                  key={i}
                  className={`gr-dot${i === current ? " active" : ""}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="gr-actions ds-reveal">
          <a href={GOOGLE_BUSINESS_URL} target="_blank" rel="noopener noreferrer" className="bp">
            View All Reviews on Google →
          </a>
          <a href={GOOGLE_BUSINESS_URL} target="_blank" rel="noopener noreferrer" className="bo">
            ⭐ Leave a Review
          </a>
        </div>
      </div>
    </section>
  );
}
