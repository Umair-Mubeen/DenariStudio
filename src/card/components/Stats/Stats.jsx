import { useRef, useEffect } from "react";
import SectionHeader from "../ui/SectionHeader";
import { STATS } from "../../../data";

export default function Stats() {
  const sectionRef = useRef(null);
  const numRefs    = useRef(STATS.map(() => ({ current: null })));

  useEffect(() => {
    if (!sectionRef.current) return;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      STATS.forEach((s, i) => {
        const el = numRefs.current[i].current;
        if (!el) return;
        let v = 0; const step = s.num / 55;
        const t = setInterval(() => {
          v = Math.min(v + step, s.num);
          el.textContent = Math.floor(v) + s.suffix;
          if (v >= s.num) clearInterval(t);
        }, 20);
      });
      io.disconnect();
    }, { threshold: 0.3 });
    io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className="sec sec-dark" id="stats" ref={sectionRef}>
      <div className="con">
        <div className="ds-reveal">
          <SectionHeader
            tag="Our Expertise"
            title={<>Data Driven Strategies, <em>Measurable Results</em></>}
            desc="Real numbers that reflect our commitment to quality, timeliness, and client success."
            dark
          />
        </div>
        <div className="stg ds-reveal">
          {STATS.map((s, i) => (
            <div className="stb" key={i}>
              <span className="ico">{s.icon}</span>
              <span className="stn" ref={el => (numRefs.current[i] = { current: el })}>
                0{s.suffix}
              </span>
              <span className="stl">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}