import { FaGraduationCap, FaBrain } from "react-icons/fa";

import Container from "./common/Container";
import SectionHeading from "./common/SectionHeading";

function Education() {
  return (
    <section id="education" className="education">
      <Container>
        <SectionHeading
          label="EDUCATION & TRAINING"
          title="My Educational Journey"
          description="My academic background and ongoing learning journey in software development and artificial intelligence."
        />

        <div className="education-grid">
          <article className="education-card">
            <div className="education-icon">
              <FaGraduationCap />
            </div>

            <div className="education-content">
              <span className="education-year">2020 – 2024</span>

              <h3>BS Software Engineering</h3>

              <h4>PMAS-Arid Agriculture University, Rawalpindi</h4>

              <p>
                Completed my Bachelor's degree in Software Engineering,
                building a foundation in software development, programming,
                databases, application development, and software engineering
                principles.
              </p>
            </div>
          </article>

          <article className="education-card">
            <div className="education-icon">
              <FaBrain />
            </div>

            <div className="education-content">
              <span className="education-year">3-Month Training Program</span>

              <h3>AI-103 — Developing AI Apps and Agents on Azure</h3>

              <h4>Capital Technologies</h4>

              <p>
                A training program focused on developing AI applications and
                agents on Microsoft Azure, helping me explore modern AI
                technologies alongside web development.
              </p>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}

export default Education;