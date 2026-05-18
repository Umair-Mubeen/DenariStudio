import { useState } from "react";
import { CASE_STUDIES } from "../data";

const FILTERS = ["All", "Web", "Branding", "Social", "E-Commerce", "Video"];

export default function OurWorkPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? CASE_STUDIES : CASE_STUDIES.filter(c => c.filter === active);

  return (
    <main style={{ paddingTop: 80 }}>

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="sec sec-dark" style={{ textAlign: "center", paddingBottom: 60 }}>
        <div className="con">
          <div className="stag stag-d" style={{ justifyContent: "center" }}>Our Work</div>
          <h1 className="hd" style={{ color: "#fff", fontSize: "clamp(2rem,5vw,3.2rem)", marginTop: 12 }}>
            See How We Help <em>Businesses Thrive</em>
          </h1>
          <p style={{ color: "rgba(255,255,255,.75)", maxWidth: 560, margin: "16px auto 0", fontSize: ".96rem", lineHeight: 1.8 }}>
            We do not just talk about results — we deliver them. Here are our most impactful case studies.
          </p>
        </div>
      </section>

      {/* ── Case Studies Grid ──────────────────────────────── */}
      <section className="sec">
        <div className="con">
          {/* Filter */}
          <div className="pf" style={{ marginBottom: 40 }}>
            {FILTERS.map(f => (
              <button key={f} className={`fb${active === f ? " a" : ""}`} onClick={() => setActive(f)}>{f}</button>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: 28 }}>
            {filtered.map((c, i) => (
              <div key={i} className="rev" style={{ background: "#fff", border: "1px solid var(--bd)", borderRadius: 16, overflow: "hidden", boxShadow: "var(--sh)", transition: "transform .3s,box-shadow .3s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "var(--shh)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "var(--sh)"; }}
              >
                {/* Thumbnail */}
                <div style={{ background: c.bg, height: 180, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "4rem" }}>{c.icon}</div>

                {/* Body */}
                <div style={{ padding: "22px 24px" }}>
                  <div style={{ fontFamily: "Raleway,sans-serif", fontSize: ".66rem", fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--a)", marginBottom: 6 }}>{c.service}</div>
                  <h3 style={{ fontFamily: "Raleway,sans-serif", fontSize: "1.05rem", fontWeight: 700, color: "var(--hd)", marginBottom: 8 }}>{c.client}</h3>
                  <p style={{ fontSize: ".84rem", color: "var(--txl)", lineHeight: 1.75, marginBottom: 16 }}>{c.desc}</p>

                  {/* Result badge */}
                  <div style={{ background: "rgba(71,178,228,.1)", border: "1px solid rgba(71,178,228,.25)", borderRadius: 8, padding: "10px 14px", display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                    <span style={{ fontSize: "1rem" }}>📈</span>
                    <span style={{ fontFamily: "Raleway,sans-serif", fontSize: ".82rem", fontWeight: 700, color: "var(--a)" }}>{c.result}</span>
                  </div>

                  {/* Tags */}
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {c.tags.map((t, j) => (
                      <span key={j} style={{ fontFamily: "Raleway,sans-serif", fontSize: ".68rem", fontWeight: 600, letterSpacing: ".06em", padding: "3px 10px", background: "var(--bgalt)", border: "1px solid var(--bd)", borderRadius: 50, color: "var(--txl)" }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="sec sec-dark" style={{ textAlign: "center" }}>
        <div className="con">
          <h2 className="hd" style={{ color: "#fff" }}>Your Project Could Be <em>Next</em></h2>
          <p style={{ color: "rgba(255,255,255,.7)", marginTop: 12, marginBottom: 28 }}>We can deliver these same results for your business too.</p>
          <a href="/#contact" className="bp">Get a Free Consultation →</a>
        </div>
      </section>

    </main>
  );
}