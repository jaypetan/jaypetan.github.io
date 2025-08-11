import React from "react";
import SkillList from "../../sharedComponents/SkillList";

interface Experience {
  title: string;
  date: string;
  description?: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  image: string;
}

interface ExperienceDetailsProps {
  experience?: Experience; // optional in case no match found
}

export default function ExperienceDetails({ experience } : ExperienceDetailsProps ) {
  if (!experience) return null;

  const { date, description, skills } = experience;

  return (
    <>
      <p>{date}</p>
      <hr className="border-t-2 border-primary w-full" />
      <p
        dangerouslySetInnerHTML={{
          __html: description || "",
        }}
      />
      <div className="mt-8">
        <SkillList title="" skills={skills || []} />
      </div>
    </>
  );
}