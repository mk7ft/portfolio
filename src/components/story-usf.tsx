'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { LineReveal, Reveal, SectionReveal } from '@/components/ui/motion';
import { GOLD, GOLD_DIM, GOLD_FAINT, CHAPTER_GRADIENT } from '@/lib/tokens';
import {
  SiPython, SiGithub, SiFigma, SiAdobephotoshop, SiGooglecloud, SiNotion,
  SiCanva, SiHubspot, SiGoogleads, SiMeta, SiZapier, SiSalesforce, SiTiktok,
  SiInstagram, SiJira, SiVercel, SiObsstudio, SiDiscord, SiStripe, SiShopify,
  SiMailchimp, SiAnthropic, SiSemrush, SiApollographql, SiFacebook, SiSlack, SiOpenai,
} from 'react-icons/si';
import { FaDatabase, FaRobot, FaStore, FaBullseye, FaFunnelDollar, FaPaintBrush, FaLayerGroup } from 'react-icons/fa';
import { RiClapperboardFill, RiMicrosoftFill } from 'react-icons/ri';
import { TbBrandZoom } from 'react-icons/tb';

const USF_ACHIEVEMENTS = [
  { label: 'Orientation Leader',  detail: 'Selected from 250+ applicants', stat: '250+' },
  { label: 'Peer Advisor Leader', detail: '#1 university-wide conversions', stat: '#1'   },
  { label: 'MSC Advisory Board',  detail: 'New Student Connections',        stat: 'Board' },
  { label: 'Students Guided',     detail: 'As OL + PAL cohort',             stat: '5k+'  },
];

const BEYOND = [
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        <path d="M2 12h20"/>
      </svg>
    ),
    title: 'Pentalingual',
    sub: 'Arabic · Hindi · Urdu · English · Spanish',
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4"/>
        <path d="M3 20c0-4 3.6-7 9-7s9 3 9 7"/>
      </svg>
    ),
    title: 'LinkedIn Creator',
    sub: '15,000+ followers',
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="2"/>
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
      </svg>
    ),
    title: 'Semi-Pro Soccer',
    sub: 'Competitive Athlete',
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: 'Technical Builder',
    sub: 'AI · Python · Figma · GitHub',
  },
];

const SKILLS: { label: string; icon: React.ReactNode }[] = [
  { label: 'SQL',              icon: <FaDatabase size={12} />          },
  { label: 'Python',           icon: <SiPython size={12} />            },
  { label: 'Prompt Eng.',      icon: <FaRobot size={12} />             },
  { label: 'Figma',            icon: <SiFigma size={12} />             },
  { label: 'Photoshop',        icon: <SiAdobephotoshop size={12} />    },
  { label: 'GitHub',           icon: <SiGithub size={12} />            },
  { label: 'Google Cloud',     icon: <SiGooglecloud size={12} />       },
  { label: 'Notion',           icon: <SiNotion size={12} />            },
  { label: 'Canva',            icon: <SiCanva size={12} />             },
  { label: 'HubSpot',          icon: <SiHubspot size={12} />           },
  { label: 'Google Ads',       icon: <SiGoogleads size={12} />         },
  { label: 'Meta Ads',         icon: <SiMeta size={12} />              },
  { label: 'E-Commerce',       icon: <FaStore size={12} />             },
  { label: 'Zapier',           icon: <SiZapier size={12} />            },
  { label: 'Salesforce',       icon: <SiSalesforce size={12} />        },
  { label: 'Content Creation', icon: <RiClapperboardFill size={12} />  },
  { label: 'TikTok',           icon: <SiTiktok size={12} />            },
  { label: 'Instagram',        icon: <SiInstagram size={12} />         },
  { label: 'Clay',             icon: <FaBullseye size={12} />          },
  { label: 'Apollo',           icon: <SiApollographql size={12} />     },
  { label: 'ZoomInfo',         icon: <TbBrandZoom size={12} />         },
  { label: 'Jira',             icon: <SiJira size={12} />              },
  { label: 'Vercel',           icon: <SiVercel size={12} />            },
  { label: 'OBS',              icon: <SiObsstudio size={12} />         },
  { label: 'CapCut',           icon: <RiClapperboardFill size={12} />  },
  { label: 'Discord',          icon: <SiDiscord size={12} />           },
  { label: 'Stripe',           icon: <SiStripe size={12} />            },
  { label: 'Shopify',          icon: <SiShopify size={12} />           },
  { label: 'Mailchimp',        icon: <SiMailchimp size={12} />         },
  { label: 'Claude',           icon: <SiAnthropic size={12} />         },
  { label: 'SEMrush',          icon: <SiSemrush size={12} />           },
  { label: 'Facebook',         icon: <SiFacebook size={12} />          },
  { label: 'Microsoft',        icon: <RiMicrosoftFill size={12} />     },
  { label: 'Attio',            icon: <FaDatabase size={12} />          },
  { label: 'Slack',            icon: <SiSlack size={12} />             },
  { label: 'Claude Code',      icon: <SiAnthropic size={12} />         },
  { label: 'ChatGPT',          icon: <SiOpenai size={12} />            },
  { label: 'Influencer Marketing', icon: <FaLayerGroup size={12} />     },
  { label: 'Sales Funnels',    icon: <FaFunnelDollar size={12} />      },
  { label: 'UI/UX',            icon: <FaPaintBrush size={12} />        },
  { label: 'AI UGC',           icon: <FaRobot size={12} />             },
];

// Ripples active highlight across each pill on inView, then resets.
function useSkillWave(count: number) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView       = useInView(containerRef, { once: true, margin: '-60px' });
  const [activeIdx, setActiveIdx] = useState<number>(-1);
  const ranRef = useRef(false);

  useEffect(() => {
    if (!inView || ranRef.current) return;
    ranRef.current = true;

    let i = 0;
    let timer: ReturnType<typeof setTimeout>;

    function tick() {
      setActiveIdx(i++);
      if (i < count) {
        timer = setTimeout(tick, 150);
      } else {
        timer = setTimeout(() => setActiveIdx(-1), 400);
      }
    }

    timer = setTimeout(tick, 800);
    return () => clearTimeout(timer);
  }, [inView, count]);

  return { activeIdx, containerRef };
}

export default function StoryUSF() {
  const { activeIdx, containerRef: skillsRef } = useSkillWave(SKILLS.length);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  return (
    <section
      id="chapter-4"
      className="relative overflow-hidden"
      style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column' }}
    >
      <div
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col"
        style={{ flex: 1, padding: 'clamp(2.5vh,4vh,6vh) clamp(1.2rem,5vw,5rem) clamp(2.5vh,4vh,5vh)' }}
      >
        <SectionReveal>

          <Reveal direction="none" className="flex items-center gap-4 mb-3">
            <span style={{ fontSize: '0.62rem', letterSpacing: '0.5em', textTransform: 'uppercase', color: GOLD_DIM, fontFamily: 'var(--font-display)' }}>Chapter IV</span>
            <span className="h-px w-12" style={{ background: `linear-gradient(90deg, ${GOLD_DIM}, transparent)` }} />
            <span style={{ fontSize: '0.62rem', letterSpacing: '0.15em', color: 'rgba(200,144,58,0.22)', fontFamily: 'var(--font-display)' }}>2025 - Present</span>
          </Reveal>

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
                Student.
              </h2>
            </LineReveal>
          </div>

          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14" style={{ alignItems: 'stretch', minHeight: 0 }}>

            {/* LEFT — photo + degree + achievements */}
            <div className="lg:col-span-5 flex flex-col">

              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0, marginBottom: '1.5rem' }}>
                <Reveal delay={0.04} direction="left" className="flex-1" style={{ display: 'flex', flexDirection: 'column', minHeight: 0 }}>
                  <motion.div
                    whileHover="hovered"
                    style={{
                      position: 'relative',
                      borderRadius: '6px',
                      overflow: 'hidden',
                      border: '1px solid rgba(248,248,248,0.07)',
                      flex: 1,
                      minHeight: '200px',
                    }}
                  >
                    <motion.img
                      src="/awards.jpg"
                      alt="Muhammad Kamil - #1 Peer Advisor Award"
                      variants={{
                        hovered: { scale: 1.035, filter: 'grayscale(0%) brightness(1.0)' },
                        initial: { scale: 1, filter: 'grayscale(20%) brightness(0.88)' },
                      }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      style={{
                        position: 'absolute', inset: 0,
                        width: '100%', height: '100%',
                        objectFit: 'cover', objectPosition: 'center top',
                        display: 'block',
                      }}
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
                  fontFamily: 'var(--font-display)',
                }}>
                  #1 Peer Advisor Award
                </span>
              </div>

              <Reveal delay={0.08} direction="left">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(200,144,58,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3.33 1.67 8.67 1.67 12 0v-5"/>
                  </svg>
                  <a
                    href="https://www.usf.edu/ai-cybersecurity-computing/index.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.68rem', letterSpacing: '0.08em', color: '#ffffff', fontFamily: 'var(--font-display)', textDecoration: 'none' }}
                  >
                    B.S. Information Technology @ University of South Florida
                  </a>
                </div>
              </Reveal>

              <div style={{ borderTop: `1px solid ${GOLD_FAINT}`, marginTop: 'clamp(0.8rem,1.5vh,1.5rem)' }}>
                {USF_ACHIEVEMENTS.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-20px' }}
                    transition={{ duration: 0.85, delay: 0.08 + idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
                    whileHover="hovered"
                    style={{
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: 'clamp(0.55rem,1vh,0.8rem) 0',
                      borderBottom: `1px solid ${GOLD_FAINT}`,
                      overflow: 'visible',
                      cursor: 'default',
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
                      variants={{ hovered: { x: 4 }, initial: { x: 0 } }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: 0, position: 'relative' }}
                    >
                      <span style={{ fontSize: 'clamp(0.82rem,1vw,0.95rem)', color: 'rgba(245,240,232,0.88)', fontFamily: 'var(--font-editorial)', fontWeight: 300, lineHeight: 1.2 }}>
                        {item.label}
                      </span>
                      <span style={{ fontSize: '0.62rem', color: 'rgba(240,237,232,0.35)', fontFamily: 'var(--font-display)', letterSpacing: '0.04em', lineHeight: 1.4 }}>
                        {item.detail}
                      </span>
                    </motion.div>

                    <div style={{ flexShrink: 0, marginLeft: '1.5rem', overflow: 'visible', position: 'relative', padding: '0 4px' }}>
                      <motion.span
                        variants={{ hovered: { scale: 1.06, filter: 'brightness(1.3)' }, initial: { scale: 1, filter: 'brightness(1)' } }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                          fontSize: 'clamp(1.1rem,2.5vw,1.8rem)',
                          fontFamily: 'var(--font-editorial)',
                          fontWeight: 300,
                          fontStyle: 'italic',
                          background: `linear-gradient(120deg, ${GOLD} 0%, rgba(200,144,58,0.5) 100%)`,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          display: 'inline-block',
                          whiteSpace: 'nowrap',
                          transformOrigin: 'center center',
                        }}
                      >
                        {item.stat}
                      </motion.span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT — beyond résumé + skills */}
            <div className="stat-panel-mobile-top lg:col-span-7 flex flex-col gap-0" style={{ borderTop: `1px solid ${GOLD_FAINT}` }}>

              {/* Beyond the résumé */}
              <div style={{ borderBottom: `1px solid ${GOLD_FAINT}`, paddingBottom: 'clamp(1.25rem,2.5vh,2.5rem)', paddingTop: 'clamp(1.25rem,2.5vh,2.5rem)' }}>
                <Reveal direction="none" delay={0.06}>
                  <span style={{ fontSize: '0.58rem', letterSpacing: '0.45em', textTransform: 'uppercase', display: 'block', marginBottom: '0.9rem', color: 'rgba(200,144,58,0.38)', fontFamily: 'var(--font-display)' }}>
                    Beyond the résumé
                  </span>
                </Reveal>
                <div>
                  {BEYOND.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-20px' }}
                      transition={{ duration: 0.95, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                      whileHover="hovered"
                      style={{
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: 'clamp(0.5rem,1vh,0.7rem) 0',
                        borderBottom: `1px solid ${GOLD_FAINT}`,
                        overflow: 'visible',
                        cursor: 'default',
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

                      <div className="flex items-center gap-3" style={{ position: 'relative' }}>
                        <motion.span
                          variants={{ hovered: { scale: 1.18, color: GOLD }, initial: { scale: 1, color: 'rgba(200,144,58,0.7)' } }}
                          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                          style={{ display: 'flex', alignItems: 'center', flexShrink: 0, overflow: 'visible' }}
                        >
                          {item.icon}
                        </motion.span>
                        <motion.span
                          variants={{ hovered: { x: 4, color: 'rgba(245,240,232,1)' }, initial: { x: 0, color: 'rgba(245,240,232,0.88)' } }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          style={{ fontSize: 'clamp(0.82rem,1vw,0.95rem)', fontFamily: 'var(--font-editorial)', fontWeight: 300 }}
                        >
                          {item.title}
                        </motion.span>
                      </div>

                      <motion.span
                        variants={{ hovered: { x: -3 }, initial: { x: 0 } }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        style={{ fontSize: '0.6rem', color: 'rgba(240,237,232,0.38)', fontFamily: 'var(--font-display)', letterSpacing: '0.04em', flexShrink: 0, marginLeft: '1rem', textAlign: 'right', position: 'relative', whiteSpace: 'nowrap', overflow: 'visible' }}
                      >
                        {item.sub}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Technical Skills */}
              <div style={{ paddingTop: 'clamp(1.25rem,2.5vh,2.5rem)' }}>
                <Reveal direction="none" delay={0.05}>
                  <span style={{ fontSize: '0.58rem', letterSpacing: '0.45em', textTransform: 'uppercase', display: 'block', marginBottom: '1rem', color: 'rgba(200,144,58,0.38)', fontFamily: 'var(--font-display)' }}>
                    Technical Skills
                  </span>
                </Reveal>

                <div ref={skillsRef} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.38rem' }}>
                  {SKILLS.map((skill, i) => {
                    const isLit = activeIdx === i || hoveredSkill === i;
                    return (
                      <span
                        key={skill.label}
                        onMouseEnter={() => setHoveredSkill(i)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        style={{
                          fontSize: 'clamp(0.65rem,0.8vw,0.78rem)',
                          letterSpacing: '0.02em',
                          fontFamily: 'var(--font-display)',
                          color: isLit ? 'rgba(245,240,232,0.98)' : 'rgba(255,255,255,0.68)',
                          border: `1px solid ${isLit ? 'rgba(200,144,58,0.5)' : 'rgba(200,184,154,0.12)'}`,
                          borderRadius: '2px',
                          padding: '0.35rem 0.65rem',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.32rem',
                          cursor: 'default',
                          backgroundColor: isLit ? 'rgba(200,144,58,0.1)' : 'transparent',
                          boxShadow: isLit ? '0 0 14px rgba(200,144,58,0.2), 0 3px 12px rgba(0,0,0,0.3)' : 'none',
                          transform: isLit ? 'translateY(-2px)' : 'translateY(0)',
                          transition: 'color 0.18s ease, border-color 0.18s ease, background-color 0.18s ease, box-shadow 0.18s ease, transform 0.18s ease',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <span style={{ color: isLit ? GOLD : 'rgba(200,144,58,0.65)', display: 'flex', alignItems: 'center', flexShrink: 0, transition: 'color 0.18s ease' }}>
                          {skill.icon}
                        </span>
                        {skill.label}
                      </span>
                    );
                  })}
                  {/* Phantom spacers — force last row to left-align */}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <span
                      key={`spacer-${i}`}
                      aria-hidden="true"
                      style={{ padding: '0.35rem 0.65rem', fontSize: 'clamp(0.65rem,0.8vw,0.78rem)', visibility: 'hidden', pointerEvents: 'none', whiteSpace: 'nowrap' }}
                    >
                      placeholder
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </SectionReveal>
      </div>
    </section>
  );
}
