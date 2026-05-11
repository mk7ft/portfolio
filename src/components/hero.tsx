'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { scrollToStory } from '@/lib/utils';

const PARTNERS: { name: string; url: string }[] = [
  { name: 'ESL',              url: 'https://eslgaming.com'          },
  { name: 'Riot Games',       url: 'https://riotgames.com'          },
  { name: 'Activision',       url: 'https://activision.com'         },
  { name: 'Tencent',          url: 'https://tencent.com'            },
  { name: 'TSM',              url: 'https://tsm.gg'                 },
  { name: 'Team Liquid',      url: 'https://teamliquid.com'         },
  { name: 'FaZe Clan',        url: 'https://fazeclan.com'           },
  { name: '100 Thieves',      url: 'https://100thieves.com'         },
  { name: 'Spacestation',     url: 'https://spacestationgaming.com' },
  { name: 'Forbes',           url: 'https://forbes.com'             },
  { name: 'ESPN',             url: 'https://espn.com'               },
  { name: 'Business Insider', url: 'https://businessinsider.com'    },
  { name: 'Vivint',           url: 'https://vivint.com'             },
  { name: 'TEDx',            url: 'https://ted.com/tedx'           },
];

export default function Hero() {
  const trackRef   = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX     = useRef(0);
  const scrollLeft = useRef(0);
  const animFrame  = useRef<number | null>(null);
  const velocity   = useRef(0);
  const lastX      = useRef(0);
  const autoOffset = useRef(0);
  const dragOffset = useRef(0);
  const isPaused   = useRef(false);

  const { scrollY } = useScroll();
  const nameY   = useTransform(scrollY, [0, 500], [0, -70]);
  const fadeOut = useTransform(scrollY, [0, 320], [1, 0]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const SPEED = 0.5;

    function loop() {
      if (!isPaused.current) {
        autoOffset.current += SPEED;
        const half = track!.scrollWidth / 2;
        if (autoOffset.current >= half) autoOffset.current -= half;
      } else if (Math.abs(velocity.current) > 0.1) {
        dragOffset.current -= velocity.current;
        velocity.current *= 0.93;
        const half = track!.scrollWidth / 2;
        dragOffset.current = ((dragOffset.current % half) + half) % half;
      } else {
        velocity.current = 0;
        isPaused.current  = false;
      }
      track!.style.transform = `translateX(-${autoOffset.current + dragOffset.current}px)`;
      animFrame.current = requestAnimationFrame(loop);
    }

    animFrame.current = requestAnimationFrame(loop);
    return () => { if (animFrame.current) cancelAnimationFrame(animFrame.current); };
  }, []);

  function onMouseDown(e: React.MouseEvent) {
    isDragging.current = true;
    isPaused.current   = true;
    startX.current     = e.clientX;
    scrollLeft.current = autoOffset.current + dragOffset.current;
    lastX.current      = e.clientX;
    velocity.current   = 0;
    (e.currentTarget as HTMLElement).style.cursor = 'grabbing';
  }
  function onMouseMove(e: React.MouseEvent) {
    if (!isDragging.current) return;
    velocity.current   = -(e.clientX - lastX.current) * 0.5;
    lastX.current      = e.clientX;
    const half         = (trackRef.current?.scrollWidth ?? 1) / 2;
    autoOffset.current = (((scrollLeft.current + (startX.current - e.clientX)) % half) + half) % half;
    dragOffset.current = 0;
  }
  function onMouseUp(e: React.MouseEvent) {
    isDragging.current = false;
    (e.currentTarget as HTMLElement).style.cursor = 'grab';
  }
  function onTouchStart(e: React.TouchEvent) {
    isDragging.current = true;
    isPaused.current   = true;
    startX.current     = e.touches[0].clientX;
    scrollLeft.current = autoOffset.current + dragOffset.current;
    lastX.current      = e.touches[0].clientX;
    velocity.current   = 0;
  }
  function onTouchMove(e: React.TouchEvent) {
    if (!isDragging.current) return;
    velocity.current   = -(e.touches[0].clientX - lastX.current) * 0.5;
    lastX.current      = e.touches[0].clientX;
    const half         = (trackRef.current?.scrollWidth ?? 1) / 2;
    autoOffset.current = (((scrollLeft.current + (startX.current - e.touches[0].clientX)) % half) + half) % half;
    dragOffset.current = 0;
  }
  function onTouchEnd() { isDragging.current = false; }

  const doubled = [...PARTNERS, ...PARTNERS];

  return (
    <section id="hero" className="relative flex flex-col overflow-hidden" style={{ minHeight: '100dvh' }}>

      {/* Nav */}
      <motion.nav
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex items-center justify-between flex-shrink-0"
        style={{ padding: 'clamp(1.2rem,3vh,2.2rem) clamp(1.2rem,5vw,4.5rem)' }}
      >
        <a
          href="https://mk7ft.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-editorial)',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: 'clamp(1rem,1.6vw,1.4rem)',
            background: 'linear-gradient(105deg, #d4a84b 0%, #e8d5a8 60%, #c8903a 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textDecoration: 'none',
            opacity: 0.9,
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '0.9')}
        >
          MK7
        </a>

        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute', inset: '-3px', borderRadius: '9999px',
            background: 'linear-gradient(105deg, #c8903a, #d4a84b, #c8903a)',
            opacity: 0.4, filter: 'blur(10px)',
            animation: 'pulseGlow 3s ease-in-out infinite',
          }} />
            <a
              href="https://linkedin.com/in/mk7ft"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-2 rounded-full transition-all duration-300 hover:brightness-115"
              style={{
                padding: 'clamp(0.6rem,1.4vh,1rem) clamp(1.2rem,2.5vw,2rem)',
                background: 'linear-gradient(105deg, #c8903a 0%, #d4a84b 50%, #c8a040 100%)',
                color: '#0c0a06',
                fontFamily: 'var(--font-editorial)',
                fontSize: 'clamp(0.65rem,0.85vw,0.78rem)',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                fontWeight: 700,
                boxShadow: '0 0 28px rgba(200,144,58,0.5), 0 2px 12px rgba(0,0,0,0.5)',
              }}
            >
              LinkedIn
              <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
        </div>
      </motion.nav>

      {/* Background image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}
      >
        <img
          src="/hero-bg.jpg"
          alt=""
          style={{
            position: 'absolute', inset: '-6px',
            width: 'calc(100% + 12px)', height: 'calc(100% + 12px)',
            objectFit: 'cover', objectPosition: 'center center',
            filter: 'grayscale(22%) brightness(0.45) contrast(1.08) blur(3px)',
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,8,8,0.48)' }} />
        <div className="md:hidden" style={{ position: 'absolute', inset: 0, background: 'rgba(8,8,8,0.28)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(to top, #080808 0%, transparent 100%)' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '20%', background: 'linear-gradient(to bottom, #080808 0%, transparent 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 40%, rgba(200,144,58,0.06) 0%, transparent 65%)' }} />
      </motion.div>

      {/* Main content */}
      <motion.div
        style={{ y: nameY, opacity: fadeOut }}
        className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-4"
      >
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            marginBottom: 'clamp(1.2rem,3vh,3rem)',
            width: 'clamp(2rem,4vw,4.5rem)', height: '1px',
            background: 'linear-gradient(90deg, transparent, #c8b89a, transparent)',
            transformOrigin: 'center',
          }}
        />

        <div style={{ overflow: 'hidden', marginBottom: '0.04em' }}>
          <motion.h1
            initial={{ y: '105%', skewY: 2 }}
            animate={{ y: '0%', skewY: 0 }}
            transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: 'clamp(4.5rem,13vw,14rem)',
              color: '#f0ede8',
              fontFamily: 'var(--font-editorial)',
              fontWeight: 300,
              lineHeight: 0.85,
              letterSpacing: '-0.04em',
            }}
          >
            Muhammad
          </motion.h1>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: 'clamp(1.2rem,4vh,3.5rem)' }}>
          <motion.h1
            initial={{ y: '105%', skewY: 2 }}
            animate={{ y: '0%', skewY: 0 }}
            transition={{ duration: 1.05, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: 'clamp(4.5rem,13vw,14rem)',
              fontFamily: 'var(--font-editorial)',
              fontWeight: 300,
              lineHeight: 0.85,
              letterSpacing: '-0.04em',
              fontStyle: 'italic',
              background: 'linear-gradient(105deg, #d4a84b 0%, #c8b89a 40%, #e8d5a8 70%, #c8903a 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Kamil.
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.62, ease: [0.16, 1, 0.3, 1] }}
          style={{
            marginBottom: 'clamp(1.8rem,4vh,4rem)',
            color: 'rgba(240,237,232,0.35)',
            fontFamily: 'var(--font-editorial)',
            fontWeight: 300,
            fontSize: 'clamp(0.75rem,1.1vw,1rem)',
            letterSpacing: '0.08em',
          }}
        >
          Entrepreneur, Consultant, Operator.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.82, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 flex-wrap justify-center"
        >
          <a
            href="#story"
            onClick={scrollToStory}
            className="group flex items-center gap-2.5 rounded-full transition-all duration-300 hover:bg-[rgba(200,184,154,0.08)] hover:border-[rgba(200,184,154,0.45)]"
            style={{
              padding: 'clamp(0.7rem,1.8vh,1.1rem) clamp(1.4rem,3.5vw,2.8rem)',
              border: '1px solid rgba(240,237,232,0.18)',
              color: '#f0ede8',
              fontFamily: 'var(--font-editorial)',
              fontSize: 'clamp(0.72rem,0.9vw,0.82rem)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            My Story
            <motion.svg
              width="11" height="11" viewBox="0 0 12 12" fill="none"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <path d="M6 1L6 11M6 11L2 7M6 11L10 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </motion.svg>
          </a>

          <a
            href="https://drive.google.com/file/d/11iyZC-HZXZPrOEiP8cf4sAi-jgPyimob/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 rounded-full transition-all duration-300 hover:brightness-110"
            style={{
              padding: 'clamp(0.7rem,1.8vh,1.1rem) clamp(1.4rem,3.5vw,2.8rem)',
              background: 'linear-gradient(105deg, #c8903a 0%, #d4a84b 100%)',
              color: '#0c0a06',
              fontFamily: 'var(--font-editorial)',
              fontSize: 'clamp(0.72rem,0.9vw,0.82rem)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontWeight: 600,
              boxShadow: '0 0 20px rgba(200,144,58,0.35)',
            }}
          >
            Résumé
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
              <path d="M6 1v7M3 6l3 3 3-3M2 11h8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </motion.div>

      {/* Partners strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.85 }}
        className="relative z-10 flex-shrink-0 pb-8 pt-6"
        style={{ borderTop: '1px solid rgba(200,184,154,0.07)' }}
      >
        <div className="flex items-center justify-center gap-10 md:gap-16">
          {[
            { name: 'Forbes',  url: 'https://forbes.com'       },
            { name: 'ESPN',    url: 'https://espn.com'         },
            { name: 'TSM',     url: 'https://tsm.gg'           },
            { name: 'TEDx',    url: 'https://ted.com/tedx'     },
          ].map(p => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 'clamp(0.6rem,0.85vw,0.74rem)',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'rgba(240,237,232,0.9)',
                fontFamily: 'var(--font-editorial)',
                fontWeight: 500,
                opacity: 0.28,
                textDecoration: 'none',
                transition: 'opacity 0.25s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.28')}
            >
              {p.name}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
