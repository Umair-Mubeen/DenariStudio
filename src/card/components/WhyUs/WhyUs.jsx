import { WHY } from "../../../data";

const SERVICE_NODES = [
  { cx: 100, cy: 20,  lbl: "Web",   fs: "8" },
  { cx: 100, cy: 180, lbl: "SEO",   fs: "8" },
  { cx: 20,  cy: 100, lbl: "Brand", fs: "7" },
  { cx: 180, cy: 100, lbl: "UX",    fs: "8" },
];

const CORNER_DOTS = [[43,43],[157,43],[43,157],[157,157]];

export default function WhyUs() {
  return (
    <section className="sec">
      <div className="con">
        <div className="wg">

          {/* ── Infographic ────────────────────────── */}
          <div className="wv revL">
            <div className="wi">
              <svg viewBox="0 0 200 200" width="72%" fill="none">
                {/* Orbit rings */}
                <circle cx="100" cy="100" r="80" stroke="rgba(71,178,228,0.3)" strokeWidth="1" />
                <circle cx="100" cy="100" r="55" stroke="rgba(71,178,228,0.2)" strokeWidth="1" />
                {/* Core bubble */}
                <circle cx="100" cy="100" r="30" fill="rgba(71,178,228,0.15)" stroke="rgba(71,178,228,0.5)" strokeWidth="1.5" />
                <text x="100" y="96"  textAnchor="middle" fontFamily="Raleway,sans-serif" fontSize="9" fill="rgba(255,255,255,0.85)" fontWeight="700">DENARI</text>
                <text x="100" y="108" textAnchor="middle" fontFamily="Raleway,sans-serif" fontSize="9" fill="#47b2e4"              fontWeight="700">STUDIO</text>

                {/* Satellite nodes */}
                {SERVICE_NODES.map((n, i) => (
                  <g key={i}>
                    <circle cx={n.cx} cy={n.cy} r="14" fill="rgba(71,178,228,0.2)" stroke="#47b2e4" strokeWidth="1.5" />
                    <text x={n.cx} y={n.cy + 5} textAnchor="middle" fontFamily="Raleway" fontSize={n.fs} fill="white">{n.lbl}</text>
                  </g>
                ))}

                {/* Corner dots */}
                {CORNER_DOTS.map(([cx, cy], i) => (
                  <circle key={i} cx={cx} cy={cy} r="11" fill="rgba(55,81,126,0.4)" stroke="rgba(71,178,228,0.5)" strokeWidth="1" />
                ))}

                {/* Connecting lines */}
                <line x1="100" y1="34"  x2="100" y2="70"  stroke="rgba(71,178,228,0.4)" strokeWidth="0.8" />
                <line x1="100" y1="130" x2="100" y2="166" stroke="rgba(71,178,228,0.4)" strokeWidth="0.8" />
                <line x1="34"  y1="100" x2="70"  y2="100" stroke="rgba(71,178,228,0.4)" strokeWidth="0.8" />
                <line x1="130" y1="100" x2="166" y2="100" stroke="rgba(71,178,228,0.4)" strokeWidth="0.8" />
              </svg>
            </div>

            {/* Badge overlay */}
            <div className="wb">
              <div className="wbn">80+</div>
              <div className="wbl">Projects Done</div>
            </div>
          </div>

          {/* ── Content ────────────────────────────── */}
          <div className="revR">
            <div className="stag">Why Choose DenariStudio</div>
            <h2 className="hd" style={{ marginTop: 12 }}>
              Your Success is <em>Our Mission</em>
            </h2>
            <p style={{ color: "#848484", fontSize: ".88rem", margin: "14px 0 22px" }}>
              Fast-paced digital world mein sahi marketing partner choose karna
              sab se important decision hai. DenariStudio sirf campaigns nahi
              banata — hum measurable success deliver karte hain.
            </p>

            <div className="wl">
              {WHY.map((w, i) => (
                <div className="wy" key={i}>
                  <div className="wyi">{w.icon}</div>
                  <div>
                    <h4>{w.title}</h4>
                    <p>{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}