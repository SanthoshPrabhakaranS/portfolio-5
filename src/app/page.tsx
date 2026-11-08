import Image from "next/image";
import Nav from "@/components/Nav";
import Profile from "@/components/Profile";
import Reveal from "@/components/Reveal";
import Heading from "@/components/Heading";
import CountUp from "@/components/CountUp";
import Marquee from "@/components/Marquee";
import Effects from "@/components/Effects";
import { EXPERIENCE, POSTS, PROFILE, PROJECTS, SKILLS, STATS, TOOLS, WORK_HIGHLIGHTS } from "@/data/data";

// Sets the stagger index used by `.stagger` transition delays
const stagger = (i: number) => ({ "--i": i }) as React.CSSProperties;

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="tags">
      {tags.map((t) => (
        <span key={t}>{t}</span>
      ))}
    </div>
  );
}

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

          <Reveal id="work">
            <Heading top="Work" bottom="Highlights" />
            <div className="list">
              {WORK_HIGHLIGHTS.map((w, i) => (
                <div className="item stagger" style={stagger(i)} key={w.name}>
                  <div className="thumb" style={{ background: w.gradient }}>{w.badge}</div>
                  <div>
                    <h3>{w.name}</h3>
                    <p>{w.description}</p>
                    <Tags tags={w.tags} />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal id="projects">
            <Heading top="Side" bottom="Projects" />
            <div className="list">
              {PROJECTS.map((p, i) => (
                <div className="item stagger" style={stagger(i)} key={p.name}>
                  <div className="thumb">
                    <Image src={p.image} alt={p.name} fill sizes="120px" />
                  </div>
                  <div>
                    <h3>{p.name}</h3>
                    <p>{p.description}</p>
                    <Tags tags={p.tags} />
                    <div className="links">
                      <a href={p.link} target="_blank" rel="noopener">Live ↗</a>
                      <a href={p.source} target="_blank" rel="noopener">Code ↗</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
            <div className="tools">
              {TOOLS.map((t, i) => (
                <div className="tool stagger" style={stagger(i)} key={t.name}>
                  <div className="ic">{t.icon}</div>
                  <div>
                    <h4>{t.name}</h4>
                    <p>{t.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal id="writing">
            <Heading top="Dev" bottom="Notes" />
            <div className="list">
              {POSTS.map((post, i) => (
                <div className="post stagger" style={stagger(i)} key={post.title}>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="meta">
                    <span>Coming soon</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              ))}
            </div>
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
