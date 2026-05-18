import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, scaleIn, staggerContainer } from "../../../animations";

const VARIANTS = {
    up: fadeUp,
    left: fadeLeft,
    right: fadeRight,
    scale: scaleIn,
};

/**
 * AnimatedSection — wraps any content with a scroll-triggered
 * Framer Motion animation.
 *
 * Props:
 *   direction  "up" | "left" | "right" | "scale"  (default "up")
 *   delay      number in seconds                   (default 0)
 *   className  string
 *   style      object
 */
export function AnimatedSection({ children, direction = "up", delay = 0, className, style, ...rest }) {
    const base = VARIANTS[direction] || fadeUp;
    const variant = {
        hidden: base.hidden,
        visible: {
            ...base.visible,
            transition: {...base.visible.transition, delay },
        },
    };

    return ( <
        motion.div className = { className }
        style = { style }
        initial = "hidden"
        whileInView = "visible"
        viewport = {
            { once: true, amount: 0.15 }
        }
        variants = { variant } {...rest } > { children } <
        /motion.div>
    );
}

/**
 * StaggerGrid — wraps a list of items in a stagger container,
 * each child animates up in sequence.
 *
 * Props:
 *   stagger  number  — delay between each child (default 0.1)
 *   delay    number  — initial delay before stagger starts
 */
export function StaggerGrid({ children, stagger = 0.1, delay = 0, className, style }) {
    return ( <
        motion.div className = { className }
        style = { style }
        initial = "hidden"
        whileInView = "visible"
        viewport = {
            { once: true, amount: 0.1 }
        }
        variants = { staggerContainer(stagger, delay) } > { children } <
        /motion.div>
    );
}

/**
 * AnimatedCard — individual card item for use inside StaggerGrid.
 * Animates up + hover lift.
 */
export function AnimatedCard({ children, className, style, hoverY = -8 }) {
    return ( <
        motion.div className = { className }
        style = { style }
        variants = { fadeUp }
        whileHover = {
            { y: hoverY, boxShadow: "0 20px 60px rgba(55,81,126,0.22)", transition: { duration: 0.3 } }
        } > { children } <
        /motion.div>
    );
}

/**
 * AnimatedButton — adds tap scale effect to any button/link.
 */
export function AnimatedButton({ children, className, style, href, onClick }) {
    const Tag = href ? motion.a : motion.button;
    return ( <
        Tag href = { href }
        className = { className }
        style = { style }
        onClick = { onClick }
        whileHover = {
            { scale: 1.04, transition: { duration: 0.2 } }
        }
        whileTap = {
            { scale: 0.97 }
        } > { children } <
        /Tag>
    );
}