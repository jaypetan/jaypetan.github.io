type ProjectImageProps = {
  src: string;
  alt: string;
};
export default function ProjectImage({ src, alt }: ProjectImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-64 h-30 md:w-96 md:h-60 object-cover shadow-xl shadow-black/60 rounded-lg"
    />
  );
}