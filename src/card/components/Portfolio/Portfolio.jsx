import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { AnimatedSection } from "../ui/Animated";
import { staggerMedium, fadeUp } from "../../../animations";

// ── DATA — defined here so this component always works ───────
// Also exported from src/data/index.js — keep both in sync.
const FILTERS = ["All", "Web", "Branding", "Social Media", "E-Commerce"];

const PORTFOLIO = [
  { bg:"linear-gradient(135deg,#1a1a2e,#16213e)", icon:"🛍️", cat:"E-Commerce",   name:"Karachi Fashion House",      filter:"E-Commerce"   },
  { bg:"linear-gradient(135deg,#0f2027,#203a43)", icon:"✦",   cat:"Branding",     name:"MediCare Brand Identity",    filter:"Branding"     },
  { bg:"linear-gradient(135deg,#200122,#6f0000)", icon:"📱",   cat:"Social Media", name:"Lahori Bites — Meta Ads",    filter:"Social Media" },
  { bg:"linear-gradient(135deg,#0a0a2e,#1a1a5e)", icon:"🌐",  cat:"Web",          name:"Atlas Consulting Website",   filter:"Web"          },
  { bg:"linear-gradient(135deg,#0d1b2a,#1b263b)", icon:"🎬",  cat:"Branding",     name:"PayFlow Explainer Video",    filter:"Branding"     },
  { bg:"linear-gradient(135deg,#134e5e,#71b280)", icon:"🏗️",  cat:"Web",          name:"Islamabad Prime Properties", filter:"Web"          },
];

// ── Hover variants ────────────────────────────────────────────
const thumbVariants = {
  rest:  { scale: 1,    transition: { duration: 0.4 } },
  hover: { scale: 1.07, transition: { duration: 0.5 } },
};
const overlayVariants = {
  rest:  { opacity: 0 },
  hover: { opacity: 1, transition: { duration: 0.3 } },
};
const arrowVariants = {
  rest:  { opacity: 0, scale: 0.6 },
  hover: { opacity: 1, scale: 1,   transition: { duration: 0.25 } },
};

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? PORTFOLIO
      : PORTFOLIO.filter((p) => p.filter === active);

  return (
    <section className="sec" id="work">
      <div className="con">
        <SectionHeader
          tag="Our Work"
          title={<>See How We Help <em>Businesses Thrive</em></>}
          desc="We do not just talk about results — we deliver them. Real work for real Pakistani businesses, from Karachi to Islamabad."
        />

        {/* Filter buttons */}
        <AnimatedSection>
          <div className="pf">
            {FILTERS.map((f) => (
              <motion.button
                key={f}
                className={`fb${active === f ? " a" : ""}`}
                onClick={() => setActive(f)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                {f}
              </motion.button>
            ))}
          </div>
        </AnimatedSection>

        {/* Portfolio grid */}
        <motion.div
          className="pg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerMedium}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                className="pc"
                key={p.name}
                variants={fadeUp}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 0.35 } }}
                exit={{ opacity: 0, scale: 0.88, transition: { duration: 0.2 } }}
                whileHover="hover"
              >
                {/* Thumbnail */}
                <motion.div
                  className="pt"
                  style={{ background: p.bg }}
                  variants={thumbVariants}
                  initial="rest"
                  animate="rest"
                  whileHover="hover"
                >
                  {p.icon}
                </motion.div>

                {/* Overlay */}
                <motion.div className="po" variants={overlayVariants}>
                  <div className="pcat">{p.cat}</div>
                  <div className="pnm">{p.name}</div>
                </motion.div>

                {/* Arrow */}
                <motion.span className="pa" variants={arrowVariants}>↗</motion.span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}