import { useState, useEffect } from "react";

/**
 * Heritage Mode Toggle — swaps the blue tech palette
 * for warm Pakistani heritage colors (green + gold + cream)
 */
export default function HeritageModeToggle() {
  const [heritage, setHeritage] = useState(() => {
    try { return localStorage.getItem("ds-heritage") === "on"; } catch { return false; }
  });

  useEffect(() => {
    document.documentElement.classList.toggle("heritage-mode", heritage);
    try { localStorage.setItem("ds-heritage", heritage ? "on" : "off"); } catch {}
  }, [heritage]);

  return (
    <button
      className={`heritage-toggle ${heritage ? "on" : ""}`}
      onClick={() => setHeritage(h => !h)}
      aria-label="Toggle heritage colour mode"
      title={heritage ? "Switch to modern blue" : "Switch to Pakistan heritage colors"}
    >
      <span className="heritage-icon">🇵🇰</span>
      <span className="heritage-label">{heritage ? "Modern" : "Heritage"}</span>
    </button>
  );
}