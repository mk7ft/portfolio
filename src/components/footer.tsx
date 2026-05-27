'use client';

import { useEffect, useRef } from 'react';

export default function Footer() {
  const calLoaded = useRef(false);

  useEffect(() => {
    if (calLoaded.current) return;
    calLoaded.current = true;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function (C, A, L) {
        let p = function (a, ar) { a.q.push(ar); };
        let d = C.document;
        C.Cal = C.Cal || function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () { p(api, arguments); };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
      })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", "meet", {origin:"https://app.cal.com"});
      Cal.ns.meet("inline", {
        elementOrSelector: "#my-cal-inline-meet",
        config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"auto"},
        calLink: "mk7ft/meet",
      });
      Cal.ns.meet("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    `;
    document.head.appendChild(script);
  }, []);

  return (
    <section id="contact" style={{ background: '#0a0a0a' }}>
      <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: 'clamp(4.5rem,9vh,8rem) clamp(1.5rem,6vw,5rem)',
      }}>

        <h2 style={{
          fontFamily: 'var(--font-editorial)',
          fontWeight: 300,
          fontSize: 'clamp(3rem,8vw,8.5rem)',
          lineHeight: 0.88,
          letterSpacing: '-0.04em',
          color: '#ededed',
          marginBottom: '0.06em',
        }}>
          building?
        </h2>
        <h2 style={{
          fontFamily: 'var(--font-editorial)',
          fontWeight: 300,
          fontSize: 'clamp(3rem,8vw,8.5rem)',
          lineHeight: 0.88,
          letterSpacing: '-0.04em',
          fontStyle: 'italic',
          color: 'rgba(237,237,237,0.4)',
          marginBottom: 'clamp(3rem,6vh,5rem)',
        }}>
          let&apos;s chat.
        </h2>

        {/* Cal.com inline embed */}
        <div
          id="my-cal-inline-meet"
          style={{ width: '100%', height: '700px', overflow: 'scroll' }}
        />
      </div>

      <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: 'clamp(1.2rem,2.5vh,1.8rem) clamp(1.5rem,6vw,5rem)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.75rem',
      }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', letterSpacing: '0.06em', color: 'rgba(237,237,237,0.18)' }}>
          © 2026 Muhammad Kamil
        </span>
        <div style={{ display: 'flex', gap: '2rem' }}>
          {['Tampa, FL', 'mk7ft.com'].map(t => (
            <span key={t} style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', letterSpacing: '0.04em', color: 'rgba(237,237,237,0.18)' }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
