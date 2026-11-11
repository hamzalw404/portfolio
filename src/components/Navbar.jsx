export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-content">
        <a href="#" className="nav-logo">
          Hamza<span>.</span>
        </a>
        <nav className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
