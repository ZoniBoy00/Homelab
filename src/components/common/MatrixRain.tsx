import { useEffect, useRef } from 'react';

const CHARS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF<>/{}[]|&^%$#@!';

export default function MatrixRain() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    const fontSize = 13;
    let cols = Math.floor(W / fontSize);
    let drops = Array.from({ length: cols }, () => Math.random() * -100);

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      cols = Math.floor(W / fontSize);
      drops = Array.from({ length: cols }, () => Math.random() * -100);
    };
    window.addEventListener('resize', resize);

    const id = window.setInterval(() => {
      ctx.fillStyle = 'rgba(10,10,10,0.04)';
      ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = '#00ff41';
      ctx.font = `${fontSize}px monospace`;
      for (let i = 0; i < drops.length; i++) {
        ctx.fillText(CHARS[Math.floor(Math.random() * CHARS.length)], i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > H + 20 && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    }, 40);

    return () => {
      clearInterval(id);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={ref} aria-hidden={true} className="fixed inset-0 z-0 pointer-events-none opacity-10" />;
}
