import ProjectImage from "./ProjectImage";

type ProjectCardProps = {
  title: string;
  description: string;
  textColor: string;
  backgroundColor: string;
  borderColor: string;
  link?: string;
  linkColor?: string;
  images: { src: string; alt: string }[];
  selectedProject: string;
  setSelectedProject: (title: string) => void;
};

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
  const isSelected = selectedProject === title;

  return (
    <div
      className={`${isSelected ? "row-span-3" : ""} border-${borderColor} w-full border-2 hover:scale-105 transition-transform duration-300 ease-in-out rounded-lg`}
    >
      <div
        className={`bg-${backgroundColor} flex justify-between h-full p-4 hover:cursor-pointer relative overflow-hidden`}
        onClick={() =>
          isSelected ? setSelectedProject("") : setSelectedProject(title)
        }
      >
        {/* Text Section */}
        <div className={`self-end z-10 text-${textColor}`}>
          <h3>{title}</h3>
          <p>{description}</p>
          {link && (
            <a
              href={link}
              className={`hover:underline text-${linkColor} ${isSelected ? "" : "hidden"}`}
            >
              {link}
            </a>
          )}
        </div>

        {/* Image Section */}
        <div className="absolute flex gap-4 w-[50dvw] h-full rotate-x-16 rotate-y-35 rotate-z-4 right-24">
          {images.map((img, i) => (
            <ProjectImage key={i} src={img.src} alt={img.alt} />
          ))}
        </div>
      </div>
    </div>
  );
}
