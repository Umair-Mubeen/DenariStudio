import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const accepted = localStorage.getItem("ds-cookies-accepted");
      if (!accepted) {
        setTimeout(() => setShow(true), 1500);
      }
    } catch {}
  }, []);

  const accept = () => {
    try { localStorage.setItem("ds-cookies-accepted", "1"); } catch {}
    setShow(false);
  };

  const decline = () => {
    try { localStorage.setItem("ds-cookies-accepted", "0"); } catch {}
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="cookie-banner">
      <div className="con cookie-inner">
        <div className="cookie-text">
          <span style={{ fontSize: "1.4rem" }}>🍪</span>
          <p>
            We use cookies to improve your experience and analyse traffic. 
            <a href="/privacy" style={{ color: "var(--a)", marginLeft: 6 }}>Read our Privacy Policy</a>
          </p>
        </div>
        <div className="cookie-actions">
          <button onClick={decline} className="cookie-decline">Decline</button>
          <button onClick={accept}  className="cookie-accept">Accept All</button>
        </div>
      </div>
    </div>
  );
}
