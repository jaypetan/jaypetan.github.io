import mentaiyaLogo from '@/assets/companies/mentaiyaLogo.png'
import metevLogo from '@/assets/companies/metevLogo.png'
import sarcLogo from '@/assets/companies/sarcLogo.svg'
import ExperienceItem from './components/ExperienceItem'
import ExperienceDetails from './components/ExperienceDetails'
import VideoPlayer from './components/VideoPlayer'
import { useState } from 'react'
import nextLogo from '@/assets/brands/nextjs.svg'
import reactLogo from '@/assets/brands/react.svg'
import tailwindLogo from '@/assets/brands/tailwind.svg'
import sqliteLogo from '@/assets/brands/sqlite.svg'
import viteLogo from '@/assets/brands/vite.svg'
import htmlLogo from '@/assets/brands/html5.svg'
import cssLogo from '@/assets/brands/css3.svg'
import fastapiLogo from '@/assets/brands/fastapi.png'

export default function Experience() {
    const [selectedExperience, setExperience] = useState('MET EV')
    const experiences = [
        {
            image: metevLogo,
            title: 'MET EV',
            role: 'Web Developer Intern',
            date: 'May 2025 - August 2025',
            description: `Collaborated with a team of four to build a website for a startup. <br/> 
        Developed user-centric frontend components with <strong>Next.js</strong> and <strong>TailwindCSS</strong>, and led the checkout page implementation using <em>useContext</em> for state management. <br/>
        Integrated backend with <strong>Prisma</strong> (ORM) and <strong>SQLite</strong> for efficient data handling. Added cookies, animations, and form validations to enhance user experience.`,
            skills: [
                {
                    name: 'Next.js',
                    image: nextLogo,
                },
                {
                    name: 'TailwindCSS',
                    image: tailwindLogo,
                },
                {
                    name: 'SQLite',
                    image: sqliteLogo,
                },
            ],
        },
        {
            image: mentaiyaLogo,
            title: 'Mentai-Ya',
            role: 'Web Developer',
            date: 'December 2024 - March 2025',
            description: `Created a responsive website using <strong>Vite</strong>, <strong>React</strong>, and <strong>TailwindCSS</strong>, enhancing user experience and engagement. <br/>
        Handled web design, development and maintenance, focusing on an attractive and user-friendly frontend. <br/>
        Integrated interactive elements including a carousel and API connections for Instagram and email functionality to boost interactivity.`,
            skills: [
                {
                    name: 'Vite',
                    image: viteLogo,
                },
                {
                    name: 'React',
                    image: reactLogo,
                },
                {
                    name: 'TailwindCSS',
                    image: tailwindLogo,
                },
            ],
        },
        {
            image: sarcLogo,
            title: 'Satellite Research Center',
            role: 'Web App Developer Intern',
            date: 'July 2024 - December 2024',
            description: `Redesigned the legacy Satellite Mission Planner into a high-fidelity web app using <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and <strong>HTMX</strong> with a strong emphasis on frontend architecture.<br/>
        Collaborated on <strong>REST API</strong> design with <strong>FastAPI</strong> for seamless frontend-backend communication.<br/>
        Delivered a working alpha version, passing organizational testing and approval.`,
            skills: [
                {
                    name: 'HTML',
                    image: htmlLogo,
                },
                {
                    name: 'CSS',
                    image: cssLogo,
                },
                {
                    name: 'FastAPI',
                    image: fastapiLogo,
                },
            ],
        },
    ]
    return (
        <section id="experience" className="pt-4 lg:pt-8">
            <h1 className="font-source-sans">Work Experiences</h1>
            <div className="flex min-h-dvh grid-cols-2 flex-col lg:grid lg:grid-cols-[3fr_5fr]">
                <div className="subsection">
                    <ul className="flex flex-col gap-2 lg:mt-4 lg:gap-4">
                        {experiences.map((exp) => (
                            <ExperienceItem
                                key={exp.title}
                                {...exp}
                                selectedExperience={selectedExperience}
                                setExperience={setExperience}
                            />
                        ))}
                    </ul>
                </div>
                <div className="subsection">
                    <div className="min-h-1/2 w-full">
                        <VideoPlayer selectedExperience={selectedExperience} />
                    </div>
                    <div className="flex h-1/2 w-full flex-col items-end gap-2">
                        <ExperienceDetails
                            experience={experiences.find(
                                (exp) => exp.title === selectedExperience
                            )}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
