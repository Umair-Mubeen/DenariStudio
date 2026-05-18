import { useEffect } from "react";

/**
 * useAnimations
 *
 * Wires up ALL site animations with pure vanilla JS:
 *  1. Scroll progress bar (#ds-progress)
 *  2. Intersection Observer scroll reveal (.ds-reveal)
 *  3. Hero element classes (already set via CSS — just ensures DOM is ready)
 *
 * Call once in App.jsx or any top-level component.
 * Safe to call multiple times — cleans up on unmount.
 */
export default function useAnimations() {
    useEffect(() => {
        /* ── 1. Inject progress bar element ──────────────── */
        let bar = document.getElementById("ds-progress");
        if (!bar) {
            bar = document.createElement("div");
            bar.id = "ds-progress";
            document.body.prepend(bar);
        }

        /* ── 2. Scroll progress update ────────────────────── */
        const updateProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            bar.style.width = pct + "%";
        };
        window.addEventListener("scroll", updateProgress, { passive: true });
        updateProgress();

        /* ── 3. Intersection Observer for .ds-reveal ─────── */
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add("ds-visible");
                        io.unobserve(e.target);
                    }
                });
            }, { threshold: 0.12 }
        );

        // Observe all existing + future elements
        const observe = () => {
            document.querySelectorAll(".ds-reveal:not(.ds-visible)")
                .forEach((el) => io.observe(el));
        };
        observe();

        // Re-observe after route changes (MutationObserver)
        const mo = new MutationObserver(observe);
        mo.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("scroll", updateProgress);
            io.disconnect();
            mo.disconnect();
        };
    }, []);
}