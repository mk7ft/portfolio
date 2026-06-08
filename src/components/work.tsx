'use client';

const COMPANIES = [
  {
    name: 'doublespeed.ai',
    role: 'gtm ops',
    desc: 'ai content and intelligence automation.',
    tag: 'current',
    url: 'https://doublespeed.ai',
  },
  {
    name: 'sprk',
    role: 'advisor',
    desc: 'ai edtech software for students.',
    tag: 'active',
    url: 'https://sprk.co',
  },
  {
    name: 'aster',
    role: 'advisor',
    desc: "ai women's health and wellness app.",
    tag: 'active',
    url: 'https://aster.fit',
  },
  {
    name: 'jrvs',
    role: 'advisor',
    desc: 'ai consulting and workflow agent.',
    tag: 'active',
    url: 'https://jrvs.pro',
  },
];

const STATS = [
  { n: '17M+', label: 'visitors served',   sub: 'saudi red crescent - emt and translator ops' },
  { n: '#1',   label: 'of 40 sales reps',  sub: 'vivint - $150k+ closed in 90 days'           },
  { n: '50k+', label: 'customers managed', sub: 'aker & bekdash - $3M+ revenue managed'   },
];

const PAD = 'clamp(1.5rem,6vw,5rem)';
const MAX = '1100px';

const LABEL_STYLE: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: '0.72rem',
  letterSpacing: '0.06em',
  color: 'var(--text-25)',
  marginBottom: 'clamp(1.4rem,2.5vh,2.2rem)',
  display: 'block',
};

export default function Work() {
  return (
    <section id="work">
      <div style={{ maxWidth: MAX, margin: '0 auto', padding: `clamp(3rem,6vh,5rem) ${PAD} clamp(2.5rem,5vh,4rem)` }}>
        <span style={LABEL_STYLE}>work</span>

        {/* Company cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 230px), 1fr))',
          gap: '1px',
          border: '1px solid var(--divider-7)',
          borderRadius: '8px',
          overflow: 'hidden',
          marginBottom: 'clamp(2.5rem,5vh,4rem)',
        }}>
          {COMPANIES.map((co) => (
            <a
              key={co.name}
              href={co.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-work-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
                padding: 'clamp(1.2rem,2vw,1.8rem)',
                textDecoration: 'none',
                borderRight: '1px solid var(--divider-7)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
                <span style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: 'clamp(1.05rem,1.4vw,1.3rem)',
                  fontWeight: 300,
                  color: 'var(--text)',
                  letterSpacing: '-0.01em',
                }}>
                  {co.name}
                </span>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.04em',
                  color: co.tag === 'current' ? 'var(--green)' : 'var(--text-35)',
                  border: `1px solid ${co.tag === 'current' ? 'var(--green-dim)' : 'var(--divider-10)'}`,
                  padding: '0.2rem 0.55rem',
                  borderRadius: '3px',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}>
                  {co.tag}
                </span>
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', letterSpacing: '0.04em', color: 'var(--text-45)', fontWeight: 500 }}>
                {co.role}
              </span>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.82rem', color: 'var(--text-60)', lineHeight: 1.55, flex: 1, margin: 0 }}>
                {co.desc}
              </p>
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none" style={{ opacity: 0.3, alignSelf: 'flex-end' }}>
                <path d="M2 10L10 2M10 2H4M10 2v6" stroke="var(--text)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          ))}
        </div>

        {/* Stats row */}
        <div className="stats-grid" style={{ display: 'grid', gap: 'clamp(1rem,3vw,2.5rem)' }}>
          {STATS.map((s) => (
            <div key={s.n} style={{ borderTop: '1px solid var(--divider-8)', paddingTop: 'clamp(1rem,2vh,1.5rem)' }}>
              <div style={{
                fontFamily: 'var(--font-editorial)',
                fontSize: 'clamp(2rem,4.5vw,4rem)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'var(--green)',
                lineHeight: 0.9,
                letterSpacing: '-0.03em',
                marginBottom: '0.6rem',
              }}>
                {s.n}
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.82rem', color: 'var(--text-60)', fontWeight: 500, letterSpacing: '0.02em', marginBottom: '0.25rem' }}>
                {s.label}
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.72rem', color: 'var(--text-40)', letterSpacing: '0.01em', lineHeight: 1.5 }}>
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
