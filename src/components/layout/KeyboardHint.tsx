import { services } from '../../data/services';

const keys = ['j', 'u', 'c'];

export default function KeyboardHint() {
  return (
    <div
      aria-label="Keyboard shortcuts"
      className="fixed bottom-4 right-4 z-10 font-mono text-[0.5rem] text-cyber-dim/40 select-none"
    >
      {services.map((s, i) => (
        <span key={s.id}>
          [{keys[i]}] {s.name.toLowerCase()}
          {i < services.length - 1 && <span className="mx-1" />}
        </span>
      ))}
    </div>
  );
}
