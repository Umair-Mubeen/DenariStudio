/**
 * QuickInquiry — Click-to-WhatsApp buttons with prefilled messages.
 * Drop into any section with a service/package being discussed.
 *
 * Usage:
 *   <QuickInquiry message="I'm interested in the Professional logo package (Rs. 55,000)" />
 *   <QuickInquiry service="Web Development" budget="Rs. 75,000" />
 */
const WHATSAPP_NUMBER = "923000000000"; // ← Replace with your real number

export default function QuickInquiry({
  message,
  service,
  budget,
  label = "Inquire on WhatsApp",
  variant = "primary",   // "primary" | "outline" | "small"
  fullWidth = false,
}) {
  // Build a sensible default message
  let prefill = message;
  if (!prefill) {
    prefill = "Assalam-o-Alaikum! I'm interested in DenariStudio's services.";
    if (service) prefill += `\n\nService: ${service}`;
    if (budget)  prefill += `\nBudget: ${budget}`;
    prefill += "\n\nPlease send more details.";
  }

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(prefill)}`;

  const baseStyle = {
    display:        "inline-flex",
    alignItems:     "center",
    gap:            8,
    fontFamily:     "Raleway, sans-serif",
    fontWeight:     700,
    letterSpacing:  ".05em",
    textDecoration: "none",
    transition:     "all .3s cubic-bezier(.22,1,.36,1)",
    cursor:         "pointer",
    width:          fullWidth ? "100%" : "auto",
    justifyContent: fullWidth ? "center" : "flex-start",
  };

  const variants = {
    primary: {
      ...baseStyle,
      padding:      "12px 24px",
      background:   "#25D366",
      color:        "#fff",
      borderRadius: 50,
      fontSize:     ".82rem",
      boxShadow:    "0 4px 16px rgba(37,211,102,.3)",
      border:       "none",
    },
    outline: {
      ...baseStyle,
      padding:      "10px 22px",
      background:   "transparent",
      color:        "#25D366",
      borderRadius: 50,
      fontSize:     ".82rem",
      border:       "2px solid #25D366",
    },
    small: {
      ...baseStyle,
      padding:      "6px 14px",
      background:   "rgba(37,211,102,.12)",
      color:        "#1ea855",
      borderRadius: 50,
      fontSize:     ".74rem",
      border:       "1px solid rgba(37,211,102,.3)",
    },
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={variants[variant]}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(37,211,102,.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = variant === "primary"
          ? "0 4px 16px rgba(37,211,102,.3)"
          : "none";
      }}
    >
      <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor">
        <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.68 4.61 1.857 6.497L4 29l7.723-1.833A11.94 11.94 0 0016 28c6.627 0 12-5.373 12-12S22.627 3 16 3z" />
      </svg>
      <span>{label}</span>
    </a>
  );
}
