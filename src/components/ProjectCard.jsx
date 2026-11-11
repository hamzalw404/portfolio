import { IconGithub, IconExternal } from './Icons';

export default function ProjectCard({ project }) {
  const { title, subtitle, description, problem, solution, tags, liveDemo, github, highlights, featured } =
    project;

  return (
    <article className={`project-card ${featured ? 'featured' : ''}`}>
      <div className="project-card-header">
        <div>
          <span className="project-badge">{featured ? 'Featured Project' : 'Project'}</span>
          <h3 className="project-title">{title}</h3>
          <p className="project-subtitle">{subtitle}</p>
        </div>
      </div>

      <p className="project-description">{description}</p>

      {problem && solution && (
        <div className="project-case">
          <div className="case-item">
            <strong>The Problem</strong>
            <p>{problem}</p>
          </div>
          <div className="case-item">
            <strong>The Solution</strong>
            <p>{solution}</p>
          </div>
        </div>
      )}

      {highlights && highlights.length > 0 && (
        <ul className="project-highlights">
          {highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      )}

      <div className="project-tags">
        {tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="project-links">
        {liveDemo && (
          <a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-primary"
          >
            <span>Live Demo</span>
            <IconExternal size={14} />
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline"
          >
            <IconGithub size={14} />
            <span>GitHub</span>
          </a>
        )}
      </div>
    </article>
  );
}
