import SectionHeader from "../ui/SectionHeader";
import { TESTIMONIALS } from "../../../data";

export default function Testimonials() {
  return (
    <section className="sec">
      <div className="con">
        <div className="ds-reveal">
          <SectionHeader
            tag="What Our Clients Say"
            title={<>Real Success <em>Stories</em></>}
            desc="Discover how businesses like yours achieved outstanding growth with DenariStudio."
          />
        </div>
        <div className="tsg">
          {TESTIMONIALS.map((t, i) => (
            <div className={`tsc ds-reveal ds-d${i+1}`} key={i}>
              <div className="tss">{"★".repeat(t.stars)}</div>
              <p className="tst">{t.text}</p>
              <div className="tsa">
                <div className="av">{t.initials}</div>
                <div>
                  <div className="an">{t.name}</div>
                  <div className="ar">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}