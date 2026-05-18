import SectionHeader from "../ui/SectionHeader";
import { SERVICES } from "../../../data";

export default function Services() {
  return (
    <section className="sec" id="services">
      <div className="con">
        <div className="ds-reveal">
          <SectionHeader
            tag="Our Core Services"
            title={<>Digital Solutions That <em>Drive Real Results</em></>}
            desc="From web development and logo design to social media, SEO, and video animation — a complete solution for every digital need your business has."
          />
        </div>
        <div className="sg">
          {SERVICES.map((s, i) => (
            <div className={`sb ds-reveal ds-d${Math.min(i+1,6)}`} key={i}>
              <div className="si">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <a href="#contact" className="sl">Get a Quote →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}