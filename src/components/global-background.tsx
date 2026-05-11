'use client';

export default function GlobalBackground() {
  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        background: 'linear-gradient(160deg, #100d08 0%, #090808 40%, #080809 70%, #07080c 100%)',
      }}
    >
      {/* Vignette */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(0,0,0,0.45) 100%)',
        pointerEvents: 'none',
      }} />
    </div>
  );
}
