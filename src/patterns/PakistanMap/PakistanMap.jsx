import { useState } from "react";
import SectionHeader from "../../card/components/ui/SectionHeader";

const REGIONS = [
  { id:"sindh", name:"Sindh",              color:"#c41e3a", cities:["Karachi","Hyderabad","Sukkur"],          path:"M180,420 L260,440 L290,520 L240,590 L160,580 L130,510 L160,440 Z" },
  { id:"punjab",name:"Punjab",             color:"#daa520", cities:["Lahore","Faisalabad","Multan"],           path:"M200,280 L320,260 L360,340 L340,410 L260,440 L180,420 L160,360 Z" },
  { id:"kpk",   name:"Khyber Pakhtunkhwa", color:"#2d6a4f", cities:["Peshawar","Mardan","Abbottabad"],         path:"M140,180 L240,170 L260,250 L240,300 L200,310 L160,280 L120,240 Z" },
  { id:"balochistan", name:"Balochistan", color:"#1e3a8a", cities:["Quetta","Gwadar","Turbat"],               path:"M40,300 L160,300 L180,420 L130,510 L80,500 L20,420 Z" },
  { id:"gb",    name:"Gilgit-Baltistan",   color:"#0891b2", cities:["Gilgit","Skardu","Hunza"],                path:"M250,90 L370,80 L390,170 L340,200 L260,180 Z" },
  { id:"ajk",   name:"AJK",                color:"#7c2d12", cities:["Muzaffarabad","Mirpur"],                  path:"M330,200 L390,200 L400,260 L350,280 L320,240 Z" },
  { id:"icd",   name:"Islamabad",          color:"#0f3d2e", cities:["Islamabad"],                               path:"M280,230 a12,12 0 1,0 .1,0 Z" },
];

export default function PakistanMap() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="sec sec-alt map-section">
      <div className="con">
        <div className="ds-reveal">
          <SectionHeader
            tag="Nationwide Reach"
            title={<>Wherever You Are, <em>We Are</em></>}
            desc="From Karachi to Gilgit, from Quetta to Muzaffarabad — DenariStudio serves businesses across every corner of Pakistan, in every province and region."
          />
        </div>

        <div className="map-layout ds-reveal">
          {/* Stylised Pakistan map */}
          <div className="map-svg-wrap">
            <svg viewBox="0 0 420 620" className="pak-map" xmlns="http://www.w3.org/2000/svg">
              {/* Subtle background */}
              <rect width="420" height="620" fill="rgba(71,178,228,0.03)" rx="20"/>

              {REGIONS.map((r) => (
                <g key={r.id}
                   onMouseEnter={() => setHovered(r.id)}
                   onMouseLeave={() => setHovered(null)}
                   style={{ cursor: "pointer" }}>
                  <path
                    d={r.path}
                    fill={hovered === r.id ? r.color : `${r.color}22`}
                    stroke={r.color}
                    strokeWidth={hovered === r.id ? "2.5" : "1.5"}
                    style={{ transition: "all .3s ease" }}
                  />
                </g>
              ))}

              {/* City dots */}
              <circle cx="220" cy="500" r="5" fill="#fff" stroke="#c41e3a" strokeWidth="2"/>
              <text x="225" y="495" fontSize="10" fontFamily="Raleway" fill="#fff" fontWeight="700">Karachi</text>

              <circle cx="290" cy="320" r="5" fill="#fff" stroke="#daa520" strokeWidth="2"/>
              <text x="295" y="316" fontSize="10" fontFamily="Raleway" fill="#fff" fontWeight="700">Lahore</text>

              <circle cx="280" cy="245" r="5" fill="#fff" stroke="#0f3d2e" strokeWidth="2"/>
              <text x="285" y="240" fontSize="10" fontFamily="Raleway" fill="#fff" fontWeight="700">Islamabad</text>

              <circle cx="200" cy="220" r="5" fill="#fff" stroke="#2d6a4f" strokeWidth="2"/>
              <text x="135" y="216" fontSize="10" fontFamily="Raleway" fill="#fff" fontWeight="700">Peshawar</text>

              <circle cx="100" cy="380" r="5" fill="#fff" stroke="#1e3a8a" strokeWidth="2"/>
              <text x="40" y="376" fontSize="10" fontFamily="Raleway" fill="#fff" fontWeight="700">Quetta</text>

              <circle cx="310" cy="130" r="5" fill="#fff" stroke="#0891b2" strokeWidth="2"/>
              <text x="315" y="125" fontSize="10" fontFamily="Raleway" fill="#fff" fontWeight="700">Gilgit</text>
            </svg>
          </div>

          {/* Side panel */}
          <div className="map-info">
            <div className="map-stats">
              <div className="map-stat">
                <div className="map-stat-num">5</div>
                <div className="map-stat-lbl">Provinces</div>
              </div>
              <div className="map-stat">
                <div className="map-stat-num">25+</div>
                <div className="map-stat-lbl">Cities</div>
              </div>
              <div className="map-stat">
                <div className="map-stat-num">100%</div>
                <div className="map-stat-lbl">Coverage</div>
              </div>
            </div>

            <div className="map-active-info">
              {hovered ? (
                <>
                  <div className="map-region-name" style={{ color: REGIONS.find(r => r.id === hovered).color }}>
                    {REGIONS.find(r => r.id === hovered).name}
                  </div>
                  <div className="map-region-cities">
                    Cities: {REGIONS.find(r => r.id === hovered).cities.join(" · ")}
                  </div>
                </>
              ) : (
                <>
                  <div className="map-region-name">Hover over the map</div>
                  <div className="map-region-cities">Explore the provinces and regions we serve</div>
                </>
              )}
            </div>

            <div className="map-legend">
              {REGIONS.map((r) => (
                <div className="legend-item" key={r.id}
                     onMouseEnter={() => setHovered(r.id)}
                     onMouseLeave={() => setHovered(null)}>
                  <span className="legend-dot" style={{ background: r.color }}/>
                  <span>{r.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}