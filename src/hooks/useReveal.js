import { useEffect } from "react";

/**
 * Adds the "on" class to every .rev, .revL, .revR element
 * when it scrolls into view, triggering the fade-in animation.
 */
export default function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("on");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll(".rev, .revL, .revR")
      .forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);
}
