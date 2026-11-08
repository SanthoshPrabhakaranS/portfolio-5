"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "writing", label: "Writing" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    document.querySelectorAll("main section").forEach((s) => spy.observe(s));
    return () => spy.disconnect();
  }, []);

  return (
    <nav className="nav">
      {LINKS.map((l) => (
        <a key={l.id} href={`#${l.id}`} className={active === l.id ? "active" : undefined}>
          {l.label}
        </a>
      ))}
    </nav>
  );
}
