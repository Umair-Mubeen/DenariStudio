import SectionHeader from "../ui/SectionHeader";
import { PROCESS } from "../../../data";

export default function Process() {
  return (
    <section className="sec sec-alt" id="process">
      <div className="con">
        <div className="ds-reveal">
          <SectionHeader
            tag="How It Works"
            title={<>Simple Steps to <em>Digital Success</em></>}
            desc="Our streamlined process ensures your digital growth is seamless, transparent, and effective."
          />
        </div>
        <div className="tl">
          {PROCESS.map((step, i) => (
            <div className="ti" key={i}>
              {step.left ? (
                <>
                  <div className={`tl-l ds-reveal ds-left ds-d${i+1}`}>
                    <div className="tbx"><h4>{step.title}</h4><p>{step.desc}</p></div>
                  </div>
                  <div className="tc"><div className="td">{step.n}</div></div>
                  <div className="tl-r" />
                </>
              ) : (
                <>
                  <div className="tl-l" />
                  <div className="tc"><div className="td">{step.n}</div></div>
                  <div className={`tl-r ds-reveal ds-right ds-d${i+1}`}>
                    <div className="tbx"><h4>{step.title}</h4><p>{step.desc}</p></div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}