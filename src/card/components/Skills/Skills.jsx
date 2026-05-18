import { useRef } from "react";
import useSkills from "../../../hooks/useSkills";
import { SKILLS, DONUTS } from "../../../data";
import SectionHeader from "../ui/SectionHeader";   // stays the same (same folder)
import Donut from "../ui/Donut";                   // stays the same (same folder)


function Skills() {
  const skillsRef = useRef(null);
  useSkills(skillsRef);

  return (
    <section className="sec sec-alt" id="skills" ref={skillsRef}>
      <div className="con">
        <SectionHeader
          tag="Our Expertise"
          title={<>Skills & <em>Capabilities</em></>}
          desc="A data-driven look at the technologies and disciplines we master to build your perfect digital product."
        />

        <div className="infog">
          {/* ── Progress Bars ─────────────────────── */}
          <div className="skb revL">
            <h3>Technical Proficiency</h3>
            <p>Years of hands-on experience across every layer of the modern web stack.</p>

            {SKILLS.map((s, i) => (
              <div className="ski" key={i}>
                <div className="skm">
                  <span className="skn">{s.name}</span>
                  <span className="skp">{s.pct}%</span>
                </div>
                <div className="skt">
                  <div
                    className={`skf ${s.cls}`}
                    data-p={s.pct}
                    style={{ width: 0 }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* ── Donut Charts ───────────────────────── */}
          <div className="revR">
            <div className="dg">
              {DONUTS.map((d, i) => (
                <div className="dc" key={i}>
                  <Donut pct={d.pct} color={d.color} />
                  <div className="dt">{d.title}</div>
                  <div className="ds">{d.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Skills;