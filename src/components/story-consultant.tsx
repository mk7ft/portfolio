'use client';

import { motion } from 'framer-motion';
import { LineReveal, Reveal, SectionReveal } from '@/components/ui/motion';
import { GOLD, GOLD_DIM, GOLD_FAINT, TEXT, CHAPTER_GRADIENT } from '@/lib/tokens';
import { useCountUp } from '@/hooks/use-count-up';

function AnimatedStat({ value, style }: { value: string; style: React.CSSProperties }) {
  const { ref, display } = useCountUp(value, 1800);
  return <motion.span ref={ref as React.RefObject<HTMLElement>} style={style}>{display}</motion.span>;
}

const ORGS = [
  { name: 'TSM',                desc: '#1 most valued esports company',                       url: 'https://www.tsm.gg'           },
  { name: 'Team Liquid',        desc: '$45M+ prize winnings & 20+ teams',                     url: 'https://www.teamliquid.com'   },
  { name: 'FaZe Clan',          desc: 'First publicly traded esports organization',            url: 'https://www.fazeclan.com'     },
  { name: '100 Thieves',        desc: 'Billion-dollar esports, streetwear & content company', url: 'https://www.100thieves.com'   },
  { name: 'Spacestation Gaming', desc: 'Rainbow Six world champions',                         url: 'https://www.spacestation.com' },
];

const STATS = [
  { n: '01', stat: '17',    unit: 'Years Old When I Started Consulting', sub: '3 years to the #1 org in the world',        label: 'Age',   delay: 0.10 },
  { n: '02', stat: '1.5M+', unit: 'Combined Community Managed',          sub: 'Across 5 tier-1 esports orgs',              label: 'Reach', delay: 0.20 },
  { n: '03', stat: '4+',    unit: 'Major Media Outlet Recognitions',     sub: 'Business Insider · Forbes · ESPN · Dexerto', label: 'Press', delay: 0.30 },
];

export default function StoryConsultant() {
  return (
    <section
      id="chapter-2"
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
                Consultant.
              </h2>
            </LineReveal>
          </div>

          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14" style={{ alignItems: 'stretch', minHeight: 0 }}>

            {/* LEFT — body + org list */}
            <div className="lg:col-span-5 flex flex-col">
              <Reveal delay={0.08} direction="left">
                <p style={{
                  fontSize: 'clamp(0.82rem,1vw,0.95rem)',
                  lineHeight: 1.75,
                  color: 'rgba(240,237,232,0.55)',
                  fontFamily: 'var(--font-editorial)',
                  letterSpacing: '0.03em',
                  marginBottom: 'clamp(1rem,2vh,2rem)',
                }}>
                  Started at 17. Ended up at the #1 esports company in the world by 20.
                </p>
              </Reveal>

              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderTop: `1px solid ${GOLD_FAINT}`, flex: 1 }}>
                {ORGS.map((org, i) => (
                  <a key={org.name} href={org.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', flex: 1 }}>
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
                        cursor: 'pointer',
                        flex: 1,
                        width: '100%',
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
                          {org.name}
                        </motion.span>
                        <motion.span
                          variants={{ hovered: { x: 5 }, initial: { x: 0 } }}
                          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                          style={{ fontSize: '0.62rem', color: 'rgba(240,237,232,0.35)', fontFamily: 'var(--font-editorial)', letterSpacing: '0.04em', lineHeight: 1.4 }}
                        >
                          {org.desc}
                        </motion.span>
                      </div>

                      <motion.svg
                        width="9" height="9" viewBox="0 0 12 12" fill="none"
                        variants={{ hovered: { x: 2, y: -2, opacity: 0.8 }, initial: { x: 0, y: 0, opacity: 0.25 } }}
                        transition={{ duration: 0.22, ease: 'easeOut' }}
                        style={{ flexShrink: 0, marginLeft: '1rem', position: 'relative' }}
                      >
                        <path d="M2 10L10 2M10 2H4M10 2V8" stroke={TEXT} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </motion.svg>
                    </motion.div>
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT — stats + image */}
            <div className="stat-panel-mobile-top lg:col-span-7 flex flex-col" style={{ flex: 1 }}>

              {/* Stats */}
              <div style={{ borderTop: `1px solid ${GOLD_FAINT}`, display: 'flex', flexDirection: 'column' }}>
                {STATS.map((s) => (
                  <div key={s.n} style={{ display: 'flex', flex: 1 }}>
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-30px' }}
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
                        minHeight: 'clamp(70px,9vh,130px)',
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
              </div>

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
                      src="/src-consultant3.png"
                      alt="Esports arena"
                      variants={{ hovered: { scale: 1.035, filter: 'grayscale(0%) brightness(1.0)' }, initial: { scale: 1, filter: 'grayscale(20%) brightness(0.92)' } }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 65%', display: 'block' }}
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
