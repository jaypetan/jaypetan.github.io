export default function Header({
    number,
    title,
}: {
    number?: string
    title?: string
}) {
    if (number && parseInt(number) < 10) {
        number = `0${number}`
    }
    return (
        <div className="mb-4 flex w-full flex-row items-baseline justify-between border-b-2 border-gray-300 text-gray-400 sm:mb-8">
            <h3 className="mb-4 text-4xl font-bold">{number}</h3>
            <h3 className="mb-4 text-xl font-semibold">{title}</h3>
        </div>
    )
}
