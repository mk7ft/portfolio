'use client';

import { useEffect, useRef, useState } from 'react';

export default function CursorGlow() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);
  const pos     = useRef({ x: -200, y: -200 });
  const halo    = useRef({ x: -200, y: -200 });
  const raf     = useRef<number | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only on non-touch devices
    if (window.matchMedia('(hover: none)').matches) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };
    window.addEventListener('mousemove', onMove, { passive: true });

    function tick() {
      // Halo lags behind cursor with lerp
      halo.current.x += (pos.current.x - halo.current.x) * 0.072;
      halo.current.y += (pos.current.y - halo.current.y) * 0.072;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      if (haloRef.current) {
        haloRef.current.style.transform = `translate(${halo.current.x}px, ${halo.current.y}px)`;
      }
      raf.current = requestAnimationFrame(tick);
    }
    raf.current = requestAnimationFrame(tick);

    // Expand dot on clickables
    const onEnter = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest('a, button, [role="button"]')) {
        dotRef.current?.classList.add('cursor-expanded');
      }
    };
    const onLeave = () => dotRef.current?.classList.remove('cursor-expanded');
    document.addEventListener('mouseover', onEnter, { passive: true });
    document.addEventListener('mouseout',  onLeave, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onEnter);
      document.removeEventListener('mouseout',  onLeave);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [visible]);

  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) return null;

  return (
    <>
      {/* Inner sharp dot */}
      <div
        ref={dotRef}
        aria-hidden
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          marginTop: -3,
          marginLeft: -3,
          borderRadius: '50%',
          background: 'rgba(212,168,75,0.9)',
          pointerEvents: 'none',
          zIndex: 99999,
          mixBlendMode: 'screen',
          transition: 'width 0.18s, height 0.18s, margin 0.18s, opacity 0.3s',
          opacity: visible ? 1 : 0,
          willChange: 'transform',
        }}
        className="cursor-dot"
      />

      {/* Outer glow halo — lags behind */}
      <div
        ref={haloRef}
        aria-hidden
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 380,
          height: 380,
          marginTop: -190,
          marginLeft: -190,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,168,75,0.055) 0%, rgba(200,144,58,0.025) 40%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 99990,
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.4s',
          willChange: 'transform',
        }}
      />
    </>
  );
}
