import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export default function Card({
    icon,
    title,
    description,
}: {
    icon: IconDefinition
    title: string
    description: string
}) {
    return (
        <div className="flex max-w-96 flex-col items-center gap-8 rounded-2xl border-2 border-orange-100 bg-white p-6 py-16 shadow-lg">
            <FontAwesomeIcon icon={icon} className="self-center text-5xl" />
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-center text-gray-600">{description}</p>
        </div>
    )
}
