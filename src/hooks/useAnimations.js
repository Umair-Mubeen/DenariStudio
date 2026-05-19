import { useEffect } from "react";

export default function useAnimations() {
    useEffect(() => {
        /* Progress bar */
        let bar = document.getElementById("ds-progress");
        if (!bar) {
            bar = document.createElement("div");
            bar.id = "ds-progress";
            document.body.prepend(bar);
        }
        const updateProgress = () => {
            const top = window.scrollY;
            const docH = document.documentElement.scrollHeight - window.innerHeight;
            bar.style.width = (docH > 0 ? (top / docH) * 100 : 0) + "%";
        };
        window.addEventListener("scroll", updateProgress, { passive: true });
        updateProgress();

        /* Observer */
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add("ds-visible");
                        io.unobserve(e.target);
                    }
                });
            }, { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
        );

        /* Observe function — can be called multiple times safely */
        const scan = () => {
            document.querySelectorAll(".ds-reveal:not(.ds-visible)").forEach((el) => io.observe(el));
        };

        /* Initial scan */
        scan();

        /* Re-scan at 100ms, 500ms, 1000ms to catch late-rendered elements */
        const t1 = setTimeout(scan, 100);
        const t2 = setTimeout(scan, 500);
        const t3 = setTimeout(scan, 1000);
        const t4 = setTimeout(scan, 2000);

        /* MutationObserver — but only watch childList (no attribute loop) */
        const mo = new MutationObserver((mutations) => {
            let needsScan = false;
            for (const m of mutations) {
                if (m.addedNodes.length > 0) { needsScan = true; break; }
            }
            if (needsScan) scan();
        });
        mo.observe(document.body, { childList: true, subtree: true, attributes: false });

        return () => {
            window.removeEventListener("scroll", updateProgress);
            io.disconnect();
            mo.disconnect();
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
            clearTimeout(t4);
        };
    }, []);
}