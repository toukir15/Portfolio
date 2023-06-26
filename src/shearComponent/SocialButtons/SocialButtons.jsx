import "./socialButtons.css";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const SocialButtons = () => {
  return (
    <div>
      <a
        className="btn"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/tanvirahmed6174"
      >
        <FaLinkedinIn className="icon" />
      </a>
      <a
        className="btn"
        href="https://www.facebook.com/tanvirahmed6147"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookF className="icon" />
      </a>
      <a
        className="btn"
        href="https://github.com/tanvirgithub21"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="icon" />
      </a>
    </div>
  );
};

export default SocialButtons;
