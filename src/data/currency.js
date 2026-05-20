// ─────────────────────────────────────────────────────────────
// PKR CURRENCY FORMATTERS
// ─────────────────────────────────────────────────────────────

/**
 * Format number to Pakistani Rupees format with comma separators.
 * Pakistani convention uses Lakh/Crore style: 1,00,000 (not 100,000)
 *
 * Examples:
 *   formatPKR(28000)       → "Rs. 28,000"
 *   formatPKR(110000)      → "Rs. 1,10,000"
 *   formatPKR(2500000)     → "Rs. 25,00,000"
 *   formatPKR(28000, true) → "PKR 28,000/-"
 */
export function formatPKR(amount, withSuffix = false) {
  if (amount == null || isNaN(amount)) return "—";

  const num = Number(amount);
  const formatted = formatLakhCrore(num);

  return withSuffix
    ? `PKR ${formatted}/-`
    : `Rs. ${formatted}`;
}

/**
 * Pakistani number formatting (Lakh/Crore system)
 * 1,00,000 = 1 Lakh
 * 1,00,00,000 = 1 Crore
 */
export function formatLakhCrore(n) {
  if (n < 1000) return n.toString();

  const str = Math.floor(n).toString();
  const last3 = str.slice(-3);
  const rest  = str.slice(0, -3);

  if (rest === "") return last3;

  // Format the rest in groups of 2 from the right (Pakistani style)
  const restFormatted = rest.replace(/\B(?=(\d{2})+(?!\d))/g, ",");

  return `${restFormatted},${last3}`;
}

/**
 * Friendly compact format for hero/stats
 * 28000   → "28K"
 * 110000  → "1.1 Lakh"
 * 1500000 → "15 Lakh"
 * 10000000 → "1 Crore"
 */
export function formatCompactPKR(n) {
  if (n >= 10000000) {
    const crore = (n / 10000000).toFixed(n % 10000000 === 0 ? 0 : 1);
    return `${crore} Crore`;
  }
  if (n >= 100000) {
    const lakh = (n / 100000).toFixed(n % 100000 === 0 ? 0 : 1);
    return `${lakh} Lakh`;
  }
  if (n >= 1000) {
    return `${Math.round(n / 1000)}K`;
  }
  return n.toString();
}

/**
 * Parse Pakistani-formatted string back to number
 * "Rs. 1,10,000" → 110000
 */
export function parsePKR(str) {
  if (typeof str === "number") return str;
  if (!str) return 0;
  const cleaned = String(str).replace(/[^\d.]/g, "");
  return Number(cleaned) || 0;
}
