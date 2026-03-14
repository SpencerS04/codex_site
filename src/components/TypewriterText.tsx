import { useEffect, useState } from 'react';

type TypewriterTextProps = {
  text: string;
  speed?: number;
};

function prefersReducedMotion() {
  return typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;
}

export default function TypewriterText({ text, speed = 26 }: TypewriterTextProps) {
  const [value, setValue] = useState(prefersReducedMotion() ? text : '');

  useEffect(() => {
    if (prefersReducedMotion()) {
      setValue(text);
      return;
    }

    setValue('');
    let index = 0;
    const interval = window.setInterval(() => {
      index += 1;
      setValue(text.slice(0, index));

      if (index >= text.length) {
        window.clearInterval(interval);
      }
    }, speed);

    return () => window.clearInterval(interval);
  }, [speed, text]);

  return <span className="type-caret">{value}</span>;
}
