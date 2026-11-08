"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  as?: "section" | "aside";
  id?: string;
  className?: string;
  children: React.ReactNode;
};

// Fades its content in the first time it scrolls into view
export default function Reveal({ as: Tag = "section", id, className = "", children }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref as React.Ref<HTMLElement & HTMLDivElement>} id={id} className={`reveal ${visible ? "in" : ""} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
