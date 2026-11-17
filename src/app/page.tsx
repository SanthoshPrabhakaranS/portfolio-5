import Link from "next/link";
import { ArrowDown, ArrowRight, ChevronDown, FileDown } from "lucide-react";
import Nav from "@/components/Nav";
import Profile from "@/components/Profile";
import Reveal from "@/components/Reveal";
import Heading from "@/components/Heading";
import Marquee from "@/components/Marquee";
import Effects from "@/components/Effects";
import ToolLogo from "@/components/ToolLogo";
import ProjectItem from "@/components/ProjectItem";
import ShowMore from "@/components/ShowMore";
import { stagger } from "@/lib/stagger";
import { CAPABILITIES, CASE_STUDY, EXPERIENCE, PROFILE, PROJECTS, SKILLS, SYSTEMS, TOOLS } from "@/data/data";

const FEATURED_PROJECTS = 3;
const VISIBLE_TOOLS = 6;

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
            <p className="status">
              <span className="dot" aria-hidden="true" />
              {PROFILE.status}
            </p>
            <Heading as="h1" top="From sketch" bottom="to ship" />
            <p className="hook">{PROFILE.hook}</p>
            <p className="lead">{PROFILE.intro}</p>
            <div className="ctas">
              <a href="#systems" className="cta primary">
                See what I&apos;ve built <ArrowDown size={18} />
              </a>
              {PROFILE.resume ? (
                <a href={PROFILE.resume} className="cta" download>
                  Download resume <FileDown size={18} />
                </a>
              ) : (
                <a href="#contact" className="cta">
                  Get in touch <ArrowRight size={18} />
                </a>
              )}
            </div>
            <div className="capabilities">
              {CAPABILITIES.map((c, i) => (
                <div className="capability stagger" style={stagger(i)} key={c.claim}>
                  <h3>
                    <span>I can</span> {c.claim}
                  </h3>
                  <p>{c.proof}</p>
                </div>
              ))}
            </div>
            <Marquee items={SKILLS} />
          </Reveal>

          <Reveal id="systems">
            <Heading top="Systems" bottom="I've built" />
            <p className="section-lead">Real work, real users. Open any card to see how I thought about it.</p>
            <div className="systems">
              {SYSTEMS.map((s, i) => (
                <details className="system stagger" style={stagger(i)} key={s.title}>
                  <summary>
                    <div>
                      <h3>{s.title}</h3>
                      <p>{s.summary}</p>
                    </div>
                    <ChevronDown size={20} className="chev" aria-hidden="true" />
                  </summary>
                  <div className="system-body">
                    <dl>
                      <dt>The problem</dt>
                      <dd>{s.problem}</dd>
                      <dt>How I thought</dt>
                      <dd className="thinking">{s.thinking}</dd>
                      <dt>How I built it</dt>
                      <dd>
                        <ol className="flow">
                          {s.flow.map((step) => (
                            <li key={step}>{step}</li>
                          ))}
                        </ol>
                      </dd>
                      <dt>Outcome</dt>
                      <dd className="outcome">{s.outcome}</dd>
                    </dl>
                    <Tags tags={s.tags} />
                  </div>
                </details>
              ))}
            </div>
          </Reveal>

          <Reveal id="case">
            <Heading top="Case" bottom="Study" />
            <article className="case">
              <p className="case-label">{CASE_STUDY.label}</p>
              <h3>{CASE_STUDY.title}</h3>
              <div className="case-blocks">
                {CASE_STUDY.blocks.map((b, i) => (
                  <div className="case-block stagger" style={stagger(i)} key={b.heading}>
                    <span className="case-num">0{i + 1}</span>
                    <h4>{b.heading}</h4>
                    <p>{b.body}</p>
                  </div>
                ))}
              </div>
              <Tags tags={CASE_STUDY.tags} />
            </article>
          </Reveal>

          <Reveal id="projects">
            <Heading top="Built for" bottom="Fun" />
            <p className="section-lead">Things I build for fun, to learn something new.</p>
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
            <Heading top="Your product" bottom="could be next" />
            <p className="section-lead">
              Hiring, building something, or just want to talk shop? I reply to every message.
            </p>
            <div className="contact-links">
              <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
              <a href={PROFILE.social.linkedin} target="_blank" rel="noopener">LinkedIn ↗</a>
              <a href={PROFILE.social.github} target="_blank" rel="noopener">GitHub ↗</a>
              {PROFILE.resume && (
                <a href={PROFILE.resume} download>Resume ↓</a>
              )}
            </div>
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
