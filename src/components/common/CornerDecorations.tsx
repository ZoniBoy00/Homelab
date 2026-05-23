export default function CornerDecorations() {
  const positions = ['top-5 left-5 border-t-2 border-l-2', 'top-5 right-5 border-t-2 border-r-2', 'bottom-5 left-5 border-b-2 border-l-2', 'bottom-5 right-5 border-b-2 border-r-2'];

  return (
    <>
      {positions.map((p) => (
        <div key={p} aria-hidden={true} className={`fixed w-12 h-12 z-[2] pointer-events-none border-cyber-green/20 ${p}`} />
      ))}
    </>
  );
}
