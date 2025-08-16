import { useState } from 'react'
interface ExperienceItemProps {
    image: string
    title: string
    role: string
    selectedExperience: string
    setExperience: React.Dispatch<React.SetStateAction<string>>
}

export default function ExperienceItem({
    image,
    title,
    role,
    selectedExperience,
    setExperience,
}: ExperienceItemProps) {
    const [hovered, setHovered] = useState(false)
    return (
        <li
            className="relative flex flex-row gap-4 hover:cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => setExperience(title)}
        >
            <div
                className={`absolute top-1/8 z-0 h-3/4 w-[calc(100%+1rem)] -translate-x-[1rem] transform ${
                    selectedExperience === title
                        ? 'bg-primary'
                        : hovered
                          ? 'bg-secondary'
                          : 'bg-transparent'
                }`}
            />
            <div className="z-10 rounded-xl border-2 border-black bg-white p-2">
                <img
                    src={image}
                    alt={title}
                    className={`aspect-square h-8 object-contain md:h-12 md:p-1 lg:h-16 lg:p-2`}
                />
            </div>
            <div
                className={`z-10 flex flex-col justify-center ${
                    selectedExperience === title
                        ? 'text-dark'
                        : hovered
                          ? 'text-dark'
                          : ''
                }`}
            >
                <h3>{title}</h3>
                <p className="small-text">{role}</p>
            </div>
        </li>
    )
}
