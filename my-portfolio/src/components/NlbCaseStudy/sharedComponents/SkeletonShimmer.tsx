import { motion } from 'motion/react'

export default function SkeletonShimmer({
    className = '',
}: {
    className?: string
}) {
    return (
        <div
            aria-hidden="true"
            className={`relative overflow-hidden bg-gray-200 ${className}`}
        >
            <motion.div
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/70 to-transparent"
                animate={{ translateX: ['0%', '200%'] }}
                transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            />
        </div>
    )
}
