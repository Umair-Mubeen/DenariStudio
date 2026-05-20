import { useParams, Link } from "react-router-dom";
import { CASE_STUDIES } from "../data";
import SEO from "../card/components/ui/SEO";

// Slugify client name
const slugify = (str) => str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function CaseStudyPage() {
  const { slug } = useParams();
  const study = CASE_STUDIES.find(c => slugify(c.client) === slug);

  if (!study) {
    return (
      <main style={{ paddingTop: 120, textAlign: "center", minHeight: "60vh" }}>
        <h2 style={{ fontFamily: "Raleway,sans-serif", color: "var(--hd)" }}>Case study not found</h2>
        <Link to="/our-work" style={{ color: "var(--a)", marginTop: 16, display: "inline-block" }}>← Back to all case studies</Link>
      </main>
    );
  }

  const related = CASE_STUDIES.filter(c => slugify(c.client) !== slug).slice(0, 3);

  return (
    <main style={{ paddingTop: 80 }}>
      <SEO
        title={`${study.client} — Case Study`}
        description={`How DenariStudio delivered ${study.service} for ${study.client}. ${study.result}.`}
        path={`/case-study/${slug}`}
      />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="sec sec-dark" style={{ paddingBottom: 60 }}>
        <div className="con">
          <Link to="/our-work" style={{ color: "rgba(255,255,255,.6)", fontSize: ".85rem", textDecoration: "none" }}>← Back to all case studies</Link>
          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 50, alignItems: "center", marginTop: 30 }}>
            <div>
              <div style={{ fontFamily: "Raleway,sans-serif", fontSize: ".7rem", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--a)", marginBottom: 14 }}>
                {study.service}
              </div>
              <h1 className="hd" style={{ color: "#fff", fontSize: "clamp(2rem,4.5vw,3rem)", lineHeight: 1.15, marginBottom: 20 }}>
                {study.client}
              </h1>
              <p style={{ color: "rgba(255,255,255,.8)", fontSize: "1rem", lineHeight: 1.85, marginBottom: 28 }}>
                {study.desc}
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {study.tags.map((t, i) => (
                  <span key={i} style={{ fontFamily: "Raleway,sans-serif", fontSize: ".72rem", fontWeight: 600, padding: "5px 14px", background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.18)", borderRadius: 50, color: "rgba(255,255,255,.85)" }}>{t}</span>
                ))}
              </div>
            </div>
            <div style={{ background: study.bg, height: 320, borderRadius: 18, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "7rem", boxShadow: "0 20px 60px rgba(0,0,0,.3)" }}>
              {study.icon}
            </div>
          </div>
        </div>
      </section>

      {/* ── KEY RESULT ───────────────────────────────────── */}
      <section className="sec sec-alt" style={{ paddingTop: 50, paddingBottom: 50 }}>
        <div className="con" style={{ textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 14, background: "#fff", padding: "20px 36px", borderRadius: 14, border: "2px solid var(--a)", boxShadow: "0 10px 40px rgba(71,178,228,.15)" }}>
            <span style={{ fontSize: "2.4rem" }}>📈</span>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontFamily: "Raleway,sans-serif", fontSize: ".68rem", fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--a)", marginBottom: 4 }}>Key Result</div>
              <div style={{ fontFamily: "Raleway,sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "var(--hd)" }}>{study.result}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────── */}
      <section className="sec">
        <div className="con" style={{ maxWidth: 780 }}>
          <div className="ds-reveal">
            <div className="stag">Our Approach</div>
            <h2 className="hd" style={{ marginTop: 12 }}>How We Delivered <em>This Result</em></h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 18, marginTop: 32 }}>
            {[
              { n: "01", title: "Discovery",  desc: "Deep dive into client's business goals, target audience, and challenges." },
              { n: "02", title: "Strategy",   desc: "Custom roadmap with clear milestones, deliverables, and success metrics." },
              { n: "03", title: "Execution",  desc: "Design and development with weekly progress updates and stakeholder feedback." },
              { n: "04", title: "Launch & Grow", desc: "Smooth handover, training, and ongoing support to ensure long-term success." },
            ].map((s) => (
              <div key={s.n} style={{ padding: "24px 22px", background: "#fff", border: "1px solid var(--bd)", borderRadius: 12, boxShadow: "0 4px 18px rgba(55,81,126,.06)" }}>
                <div style={{ fontFamily: "Raleway,sans-serif", fontSize: ".7rem", fontWeight: 700, letterSpacing: ".18em", color: "var(--a)" }}>{s.n}</div>
                <h4 style={{ fontFamily: "Raleway,sans-serif", fontSize: "1rem", fontWeight: 700, color: "var(--hd)", marginTop: 6, marginBottom: 8 }}>{s.title}</h4>
                <p style={{ fontSize: ".82rem", color: "var(--txl)", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED ──────────────────────────────────────── */}
      <section className="sec sec-alt">
        <div className="con">
          <h2 className="hd" style={{ marginBottom: 28 }}>More <em>Case Studies</em></h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 22 }}>
            {related.map((c) => (
              <Link key={c.client} to={`/case-study/${slugify(c.client)}`} style={{ textDecoration: "none", background: "#fff", border: "1px solid var(--bd)", borderRadius: 14, overflow: "hidden", boxShadow: "0 4px 20px rgba(55,81,126,.06)", transition: "transform .3s, box-shadow .3s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(55,81,126,.15)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(55,81,126,.06)"; }}
              >
                <div style={{ background: c.bg, height: 130, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3rem" }}>{c.icon}</div>
                <div style={{ padding: "18px 20px" }}>
                  <div style={{ fontFamily: "Raleway,sans-serif", fontSize: ".66rem", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--a)", marginBottom: 5 }}>{c.service}</div>
                  <div style={{ fontFamily: "Raleway,sans-serif", fontSize: "1rem", fontWeight: 700, color: "var(--hd)" }}>{c.client}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="sec sec-dark" style={{ textAlign: "center" }}>
        <div className="con">
          <h2 className="hd" style={{ color: "#fff" }}>Want Results <em>Like These?</em></h2>
          <p style={{ color: "rgba(255,255,255,.7)", marginTop: 12, marginBottom: 28 }}>Let's discuss your project — free consultation, 24-hour response.</p>
          <a href="/#contact" className="bp">Start Your Project →</a>
        </div>
      </section>
    </main>
  );
}
