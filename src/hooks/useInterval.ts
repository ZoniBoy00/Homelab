import { useEffect, useRef } from 'react';

/**
 * useInterval — a stable setInterval hook
 * Doesn't restart the interval when the callback changes (unlike raw useEffect + setInterval).
 */
export function useInterval(callback: () => void, delayMs: number, disabled = false) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (disabled) return;
    const id = setInterval(() => savedCallback.current(), delayMs);
    return () => clearInterval(id);
  }, [delayMs, disabled]);
}
