'use client';

import { motion } from 'framer-motion';
import { LineReveal, Reveal, SectionReveal } from '@/components/ui/motion';
import { GOLD, GOLD_DIM, GOLD_FAINT, TEXT, CHAPTER_GRADIENT } from '@/lib/tokens';
import { useCountUp } from '@/hooks/use-count-up';

function AnimatedStat({ value, style }: { value: string; style: React.CSSProperties }) {
  const { ref, display } = useCountUp(value, 1800);
  return <motion.span ref={ref as React.RefObject<HTMLElement>} style={style}>{display}</motion.span>;
}

const VENTURES = [
  { name: 'News & Media Company',          desc: 'Digital news & content distribution',  tag: 'Acquired', url: null               },
  { name: 'Creative & Consulting Agency',  desc: 'Brand strategy & creative services',   tag: 'Acquired', url: null               },
  { name: 'Events & Broadcasting Company', desc: 'Production and Talent Management',     tag: 'Acquired', url: null               },
  { name: 'Frags',                         desc: 'AI-powered gaming highlight clips',    tag: 'Inactive', url: null               },
  { name: 'SPRK',                          desc: 'EdTech platform for student success',  tag: 'Active',   url: 'https://sprk.co'  },
  { name: 'JRVS',                          desc: 'AI productivity & workflow assistant', tag: 'Active',   url: 'https://jrvs.pro' },
  { name: 'Aster',                         desc: "Women's health & wellness platform",   tag: 'Active',   url: 'https://aster.fit'},
];

const TAG_COLOR: Record<string, string> = {
  Acquired: 'rgba(212,168,75,0.7)',
  Inactive: 'rgba(245,240,232,0.22)',
  Active:   'rgba(120,200,130,0.7)',
};

const STATS = [
  { n: '01', stat: '250+',   unit: 'Staff Members Managed',  sub: 'From 50+ countries',               label: 'Team'    },
  { n: '02', stat: '$0',     unit: 'Raised',                  sub: 'Fully bootstrapped since day one', label: 'Funding' },
  { n: '03', stat: '$100K+', unit: 'In Partnerships',         sub: 'Self-taught from pitch to close',  label: 'Revenue' },
];

function VentureRow({ v, i }: { v: typeof VENTURES[0]; i: number }) {
  const inner = (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.9, delay: 0.06 + i * 0.055, ease: [0.16, 1, 0.3, 1] }}
      whileHover="hovered"
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: `1px solid ${GOLD_FAINT}`,
        padding: 'clamp(0.5rem,1vh,0.75rem) 0',
        overflow: 'hidden',
        cursor: v.url ? 'pointer' : 'default',
      }}
    >
      <motion.div
        variants={{ hovered: { opacity: 1 }, initial: { opacity: 0 } }}
        initial="initial"
        style={{
          position: 'absolute', inset: '0 -4px',
          background: `linear-gradient(90deg, ${GOLD_FAINT} 0%, transparent 80%)`,
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

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: 0, position: 'relative' }}>
        <motion.span
          variants={{ hovered: { x: 5, color: 'rgba(212,180,100,0.92)' }, initial: { x: 0, color: 'rgba(245,240,232,0.88)' } }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: 'clamp(0.82rem,1vw,0.95rem)', fontFamily: 'var(--font-editorial)', fontWeight: 300, lineHeight: 1.2 }}
        >
          {v.name}
        </motion.span>
        <motion.span
          variants={{ hovered: { x: 5 }, initial: { x: 0 } }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: '0.62rem', color: 'rgba(240,237,232,0.35)', fontFamily: 'var(--font-editorial)', letterSpacing: '0.04em', lineHeight: 1.4 }}
        >
          {v.desc}
        </motion.span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexShrink: 0, marginLeft: '1.2rem', position: 'relative' }}>
        <span style={{ fontSize: '0.58rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: TAG_COLOR[v.tag], fontFamily: 'var(--font-editorial)' }}>
          {v.tag}
        </span>
        {v.url && (
          <motion.svg
            width="9" height="9" viewBox="0 0 12 12" fill="none"
            variants={{ hovered: { x: 2, y: -2, opacity: 0.8 }, initial: { x: 0, y: 0, opacity: 0.28 } }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <path d="M2 10L10 2M10 2H4M10 2V8" stroke={TEXT} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </motion.svg>
        )}
      </div>
    </motion.div>
  );

  return v.url ? (
    <a key={v.name} href={v.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>{inner}</a>
  ) : (
    <div key={v.name}>{inner}</div>
  );
}

export default function StoryEntrepreneur() {
  return (
    <section
      id="story"
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
                background: 'linear-gradient(100deg, #d4a84b 0%, #c8b89a 50%, #c8903a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Entrepreneur.
              </h2>
            </LineReveal>
          </div>

          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14" style={{ alignItems: 'stretch', minHeight: 0 }}>

            {/* LEFT — venture list */}
            <div className="lg:col-span-5 flex flex-col">
              <Reveal delay={0.08} direction="left">
                <p style={{
                  fontSize: 'clamp(0.82rem,1vw,0.95rem)',
                  lineHeight: 1.75,
                  color: 'rgba(240,237,232,0.55)',
                  fontFamily: 'var(--font-editorial)',
                  letterSpacing: '0.03em',
                }}>
                  7 ventures. 3 acquired. All bootstrapped.
                </p>
              </Reveal>

              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderTop: `1px solid ${GOLD_FAINT}`, marginTop: 'clamp(0.8rem,1.5vh,1.5rem)' }}>
                {VENTURES.map((v, i) => <VentureRow key={v.name} v={v} i={i} />)}
              </div>
            </div>

            {/* RIGHT — stat panel */}
            <div className="stat-panel-mobile-top lg:col-span-7 flex flex-col" style={{ borderTop: `1px solid ${GOLD_FAINT}`, flex: 1 }}>
              {STATS.map((s, i) => (
                <div key={s.n} style={{ display: 'flex', flex: 1 }}>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 1.0, delay: 0.08 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
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
                      cursor: 'default',
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
                  </motion.div>
                </div>
              ))}

              {/* Image */}
              <Reveal delay={0.25} direction="up" style={{ marginTop: 'clamp(0.8rem,1.5vh,1.5rem)' }}>
                <motion.div
                  whileHover="hovered"
                  style={{
                    position: 'relative',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    border: '1px solid rgba(248,248,248,0.07)',
                    height: 'clamp(140px,26vh,280px)',
                  }}
                >
                  <motion.img
                    src="/entrepreneur-bg.png"
                    alt="Esports arena"
                    variants={{ hovered: { scale: 1.035, filter: 'grayscale(0%) brightness(1.0)' }, initial: { scale: 1, filter: 'grayscale(20%) brightness(0.92)' } }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 25%', display: 'block' }}
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

            </div>

          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
