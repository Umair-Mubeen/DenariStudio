/**
 * Donut — animated SVG ring chart.
 * The stroke animation is triggered externally via the `useSkills` hook
 * which sets `strokeDashoffset` on `.dcc[data-p]` elements.
 */
export default function Donut({ pct, color }) {
  const circ = 270.2;

  return (
    <div className="dw">
      <svg width="108" height="108" viewBox="0 0 108 108">
        {/* Background track */}
        <circle
          cx="54" cy="54" r="43"
          fill="none" stroke="#e9ecef" strokeWidth="10"
        />
        {/* Animated fill */}
        <circle
          cx="54" cy="54" r="43"
          fill="none"
          stroke={color}
          strokeWidth="10"
          strokeDasharray={circ}
          strokeDashoffset={circ}   /* starts at 0%, animated by useSkills */
          strokeLinecap="round"
          className="dcc"
          data-p={pct}
          style={{ transform: "rotate(-90deg)", transformOrigin: "54px 54px" }}
        />
      </svg>
      <div className="dn">{pct}%</div>
    </div>
  );
}
