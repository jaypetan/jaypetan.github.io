import { useState } from "react";
interface ExperienceItemProps {
  image: string;
  title: string;
  role: string;
  imagePadding?: string;
  selectedExperience: string;
  setExperience: React.Dispatch<React.SetStateAction<string>>;
}

export default function ExperienceItem({
  image,
  title,
  role,
  imagePadding,
  selectedExperience,
  setExperience,
}: ExperienceItemProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <li
      className="flex flex-row gap-4 relative hover:cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setExperience(title)}
    >
      <div
        className={`z-0 h-3/4 w-[90%] absolute top-1/8 transform -translate-x-[1rem] ${
          selectedExperience === title
            ? "bg-primary"
            : hovered
            ? "bg-secondary/50"
            : "bg-transparent"
        }`}
      />
      <div className="z-10 bg-white border-2 border-black p-2 rounded-xl">
        <img
          src={image}
          alt={title}
          className={`aspect-square h-16 object-contain ${
            imagePadding ? imagePadding : "p-2"
          }`}
        />
      </div>
      <div className="z-10 flex flex-col justify-center">
        <h3>{title}</h3>
        <p className="small-text">{role}</p>
      </div>
    </li>
  );
}
