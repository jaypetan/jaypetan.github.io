import { useState } from 'react'
import dontDrownImage1 from '@/assets/projects/dontdrown/dontdrown1.png'
import dontDrownImage2 from '@/assets/projects/dontdrown/dontdrown2.png'
import dontDrownImage3 from '@/assets/projects/dontdrown/dontdrown3.png'
import eeeWeb1 from '@/assets/projects/eeeWeb/eeeWeb1.png'
import eeeWeb2 from '@/assets/projects/eeeWeb/eeeWeb2.png'
import eeeWeb3 from '@/assets/projects/eeeWeb/eeeWeb3.png'
import marvelWeb1 from '@/assets/projects/marvelWeb/marvelWeb1.png'
import marvelWeb2 from '@/assets/projects/marvelWeb/marvelWeb2.png'
import marvelWeb3 from '@/assets/projects/marvelWeb/marvelWeb3.png'
import ProjectCard from './component/ProjectCard'

export default function Project() {
    const [selectedProject, setSelectedProject] = useState('')
    const projectsData = [
        {
            title: 'Dont Drown',
            description: 'Game Development',
            link: 'https://jaypetan.itch.io/dontdrown',
            images: [
                { src: dontDrownImage1, alt: "Don't Drown 1" },
                { src: dontDrownImage2, alt: "Don't Drown 2" },
                { src: dontDrownImage3, alt: "Don't Drown 3" },
            ],
            textColor: 'text-white',
            backgroundColor: 'bg-black/90',
            borderColor: 'border-black/90',
            linkColor: 'text-secondary',
        },
        {
            title: 'EEE Garage Website',
            description: 'Web Development',
            link: 'https://garage-eee.com/',
            images: [
                { src: eeeWeb1, alt: 'EEE Web 1' },
                { src: eeeWeb2, alt: 'EEE Web 2' },
                { src: eeeWeb3, alt: 'EEE Web 3' },
            ],
            textColor: 'text-dark',
            backgroundColor: 'bg-primary',
            borderColor: 'border-primary',
            linkColor: 'text-red-800',
        },
        {
            title: 'Marvel Club Website',
            description: 'Web Development',
            images: [
                { src: marvelWeb1, alt: 'Marvel Web 1' },
                { src: marvelWeb2, alt: 'Marvel Web 2' },
                { src: marvelWeb3, alt: 'Marvel Web 3' },
            ],
            textColor: 'text-dark',
            backgroundColor: 'bg-secondary',
            borderColor: 'border-secondary',
        },
    ]
    return (
        <>
            <section
                id="projects"
                className="flex flex-col pt-4 lg:pt-8"
            >
                <h1>Projects</h1>
                <div className={`mt-8 grid h-3/5 w-full grid-rows-${projectsData.length + 2} gap-4`}>
                    {projectsData.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            link={project.link}
                            images={project.images}
                            selectedProject={selectedProject}
                            setSelectedProject={setSelectedProject}
                            textColor={project.textColor}
                            backgroundColor={project.backgroundColor}
                            borderColor={project.borderColor}
                            linkColor={project.linkColor}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}
