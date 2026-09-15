import { FaGithub, FaExternalLinkAlt, FaMobileAlt } from "react-icons/fa";

import Container from "./common/Container";
import SectionHeading from "./common/SectionHeading";

function Projects() {
  return (
    <section id="projects" className="projects">
      <Container>
        <SectionHeading
          label="MY PROJECT"
          title="A Project I'm Proud Of"
          description="A practical application developed during my academic journey, combining frontend development with backend services and cloud technologies."
        />

        <div className="projects-grid">
          <article className="project-card">
            <div className="project-icon">
              <FaMobileAlt />
            </div>

            <div className="project-content">
              <span className="project-type">
                UNIVERSITY PROJECT
              </span>

              <h3>Project and Research Hub</h3>

              <p>
                A mobile application developed to help students and
                researchers manage and organize academic projects,
                research work, and related information in one place.
              </p>

              <p>
                The application was developed using Flutter for the
                frontend and Firebase services for authentication and
                cloud data management.
              </p>

              <div className="project-tech">
                <span>Flutter</span>
                <span>Dart</span>
                <span>Firebase</span>
                <span>Firestore</span>
                <span>Riverpod</span>
              </div>

              <div className="project-actions">
                <a
                  href="https://github.com/sadaftanveer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href="#contact"
                  className="project-link project-link-secondary"
                >
                  <FaExternalLinkAlt />
                  Learn More
                </a>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}

export default Projects;