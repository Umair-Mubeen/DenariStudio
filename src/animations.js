// ─────────────────────────────────────────────────────────────
// animations.js  —  Central Framer Motion variant definitions
// Import from here in any component that needs animations.
// ─────────────────────────────────────────────────────────────

// ── Fade variants ────────────────────────────────────────────
export const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export const fadeDown = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
};

export const scaleIn = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

// ── Stagger container ────────────────────────────────────────
export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
    hidden: {},
    visible: { transition: { staggerChildren, delayChildren } },
});

// Shorthand for common stagger values
export const staggerFast = staggerContainer(0.08);
export const staggerMedium = staggerContainer(0.12);
export const staggerSlow = staggerContainer(0.18);

// ── Card hover ───────────────────────────────────────────────
export const cardHover = {
    rest: { y: 0, boxShadow: "0 10px 40px rgba(55,81,126,0.12)", transition: { duration: 0.3, ease: "easeOut" } },
    hover: { y: -8, boxShadow: "0 20px 60px rgba(55,81,126,0.22)", transition: { duration: 0.3, ease: "easeOut" } },
};

export const cardHoverLight = {
    rest: { y: 0, scale: 1, transition: { duration: 0.25 } },
    hover: { y: -5, scale: 1.02, transition: { duration: 0.25 } },
};

// ── Button tap ───────────────────────────────────────────────
export const btnTap = { scale: 0.97, transition: { duration: 0.12 } };

// ── Page transition ──────────────────────────────────────────
export const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
};

// ── Hero text cascade ────────────────────────────────────────
export const heroBadge = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, delay: 0.1 } },
};

export const heroH1Line = (delay = 0) => ({
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] } },
});

export const heroDesc = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.55 } },
};

export const heroCTAs = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.75 } },
};

export const heroCard = {
    hidden: { opacity: 0, x: 60, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] } },
};

// ── Float (continuous) ───────────────────────────────────────
export const floatAnimation = {
    y: [0, -14, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
};

export const floatSlow = {
    y: [0, -8, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
};

// ── Underline draw ───────────────────────────────────────────
export const underlineDraw = {
    hidden: { scaleX: 0, originX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

// ── Number count (spring) ────────────────────────────────────
export const numberPop = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 260, damping: 20 } },
};

// ── Navbar ───────────────────────────────────────────────────
export const navbarSlide = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

// ── Mobile drawer ────────────────────────────────────────────
export const drawerVariants = {
    closed: { y: "-110%", transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
    open: { y: "0%", transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

export const drawerItem = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

// ── Backdrop ─────────────────────────────────────────────────
export const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
};

// ── FAQ accordion ────────────────────────────────────────────
export const faqBody = {
    closed: { height: 0, opacity: 0, transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] } },
    open: { height: "auto", opacity: 1, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
};

export const faqIcon = {
    closed: { rotate: 0 },
    open: { rotate: 45, transition: { duration: 0.3 } },
};

// ── Portfolio overlay ────────────────────────────────────────
export const portfolioOverlay = {
    rest: { opacity: 0 },
    hover: { opacity: 1, transition: { duration: 0.3 } },
};

export const portfolioThumb = {
    rest: { scale: 1 },
    hover: { scale: 1.07, transition: { duration: 0.5, ease: "easeOut" } },
};

export const portfolioArrow = {
    rest: { opacity: 0, scale: 0.6, rotate: 0 },
    hover: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.3 } },
};

// ── Stats box ────────────────────────────────────────────────
export const statBox = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

// ── Timeline node ────────────────────────────────────────────
export const timelineNode = (left = true) => ({
    hidden: { opacity: 0, x: left ? -40 : 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
});

export const timelineDot = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 18 } },
};

// ── Scroll progress bar ──────────────────────────────────────
export const scrollBarStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: 3,
    background: "var(--a)",
    transformOrigin: "0%",
    zIndex: 9999,
};