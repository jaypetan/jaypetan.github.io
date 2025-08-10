// src/components/SkillList.jsx
interface Skill {
  name: string;
  image: string;
}

interface SkillListProps {
  title?: string;
  skills: Skill[];
}

export default function SkillList({ title, skills }: SkillListProps) {
  return (
    <div>
      {title && <h3 className="mt-2 mb-4">{title}: </h3>}
      <ul className="flex gap-4">
        {skills.map((skill) => (
          <li
            className="flex flex-col items-center min-w-16 gap-2"
            key={skill.name}
          >
            <img src={skill.image} alt={skill.name} className="h-8" />
            <p className="text-xs md:text-sm">{skill.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
