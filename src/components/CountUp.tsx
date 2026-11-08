"use client";

import { useEffect, useRef, useState } from "react";

// Counts from 0 to the number in `value` (keeping any prefix like "+") once visible
export default function CountUp({ value, duration = 1400 }: { value: string; duration?: number }) {
  const match = value.match(/^(\D*)(\d+)(.*)$/);
  const prefix = match?.[1] ?? "";
  const target = match ? Number(match[2]) : 0;
  const suffix = match?.[3] ?? "";

  const ref = useRef<HTMLElement>(null);
  const [n, setN] = useState(target);

  useEffect(() => {
    const el = ref.current;
    if (!el || !match || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setN(0);

    let raf = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      let start = -1;
      const tick = (now: number) => {
        if (start < 0) start = now;
        const t = Math.min((now - start) / duration, 1);
        setN(Math.round(target * (1 - Math.pow(1 - t, 3))));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, duration]);

  if (!match) return <strong>{value}</strong>;
  return (
    <strong ref={ref}>
      {prefix}
      {n}
      {suffix}
    </strong>
  );
}
