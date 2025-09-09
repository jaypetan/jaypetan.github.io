import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
export default function Footer() {
    return (
        <>
            <footer className="flex w-full flex-col items-center justify-center p-4">
                <div>
                    <a href="https://github.com/jaypetan">
                    <FontAwesomeIcon icon={faGithub} size='2xl'/>
                </a>
                <a href="https://www.linkedin.com/in/tan-jun-peng/">
                    <FontAwesomeIcon icon={faLinkedin} size='2xl'/>
                </a>
                <a href="https://www.linkedin.com/in/tan-jun-peng/">
                    <FontAwesomeIcon icon={faFile} size='2xl'/>
                </a>
                </div>
                <p>
                    &copy; {new Date().getFullYear()} Tan Jun Peng. All rights
                    reserved.
                </p>
            </footer>
        </>
    )
}
