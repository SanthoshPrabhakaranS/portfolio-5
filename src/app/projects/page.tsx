import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Nav from "@/components/Nav";
import Profile from "@/components/Profile";
import Reveal from "@/components/Reveal";
import Heading from "@/components/Heading";
import Effects from "@/components/Effects";
import ProjectItem from "@/components/ProjectItem";
import { PROFILE, PROJECTS } from "@/data/data";

export const metadata: Metadata = {
  title: `Projects — ${PROFILE.name}`,
  description: "Side projects built with Next.js, React, Node.js and more.",
};

export default function ProjectsPage() {
  return (
    <>
      <Effects />
      <Nav />
      <div className="wrap">
        <Profile />

        <main>
          <Reveal id="projects">
            <Link href="/" className="back-link">
              <ArrowLeft size={16} /> Back to home
            </Link>
            <Heading as="h1" top="All" bottom="Projects" />
            <div className="list">
              {PROJECTS.map((p, i) => (
                <ProjectItem project={p} index={i} key={p.name} />
              ))}
            </div>
          </Reveal>

          <footer>
            © {new Date().getFullYear()} {PROFILE.name} · {PROFILE.location}
          </footer>
        </main>
      </div>
    </>
  );
}
