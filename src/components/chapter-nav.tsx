'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CHAPTERS = [
  { id: 'story',     label: 'I' },
  { id: 'chapter-2', label: 'II' },
  { id: 'chapter-3', label: 'III' },
  { id: 'chapter-4', label: 'IV' },
];

export default function ChapterNav() {
  const [active, setActive] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sections = CHAPTERS.map(c => document.getElementById(c.id)).filter(Boolean) as HTMLElement[];

    function update() {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;

      // Show nav once past the hero (first chapter in view)
      const firstTop = sections[0]?.getBoundingClientRect().top ?? 9999;
      setVisible(firstTop < vh * 0.7);

      // Find which section is most in view
      let best: string | null = null;
      let bestScore = -Infinity;
      for (const el of sections) {
        const rect = el.getBoundingClientRect();
        const visible = Math.min(rect.bottom, vh) - Math.max(rect.top, 0);
        if (visible > bestScore) { bestScore = visible; best = el.id; }
      }
      setActive(best);
    }

    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 16 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed right-5 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-3"
          style={{ pointerEvents: 'auto' }}
        >
          {CHAPTERS.map((ch) => {
            const isActive = active === ch.id;
            return (
              <button
                key={ch.id}
                onClick={() => scrollTo(ch.id)}
                title={`Chapter ${ch.label}`}
                style={{
                  all: 'unset',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '22px',
                  height: '22px',
                  cursor: 'pointer',
                  position: 'relative',
                }}
              >
                <motion.span
                  animate={{
                    width: isActive ? '6px' : '4px',
                    height: isActive ? '6px' : '4px',
                    backgroundColor: isActive ? '#c8903a' : 'rgba(200,144,58,0.28)',
                    boxShadow: isActive ? '0 0 8px rgba(200,144,58,0.55)' : 'none',
                  }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  style={{ borderRadius: '50%', display: 'block' }}
                />
              </button>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
