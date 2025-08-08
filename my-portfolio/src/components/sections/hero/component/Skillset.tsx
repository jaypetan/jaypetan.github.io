import "./Skillset.css";
import SkillList from "./SkillList";
import reactLogo from "@/assets/react.svg";
import viteLogo from "@/assets/vite.svg";

export default function Skillset() {
  const frontendSkills = [
    {
      name: "HTML5",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    { name: "React", image: reactLogo },
    {
      name: "Next.js",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
    },
    { name: "Vite", image: viteLogo },
    {
      name: "Svelte",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
    },
    {
      name: "CSS",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "TailwindCSS",
      image: "https://unpkg.com/simple-icons@v9/icons/tailwindcss.svg",
    },
  ];

  const backendSkills = [
    {
      name: "Node.js",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Deno",
      image: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/deno.svg",
    },
    {
      name: "FastAPI",
      image: "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png",
    },
    {
      name: "MySQL",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "PostgreSQL",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
  ];

  return (
    <>
      <h2>Skillset</h2>
      <div className="flex flex-col flex-wrap">
        <SkillList title="Frontend Development" skills={frontendSkills} />
        <SkillList title="Backend Development" skills={backendSkills} />
      </div>
    </>
  );
}
