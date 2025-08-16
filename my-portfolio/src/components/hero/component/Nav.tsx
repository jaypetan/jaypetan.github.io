import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare } from '@fortawesome/free-solid-svg-icons'

export default function Nav() {
    return (
        <>
            <p className="font-source-sans">
                Jump to{' '}
                <FontAwesomeIcon
                    icon={faShare}
                    className="rotate-90"
                    size="xs"
                />
            </p>
            <a
                className="underline-offset-6 hover:underline"
                href="#experience"
            >
                Work Experience
            </a>
            <a className="underline-offset-6 hover:underline" href="#projects">
                Projects
            </a>
            <a className="underline-offset-6 hover:underline" href="#contact">
                Contact Me
            </a>
        </>
    )
}
