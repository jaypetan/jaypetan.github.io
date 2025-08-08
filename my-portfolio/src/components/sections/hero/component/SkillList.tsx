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
      <ul>
        {skills.map((skill) => (
          <li key={skill.name}>
            <img src={skill.image} alt={skill.name} className="icon" />
            <p>{skill.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
