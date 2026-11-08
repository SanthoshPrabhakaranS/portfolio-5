"use client";

import { useEffect } from "react";

// Page-wide effects: cursor spotlight and scroll progress bar, driven by CSS variables
export default function Effects() {
  useEffect(() => {
    const root = document.documentElement;
    let raf = 0;
    let x = 0;
    let y = 0;

    const update = () => {
      raf = 0;
      root.style.setProperty("--x", `${x}px`);
      root.style.setProperty("--y", `${y}px`);
      const max = root.scrollHeight - window.innerHeight;
      root.style.setProperty("--progress", String(max > 0 ? window.scrollY / max : 0));
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      schedule();
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    update();
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="spotlight" aria-hidden="true" />
      <div className="progress" aria-hidden="true" />
    </>
  );
}
