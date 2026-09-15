import { useState } from "react";
import {
  FaBars,
  FaTimes,
} from "react-icons/fa";

import Container from "./common/Container";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <Container>
        <nav className="navbar-inner">
          <a
            href="#home"
            className="navbar-logo"
            onClick={closeMenu}
          >
        

            <span>Sadaf Tanveer</span>
          </a>

          <div
            className={`navbar-links ${
              menuOpen ? "navbar-links-open" : ""
            }`}
          >
            <a href="#home" onClick={closeMenu}>
              Home
            </a>

            <a href="#about" onClick={closeMenu}>
              About
            </a>

            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>

            <a href="#education" onClick={closeMenu}>
              Education
            </a>

            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>

            <a href="#experience" onClick={closeMenu}>
              Experience
            </a>

            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </div>

          <button
            type="button"
            className="navbar-menu"
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar; 