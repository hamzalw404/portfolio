export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Whether you have a project in mind, want to discuss opportunities, or just want to connect.
          </p>
        </div>

        <div className="contact-card">
          <div className="contact-methods">
            <a
              href="mailto:hamzalawayeb@gmail.com"
              className="contact-pill"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-label">Email:</span>
              <span className="contact-value">hamzalawayeb@gmail.com</span>
            </a>
            <a
              href="https://github.com/hamzalawayeb"
              className="contact-pill"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-label">GitHub:</span>
              <span className="contact-value">github.com/hamzalawayeb</span>
            </a>
            <a
              href="https://linkedin.com/in/hamzalawayeb"
              className="contact-pill"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-label">LinkedIn:</span>
              <span className="contact-value">linkedin.com/in/hamzalawayeb</span>
            </a>
          </div>

          <div className="contact-cta">
            <a href="mailto:hamzalawayeb@gmail.com" className="btn btn-primary">
              Send an Email
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
