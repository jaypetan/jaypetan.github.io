import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  return (
    <>
      <p>
        Jump to{" "}
        <FontAwesomeIcon icon={faShare} className="rotate-90" size="sm" />
      </p>
      <a className="hover:underline underline-offset-6" href="#experience">
        Work Experience
      </a>
      <a className="hover:underline underline-offset-6" href="#projects">
        Projects
      </a>
      <a className="hover:underline underline-offset-6" href="#contact">
        Contact Me
      </a>
    </>
  );
}
