import { useState } from "react";
import SectionHeader from "../ui/SectionHeader";
import { FAQS } from "../../../data";

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const toggle = i => setOpen(open === i ? null : i);

  return (
    <section className="sec sec-alt" id="faq">
      <div className="con">
        <div className="ds-reveal">
          <SectionHeader
            tag="FAQ"
            title={<>Frequently Asked <em>Questions</em></>}
            desc="Everything you need to know about working with DenariStudio — answered in one place."
          />
        </div>
        <div className="faq-list">
          {FAQS.map((item, i) => (
            <div
              className={`faq-item ds-reveal ds-d${Math.min(i+1,6)}${open === i ? " faq-open" : ""}`}
              key={i}
            >
              <button className="faq-q" onClick={() => toggle(i)}>
                <span>{item.q}</span>
                <span className="faq-icon">+</span>
              </button>
              {/* Smooth grid-template-rows accordion */}
              <div className="faq-body">
                <div>
                  <p style={{ padding:"0 22px 18px", fontSize:".87rem", color:"var(--txl)", lineHeight:1.8 }}>
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}