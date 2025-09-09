import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    const footerLinks = [
        {
            icon: faGithub,
            url: 'https://github.com/jaypetan',
            text: 'GitHub',
        },
        {
            icon: faEnvelope,
            url: 'mailto:jptann01@gmail.com',
            text: 'jptann01@gmail.com',
        },
        {
            icon: faLinkedin,
            url: 'https://www.linkedin.com/in/tan-jun-peng/',
            text: 'LinkedIn',
        },
    ]
    return (
        <>
            <footer
                id="contact"
                className="flex w-full flex-col items-center justify-center p-4 mt-8"
            >
                <div className="flex gap-8 p-4">
                    {footerLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            className="group relative"
                        >
                            <div className="bg-primary absolute bottom-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-3/4 rounded-md px-2 py-1 group-hover:block">
                                {link.text}
                            </div>
                            <FontAwesomeIcon icon={link.icon} size="2xl" />
                        </a>
                    ))}
                </div>
                <p>
                    &copy; {new Date().getFullYear()} Tan Jun Peng. All rights
                    reserved.
                </p>
            </footer>
        </>
    )
}
