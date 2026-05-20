import { Link } from "react-router-dom";
import SEO from "../card/components/ui/SEO";

export default function NotFoundPage() {
  return (
    <main style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "120px 20px 60px" }}>
      <SEO title="404 — Page Not Found" path="/404" noIndex />

      <div style={{ textAlign: "center", maxWidth: 520 }}>
        {/* Animated 404 */}
        <div style={{ fontFamily: "Raleway, sans-serif", fontSize: "8rem", fontWeight: 900, lineHeight: 1, background: "linear-gradient(135deg,#37517e 0%,#47b2e4 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: 16 }}>
          404
        </div>

        <div style={{ fontSize: "3rem", marginBottom: 20 }}>🧐</div>

        <h1 style={{ fontFamily: "Raleway, sans-serif", fontSize: "1.6rem", fontWeight: 700, color: "var(--hd)", marginBottom: 14 }}>
          Lagta hai ye page bhi gum ho gaya
        </h1>

        <p style={{ color: "var(--txl)", fontSize: ".96rem", lineHeight: 1.75, marginBottom: 30 }}>
          The page you're looking for doesn't exist — or maybe it took a detour through the bazaars of Lahore. Let's get you back home where things actually work.
        </p>

        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 40 }}>
          <Link
            to="/"
            style={{
              padding:         "14px 32px",
              background:      "var(--gr)",
              color:           "#fff",
              borderRadius:    50,
              textDecoration:  "none",
              fontFamily:      "Raleway, sans-serif",
              fontSize:        ".84rem",
              fontWeight:      700,
              letterSpacing:   ".06em",
              boxShadow:       "0 6px 20px rgba(55,81,126,.25)",
            }}
          >
            ← Back to Home
          </Link>
          <Link
            to="/our-work"
            style={{
              padding:         "14px 32px",
              background:      "transparent",
              color:           "var(--hd)",
              border:          "2px solid var(--bd)",
              borderRadius:    50,
              textDecoration:  "none",
              fontFamily:      "Raleway, sans-serif",
              fontSize:        ".84rem",
              fontWeight:      700,
              letterSpacing:   ".06em",
            }}
          >
            View Our Work
          </Link>
        </div>

        {/* Helpful links */}
        <div style={{ paddingTop: 30, borderTop: "1px solid var(--bd)", textAlign: "left" }}>
          <div style={{ fontFamily: "Raleway, sans-serif", fontSize: ".72rem", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--txl)", marginBottom: 16, textAlign: "center" }}>
            Or try these popular pages
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 10 }}>
            {[
              { path: "/about",         label: "About DenariStudio", icon: "👋" },
              { path: "/our-work",      label: "Case Studies",        icon: "💼" },
              { path: "/blog",          label: "Blog & Insights",     icon: "📖" },
              { path: "/#contact",      label: "Contact Us",          icon: "💬" },
            ].map((link, i) => (
              <Link
                key={i}
                to={link.path}
                style={{
                  display:         "flex",
                  alignItems:      "center",
                  gap:             10,
                  padding:         "12px 16px",
                  background:      "#fff",
                  border:          "1px solid var(--bd)",
                  borderRadius:    10,
                  textDecoration:  "none",
                  fontSize:        ".84rem",
                  color:           "var(--hd)",
                  fontWeight:      600,
                  fontFamily:      "Raleway, sans-serif",
                }}
              >
                <span>{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
