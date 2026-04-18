import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export default function Card({
    icon,
    title,
    description,
    hfull = false,
}: {
    icon: IconDefinition
    title: string
    description: string
    hfull?: boolean
}) {
    return (
        <div
            className={`flex h-full max-w-96 flex-col items-center gap-2 rounded-2xl border-2 border-orange-100 bg-white px-2 py-8 shadow-lg ${hfull ? 'sm:h-full' : 'sm:h-auto'} sm:gap-4 sm:py-16 lg:gap-8 lg:px-6`}
        >
            <FontAwesomeIcon
                icon={icon}
                className="self-center text-3xl sm:text-5xl"
            />
            <h2 className="text-center text-xl font-bold">{title}</h2>
            <p className="text-center text-gray-600">{description}</p>
        </div>
    )
}
