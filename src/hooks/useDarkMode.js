import { useState, useEffect } from "react";

/**
 * useDarkMode — persists preference in localStorage and toggles
 * a "dark" class on <html> for CSS variable overrides.
 */
export default function useDarkMode() {
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem("ds-theme") === "dark"; } catch { return false; }
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try { localStorage.setItem("ds-theme", dark ? "dark" : "light"); } catch {}
  }, [dark]);

  return [dark, () => setDark((d) => !d)];
}
