import "./socialButtons.css";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const SocialButtons = () => {
  return (
    <div>
      <a
        className="btn"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/toukir15/"
      >
        <FaLinkedinIn className="icon" />
      </a>
      <a
        className="btn"
        href="https://www.facebook.com/profile.php?id=100089076785532"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookF className="icon" />
      </a>
      <a
        className="btn"
        href="https://github.com/toukir15"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="icon" />
      </a>
    </div>
  );
};

export default SocialButtons;
