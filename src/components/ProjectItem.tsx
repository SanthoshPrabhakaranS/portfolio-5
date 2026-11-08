import Image from "next/image";
import { PROJECTS } from "@/data/data";
import { stagger } from "@/lib/stagger";

type Project = (typeof PROJECTS)[number];

export default function ProjectItem({ project: p, index }: { project: Project; index: number }) {
  return (
    <div className="item stagger" style={stagger(index)}>
      <div className="thumb">
        <Image src={p.image} alt={p.name} fill sizes="120px" />
      </div>
      <div>
        <h3>{p.name}</h3>
        <p>{p.description}</p>
        <div className="tags">
          {p.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="links">
          <a href={p.link} target="_blank" rel="noopener">Live ↗</a>
          <a href={p.source} target="_blank" rel="noopener">Code ↗</a>
        </div>
      </div>
    </div>
  );
}
