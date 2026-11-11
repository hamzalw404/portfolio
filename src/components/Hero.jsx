import { IconDownload } from './Icons';

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="container hero-container">
        <div className="hero-badge">
          <span className="status-dot"></span>
          Available for opportunities
        </div>
        <h1 className="hero-title">
          Hi, I&apos;m <span className="highlight">Hamza Lawayeb</span>
        </h1>
        <p className="hero-tagline">
          Full-stack developer building AI-powered web apps and robust digital experiences.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="/resume.pdf" download className="btn btn-secondary">
            <IconDownload size={16} />
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </section>
  );
}
