import Image from "next/image";
import Nav from "@/components/Nav";
import Profile from "@/components/Profile";
import Reveal from "@/components/Reveal";
import { EXPERIENCE, POSTS, PROFILE, PROJECTS, STATS, TOOLS, WORK_HIGHLIGHTS } from "@/data/data";

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
      <Nav />
      <div className="wrap">
        <Profile />

        <main>
          <Reveal id="home">
            <h1 className="big">
              Full Stack<span className="dim">Developer</span>
            </h1>
            <p className="lead">{PROFILE.intro}</p>
            <div className="stats">
              {STATS.map((s) => (
                <div className="stat" key={s.label}>
                  <strong>{s.value}</strong>
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
          </Reveal>

          <Reveal id="work">
            <h2 className="big">
              Work<span className="dim">Highlights</span>
            </h2>
            <div className="list">
              {WORK_HIGHLIGHTS.map((w) => (
                <div className="item" key={w.name}>
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
            <h2 className="big">
              Side<span className="dim">Projects</span>
            </h2>
            <div className="list">
              {PROJECTS.map((p) => (
                <div className="item" key={p.name}>
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
            <h2 className="big">
              +4 Years of<span className="dim">Experience</span>
            </h2>
            {EXPERIENCE.map((job) => (
              <div className="job" key={job.company}>
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
            <h2 className="big">
              Tools I<span className="dim">Work With</span>
            </h2>
            <div className="tools">
              {TOOLS.map((t) => (
                <div className="tool" key={t.name}>
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
            <h2 className="big">
              Dev<span className="dim">Notes</span>
            </h2>
            <div className="list">
              {POSTS.map((post) => (
                <div className="post" key={post.title}>
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
            <h2 className="big">
              Let&apos;s Work<span className="dim">Together</span>
            </h2>
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
