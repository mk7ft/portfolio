'use client';

import { motion } from 'framer-motion';
import { LineReveal, Reveal, SectionReveal } from '@/components/ui/motion';
import { GOLD, GOLD_DIM, GOLD_FAINT, TEXT, TEXT_DIM, CHAPTER_GRADIENT } from '@/lib/tokens';
import { useCountUp } from '@/hooks/use-count-up';

function AnimatedStat({ value, style }: { value: string; style: React.CSSProperties }) {
  const { ref, display } = useCountUp(value, 1800);
  return <motion.span ref={ref as React.RefObject<HTMLElement>} style={style}>{display}</motion.span>;
}

const STATS = [
  { n: '01', stat: '17M+', unit: 'Visitors Served Across 3 Events', sub: 'Eid Al Fitr · Qiyam Al Layl · Ramadan', label: 'EMT Volunteer (SRCA)',  url: 'https://www.srca.org.sa/en/', delay: 0.10 },
  { n: '02', stat: '#1',   unit: 'Of 40 Reps in Sale Quality',      sub: '$150k+ closed in 90 days',             label: 'Direct Sales (Vivint)', url: 'http://vivint.com/',           delay: 0.20 },
  { n: '03', stat: '50k+', unit: 'Customers Managed',               sub: '$2.5M+ revenue exposure',              label: 'Operations (Multiple)', url: null,                           delay: 0.30 },
];

const BODY_LINES = [
  'I operate anywhere, under anything.',
];

export default function StoryOperator() {
  return (
    <section
      id="chapter-3"
      className="relative overflow-hidden"
      style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column' }}
    >
      <div
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col"
        style={{ flex: 1, padding: 'clamp(2.5vh,4vh,6vh) clamp(1.2rem,5vw,5rem) clamp(2.5vh,4vh,5vh)' }}
      >
        <SectionReveal>


          <div style={{ marginBottom: 'clamp(1rem,2.5vh,2.5rem)' }}>
            <LineReveal delay={0.05}>
              <h2 style={{
                fontSize: 'clamp(3rem,7vw,7.5rem)',
                fontFamily: 'var(--font-editorial)',
                fontWeight: 300,
                lineHeight: 0.88,
                letterSpacing: '-0.03em',
                fontStyle: 'italic',
                background: CHAPTER_GRADIENT,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Operator.
              </h2>
            </LineReveal>
          </div>

          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14" style={{ alignItems: 'stretch', minHeight: 0 }}>

            {/* LEFT — body + photo */}
            <div className="lg:col-span-5 flex flex-col">
              <Reveal delay={0.08} direction="left">
                {BODY_LINES.map((line, i) => (
                  <p key={i} style={{
                    fontSize: 'clamp(0.82rem,1vw,0.95rem)',
                    lineHeight: 1.75,
                    color: i === 3 ? 'rgba(240,237,232,0.55)' : TEXT_DIM,
                    fontFamily: 'var(--font-editorial)',
                    letterSpacing: '0.03em',
                    fontStyle: i === 3 ? 'italic' : 'normal',
                    marginTop: i === 3 ? '0.75rem' : 0,
                  }}>
                    {line}
                  </p>
                ))}
              </Reveal>

              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0, marginTop: '1.5rem' }}>
                <Reveal delay={0.22} direction="up" className="flex-1" style={{ display: 'flex', flexDirection: 'column', minHeight: 0 }}>
                  <motion.div
                    whileHover="hovered"
                    className="operator-photo-wrap"
                    style={{
                      position: 'relative',
                      borderRadius: '6px',
                      overflow: 'hidden',
                      border: '1px solid rgba(248,248,248,0.07)',
                      flex: 1,
                      minHeight: '220px',
                    }}
                  >
                    <motion.img
                      src="/src-operator.jpg"
                      alt="On-site emergency operations - Saudi Red Crescent Authority, Madinah"
                      variants={{ hovered: { scale: 1.035, filter: 'grayscale(0%) brightness(1.0)' }, initial: { scale: 1, filter: 'grayscale(20%) brightness(0.92)' } }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', display: 'block' }}
                    />
                    <motion.div
                      variants={{ hovered: { opacity: 1 }, initial: { opacity: 0 } }}
                      initial="initial"
                      transition={{ duration: 0.4 }}
                      style={{
                        position: 'absolute', inset: 0,
                        border: `1px solid rgba(200,144,58,0.35)`,
                        borderRadius: '6px',
                        pointerEvents: 'none',
                      }}
                    />
                  </motion.div>
                </Reveal>
                <span style={{
                  display: 'block',
                  marginTop: '0.55rem',
                  fontSize: '0.58rem',
                  letterSpacing: '0.35em',
                  textTransform: 'uppercase',
                  color: 'rgba(248,248,248,0.38)',
                  fontFamily: 'var(--font-editorial)',
                }}>
                  Madinah, Saudi Arabia
                </span>
              </div>
            </div>

            {/* RIGHT — stat panel */}
            <div className="stat-panel-mobile-top lg:col-span-7 flex flex-col" style={{ borderTop: `1px solid ${GOLD_FAINT}`, flex: 1 }}>
              {STATS.map((s) => {
                const statContent = (
                  <motion.div
                    key={s.n}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-20px' }}
                    transition={{ duration: 1.0, delay: s.delay, ease: [0.16, 1, 0.3, 1] }}
                    whileHover="hovered"
                    style={{
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'clamp(0.75rem,2vw,2rem)',
                      borderBottom: `1px solid ${GOLD_FAINT}`,
                      flex: 1,
                      width: '100%',
                      minHeight: 'clamp(100px,13vh,999px)',
                      padding: 'clamp(1.2rem,2.8vw,1.6rem) 0',
                      overflow: 'hidden',
                      cursor: s.url ? 'pointer' : 'default',
                    }}
                  >
                    <motion.div
                      variants={{ hovered: { opacity: 1 }, initial: { opacity: 0 } }}
                      initial="initial"
                      style={{
                        position: 'absolute', inset: '0 -4px',
                        background: `linear-gradient(90deg, transparent 0%, ${GOLD_FAINT} 50%, transparent 100%)`,
                        pointerEvents: 'none',
                      }}
                    />
                    <motion.div
                      variants={{ hovered: { scaleY: 1, opacity: 1 }, initial: { scaleY: 0, opacity: 0 } }}
                      initial="initial"
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      style={{
                        position: 'absolute', left: -2, top: 0, bottom: 0, width: 2,
                        background: `linear-gradient(to bottom, transparent, ${GOLD}, transparent)`,
                        transformOrigin: 'top',
                        pointerEvents: 'none',
                      }}
                    />

                    <span style={{ fontSize: '0.58rem', color: 'rgba(200,144,58,0.25)', fontFamily: 'var(--font-editorial)', letterSpacing: '0.2em', flexShrink: 0, width: '1.4rem', position: 'relative' }}>
                      {s.n}
                    </span>

                    <motion.span
                      variants={{ hovered: { scale: 1.05, filter: 'brightness(1.3)' }, initial: { scale: 1, filter: 'brightness(1)' } }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      style={{
                        fontSize: 'clamp(1.8rem,5.5vw,5.5rem)',
                        fontFamily: 'var(--font-editorial)',
                        fontWeight: 300,
                        lineHeight: 0.9,
                        letterSpacing: '-0.03em',
                        fontStyle: 'italic',
                        background: `linear-gradient(120deg, ${GOLD} 0%, rgba(200,144,58,0.5) 100%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        flexShrink: 0,
                        minWidth: 'clamp(2.5rem,6.5vw,7.5rem)',
                        transformOrigin: 'left center',
                        display: 'inline-block',
                        position: 'relative',
                      }}
                    >
                      <AnimatedStat value={s.stat} style={{}} />
                    </motion.span>

                    <motion.div
                      variants={{ hovered: { x: 6 }, initial: { x: 0 } }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: 0, flex: 1, position: 'relative' }}
                    >
                      <span style={{ fontSize: 'clamp(0.62rem,0.9vw,0.82rem)', color: TEXT, fontFamily: 'var(--font-editorial)', letterSpacing: '0.07em', textTransform: 'uppercase', lineHeight: 1.4, wordBreak: 'break-word' }}>
                        {s.unit}
                      </span>
                      <span style={{ fontSize: 'clamp(0.56rem,0.75vw,0.6rem)', color: 'rgba(240,237,232,0.38)', fontFamily: 'var(--font-editorial)', letterSpacing: '0.05em', lineHeight: 1.5, wordBreak: 'break-word' }}>
                        {s.sub}
                      </span>
                      <span style={{ fontSize: '0.54rem', color: 'rgba(200,144,58,0.38)', fontFamily: 'var(--font-editorial)', letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: '2px' }}>
                        {s.label}
                      </span>
                    </motion.div>

                    {s.url && (
                      <motion.svg
                        width="9" height="9" viewBox="0 0 12 12" fill="none"
                        variants={{ hovered: { x: 2, y: -2, opacity: 0.7 }, initial: { x: 0, y: 0, opacity: 0.2 } }}
                        transition={{ duration: 0.22, ease: 'easeOut' }}
                        style={{ flexShrink: 0, position: 'relative' }}
                      >
                        <path d="M2 10L10 2M10 2H4M10 2V8" stroke={TEXT} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </motion.svg>
                    )}
                  </motion.div>
                );

                return s.url ? (
                  <a key={s.n} href={s.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', flex: 1 }}>
                    {statContent}
                  </a>
                ) : (
                  <div key={s.n} style={{ display: 'flex', flex: 1 }}>
                    {statContent}
                  </div>
                );
              })}
            </div>

          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
