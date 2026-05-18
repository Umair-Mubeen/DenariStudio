import { REVIEW_PLATFORMS } from "../../../data";

function Stars({ n = 5 }) {
  return (
    <span className="rev-stars">
      {"★".repeat(Math.round(n))}
    </span>
  );
}

export default function ReviewsStrip() {
  return (
    <div className="reviews-strip">
      <div className="con reviews-inner">
        <span className="reviews-label">Trusted &amp; Reviewed On</span>
        <div className="reviews-platforms">
          {REVIEW_PLATFORMS.map((p, i) => (
            <div className="rev-card rev" key={i}>
              <div className="rev-icon" style={{ background: p.color }}>
                {p.icon}
              </div>
              <div>
                <div className="rev-name">{p.name}</div>
                <Stars n={parseFloat(p.rating)} />
                <div className="rev-meta">
                  <strong>{p.rating}</strong> &nbsp;·&nbsp; {p.reviews} reviews
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
