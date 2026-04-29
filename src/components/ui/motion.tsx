'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function LineReveal({
  children,
  delay = 0,
  style = {},
}: {
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <div ref={ref} style={{ overflow: 'hidden' }}>
      <motion.div
        initial={{ y: '108%', skewY: 1.5 }}
        animate={inView ? { y: '0%', skewY: 0 } : {}}
        transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
        style={style}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const initial =
    direction === 'up'    ? { opacity: 0, y: 28 } :
    direction === 'left'  ? { opacity: 0, x: -28 } :
    direction === 'right' ? { opacity: 0, x: 28 } : { opacity: 0 };
  const animate = inView
    ? direction === 'up'    ? { opacity: 1, y: 0 } :
      direction === 'left'  ? { opacity: 1, x: 0 } :
      direction === 'right' ? { opacity: 1, x: 0 } : { opacity: 1 }
    : {};
  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{ duration: 1.05, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * SectionReveal — wraps a full section.
 * A thin gold scan line sweeps across when the section enters view,
 * then the content fades + rises in slowly for a premium feel.
 */
export function SectionReveal({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div ref={ref} className={className} style={{ position: 'relative' }}>
      {/* Horizontal scan line */}
      {inView && (
        <div
          aria-hidden
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(200,144,58,0.5) 30%, rgba(212,168,75,0.65) 50%, rgba(200,144,58,0.5) 70%, transparent 100%)',
            animation: 'scanLine 1.4s ease-out forwards',
            zIndex: 20,
            pointerEvents: 'none',
          }}
        />
      )}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
