import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="container nav-content">
        <a href="#hero" className="nav-logo" onClick={closeMenu}>
          Hamza<span>.</span>
        </a>

        <button
          type="button"
          className="nav-mobile-toggle"
          onClick={toggleMenu}
          aria-label="Toggle Navigation Menu"
          aria-expanded={isOpen}
        >
          <span className={`hamburger-bar ${isOpen ? 'open' : ''}`}></span>
        </button>

        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
