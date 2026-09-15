import {
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import Container from "./common/Container";
import Button from "./common/Button";

function Hero() {
  return (
    <section id="home" className="hero">
      <Container>
        <div className="hero-content">

          <div className="hero-text">
            <span className="hero-label">
              HELLO, I'M
            </span>

            <h1>Sadaf Tanveer</h1>

            <h2>Web Developer in Progress</h2>

            <h3>
              Turning Ideas Into Practical Digital Experiences.
            </h3>

            <p>
              I'm building my journey in modern web development,
              exploring frontend, backend, and AI technologies while
              creating practical and meaningful applications.
            </p>

            <div className="hero-actions">
              <Button href="#projects">
                <span>View My Projects</span>
                <FaArrowRight />
              </Button>

              <Button href="#contact" variant="secondary">
                Let's Connect
              </Button>
            </div>

            <div className="hero-socials">
              <a
                href="https://github.com/sadaftanveer"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/sadaf-tanveer-246863287"
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

          <div className="hero-visual">
            <div className="hero-illustration">
              <div className="illustration-circle"></div>

              <div className="illustration-content">
                <span>Keep</span>
                <span>Learning</span>
                <span>Keep</span>
                <span>Building</span>
                <span className="illustration-heart">
                  ♡
                </span>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default Hero;