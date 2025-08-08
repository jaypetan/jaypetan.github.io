import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import "./Nax.css";

export default function Nav() {
  return (
    <>
      <p>
        Jump to{" "}
        <FontAwesomeIcon icon={faShare} className="rotate-90" size="sm" />
      </p>
      <a href="/experience">Work Experience</a>
      <a href="/projects">Projects</a>
      <a href="/contact">Contact Me</a>
    </>
  );
}
