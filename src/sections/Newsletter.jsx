import { useState } from "react";

/**
 * Newsletter — Email signup with optional Mailchimp integration.
 * Replace MAILCHIMP_URL with your actual list endpoint when ready.
 */
const MAILCHIMP_URL = ""; // e.g. "https://yourname.us10.list-manage.com/subscribe/post?u=...&id=..."

export default function Newsletter() {
  const [email, setEmail]   = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("loading");

    try {
      if (MAILCHIMP_URL) {
        // Submit to Mailchimp via no-cors (works for basic signup)
        await fetch(MAILCHIMP_URL, {
          method: "POST",
          mode:   "no-cors",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body:   `EMAIL=${encodeURIComponent(email)}`,
        });
      } else {
        // No backend yet — simulate success
        await new Promise(r => setTimeout(r, 600));
      }

      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="newsletter-section">
      <div className="con newsletter-inner">
        <div className="newsletter-text">
          <div className="stag stag-d">Stay Updated</div>
          <h2 className="hd" style={{ color: "#fff", marginTop: 12 }}>
            Free Digital Marketing Tips for <em>Pakistani Businesses</em>
          </h2>
          <p style={{ color: "rgba(255,255,255,.72)", marginTop: 12, fontSize: ".92rem", lineHeight: 1.7 }}>
            Monthly insights, case studies, and actionable strategies — straight to your inbox. No spam, ever.
          </p>
        </div>

        <form className="newsletter-form" onSubmit={handleSubmit}>
          <div className="newsletter-input-wrap">
            <input
              type="email"
              placeholder="your.email@example.pk"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
              required
              disabled={status === "loading" || status === "success"}
            />
            <button type="submit" className="bp" disabled={status === "loading" || status === "success"}>
              {status === "loading" ? "..." :
               status === "success" ? "✓ Subscribed" :
               "Subscribe"}
            </button>
          </div>
          {status === "error" && (
            <div style={{ marginTop: 10, color: "#ffb3b3", fontSize: ".82rem" }}>
              ⚠ Please enter a valid email address
            </div>
          )}
          {status === "success" && (
            <div style={{ marginTop: 10, color: "#9eff9e", fontSize: ".82rem" }}>
              ✓ You're on the list! First tip coming soon. 📬
            </div>
          )}
          <div style={{ marginTop: 12, fontSize: ".74rem", color: "rgba(255,255,255,.5)" }}>
            🔒 We respect your privacy. Unsubscribe anytime.
          </div>
        </form>
      </div>
    </section>
  );
}
