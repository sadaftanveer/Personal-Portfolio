import type { ReactNode } from "react";

import {
  FaCode,
  FaPalette,
  FaReact,
  FaServer,
  FaLayerGroup,
  FaLaptopCode,
} from "react-icons/fa";

import Container from "./common/Container";
import SectionHeading from "./common/SectionHeading";

interface SkillCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  skills: string[];
}

function SkillCard({
  icon,
  title,
  description,
  skills,
}: SkillCardProps) {
  return (
    <article className="skill-card">
      <div className="skill-card-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <div className="skill-list">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </article>
  );
}

function Skills() {
  return (
    <section id="skills" className="skills">
      <Container>
        <SectionHeading
          label="MY SKILLS"
          title="Technologies I'm Working With"
          description="My current focus is on modern web development, with an emphasis on building responsive interfaces and learning how frontend and backend systems work together."
        />

        <div className="skills-grid">
          <SkillCard
            icon={<FaCode />}
            title="Web Fundamentals"
            description="Building a strong foundation for modern web applications."
            skills={[
              "HTML",
              "CSS",
              "JavaScript",
            ]}
          />

          <SkillCard
            icon={<FaReact />}
            title="Frontend Development"
            description="Developing interactive and responsive user interfaces."
            skills={[
              "React",
              "Next.js",
              "TypeScript",
            ]}
          />

          <SkillCard
            icon={<FaPalette />}
            title="UI & Styling"
            description="Creating clean, responsive, and user-friendly interfaces."
            skills={[
              "CSS",
              "Tailwind CSS",
              "Responsive Design",
            ]}
          />

          <SkillCard
            icon={<FaServer />}
            title="Backend Development"
            description="Learning to build backend applications and APIs with Python."
            skills={[
              "Python",
              "FastAPI",
            ]}
          />

          <SkillCard
            icon={<FaLaptopCode />}
            title="Programming"
            description="Strengthening programming and problem-solving skills through practical development."
            skills={[
              "Python",
              "JavaScript",
              "TypeScript",
            ]}
          />

          <SkillCard
            icon={<FaLayerGroup />}
            title="Full-Stack Learning"
            description="Connecting frontend applications with backend services to understand complete web application development."
            skills={[
              "Frontend",
              "Backend",
              "API Integration",
            ]}
          />
        </div>
      </Container>
    </section>
  );
}

export default Skills;