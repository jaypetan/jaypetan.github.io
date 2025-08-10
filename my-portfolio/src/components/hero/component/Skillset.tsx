import SkillList from "../../sharedComponents/SkillList";
import css3Logo from "@/assets/brands/css3.svg";
import denoLogo from "@/assets/brands/deno.png";
import fastapiLogo from "@/assets/brands/fastapi.png";
import html5Logo from "@/assets/brands/html5.svg";
import mysqlLogo from "@/assets/brands/mysql.svg";
import nextjsLogo from "@/assets/brands/nextjs.svg";
import nodeLogo from "@/assets/brands/nodejs.svg";
import reactLogo from "@/assets/brands/react.svg";
import svelteLogo from "@/assets/brands/svelte.svg";
import sqliteLogo from "@/assets/brands/sqlite.svg";
import tailwindLogo from "@/assets/brands/tailwind.svg";
import viteLogo from "@/assets/brands/vite.svg";

export default function Skillset() {
  const frontendSkills = [
    { name: "HTML5", image: html5Logo },
    { name: "React", image: reactLogo },
    { name: "Next.js", image: nextjsLogo },
    { name: "Vite", image: viteLogo },
    { name: "Svelte", image: svelteLogo },
    { name: "CSS", image: css3Logo },
    { name: "TailwindCSS", image: tailwindLogo },
  ];

  const backendSkills = [
    { name: "Node.js", image: nodeLogo },
    { name: "Deno", image: denoLogo },
    { name: "FastAPI", image: fastapiLogo },
    { name: "MySQL", image: mysqlLogo },
    { name: "SQLite", image: sqliteLogo },
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
