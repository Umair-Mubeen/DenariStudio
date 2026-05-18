import { CTA_BANNER } from "../../../data";

export default function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="con cta-inner">
        <div className="cta-text ds-reveal ds-left">
          <div className="stag stag-d">{CTA_BANNER.tag}</div>
          <h2 className="hd cta-heading">{CTA_BANNER.heading}</h2>
          <p className="cta-sub">{CTA_BANNER.sub}</p>
        </div>
        <div className="cta-action ds-reveal ds-right">
          <a href="#contact" className="bp cta-btn">{CTA_BANNER.btn} →</a>
        </div>
      </div>
      <div className="cta-blob cta-blob-1" />
      <div className="cta-blob cta-blob-2" />
    </section>
  );
}