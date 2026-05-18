import { useEffect } from "react";

/**
 * Animates skill progress bars and donut chart strokes
 * when the skills section scrolls into view.
 * @param {React.RefObject} ref - ref attached to the skills section element
 */
function useSkills(ref) {
    useEffect(() => {
        if (!ref.current) return;

        const io = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;

                // Animate progress bars
                ref.current.querySelectorAll(".skf[data-p]").forEach((bar) => {
                    bar.style.width = bar.dataset.p + "%";
                });

                // Animate donut SVG circles
                ref.current.querySelectorAll(".dcc[data-p]").forEach((circle) => {
                    const pct = parseFloat(circle.dataset.p);
                    const circ = 270.2;
                    circle.style.transition = "stroke-dashoffset 1.5s cubic-bezier(.4,0,.2,1)";
                    circle.style.strokeDashoffset = circ - circ * (pct / 100);
                });

                io.disconnect();
            }, { threshold: 0.2 }
        );

        io.observe(ref.current);
        return () => io.disconnect();
    }, []);
}
export default useSkills;