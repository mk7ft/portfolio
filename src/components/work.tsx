'use client';

import {
  SiPython, SiGithub, SiFigma, SiGooglecloud, SiNotion,
  SiCanva, SiHubspot, SiGoogleads, SiMeta, SiZapier, SiSalesforce, SiTiktok,
  SiInstagram, SiJira, SiVercel, SiObsstudio, SiDiscord, SiStripe, SiShopify,
  SiMailchimp, SiAnthropic, SiSemrush, SiApollographql, SiFacebook, SiSlack, SiOpenai,
} from 'react-icons/si';
import { FaDatabase, FaRobot, FaStore, FaBullseye, FaFunnelDollar, FaPaintBrush, FaLayerGroup } from 'react-icons/fa';
import { RiClapperboardFill, RiMicrosoftFill } from 'react-icons/ri';
import { TbBrandZoom } from 'react-icons/tb';

const COMPANIES = [
  {
    name: 'doublespeed.ai',
    role: 'gtm ops',
    desc: 'ai-powered growth infrastructure for startups.',
    tag: 'current',
    url: 'https://doublespeed.ai',
  },
  {
    name: 'jrvs',
    role: 'founder',
    desc: 'ai consulting and workflow agent.',
    tag: 'active',
    url: 'https://jrvs.pro',
  },
  {
    name: 'sprk',
    role: 'founder',
    desc: 'edtech platform for student success.',
    tag: 'active',
    url: 'https://sprk.co',
  },
  {
    name: 'aster',
    role: 'founder',
    desc: "women's health & wellness platform.",
    tag: 'active',
    url: 'https://aster.fit',
  },
];

const STATS = [
  { n: '17M+', label: 'visitors served',   sub: 'saudi red crescent - emt and translator ops' },
  { n: '#1',   label: 'of 40 sales reps',  sub: 'vivint - $150k+ closed in 90 days'           },
  { n: '50k+', label: 'customers managed', sub: 'aker & bekdash - $2.5M+ revenue processed'   },
];

const SKILLS = [
  { label: 'sql',                  icon: <FaDatabase size={11} />          },
  { label: 'python',               icon: <SiPython size={11} />            },
  { label: 'prompt eng.',          icon: <FaRobot size={11} />             },
  { label: 'figma',                icon: <SiFigma size={11} />             },
  { label: 'photoshop',            icon: <FaPaintBrush size={11} />        },
  { label: 'github',               icon: <SiGithub size={11} />            },
  { label: 'google cloud',         icon: <SiGooglecloud size={11} />       },
  { label: 'notion',               icon: <SiNotion size={11} />            },
  { label: 'canva',                icon: <SiCanva size={11} />             },
  { label: 'hubspot',              icon: <SiHubspot size={11} />           },
  { label: 'google ads',           icon: <SiGoogleads size={11} />         },
  { label: 'meta ads',             icon: <SiMeta size={11} />              },
  { label: 'e-commerce',           icon: <FaStore size={11} />             },
  { label: 'zapier',               icon: <SiZapier size={11} />            },
  { label: 'salesforce',           icon: <SiSalesforce size={11} />        },
  { label: 'content creation',     icon: <RiClapperboardFill size={11} />  },
  { label: 'tiktok',               icon: <SiTiktok size={11} />            },
  { label: 'instagram',            icon: <SiInstagram size={11} />         },
  { label: 'clay',                 icon: <FaBullseye size={11} />          },
  { label: 'apollo',               icon: <SiApollographql size={11} />     },
  { label: 'zoominfo',             icon: <TbBrandZoom size={11} />         },
  { label: 'jira',                 icon: <SiJira size={11} />              },
  { label: 'vercel',               icon: <SiVercel size={11} />            },
  { label: 'obs',                  icon: <SiObsstudio size={11} />         },
  { label: 'discord',              icon: <SiDiscord size={11} />           },
  { label: 'stripe',               icon: <SiStripe size={11} />            },
  { label: 'shopify',              icon: <SiShopify size={11} />           },
  { label: 'mailchimp',            icon: <SiMailchimp size={11} />         },
  { label: 'claude',               icon: <SiAnthropic size={11} />         },
  { label: 'semrush',              icon: <SiSemrush size={11} />           },
  { label: 'facebook',             icon: <SiFacebook size={11} />          },
  { label: 'microsoft',            icon: <RiMicrosoftFill size={11} />     },
  { label: 'attio',                icon: <FaDatabase size={11} />          },
  { label: 'slack',                icon: <SiSlack size={11} />             },
  { label: 'claude code',          icon: <SiAnthropic size={11} />         },
  { label: 'chatgpt',              icon: <SiOpenai size={11} />            },
  { label: 'influencer marketing', icon: <FaLayerGroup size={11} />        },
  { label: 'sales funnels',        icon: <FaFunnelDollar size={11} />      },
  { label: 'ui/ux',                icon: <FaPaintBrush size={11} />        },
  { label: 'ai ugc',               icon: <FaRobot size={11} />             },
];

const SECTION_STYLE = {
  padding: 'clamp(4rem,8vh,7rem) clamp(1.5rem,6vw,5rem)',
  maxWidth: '1100px',
  margin: '0 auto',
};

const LABEL_STYLE: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: '0.62rem',
  letterSpacing: '0.06em',
  color: 'rgba(237,237,237,0.25)',
  marginBottom: 'clamp(2rem,4vh,3.5rem)',
  display: 'block',
};

const DIVIDER = (
  <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', margin: '0 clamp(1.5rem,6vw,5rem)' }} />
);

export default function Work() {
  return (
    <section id="work">

      {/* ── Companies ── */}
      <div style={SECTION_STYLE}>
        <span style={LABEL_STYLE}>work</span>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 230px), 1fr))',
          gap: '1px',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '8px',
          overflow: 'hidden',
        }}>
          {COMPANIES.map((co) => (
            <a
              key={co.name}
              href={co.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                padding: 'clamp(1.4rem,2.5vw,2rem)',
                background: '#0e0e0e',
                textDecoration: 'none',
                borderRight: '1px solid rgba(255,255,255,0.07)',
                transition: 'background 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#141414')}
              onMouseLeave={e => (e.currentTarget.style.background = '#0e0e0e')}
            >
              {/* Top */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
                <span style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: 'clamp(1rem,1.3vw,1.2rem)',
                  fontWeight: 300,
                  color: '#ededed',
                  letterSpacing: '-0.01em',
                }}>
                  {co.name}
                </span>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.55rem',
                  letterSpacing: '0.04em',
                  color: co.tag === 'current' ? '#ededed' : 'rgba(237,237,237,0.35)',
                  border: `1px solid ${co.tag === 'current' ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)'}`,
                  padding: '0.18rem 0.5rem',
                  borderRadius: '3px',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}>
                  {co.tag}
                </span>
              </div>

              {/* Role */}
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.65rem',
                letterSpacing: '0.04em',
                color: 'rgba(237,237,237,0.3)',
              }}>
                {co.role}
              </span>

              {/* Desc */}
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.82rem',
                color: 'rgba(237,237,237,0.45)',
                lineHeight: 1.6,
                flex: 1,
              }}>
                {co.desc}
              </p>

              {/* Arrow */}
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none" style={{ opacity: 0.25, alignSelf: 'flex-end' }}>
                <path d="M2 10L10 2M10 2H4M10 2v6" stroke="#ededed" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          ))}
        </div>
      </div>

      {DIVIDER}

      {/* ── By the numbers ── */}
      <div style={SECTION_STYLE}>
        <span style={LABEL_STYLE}>by the numbers</span>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 'clamp(1.5rem,4vw,3rem)',
        }}>
          {STATS.map((s) => (
            <div key={s.n} style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 'clamp(1.2rem,2.5vh,2rem)' }}>
              <div style={{
                fontFamily: 'var(--font-editorial)',
                fontSize: 'clamp(2.2rem,5vw,4.5rem)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: '#ededed',
                lineHeight: 0.9,
                letterSpacing: '-0.03em',
                marginBottom: '0.8rem',
              }}>
                {s.n}
              </div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.75rem',
                color: 'rgba(237,237,237,0.6)',
                letterSpacing: '0.04em',
                marginBottom: '0.3rem',
              }}>
                {s.label}
              </div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.65rem',
                color: 'rgba(237,237,237,0.25)',
                letterSpacing: '0.02em',
                lineHeight: 1.5,
              }}>
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      {DIVIDER}

      {/* ── Skills ── */}
      <div style={SECTION_STYLE}>
        <span style={LABEL_STYLE}>technical skills</span>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {SKILLS.map((s) => (
            <div
              key={s.label}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.32rem',
                padding: '0.28rem 0.65rem',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '3px',
                fontFamily: 'var(--font-display)',
                fontSize: '0.62rem',
                letterSpacing: '0.06em',
                color: 'rgba(237,237,237,0.38)',
                transition: 'border-color 0.12s, color 0.12s',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.22)';
                (e.currentTarget as HTMLElement).style.color = 'rgba(237,237,237,0.75)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                (e.currentTarget as HTMLElement).style.color = 'rgba(237,237,237,0.38)';
              }}
            >
              {s.icon}
              {s.label}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
