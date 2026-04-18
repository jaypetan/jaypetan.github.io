import { motion } from 'motion/react'

export default function FadeInOnLoad({
    children,
    index,
}: {
    children: React.ReactNode
    index?: number
}) {
    return (
        <motion.div
            key={index}
            className="w-full"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
                duration: 0.55,
                ease: 'easeOut',
                delay: index ? index * 0.33 : 0,
            }}
        >
            {children}
        </motion.div>
    )
}
