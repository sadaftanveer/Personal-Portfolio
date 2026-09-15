import type { ReactNode } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import Container from "./common/Container";
import SectionHeading from "./common/SectionHeading";

interface ContactItemProps {
 icon: ReactNode;
  title: string;
children: ReactNode;
}

function ContactItem({
  icon,
  title,
  children,
}: ContactItemProps) {
  return (
    <div className="contact-item">
      <div className="contact-icon">
        {icon}
      </div>

      <div>
        <h3>{title}</h3>
        {children}
      </div>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <Container>
        <SectionHeading
          label="GET IN TOUCH"
          title="Let's Connect"
          description="I'm always interested in learning, building new projects, and connecting with people in the technology community."
        />

        <div className="contact-layout">
          <div className="contact-info">
            <ContactItem
              icon={<FaEnvelope />}
              title="Email"
            >
              <a href="mailto:sadaftanveer406@gmail.com">
                sadaftanveer406@gmail.com
              </a>
            </ContactItem>

            <ContactItem
              icon={<FaPhone />}
              title="Phone"
            >
              <a href="tel:03365970200">
                03365970200
              </a>
            </ContactItem>

            <ContactItem
              icon={<FaMapMarkerAlt />}
              title="Location"
            >
              <p>Kahuta, Rawalpindi, Pakistan</p>
            </ContactItem>

            <ContactItem
              icon={<FaLinkedin />}
              title="LinkedIn"
            >
              <a
                href="https://www.linkedin.com/in/sadaf-tanveer-246863287"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </a>
            </ContactItem>

            <ContactItem
              icon={<FaGithub />}
              title="GitHub"
            >
              <a
                href="https://github.com/sadaftanveer"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Profile
              </a>
            </ContactItem>
          </div>

          <div className="contact-message">
            <h3>Have a project or opportunity?</h3>

            <p>
              Whether you want to discuss a project, an internship
              opportunity, or simply connect, feel free to reach out.
              I'm always open to learning and exploring new
              opportunities.
            </p>

          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;