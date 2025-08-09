import mentaiyaLogo from "@/assets/mentaiyaLogo.png";
import metevLogo from "@/assets/metevLogo.png";
import sarcLogo from "@/assets/sarcLogo.svg";
import ExperienceItem from "./components/ExperienceItem";
import VideoPlayer from "./components/VideoPlayer";
import { useState } from "react";

export default function Experience() {
  const [selectedExperience, setExperience] = useState("MET EV");
  const experiences = [
    { image: metevLogo, title: "MET EV", role: "Web Developer" },
    {
      image: mentaiyaLogo,
      title: "Mentai-Ya",
      role: "Web Developer",
      imagePadding: "p-0",
    },
    {
      image: sarcLogo,
      title: "Satellite Research Center",
      role: "Web Developer",
    },
  ];
  return (
    <>
      <section
        className="flex flex-col lg:grid grid-cols-2 h-dvh"
        id="experience"
      >
        <div className="subsection">
          <h1>Work Experiences</h1>
          <ul className="flex flex-col gap-4 mt-4">
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
          <div className="h-1/2 w-full">
            <VideoPlayer />
          </div>
          <div className="h-1/2 w-full flex flex-col items-end">
            <h2 className="text-right">{selectedExperience}</h2>
          </div>
        </div>
      </section>
    </>
  );
}
