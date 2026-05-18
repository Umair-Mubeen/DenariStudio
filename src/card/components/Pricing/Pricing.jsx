import SectionHeader from "../ui/SectionHeader";
import { PRICING } from "../../../data";

export default function Pricing() {
  return (
    <section className="sec sec-alt" id="pricing">
      <div className="con">
        <div className="ds-reveal">
          <SectionHeader
            tag="Pricing"
            title={<>Flexible Pricing Plans <em>for Every Business</em></>}
            desc="All prices in PKR. No hidden fees. Custom enterprise quotes available on request."
          />
        </div>
        <div className="prg">
          {PRICING.map((plan, i) => (
            <div className={`prc ds-reveal ds-d${i+1}${plan.popular ? " pp" : ""}`} key={i}>
              <div className="prt">{plan.tier}</div>
              <div className="prp">{plan.price} <sub>PKR</sub></div>
              <div className="prd">{plan.period}</div>
              <ul className="prf">
                {plan.features.map((f, j) => <li key={j}>{f}</li>)}
                {plan.disabled.map((f, j) => <li className="x" key={`d${j}`}>{f}</li>)}
              </ul>
              <a href="#contact" className={`prb ${plan.popular ? "prbs" : "prbo"}`}>Get Started</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}