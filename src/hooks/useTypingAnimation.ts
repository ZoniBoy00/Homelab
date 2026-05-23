import { useState, useEffect, useCallback } from 'react';

export function useTypingAnimation(commands: string[]) {
  const [text, setText] = useState('');
  const [cmdIdx, setCmdIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [started, setStarted] = useState(false);

  const tick = useCallback(() => {
    const cmd = commands[cmdIdx];
    if (!isDeleting) {
      if (charIdx > cmd.length) {
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }
      setText(cmd.substring(0, charIdx));
      setCharIdx((i) => i + 1);
      setTimeout(tick, 25 + Math.random() * 50);
    } else {
      if (charIdx < 0) {
        setIsDeleting(false);
        setCharIdx(0);
        setCmdIdx((i) => (i + 1) % commands.length);
        setTimeout(tick, 400);
        return;
      }
      setText(cmd.substring(0, charIdx));
      setCharIdx((i) => i - 1);
      setTimeout(tick, 12 + Math.random() * 20);
    }
  }, [cmdIdx, charIdx, isDeleting, commands]);

  useEffect(() => {
    if (!started) {
      setStarted(true);
      setTimeout(tick, 600);
    }
  }, [started, tick]);

  return text;
}
