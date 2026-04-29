'use client';

// keep scrolling
import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SECTIONS = [
  { id: 'hero',      label: 'Intro'       },
  { id: 'story',     label: 'Entrepreneur'},
  { id: 'chapter-2', label: 'Consultant'  },
  { id: 'chapter-3', label: 'Operator'    },
  { id: 'chapter-4', label: 'Student'     },
  { id: 'footer',    label: "What's Next" },
];

function easeInOut(t: number) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; }

export default function ChapterArrows() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible]  = useState(false);
  const [hovered, setHovered]  = useState(false);
  const [idle, setIdle]        = useState(false);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetIdle = useCallback(() => {
    setIdle(false);
    if (idleTimer.current) clearTimeout(idleTimer.current);
    idleTimer.current = setTimeout(() => setIdle(true), 1000);
  }, []);

  // Start idle timer when visible
  useEffect(() => {
    if (!visible) return;
    resetIdle();
    return () => { if (idleTimer.current) clearTimeout(idleTimer.current); };
  }, [visible, resetIdle]);

  // Track active section
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTIONS.forEach((sec, i) => {
      const el = document.getElementById(sec.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setCurrent(i); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  // Show after scrolling past the hero
  useEffect(() => {
    const onScroll = () => { setVisible(window.scrollY > 80); resetIdle(); };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [resetIdle]);

  const scrollTo = useCallback((index: number) => {
    const el = document.getElementById(SECTIONS[index].id);
    if (!el) return;
    const start    = window.scrollY;
    const target   = el.getBoundingClientRect().top + window.scrollY;
    const vh       = window.innerHeight;
    const isMobile = window.innerWidth < 768;

    // On mobile, scroll 1.5 viewports per click so long sections feel less tedious
    const end = isMobile && Math.abs(target - start) > vh * 1.5
      ? start + (target > start ? vh * 1.5 : -vh * 1.5)
      : target;

    const distance  = end - start;
    const duration  = 1800;
    const startTime = performance.now();

    function step(now: number) {
      const progress = Math.min((now - startTime) / duration, 1);
      window.scrollTo(0, start + distance * easeInOut(progress));
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, []);

  const canUp   = current > 0;
  const canDown = current < SECTIONS.length - 1;

  const btnStyle = (enabled: boolean): React.CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: '50%',
    border: `1px solid ${enabled ? 'rgba(200,168,75,0.45)' : 'rgba(255,255,255,0.08)'}`,
    background: enabled ? 'rgba(200,168,75,0.08)' : 'rgba(255,255,255,0.03)',
    color: enabled ? 'rgba(212,168,75,0.9)' : 'rgba(255,255,255,0.18)',
    cursor: enabled ? 'pointer' : 'default',
    transition: 'all 0.2s ease',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    outline: 'none',
    pointerEvents: enabled ? 'auto' : 'none',
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: idle && !hovered ? 0.15 : 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: idle && !hovered ? 1.2 : 0.35, ease: [0.16, 1, 0.3, 1] }}
          onMouseEnter={() => { setHovered(true); resetIdle(); }}
          onMouseLeave={() => { setHovered(false); resetIdle(); }}
          onClick={resetIdle}
          style={{
            position: 'fixed',
            right: 'clamp(12px,2.5vw,28px)',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 100,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <button onClick={() => canUp && scrollTo(current - 1)} style={btnStyle(canUp)} aria-label="Previous section">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 11V3M3 7l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 5, alignItems: 'center' }}>
            {SECTIONS.map((sec, i) => (
              <button
                key={sec.id}
                onClick={() => scrollTo(i)}
                aria-label={sec.label}
                style={{
                  width: i === current ? 6 : 4,
                  height: i === current ? 6 : 4,
                  borderRadius: '50%',
                  background: i === current ? 'rgba(212,168,75,0.9)' : 'rgba(255,255,255,0.2)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  padding: 0,
                  outline: 'none',
                }}
              />
            ))}
          </div>

          <button onClick={() => canDown && scrollTo(current + 1)} style={btnStyle(canDown)} aria-label="Next section">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 3v8M3 7l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
