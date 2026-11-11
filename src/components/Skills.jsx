const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Vite', 'Responsive Design', 'REST API Integration'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'RESTful APIs', 'Authentication (JWT)', 'WebSockets'],
  },
  {
    title: 'Database',
    skills: ['MongoDB', 'Mongoose', 'PostgreSQL', 'Data Modeling'],
  },
  {
    title: 'Tools & AI',
    skills: ['Git & GitHub', 'VS Code', 'Postman', 'OpenAI API / Web Speech', 'Vercel / Netlify'],
  },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Core technologies and tools I work with daily.</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="skill-category-card">
              <h3 className="category-title">{cat.title}</h3>
              <ul className="skill-list">
                {cat.skills.map((skill) => (
                  <li key={skill} className="skill-pill">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
