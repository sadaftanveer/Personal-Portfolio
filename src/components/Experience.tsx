import type { ReactNode } from "react";
import {
  FaCode,
  FaBullhorn,
} from "react-icons/fa";
import Container from "./common/Container";
import SectionHeading from "./common/SectionHeading";

interface ExperienceItemProps {
 icon: ReactNode;
  role: string;
  organization: string;
  duration: string;
  description: string;
  skills: string[];
}

function ExperienceItem({
  icon,
  role,
  organization,
  duration,
  description,
  skills,
}: ExperienceItemProps) {
  return (
    <article className="experience-card">
      <div className="experience-icon">
        {icon}
      </div>

      <div className="experience-content">
        <span className="experience-duration">
          {duration}
        </span>

        <h3>{role}</h3>

        <h4>{organization}</h4>

        <p>{description}</p>

        <div className="experience-skills">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

function Experience() {
  return (
    <section id="experience" className="experience">
      <Container>
        <SectionHeading
          label="EXPERIENCE"
          title="My Practical Experience"
          description="The opportunities that have helped me gain practical exposure and understand how technology is applied in real-world environments."
        />

        <div className="experience-list">
          <ExperienceItem
            icon={<FaCode />}
            role="Web Development Intern"
            organization="Arch Technologies"
            duration="Current Internship"
            description="Currently gaining practical experience in web development, working with modern frontend and backend technologies while developing projects and strengthening my understanding of complete web applications."
            skills={[
              "React",
              "TypeScript",
              "Python",
              "FastAPI",
            ]}
          />

          <ExperienceItem
            icon={<FaBullhorn />}
            role="Social Media Management Intern"
            organization="RP9 RWP COHORT-3"
            duration="6-Month Internship"
            description="Gained practical experience in social media management while working with an IoT-based pollution monitoring startup, contributing to digital communication and social media activities."
            skills={[
              "Social Media",
              "Content Management",
              "Digital Communication",
            ]}
          />
        </div>
      </Container>
    </section>
  );
}

export default Experience;