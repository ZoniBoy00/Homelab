export default function Scanlines() {
  return (
    <>
      <div
        aria-hidden={true}
        className="fixed inset-0 z-[1] pointer-events-none"
        style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px)' }}
      />
      <div aria-hidden={true} className="crt-overlay" />
    </>
  );
}
