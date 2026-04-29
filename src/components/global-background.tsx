'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Single canvas that lives behind the entire page
function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = window.innerWidth;
    let h = document.body.scrollHeight || window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    const resize = () => {
      w = window.innerWidth;
      h = document.body.scrollHeight || window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };
    window.addEventListener('resize', resize);

    // Mouse tracking (in page coordinates)
    const mouse = { x: -9999, y: -9999 };
    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY + window.scrollY;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Spread particles across full page height
    const count = Math.floor((w * h) / 18000);
    type Particle = { x: number; y: number; vx: number; vy: number; r: number; alpha: number; alphaDir: number };
    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      r: Math.random() * 1.1 + 0.25,
      alpha: Math.random() * 0.35 + 0.08,
      alphaDir: Math.random() > 0.5 ? 1 : -1,
    }));

    let raf: number;
    function draw() {
      ctx!.clearRect(0, 0, w, h);
      for (const p of particles) {
          p.x += p.vx;
          p.y += p.vy;
          p.alpha += p.alphaDir * 0.002;
          if (p.alpha > 0.45 || p.alpha < 0.05) p.alphaDir *= -1;
          if (p.x < 0) p.x = w;
          if (p.x > w) p.x = 0;
          if (p.y < 0) p.y = h;
          if (p.y > h) p.y = 0;

          // Mouse repulsion
          const scrollY = window.scrollY;
          const mdx = p.x - mouse.x;
          const mdy = p.y - (mouse.y + scrollY - scrollY); // mouse.y already in page coords
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 90 && mdist > 0) {
            const force = (90 - mdist) / 90 * 0.22;
            p.x += (mdx / mdist) * force;
            p.y += (mdy / mdist) * force;
          }

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(200,184,154,${p.alpha})`;
        ctx!.fill();
      }

      // Connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            const opacity = (1 - dist / 110) * 0.045;
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.strokeStyle = `rgba(200,184,154,${opacity})`;
            ctx!.lineWidth = 0.4;
            ctx!.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    }
    draw();
      return () => {
        cancelAnimationFrame(raf);
        window.removeEventListener('resize', resize);
        window.removeEventListener('mousemove', onMouseMove);
      };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
    />
  );
}

// Slow drifting orbs that span the full page
const ORBS = [
  // Hero zone
  { top: '2%',  left: '-5%',  w: 'clamp(400px,50vw,800px)', color: 'rgba(212,168,75,0.13)',  blur: 80, anim: 'floatA', dur: 22 },
  { top: '3%',  right: '-5%', w: 'clamp(300px,35vw,600px)', color: 'rgba(70,110,220,0.09)',   blur: 90, anim: 'floatB', dur: 28 },
  // Mid-page
  { top: '22%', left: '60%',  w: 'clamp(350px,40vw,680px)', color: 'rgba(190,140,50,0.07)',   blur: 100, anim: 'floatC', dur: 34 },
  { top: '35%', left: '-8%',  w: 'clamp(300px,35vw,580px)', color: 'rgba(200,160,70,0.06)',   blur: 90, anim: 'floatA', dur: 40 },
  // Lower
  { top: '55%', right: '-5%', w: 'clamp(350px,40vw,650px)', color: 'rgba(160,130,55,0.07)',   blur: 100, anim: 'floatB', dur: 36 },
  { top: '68%', left: '30%',  w: 'clamp(280px,32vw,520px)', color: 'rgba(212,168,75,0.06)',   blur: 110, anim: 'floatC', dur: 45 },
  // Footer zone
  { top: '85%', left: '5%',   w: 'clamp(300px,35vw,580px)', color: 'rgba(200,150,60,0.08)',   blur: 90, anim: 'floatA', dur: 30 },
];

export default function GlobalBackground() {
  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        background: 'linear-gradient(170deg, #0d0b07 0%, #080808 45%, #07080d 100%)',
      }}
    >
      {/* Canvas particles */}
      <BackgroundCanvas />

      {/* Global soft grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(200,184,154,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(200,184,154,0.025) 1px, transparent 1px)
        `,
        backgroundSize: '90px 90px',
        maskImage: 'radial-gradient(ellipse 100% 100% at 50% 50%, black 20%, transparent 100%)',
      }} />

      {/* Drifting orbs */}
      {ORBS.map((orb, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: orb.top,
            ...(orb.left ? { left: orb.left } : {}),
            ...(('right' in orb) ? { right: (orb as { right: string }).right } : {}),
            width: orb.w,
            height: orb.w,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: `blur(${orb.blur}px)`,
            animation: `${orb.anim} ${orb.dur}s ease-in-out infinite`,
            animationDelay: `${i * 3.5}s`,
          }}
        />
      ))}

      {/* Subtle stars */}
      {[
        { top: '4%',  left: '18%', size: 1.5, dur: '3.2s', delay: '0s'   },
        { top: '11%', left: '72%', size: 1,   dur: '4.1s', delay: '0.8s' },
        { top: '19%', left: '45%', size: 1.5, dur: '5s',   delay: '1.4s' },
        { top: '28%', left: '88%', size: 1,   dur: '3.6s', delay: '0.3s' },
        { top: '37%', left: '8%',  size: 2,   dur: '4.8s', delay: '1.1s' },
        { top: '46%', left: '58%', size: 1,   dur: '3.9s', delay: '0.6s' },
        { top: '54%', left: '32%', size: 1.5, dur: '4.4s', delay: '1.7s' },
        { top: '62%', left: '78%', size: 1,   dur: '2.9s', delay: '0.4s' },
        { top: '71%', left: '22%', size: 1.5, dur: '3.7s', delay: '2.1s' },
        { top: '79%', left: '50%', size: 1,   dur: '4.8s', delay: '0.9s' },
        { top: '88%', left: '65%', size: 2,   dur: '3.2s', delay: '1.3s' },
        { top: '93%', left: '12%', size: 1,   dur: '4.5s', delay: '0.2s' },
      ].map((s, i) => (
        <div key={i} style={{
          position: 'absolute', top: s.top, left: s.left,
          width: s.size, height: s.size, borderRadius: '50%',
          background: 'rgba(200,184,154,0.55)',
          animation: `shimmer ${s.dur} ease-in-out infinite`,
          animationDelay: s.delay,
        }} />
      ))}
    </div>
  );
}
