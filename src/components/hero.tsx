'use client';

import ThemeToggle from './theme-toggle';

const PAD = 'clamp(1.5rem,6vw,5rem)';
const MAX = '1100px';

const PARTNERS = [
  { name: 'Forbes',           url: 'https://forbes.com'          },
  { name: 'ESPN',             url: 'https://espn.com'            },
  { name: 'Business Insider', url: 'https://businessinsider.com' },
  { name: 'Dexerto',          url: 'https://dexerto.com'         },
];

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--bg)',
        transition: 'background-color 0.25s ease',
      }}
    >
      {/* Nav — border full-width, content constrained to match other sections */}
      <div style={{ borderBottom: '1px solid var(--divider)' }}>
        <nav style={{
          maxWidth: MAX,
          margin: '0 auto',
          padding: `clamp(1.4rem,3vh,2.2rem) ${PAD}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}>
          <a
            href="https://mk7ft.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-editorial)',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(1rem,1.4vw,1.25rem)',
              color: 'var(--green)',
              letterSpacing: '-0.01em',
              textDecoration: 'none',
            }}
          >
            MK7
          </a>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <a
              href="https://linkedin.com/in/mk7ft"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-text-bright"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.72rem',
                letterSpacing: '0.04em',
                textDecoration: 'none',
              }}
            >
              LinkedIn
            </a>
            <ThemeToggle />
          </div>
        </nav>
      </div>

      {/* Main — same maxWidth + PAD as every other section */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: MAX,
        width: '100%',
        margin: '0 auto',
        padding: `clamp(1.5rem,4vh,3.5rem) ${PAD}`,
      }}>

        {/* Role */}
        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: '0.7rem',
          letterSpacing: '0.06em',
          color: 'var(--text-35)',
          marginBottom: 'clamp(1rem,2vh,1.8rem)',
        }}>
          current: gtm @{' '}
          <a
            href="https://doublespeed.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-text-bright"
            style={{ textDecoration: 'none', letterSpacing: '0.06em' }}
          >
            doublespeed
          </a>
        </p>

        {/* Name */}
        <h1 style={{
          fontFamily: 'var(--font-editorial)',
          fontWeight: 300,
          fontSize: 'clamp(3.8rem,10vw,11rem)',
          lineHeight: 0.88,
          letterSpacing: '-0.04em',
          color: 'var(--text)',
          marginBottom: '0.06em',
        }}>
          Muhammad
        </h1>
        <h1 style={{
          fontFamily: 'var(--font-editorial)',
          fontWeight: 300,
          fontSize: 'clamp(3.8rem,10vw,11rem)',
          lineHeight: 0.88,
          letterSpacing: '-0.04em',
          fontStyle: 'italic',
          color: 'var(--text)',
          marginBottom: 'clamp(1.5rem,3vh,2.5rem)',
        }}>
          Kamil.
        </h1>

        {/* Tagline */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.55rem',
          marginBottom: 'clamp(1.8rem,3.5vh,3rem)',
        }}>
          {[
            'led extraordinary ventures at unreasonable ages in media and gaming.',
            'moved to the states and obsessively studied ai and content creation.',
            'now i run growth and product at venture-backed startups (a16z + yc).',
          ].map(line => (
            <p key={line} style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontSize: 'clamp(0.85rem,1.1vw,1rem)',
              color: 'var(--text-38)',
              lineHeight: 1.4,
              letterSpacing: '0.01em',
              margin: 0,
            }}>
              {line}
            </p>
          ))}
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
          <a
            href="https://drive.google.com/file/d/11iyZC-HZXZPrOEiP8cf4sAi-jgPyimob/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-opacity"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.75rem',
              background: 'var(--green)',
              color: '#fff',
              fontFamily: 'var(--font-display)',
              fontSize: '0.72rem',
              letterSpacing: '0.04em',
              fontWeight: 600,
              borderRadius: '4px',
              textDecoration: 'none',
            }}
          >
            download résumé
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
              <path d="M6 1v7M3 6l3 3 3-3M2 11h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <a
            href="#contact"
            className="hover-contact-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.75rem',
              border: '1px solid',
              fontFamily: 'var(--font-display)',
              fontSize: '0.72rem',
              letterSpacing: '0.04em',
              borderRadius: '4px',
              textDecoration: 'none',
            }}
          >
            book a call
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
              <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Partners — border full-width, content constrained */}
      <div style={{ borderTop: '1px solid var(--divider)' }}>
        <div style={{
          maxWidth: MAX,
          margin: '0 auto',
          padding: `clamp(1.2rem,2.5vh,2rem) ${PAD}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.6rem',
            letterSpacing: '0.06em',
            color: 'var(--text-20)',
          }}>
            as seen in
          </span>
          <div style={{ display: 'flex', gap: 'clamp(1.5rem,4vw,3.5rem)', flexWrap: 'wrap', alignItems: 'center' }}>
            {PARTNERS.map(p => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-partner-link"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.04em',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                }}
              >
                {p.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
