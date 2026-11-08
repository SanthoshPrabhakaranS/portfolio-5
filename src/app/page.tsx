import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Nav from "@/components/Nav";
import Profile from "@/components/Profile";
import Reveal from "@/components/Reveal";
import Heading from "@/components/Heading";
import CountUp from "@/components/CountUp";
import Marquee from "@/components/Marquee";
import Effects from "@/components/Effects";
import ToolLogo from "@/components/ToolLogo";
import ProjectItem from "@/components/ProjectItem";
import ShowMore from "@/components/ShowMore";
import { stagger } from "@/lib/stagger";
import { EXPERIENCE, PROFILE, PROJECTS, SKILLS, STATS, TOOLS } from "@/data/data";

const FEATURED_PROJECTS = 3;
const VISIBLE_TOOLS = 6;

export default function Home() {
  return (
    <>
      <Effects />
      <Nav />
      <div className="wrap">
        <Profile />

        <main>
          <Reveal id="home">
            <Heading as="h1" top="Full Stack" bottom="Developer" />
            <p className="lead">{PROFILE.intro}</p>
            <div className="stats">
              {STATS.map((s) => (
                <div className="stat" key={s.label}>
                  <CountUp value={s.value} />
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
            <div className="chips">
              <div className="chip purple">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18" /><path d="m7 15 4-4 3 3 5-6" /></svg>
                Dashboards, reporting &amp; data visualization
              </div>
              <div className="chip light">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m8 6-6 6 6 6" /><path d="m16 6 6 6-6 6" /></svg>
                Next.js, React, Node.js, TypeScript
              </div>
            </div>
            <Marquee items={SKILLS} />
          </Reveal>

          <Reveal id="projects">
            <Heading top="Side" bottom="Projects" />
            <div className="list">
              {PROJECTS.slice(0, FEATURED_PROJECTS).map((p, i) => (
                <ProjectItem project={p} index={i} key={p.name} />
              ))}
            </div>
            {PROJECTS.length > FEATURED_PROJECTS && (
              <Link href="/projects" className="more-btn">
                View all {PROJECTS.length} projects <ArrowRight size={18} />
              </Link>
            )}
          </Reveal>

          <Reveal id="experience">
            <Heading top="+4 Years of" bottom="Experience" />
            {EXPERIENCE.map((job, i) => (
              <div className="job stagger" style={stagger(i)} key={job.company}>
                <div className="job-head">
                  <h3>{job.company}</h3>
                  <span className="when">{job.duration}</span>
                </div>
                <div className="role">{job.role}</div>
                <ul>
                  {job.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>

          <Reveal id="stack">
            <Heading top="Tools I" bottom="Work With" />
            <ShowMore initial={VISIBLE_TOOLS} className="tools">
              {TOOLS.map((t, i) => (
                <div className="tool stagger" style={stagger(i)} key={t.name}>
                  <ToolLogo logo={t.logo} />
                  <div>
                    <h4>{t.name}</h4>
                    <p>{t.category}</p>
                  </div>
                </div>
              ))}
            </ShowMore>
          </Reveal>

          <Reveal id="contact">
            <Heading top="Let’s Work" bottom="Together" />
            <form action={`mailto:${PROFILE.email}`} method="post" encType="text/plain">
              <div className="row">
                <label>
                  Name
                  <input name="name" required />
                </label>
                <label>
                  Email
                  <input name="email" type="email" required />
                </label>
              </div>
              <label>
                Message
                <textarea name="message" required />
              </label>
              <button type="submit">Send message</button>
            </form>
          </Reveal>

          <footer>
            © {new Date().getFullYear()} {PROFILE.name} · {PROFILE.location}
          </footer>
        </main>
      </div>
    </>
  );
}
