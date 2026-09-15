import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

import Container from "./common/Container";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-content">
          <div className="footer-main">
            <a href="#home" className="footer-logo">
              Sadaf Tanveer
            </a>

            <p>
              Building my skills, creating practical applications,
              and continuing to grow as a developer.
            </p>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-socials">
            <a
              href="https://github.com/sadaftanveer"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sadaftanveer-246863287"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:sadaftanveer406@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2026 Sadaf Tanveer. All rights reserved.
          </p>

          <p className="footer-made">
            Made with <FaHeart /> while learning and building.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;