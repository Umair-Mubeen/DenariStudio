import { useParams, Link } from "react-router-dom";
import { SERVICES_DETAIL } from "../data";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const svc = SERVICES_DETAIL.find(s => s.slug === slug);

  if (!svc) return (
    <main style={{ paddingTop: 120, textAlign: "center" }}>
      <h2 style={{ fontFamily: "Raleway,sans-serif", color: "var(--hd)" }}>Service not found</h2>
      <Link to="/services" style={{ color: "var(--a)", marginTop: 16, display: "inline-block" }}>← All Services</Link>
    </main>
  );

  return (
    <main style={{ paddingTop: 80 }}>

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="sec sec-dark" style={{ textAlign: "center" }}>
        <div className="con">
          <div style={{ fontSize: "3.5rem", marginBottom: 16 }}>{svc.icon}</div>
          <div className="stag stag-d" style={{ justifyContent: "center" }}>Our Services</div>
          <h1 className="hd" style={{ color: "#fff", fontSize: "clamp(2rem,5vw,3rem)", marginTop: 12 }}>{svc.title}</h1>
          <p style={{ color: "rgba(255,255,255,.75)", maxWidth: 540, margin: "16px auto 0", fontSize: ".98rem", lineHeight: 1.8 }}>{svc.hero}</p>
          <a href="/#contact" className="bp" style={{ marginTop: 28, display: "inline-flex" }}>Get a Free Quote →</a>
        </div>
      </section>

      {/* ── Features + Description ─────────────────────────── */}
      <section className="sec">
        <div className="con" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
          <div className="revL">
            <div className="stag">What's Included</div>
            <h2 className="hd" style={{ marginTop: 12 }}>What Is <em>Included</em></h2>
            <div style={{ marginTop: 22, display: "flex", flexDirection: "column", gap: 12 }}>
              {svc.features.map((f, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", background: "var(--bgalt)", border: "1px solid var(--bd)", borderRadius: 8 }}>
                  <span style={{ width: 22, height: 22, minWidth: 22, background: "rgba(71,178,228,.12)", color: "var(--a)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: ".72rem", fontWeight: 700 }}>✓</span>
                  <span style={{ fontFamily: "Raleway,sans-serif", fontSize: ".88rem", fontWeight: 600, color: "var(--hd)" }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="revR">
            <div className="stag">Overview</div>
            <h2 className="hd" style={{ marginTop: 12 }}>Service <em>Details</em></h2>
            <p style={{ color: "var(--txl)", fontSize: ".9rem", lineHeight: 1.85, marginTop: 14 }}>{svc.desc || svc.hero}</p>
            <div style={{ marginTop: 28, padding: "20px 22px", background: "rgba(71,178,228,.06)", border: "1px solid rgba(71,178,228,.2)", borderRadius: 10 }}>
              <div style={{ fontFamily: "Raleway,sans-serif", fontSize: ".72rem", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--a)", marginBottom: 8 }}>Free Consultation</div>
              <p style={{ fontSize: ".86rem", color: "var(--txl)", marginBottom: 14 }}>Want to discuss your project? We respond within 24 hours.</p>
              <a href="/#contact" className="sl">Start a Conversation →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ───────────────────────────────────────── */}
      <section className="sec sec-alt">
        <div className="con">
          <div className="sh rev">
            <div className="stag">Pricing</div>
            <h2 className="hd">{svc.title} <em>Packages</em></h2>
            <p className="hdp">Transparent PKR pricing — no hidden charges.</p>
          </div>
          <div className="prg">
            {svc.pricing.map((p, i) => (
              <div key={i} className={`prc rev${i === 1 ? " pp" : ""}`}>
                <div className="prt">{p.tier}</div>
                <div className="prp">{p.price} <sub>PKR</sub></div>
                <div className="prd">{p.desc}</div>
                <a href="/#contact" className={`prb ${i === 1 ? "prbs" : "prbo"}`}>Get Started</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Other Services ────────────────────────────────── */}
      <section className="sec">
        <div className="con">
          <div className="sh rev">
            <div className="stag">Explore More</div>
            <h2 className="hd">Our Other <em>Services</em></h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14 }}>
            {SERVICES_DETAIL.filter(s => s.slug !== slug).map((s, i) => (
              <Link key={i} to={`/services/${s.slug}`} style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 20px", background: "#fff", border: "1px solid var(--bd)", borderRadius: 50, textDecoration: "none", fontFamily: "Raleway,sans-serif", fontSize: ".82rem", fontWeight: 600, color: "var(--hd)", transition: "all .3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--a)"; e.currentTarget.style.color = "var(--a)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--bd)"; e.currentTarget.style.color = "var(--hd)"; }}
              >
                <span>{s.icon}</span> {s.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}