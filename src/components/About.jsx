export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">A brief look into my background, mindset, and experience.</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              I am a passionate full-stack developer dedicated to building reliable, user-centered web applications.
              I enjoy bridging clean front-end interfaces with robust backend architectures, with a strong interest in
              practical AI integrations and developer tooling.
            </p>
            <p>
              Beyond coding, I actively participate in tech communities—including Google Developer Student Clubs (GDSC)—where
              I collaborate with fellow developers, organize technical workshops, and solve engineering challenges.
            </p>
          </div>

          <div className="about-highlights">
            <div className="info-box">
              <h4>Community & Leadership</h4>
              <p>Google Developer Student Clubs (GDSC) Core Team / Member</p>
            </div>
            <div className="info-box">
              <h4>Languages</h4>
              <p>English (Fluent), French (Proficient), Arabic (Native)</p>
            </div>
            <div className="info-box">
              <h4>Focus Areas</h4>
              <p>Full-Stack MERN, AI-Powered Workflows, Interactive Web Applications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
