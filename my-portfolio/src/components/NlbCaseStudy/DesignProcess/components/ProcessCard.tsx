import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ProcessCard({
    icon,
    title,
    description,
    whatWeDid,
    className = '',
}: {
    icon: IconDefinition
    title: string
    description: string
    whatWeDid: string[]
    className?: string
}) {
    return (
        <div
            className={`flex flex-col justify-between rounded-2xl border-2 border-orange-100 p-6 shadow-lg ${className}`}
        >
            <div className="flex flex-col gap-4">
                <FontAwesomeIcon
                    icon={icon}
                    size="4x"
                    className="text-orange-400"
                />
                <h1 className="text-2xl font-semibold">{title}</h1>
                <p className="text-gray-600">{description}</p>
            </div>
            <div className="mt-4 rounded-2xl bg-gray-200 px-8 py-6 shadow-md">
                <h3 className="mb-2 text-lg font-bold">What We Did:</h3>
                <ul className="list-none space-y-4 text-gray-600">
                    {whatWeDid.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
