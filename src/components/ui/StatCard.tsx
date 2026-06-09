"use client";

import { useEffect, useRef, useState } from "react";

interface StatCardProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  delay?: number;
}

export function StatCard({ value, suffix = "", prefix = "", label, delay = 0 }: StatCardProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-start p-6 border border-brand-yellow/20 bg-brand-slate/40 rounded-sm"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="font-display text-5xl text-brand-yellow leading-none tracking-wider">
        {prefix}{count}{suffix}
      </span>
      <span className="mt-2 text-sm font-mono text-brand-off-white/50 uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}
