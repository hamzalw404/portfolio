import { useState } from 'react';
import { IconMail, IconGithub, IconLinkedin, IconCopy, IconCheck } from './Icons';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'hamzalawayeb@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Whether you have a project idea, want to discuss an open role, or just want to connect.
          </p>
        </div>

        <div className="contact-card">
          <div className="contact-methods">
            <div className="contact-pill">
              <div className="contact-pill-left">
                <IconMail className="contact-icon" />
                <div>
                  <span className="contact-label">Email</span>
                  <a href={`mailto:${email}`} className="contact-value">
                    {email}
                  </a>
                </div>
              </div>
              <button
                type="button"
                className="btn-copy"
                onClick={handleCopy}
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copied ? (
                  <span className="copied-status">
                    <IconCheck size={14} /> Copied!
                  </span>
                ) : (
                  <span className="copy-action">
                    <IconCopy size={14} /> Copy
                  </span>
                )}
              </button>
            </div>

            <a
              href="https://github.com/hamzalw404"
              className="contact-pill"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-pill-left">
                <IconGithub className="contact-icon" />
                <div>
                  <span className="contact-label">GitHub</span>
                  <span className="contact-value">github.com/hamzalawayeb</span>
                </div>
              </div>
              <span className="pill-arrow">↗</span>
            </a>

            <a
              href="https://linkedin.com/in/hamzalawayeb"
              className="contact-pill"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-pill-left">
                <IconLinkedin className="contact-icon" />
                <div>
                  <span className="contact-label">LinkedIn</span>
                  <span className="contact-value">linkedin.com/in/hamzalawayeb</span>
                </div>
              </div>
              <span className="pill-arrow">↗</span>
            </a>
          </div>

          <div className="contact-cta">
            <a href={`mailto:${email}`} className="btn btn-primary">
              <IconMail size={16} />
              <span>Say Hello</span>
            </a>
          </div>
        </div>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Hamza Lawayeb. Built with React & Vite.</p>
        </footer>
      </div>
    </section>
  );
}
