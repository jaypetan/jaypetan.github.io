export default function Attributes({ text }: { text: string }) {
    return (
        <div className="rounded-full border-2 border-gray-400 px-8 py-4 text-gray-400">
            <h3>{text}</h3>
        </div>
    )
}
