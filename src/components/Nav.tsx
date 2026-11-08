"use client";

import { useEffect, useState } from "react";
import { Briefcase, FolderGit2, History, House, Mail, Wrench } from "lucide-react";

const LINKS = [
  { id: "home", label: "Home", icon: House },
  { id: "work", label: "Work", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "experience", label: "Experience", icon: History },
  { id: "stack", label: "Tools", icon: Wrench },
  { id: "contact", label: "Contact", icon: Mail },
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
      {LINKS.map(({ id, label, icon: Icon }) => (
        <a
          key={id}
          href={`#${id}`}
          aria-label={label}
          aria-current={active === id ? "true" : undefined}
          className={active === id ? "active" : undefined}
        >
          <Icon size={20} strokeWidth={1.75} />
          <span className="tip">{label}</span>
        </a>
      ))}
    </nav>
  );
}
