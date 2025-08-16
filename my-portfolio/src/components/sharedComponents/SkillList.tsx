// src/components/SkillList.jsx
interface Skill {
    name: string
    image: string
}

interface SkillListProps {
    title?: string
    skills: Skill[]
}

export default function SkillList({ title, skills }: SkillListProps) {
    return (
        <div>
            {title && <h3 className="mb-2 lg:mt-2 lg:mb-4">{title}: </h3>}
            <ul className="relative flex flex-wrap md:gap-4">
                {skills.map((skill) => (
                    <li
                        className="relative flex min-w-16 flex-col items-center gap-2 py-2"
                        key={skill.name}
                    >
                        <img
                            src={skill.image}
                            alt={skill.name}
                            className="z-10 h-6 md:h-8"
                        />
                        <p className="z-10 text-xs md:text-sm">{skill.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
