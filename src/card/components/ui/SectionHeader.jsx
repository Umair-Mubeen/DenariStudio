/**
 * SectionHeader — reusable centred section intro block.
 *
 * Props:
 *   tag   {string}  — small uppercase label inside the pill (e.g. "What We Offer")
 *   title {ReactNode} — h2 content, supports <em> for accent colour
 *   desc  {string}  — optional subtitle paragraph
 *   dark  {boolean} — when true applies lighter text for dark-bg sections
 */
export default function SectionHeader({ tag, title, desc, dark = false }) {
  return (
    <div className="sh rev">
      <div className={`stag${dark ? " stag-d" : ""}`}>{tag}</div>
      <h2 className="hd">{title}</h2>
      {desc && <p className="hdp">{desc}</p>}
    </div>
  );
}
