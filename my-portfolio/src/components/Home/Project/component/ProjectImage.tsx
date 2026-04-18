type ProjectImageProps = {
    src: string
    alt: string
}
export default function ProjectImage({ src, alt }: ProjectImageProps) {
    return (
        <img
            src={src}
            alt={alt}
            className="h-30 w-64 rounded-lg object-cover shadow-xl shadow-black/60 md:h-60 md:w-96"
        />
    )
}
