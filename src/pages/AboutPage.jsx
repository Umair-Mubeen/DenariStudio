import { TEAM, ABOUT_STATS, WHY } from "../data";

export default function AboutPage() {
  return (
    <main style={{ paddingTop: 80 }}>

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="sec sec-dark" style={{ textAlign: "center" }}>
        <div className="con">
          <div className="stag stag-d" style={{ justifyContent: "center" }}>About Us</div>
          <h1 className="hd" style={{ color: "#fff", fontSize: "clamp(2rem,5vw,3.2rem)", marginTop: 12 }}>
            Pakistan's Trusted <em>Digital Partner</em>
          </h1>
          <p style={{ color: "rgba(255,255,255,.75)", maxWidth: 620, margin: "16px auto 0", fontSize: ".98rem", lineHeight: 1.8 }}>
            DenariStudio 2022 mein Karachi mein establish hua — Pakistani businesses ko world-class digital solutions
            provide karne ke mission ke saath. Hum sirf agency nahi, aapke long-term digital growth partner hain.
          </p>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────── */}
      <section className="sec">
        <div className="con">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 24 }}>
            {ABOUT_STATS.map((s, i) => (
              <div key={i} style={{ textAlign: "center", padding: "28px 16px", background: "var(--bgalt)", borderRadius: 12, border: "1px solid var(--bd)" }}>
                <div style={{ fontFamily: "Raleway,sans-serif", fontSize: "2.6rem", fontWeight: 800, color: "var(--a)", lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontFamily: "Raleway,sans-serif", fontSize: ".76rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--txl)", marginTop: 8 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission ───────────────────────────────────────── */}
      <section className="sec sec-alt">
        <div className="con" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div className="revL">
            <div className="stag">Our Mission</div>
            <h2 className="hd" style={{ marginTop: 12 }}>Your Success is <em>Our Priority</em></h2>
            <p style={{ color: "var(--txl)", fontSize: ".9rem", lineHeight: 1.85, marginTop: 14 }}>
              DenariStudio ka mission hai ke Pakistan ke har business ko — chahe woh Karachi ka textile mill ho ya
              Lahore ka startup — professional digital presence mile jo unhe globally compete karne dey.
            </p>
            <p style={{ color: "var(--txl)", fontSize: ".9rem", lineHeight: 1.85, marginTop: 12 }}>
              Hum believe karte hain ke quality work sirf bade budgets waalon ka haq nahi — isiliye hamari
              pricing PKR mein, transparent, aur har size ke business ke liye accessible hai.
            </p>
          </div>
          <div className="revR" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {WHY.map((w, i) => (
              <div key={i} className="wy" style={{ flexDirection: "column", gap: 10 }}>
                <div className="wyi" style={{ fontSize: "1.4rem" }}>{w.icon}</div>
                <div>
                  <h4 style={{ marginBottom: 4 }}>{w.title}</h4>
                  <p style={{ fontSize: ".78rem" }}>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ──────────────────────────────────────────── */}
      <section className="sec">
        <div className="con">
          <div className="sh rev">
            <div className="stag">Our Team</div>
            <h2 className="hd">Talented <em>People</em>, Real Results</h2>
            <p className="hdp">Our team of experienced designers, developers, and marketers are passionate about turning your vision into reality.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 24 }}>
            {TEAM.map((m, i) => (
              <div key={i} className="rev" style={{ textAlign: "center", padding: "28px 20px", background: "#fff", border: "1px solid var(--bd)", borderRadius: 14, boxShadow: "0 4px 20px rgba(55,81,126,.06)", transition: "transform .3s" }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-5px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "none"}
              >
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: `linear-gradient(135deg,${m.color},#47b2e4)`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px", fontFamily: "Raleway,sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#fff" }}>{m.initials}</div>
                <div style={{ fontFamily: "Raleway,sans-serif", fontWeight: 700, fontSize: ".95rem", color: "var(--hd)", marginBottom: 4 }}>{m.name}</div>
                <div style={{ fontSize: ".76rem", color: "var(--txl)", letterSpacing: ".04em" }}>{m.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="sec sec-dark" style={{ textAlign: "center" }}>
        <div className="con">
          <h2 className="hd" style={{ color: "#fff" }}>Partner with DenariStudio & <em>Grow Your Brand</em></h2>
          <p style={{ color: "rgba(255,255,255,.7)", marginTop: 12, marginBottom: 28 }}>Book your free consultation today — response guaranteed within 24 hours.</p>
          <a href="/#contact" className="bp">Let's Talk →</a>
        </div>
      </section>

    </main>
  );
}