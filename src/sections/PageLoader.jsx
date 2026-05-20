import { useState, useEffect } from "react";

/**
 * PageLoader — shows briefly on first load with animated DenariStudio logo
 */
export default function PageLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Wait for DOM ready + min display time
    const minTime = 800;
    const start = Date.now();

    const onReady = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, minTime - elapsed);
      setTimeout(() => setShow(false), remaining);
    };

    if (document.readyState === "complete") {
      onReady();
    } else {
      window.addEventListener("load", onReady);
      return () => window.removeEventListener("load", onReady);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="page-loader">
      <div className="loader-logo">
        <div className="loader-grid">
          <div className="loader-square s1" />
          <div className="loader-square s2" />
          <div className="loader-square s3" />
          <div className="loader-square s4" />
        </div>
        <div className="loader-brand">
          Denari<em>Studio</em>
        </div>
        <div className="loader-tag">Pakistan's Digital Partner</div>
        <div className="loader-bar"><div className="loader-fill" /></div>
      </div>
    </div>
  );
}
