export default function Attributes({ text }: { text: string }) {
    return (
        <div className="rounded-full border-2 border-gray-400 px-2 py-1 text-gray-400 sm:px-8 sm:py-4">
            <h3>{text}</h3>
        </div>
    )
}
