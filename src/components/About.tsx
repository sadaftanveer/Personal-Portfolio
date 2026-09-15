import { FaGraduationCap, FaAward } from "react-icons/fa";
import Container from "./common/Container";
import SectionHeading from "./common/SectionHeading";
import Button from "./common/Button";

function About() {
  return (
    <section id="about" className="about">
      <Container>
        <div className="about-layout ">
          <div className="about-content">
            <SectionHeading
              label="ABOUT ME"
              title="My Journey in Technology"
            />

            <div className="about-text">
              <p>
                I am a Software Engineering graduate from PMAS-Arid
                Agriculture University, Rawalpindi, where I completed
                my BS Software Engineering from 2020 to 2024.
              </p>

              <p>
                My journey in technology has been shaped by learning
                through academic projects, practical work, and
                continuously exploring new technologies.
              </p>

              <p>
                I am currently focusing on web development and building
                my skills in modern frontend and backend technologies.
                I am working with React, Next.js, TypeScript, Python,
                and FastAPI while learning how to build complete and
                maintainable web applications.
              </p>

              <p>
                I am also exploring Artificial Intelligence and Azure
                through an AI-103 training program focused on developing
                AI applications and agents.
              </p>

              <p>
                My goal is to keep learning, build useful applications,
                and grow into a capable software developer through
                consistent practical experience.
              </p>
            </div>

            <Button href="#education" variant="secondary">
              More About My Education
            </Button>
          </div>

          <div className="about-cards">
            <article className="info-card">
              <div className="info-card-icon">
               <FaGraduationCap />
              </div>

              <div>
                <h3>BS Software Engineering</h3>

                <p>
                  PMAS-Arid Agriculture University,
                  Rawalpindi
                </p>

                <span>2020 – 2024</span>
              </div>
            </article>

            <article className="info-card">
              <div className="info-card-icon">
                <FaAward />
              </div>

              <div>
                <h3>AI-103 Training</h3>

                <p>
                  Developing AI Apps and Agents on Azure
                </p>

                <span>3-Month Program</span>
              </div>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;