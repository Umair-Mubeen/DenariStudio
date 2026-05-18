import { useRef, useEffect } from "react";
import useParticles from "../../../hooks/useParticles";
import useHeroCounters from "../../../hooks/useHeroCounters";

import {
  HERO_STATS, HERO_BARS,
  HERO_HEADLINE_1, HERO_HEADLINE_2, HERO_HEADLINE_ACCENT, HERO_DESC,
} from "../../../data";

export default function Hero() {
  const canvasRef = useRef(null);
  const hcardRef  = useRef(null);
  const r1 = useRef(null), r2 = useRef(null), r3 = useRef(null), r4 = useRef(null);

  useParticles(canvasRef);
  useHeroCounters([r1, r2, r3, r4]);

  // Animate hero skill bars
  useEffect(() => {
    if (!hcardRef.current) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      hcardRef.current.querySelectorAll(".hbf[data-w]")
        .forEach(b => (b.style.width = b.dataset.w + "%"));
      io.disconnect();
    }, { threshold: 0.2 });
    io.observe(hcardRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className="hero" id="home">
      <canvas ref={canvasRef} style={{ position:"absolute", inset:0, width:"100%", height:"100%" }} />

      <div className="hi" style={{ position:"relative", zIndex:1 }}>

        {/* ── Left: copy ─────────────────────────── */}
        <div>
          {/* Badge fades in first */}
          <div className="hbadge hero-badge-anim">
            <span className="hdot" />&nbsp;🇵🇰 Pakistan's Digital Partner
          </div>

          {/* Each headline line staggers in */}
          <h1>
            <span className="hero-line-1">{HERO_HEADLINE_1}</span>
            <span className="hero-line-2">{HERO_HEADLINE_2}</span>
            <span className="hero-line-3 ac">{HERO_HEADLINE_ACCENT}</span>
          </h1>

          <p className="hdesc hero-desc-anim">{HERO_DESC}</p>

          <div className="hctas hero-cta-anim">
            <a href="#contact" className="bp">Get Started →</a>
            <a href="#work"    className="bo">View Our Work</a>
          </div>
        </div>

        {/* ── Right: floating card ────────────────── */}
        <div className="hero-card-anim">
          {/* Continuous float */}
          <div className="float-anim">
            <div className="hcard" ref={hcardRef}>
              <div className="hctitle">⚡ Live Performance Dashboard</div>

              <div className="hsg">
                {HERO_STATS.map((s, i) => (
                  <div className="hs" key={i}>
                    <div className="hsn" ref={[r1,r2,r3,r4][i]}>0</div>
                    <div className="hsl">{s.label}</div>
                  </div>
                ))}
              </div>

              {HERO_BARS.map((b, i) => (
                <div key={i}>
                  <div className="hsr"><span>{b.label}</span><span>{b.w}%</span></div>
                  <div className="hb"><div className="hbf" data-w={b.w} style={{ width:0 }} /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <svg className="hw" viewBox="0 0 1440 80">
        <path fill="#ffffff" d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,30 1440,20 L1440,80 L0,80Z"/>
      </svg>
    </section>
  );
}