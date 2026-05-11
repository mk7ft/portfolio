'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Footer() {
  return (
    <section id="footer" className="relative overflow-hidden" style={{ background: 'transparent' }}>
      <div className="relative z-10">
        <div className="divider" />

        {/* Main CTA */}
        <div
          className="text-center"
          style={{ padding: 'clamp(2.5rem,6vh,5rem) clamp(1.2rem,5vw,5rem) clamp(4rem,8vh,7rem)', maxWidth: '1100px', margin: '0 auto' }}
        >
          <FadeIn>
            <span style={{
              fontSize: '0.65rem',
              letterSpacing: '0.38em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: 'clamp(1.5rem,3vh,2.5rem)',
              color: 'rgba(200,184,154,0.45)',
              fontFamily: 'var(--font-editorial)',
            }}>
              What&apos;s next
            </span>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h2
              style={{
                fontSize: 'clamp(3.8rem,10vw,11rem)',
                color: '#f0ede8',
                fontFamily: 'var(--font-editorial)',
                fontWeight: 300,
                lineHeight: 0.88,
                letterSpacing: '-0.04em',
                marginBottom: 'clamp(2.5rem,5vh,4rem)',
              }}
            >
              disrupting?<br />
              <span style={{
                fontStyle: 'italic',
                background: 'linear-gradient(105deg, #d4a84b 0%, #c8b89a 50%, #c8903a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                let&apos;s talk.
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2} className="flex items-center justify-center gap-5 flex-wrap">
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute', inset: '-3px', borderRadius: '9999px',
                background: 'linear-gradient(105deg, #c8903a, #d4a84b, #c8903a)',
                opacity: 0.35, filter: 'blur(10px)',
                animation: 'pulseGlow 3s ease-in-out infinite',
              }} />
              <a
                href="mailto:muhammadkamilali@gmail.com"
                className="relative flex items-center gap-3 rounded-full transition-all duration-300 hover:brightness-110"
                style={{
                  padding: 'clamp(0.9rem,1.8vh,1.2rem) clamp(2.2rem,3.5vw,3rem)',
                  background: 'linear-gradient(105deg, #c8903a 0%, #d4a84b 50%, #c8a040 100%)',
                  color: '#0c0a06',
                  fontFamily: 'var(--font-editorial)',
                  fontSize: 'clamp(0.72rem,0.9vw,0.82rem)',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  boxShadow: '0 0 28px rgba(200,144,58,0.4), 0 2px 12px rgba(0,0,0,0.5)',
                }}
              >
                Send an email
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            <a
              href="https://linkedin.com/in/mk7ft"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-full transition-all duration-300 hover:border-[rgba(200,184,154,0.45)] hover:text-[#c8b89a]"
              style={{
                padding: 'clamp(0.9rem,1.8vh,1.2rem) clamp(2.2rem,3.5vw,3rem)',
                border: '1px solid rgba(255,255,255,0.14)',
                color: '#f0ede8',
                fontFamily: 'var(--font-editorial)',
                fontSize: 'clamp(0.72rem,0.9vw,0.82rem)',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              LinkedIn
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </FadeIn>
        </div>

        {/* Bottom bar */}
        <div className="divider" />
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ padding: 'clamp(1.2rem,2.5vh,1.8rem) clamp(1.2rem,5vw,5rem)', maxWidth: '1100px', margin: '0 auto' }}
        >
          <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(240,237,232,0.18)', fontFamily: 'var(--font-editorial)' }}>
            © 2026 Muhammad Kamil
          </span>
          <div className="flex items-center gap-8">
            {['Tampa, FL', 'mk7ft.com'].map(item => (
              <span key={item} style={{ fontSize: '0.65rem', letterSpacing: '0.12em', color: 'rgba(240,237,232,0.18)', fontFamily: 'var(--font-editorial)' }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
