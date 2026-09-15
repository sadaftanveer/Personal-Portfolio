import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function SocialLinks() {
  return (
    <div className="social-links">
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
  );
}

export default SocialLinks;