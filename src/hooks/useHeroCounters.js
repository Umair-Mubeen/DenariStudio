import { useEffect } from "react";

const HERO_COUNTER_CONFIG = [
  { v: 80, s: "+" },
  { v: 65, s: "+" },
  { v: 50, s: "K" },
  { v: 3,  s: "yr" },
];

/**
 * Runs animated number counters for the Hero dashboard card.
 * @param {React.RefObject[]} refs - array of 4 refs for the counter DOM nodes
 */
export default function useHeroCounters(refs) {
  useEffect(() => {
    const timers = [];

    const id = setTimeout(() => {
      HERO_COUNTER_CONFIG.forEach(({ v, s }, i) => {
        const el = refs[i]?.current;
        if (!el) return;

        let c = 0;
        const step = v / 50;
        const t = setInterval(() => {
          c = Math.min(c + step, v);
          el.textContent = Math.floor(c) + s;
          if (c >= v) clearInterval(t);
        }, 25);
        timers.push(t);
      });
    }, 500);

    return () => {
      clearTimeout(id);
      timers.forEach(clearInterval);
    };
  }, []);
}
