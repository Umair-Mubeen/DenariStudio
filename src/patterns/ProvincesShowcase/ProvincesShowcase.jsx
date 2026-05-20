import { useState } from "react";
import SectionHeader from "../../card/components/ui/SectionHeader";
import { OrnateDivider } from "../../card/components/ui/HeritageMotifs";

import { PROVINCES, HERITAGE_SECTION } from "../../data/heritage";
export default function ProvincesShowcase() {
  const [active, setActive] = useState(0);
  const province = PROVINCES[active];

  return (
    <section className="sec heritage-section">
      <div className="con">
        <div className="ds-reveal">
          <SectionHeader
            tag={HERITAGE_SECTION.tag}
            title={<>Serving Every Corner of <em>Pakistan</em></>}
            desc={HERITAGE_SECTION.desc}
          />
          <div style={{ marginTop: 18 }}>
            <OrnateDivider color="#daa520" width={180} />
          </div>
        </div>

        {/* Province tabs */}
        <div className="provinces-tabs ds-reveal" style={{ marginTop: 50 }}>
          {PROVINCES.map((p, i) => (
            <button
              key={p.name}
              className={`province-tab ${i === active ? "active" : ""}`}
              onClick={() => setActive(i)}
              style={{
                borderColor: i === active ? p.color : "transparent",
                color:       i === active ? p.color : "var(--txl)",
              }}
            >
              <span className="province-icon">{p.icon}</span>
              <span>{p.name}</span>
            </button>
          ))}
        </div>

        {/* Active province card */}
        <div
          className="province-card ds-reveal"
          style={{ background: province.bgColor, marginTop: 32 }}
          key={active}
        >
          <div className="province-inner">
            <div className="province-content">
              <div className="province-meta">
                <span className="province-tagline">{province.tagline}</span>
                <h3 className="province-name">{province.name}</h3>
                <p className="province-quote">"{province.quote}"</p>
              </div>

              <div className="province-greeting">
                <div className="greeting-label">Local greeting</div>
                <div className="greeting-text">{province.greeting}</div>
              </div>

              <div className="province-cities">
                <div className="cities-label">Cities we serve in {province.name}:</div>
                <div className="cities-list">
                  {province.cities.map((c, i) => (
                    <span className="city-pill" key={i}>📍 {c}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="province-side">
              <div className="province-big-icon">{province.icon}</div>
              <div className="province-famous">
                <div className="famous-label">Famous for</div>
                <ul>
                  {province.famousFor.map((f, i) => (
                    <li key={i}>✦ {f}</li>
                  ))}
                </ul>
              </div>
              <div className="province-capital">
                <span>Capital:</span> <strong>{province.capital}</strong>
              </div>
            </div>
          </div>

          {/* Decorative corner ornaments */}
          <div className="province-corner province-corner-tl" />
          <div className="province-corner province-corner-tr" />
          <div className="province-corner province-corner-bl" />
          <div className="province-corner province-corner-br" />
        </div>
      </div>
    </section>
  );
}