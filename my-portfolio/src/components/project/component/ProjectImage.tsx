type ProjectImageProps = {
  src: string;
  alt: string;
};
export default function ProjectImage({ src, alt }: ProjectImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-96 h-60 object-cover shadow-xl shadow-black/60 rounded-lg"
    />
  );
}