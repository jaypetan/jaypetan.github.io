import ProjectImage from './ProjectImage'

type ProjectCardProps = {
    title: string
    description: string
    textColor: string
    backgroundColor: string
    borderColor: string
    link?: string
    linkColor?: string
    images: { src: string; alt: string }[]
    selectedProject: string
    setSelectedProject: (title: string) => void
}

export default function ProjectCard({
    title,
    description,
    textColor,
    backgroundColor,
    borderColor,
    link,
    linkColor,
    images,
    selectedProject,
    setSelectedProject,
}: ProjectCardProps) {
    const isSelected = selectedProject === title

    return (
        <div
            className={`${isSelected ? 'row-span-3' : ''} ${borderColor} w-full rounded-lg border-2 transition-transform duration-300 ease-in-out hover:scale-105`}
        >
            <div
                className={`${backgroundColor} relative flex h-full justify-between overflow-hidden p-4 hover:cursor-pointer`}
                onClick={() => setSelectedProject(title)}
            >
                {/* Text Section */}
                <div
                    className={`z-10 self-end ${textColor} ${!isSelected ? 'text-shadow-black-300 text-shadow-md' : ''}`}
                >
                    <h3>{title}</h3>
                    <p>{description}</p>
                    {link && (
                        <a
                            href={link}
                            className={`hover:underline ${linkColor} ${isSelected ? '' : 'hidden'}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {link}
                        </a>
                    )}
                </div>
                ``
                {/* Image Section */}
                <div
                    className={`${!isSelected ? 'opacity-30' : ''} absolute right-0 flex h-full rotate-x-16 rotate-y-35 rotate-z-4 gap-4 md:translate-x-40 lg:right-24`}
                >
                    {images.map((img, i) => (
                        <ProjectImage key={i} src={img.src} alt={img.alt} />
                    ))}
                </div>
            </div>
        </div>
    )
}
