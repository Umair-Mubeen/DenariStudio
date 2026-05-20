// ─────────────────────────────────────────────────────────────
// HERITAGE DATA — All 5 Provinces of Pakistan
// ─────────────────────────────────────────────────────────────

export const PROVINCES = [
  {
    name:        "Sindh",
    capital:     "Karachi",
    cities:      ["Karachi", "Hyderabad", "Sukkur", "Larkana"],
    tagline:     "Land of Ajrak & Sufi Heritage",
    icon:        "🕌",
    color:       "#c41e3a",
    bgColor:     "linear-gradient(135deg,#c41e3a 0%,#8b0000 100%)",
    motif:       "ajrak",
    famousFor:   ["Ajrak prints", "Sindhi topi", "Sufi music", "Indus civilization"],
    greeting:    "Salam — Tuhinjo kamyabi asaan jo junoon",
    quote:       "Where tradition meets opportunity",
  },
  {
    name:        "Punjab",
    capital:     "Lahore",
    cities:      ["Lahore", "Faisalabad", "Multan", "Rawalpindi", "Sialkot"],
    tagline:     "Heart of Pakistan",
    icon:        "🌾",
    color:       "#daa520",
    bgColor:     "linear-gradient(135deg,#daa520 0%,#8b6914 100%)",
    motif:       "truck-art",
    famousFor:   ["Truck art", "Basant", "Mustard fields", "Sufi shrines"],
    greeting:    "Sat Sri Akal — Aap di kamyabi sade junoon",
    quote:       "Land of five rivers, infinite possibilities",
  },
  {
    name:        "Khyber Pakhtunkhwa",
    capital:     "Peshawar",
    cities:      ["Peshawar", "Mardan", "Abbottabad", "Swat"],
    tagline:     "Land of Hospitality & Honour",
    icon:        "⛰️",
    color:       "#2d6a4f",
    bgColor:     "linear-gradient(135deg,#2d6a4f 0%,#1b4332 100%)",
    motif:       "khyber",
    famousFor:   ["Peshawari chappal", "Pashto poetry", "Mountains", "Hujra culture"],
    greeting:    "Sta da raghlay khe — Sta kamyabi zamung junoon",
    quote:       "From mountain heights to digital horizons",
  },
  {
    name:        "Balochistan",
    capital:     "Quetta",
    cities:      ["Quetta", "Gwadar", "Turbat", "Khuzdar"],
    tagline:     "Land of Mountains & Mystique",
    icon:        "🏔️",
    color:       "#1e3a8a",
    bgColor:     "linear-gradient(135deg,#1e3a8a 0%,#1e1b4b 100%)",
    motif:       "balochi",
    famousFor:   ["Balochi embroidery", "Sajji", "Gwadar port", "Vast deserts"],
    greeting:    "Khair atki — Shumai kamyabi mani junoon",
    quote:       "Where rugged beauty inspires bold ideas",
  },
  {
    name:        "Gilgit-Baltistan",
    capital:     "Gilgit",
    cities:      ["Gilgit", "Skardu", "Hunza", "Chilas"],
    tagline:     "Roof of the World",
    icon:        "🏔️",
    color:       "#0891b2",
    bgColor:     "linear-gradient(135deg,#0891b2 0%,#155e75 100%)",
    motif:       "mountains",
    famousFor:   ["K2 mountain", "Hunza Valley", "Cherry blossoms", "Ancient forts"],
    greeting:    "Salam — Apki kamyabi hamari shaan",
    quote:       "Reaching new heights, together",
  },
];

// ─────────────────────────────────────────────────────────────
// COMPREHENSIVE CITY LIST
// ─────────────────────────────────────────────────────────────
export const ALL_CITIES = [
  "Karachi", "Lahore", "Islamabad", "Faisalabad", "Rawalpindi",
  "Peshawar", "Multan", "Hyderabad", "Quetta", "Gujranwala",
  "Sialkot", "Bahawalpur", "Sukkur", "Larkana", "Sargodha",
  "Mardan", "Mingora", "Abbottabad", "Gilgit", "Skardu",
  "Gwadar", "Turbat", "Sahiwal", "Sheikhupura", "Jhang",
];

// ─────────────────────────────────────────────────────────────
// NATIONAL DAYS
// ─────────────────────────────────────────────────────────────
export const NATIONAL_DAYS = [
  { date: "03-23", name: "Pakistan Day",       message: "Celebrating the Lahore Resolution 🇵🇰",   emoji: "🌙" },
  { date: "08-14", name: "Independence Day",   message: "Happy Independence Day Pakistan! 🇵🇰",    emoji: "🎉" },
  { date: "09-06", name: "Defence Day",        message: "Honoring our heroes — Defence Day 🇵🇰",   emoji: "🇵🇰" },
  { date: "11-09", name: "Iqbal Day",          message: "Remembering Allama Iqbal — visionary of Pakistan", emoji: "📖" },
  { date: "12-25", name: "Quaid-e-Azam Day",   message: "Celebrating Jinnah's vision 🇵🇰",          emoji: "⭐" },
];

// ─────────────────────────────────────────────────────────────
// HERITAGE TESTIMONIALS — One from each province
// ─────────────────────────────────────────────────────────────
export const HERITAGE_TESTIMONIALS = [
  {
    initials: "AR",   stars: 5,
    text:     "DenariStudio understood the heritage and modern needs of our textile brand perfectly. The website beautifully represents Sindh's craftsmanship to global buyers.",
    name:     "Ahmed Raza",
    role:     "CEO, Raza Textiles",
    city:     "Karachi",
    province: "Sindh",
  },
  {
    initials: "SN", stars: 5,
    text:     "From Lahore to digital — DenariStudio gave our beauty brand a presence that respects Punjabi tradition while feeling thoroughly modern. Sales tripled.",
    name:     "Sara Naqvi",
    role:     "Founder, Bloom Beauty",
    city:     "Lahore",
    province: "Punjab",
  },
  {
    initials: "MK", stars: 5,
    text:     "Working with DenariStudio from Islamabad was seamless. They understood agricultural communities across KPK and built us a platform that actually serves rural farmers.",
    name:     "Muhammad Kamran",
    role:     "Director, AgriPak Solutions",
    city:     "Islamabad",
    province: "Punjab",
  },
  {
    initials: "GB",  stars: 5,
    text:     "From Peshawar's bazaars to e-commerce — DenariStudio respected our cultural roots while modernizing our brand. Truly understands KPK's business landscape.",
    name:     "Gul Baz",
    role:     "Owner, Khyber Handicrafts",
    city:     "Peshawar",
    province: "Khyber Pakhtunkhwa",
  },
  {
    initials: "ZB", stars: 5,
    text:     "Balochistan deserves world-class digital services and DenariStudio delivers exactly that. Our Gwadar logistics company finally has the online presence it needs.",
    name:     "Zameer Baloch",
    role:     "MD, Gwadar Logistics",
    city:     "Quetta",
    province: "Balochistan",
  },
  {
    initials: "HK", stars: 5,
    text:     "From the mountains of Hunza to a worldwide audience — DenariStudio made our tourism business globally accessible while keeping its authentic Gilgiti charm.",
    name:     "Hassan Karim",
    role:     "Founder, Hunza Heritage Tours",
    city:     "Gilgit",
    province: "Gilgit-Baltistan",
  },
];

// ─────────────────────────────────────────────────────────────
// CULTURAL SECTION COPY
// ─────────────────────────────────────────────────────────────
export const HERITAGE_SECTION = {
  tag:     "Proudly Pakistani",
  title:   "Serving Every Corner of Pakistan",
  desc:    "From the bazaars of Peshawar to the ports of Karachi, from Punjab's heartland to the peaks of Gilgit-Baltistan — we bring world-class digital craft to businesses across every province, honouring the unique culture and heritage that makes Pakistan extraordinary.",
};

// ─────────────────────────────────────────────────────────────
// HERITAGE COLOUR PALETTE (for toggle)
// ─────────────────────────────────────────────────────────────
export const HERITAGE_PALETTE = {
  primary:    "#0f3d2e",   /* Deep forest green — Pakistan flag */
  accent:     "#c89b1f",   /* Mustard gold — Punjab sarson fields */
  accent2:    "#a0871c",
  bg:         "#fdf6e3",   /* Warm cream — Ajrak cotton base */
  bgalt:      "#f5ebd1",
  text:       "#3d2914",
  textLight:  "#8b6f47",
  heading:    "#0f3d2e",
  border:     "#e0d4b0",
};
