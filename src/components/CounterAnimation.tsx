'use client';

import { useEffect, useRef, useState } from 'react';

interface Stat {
  target: number;
  prefix?: string;
  label: string;
}

const stats: Stat[] = [
  { target: 20, label: 'YEARS OF\nEXPERIENCE' },
  { target: 100, prefix: '+', label: 'PROJECTS\nCOMPLETED' },
  { target: 10, label: 'YEAR\nWARRANTY' },
];

export default function CounterAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [values, setValues] = useState<number[]>(stats.map(() => 0));
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated.current) {
            animated.current = true;
            stats.forEach((stat, i) => {
              const duration = 2000;
              const step = stat.target / (duration / 16);
              let current = 0;
              const update = () => {
                current += step;
                if (current >= stat.target) {
                  setValues((prev) => {
                    const next = [...prev];
                    next[i] = stat.target;
                    return next;
                  });
                  return;
                }
                setValues((prev) => {
                  const next = [...prev];
                  next[i] = Math.floor(current);
                  return next;
                });
                requestAnimationFrame(update);
              };
              update();
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex mb-10 justify-evenly"
    >
      {stats.map((stat, i) => (
        <div key={i} className="text-center">
          <span className="text-[2.2rem] md:text-[3.2rem] font-extrabold text-brand-black block leading-none mb-2">
            {stat.prefix || ''}{values[i]}
          </span>
          <span className="text-[0.75rem] font-bold text-brand-black uppercase tracking-[1px] leading-[1.3] whitespace-pre-line">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
