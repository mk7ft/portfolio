'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

/**
 * Extracts a numeric value and surrounding non-numeric prefix/suffix
 * e.g. "$100K+" → { prefix: "$", num: 100, suffix: "K+" }
 *      "1.5M+"  → { prefix: "", num: 1.5, suffix: "M+" }
 *      "#1"     → { prefix: "#", num: 1, suffix: "" }
 *      "17"     → { prefix: "", num: 17, suffix: "" }
 *      "4+"     → { prefix: "", num: 4, suffix: "+" }
 *      "5k+"    → { prefix: "", num: 5, suffix: "k+" }
 */
function parseStatValue(raw: string): { prefix: string; num: number; suffix: string } {
  const match = raw.match(/^([^0-9]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { prefix: '', num: 0, suffix: raw };
  return {
    prefix: match[1],
    num: parseFloat(match[2]),
    suffix: match[3],
  };
}

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export function useCountUp(raw: string, duration = 1600) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [display, setDisplay] = useState(raw);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    const { prefix, num, suffix } = parseStatValue(raw);

    // If no real number to count, just display as-is
    if (num === 0 && !raw.match(/\d/)) {
      setDisplay(raw);
      return;
    }

    started.current = true;
    const start = performance.now();
    const isFloat = raw.includes('.');

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutExpo(progress);
      const current = num * eased;
      const formatted = isFloat
        ? current.toFixed(1)
        : Math.round(current).toString();
      setDisplay(`${prefix}${formatted}${suffix}`);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, raw, duration]);

  return { ref, display };
}
