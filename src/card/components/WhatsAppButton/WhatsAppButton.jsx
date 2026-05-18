const WHATSAPP_NUMBER = "923332482742"; // replace with real number
const WHATSAPP_MESSAGE = "Hello DenariStudio! Mujhe apne project ke baare mein baat karni hai.";

export default function WhatsAppButton() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-btn"
      aria-label="Chat on WhatsApp"
    >
      {/* WhatsApp SVG icon */}
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <path
          d="M16 3C9.373 3 4 8.373 4 15c0 2.385.68 4.61 1.857 6.497L4 29l7.723-1.833A11.94 11.94 0 0016 28c6.627 0 12-5.373 12-12S22.627 3 16 3z"
          fill="#fff"
        />
        <path
          d="M16 5.5c-5.238 0-9.5 4.262-9.5 9.5 0 2.01.624 3.877 1.69 5.418l-.9 3.292 3.386-.882A9.46 9.46 0 0016 24.5c5.238 0 9.5-4.262 9.5-9.5S21.238 5.5 16 5.5zm4.707 13.023c-.196.55-1.14 1.05-1.573 1.116-.4.06-.905.085-1.46-.092-.336-.107-.767-.25-1.316-.49-2.314-1-3.82-3.33-3.937-3.486-.116-.156-.95-1.263-.95-2.41 0-1.146.6-1.71.813-1.943.212-.233.463-.29.617-.29.154 0 .308.002.443.008.142.007.333-.054.52.397.193.462.655 1.6.713 1.716.058.116.097.252.02.405-.077.154-.116.25-.231.386-.116.135-.244.302-.348.406-.116.116-.236.241-.102.472.135.232.6.99 1.287 1.604.884.79 1.63 1.034 1.86 1.15.232.116.367.097.502-.058.135-.155.578-.675.733-.906.154-.232.308-.193.52-.116.212.077 1.347.635 1.578.75.232.116.386.174.443.27.058.097.058.558-.138 1.11z"
          fill="#25D366"
        />
      </svg>
      <span className="wa-label">WhatsApp</span>
    </a>
  );
}
