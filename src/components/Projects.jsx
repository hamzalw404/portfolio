import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of projects focusing on real-world problems, AI integrations, and full-stack architecture.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
