import nlbHero from '@/assets/nlbCaseStudy/nlb-hero.png'
import { useState } from 'react'
import Attributes from './components/Attributes'
import Header from './components/Header'

import { motion } from 'motion/react'
import SkeletonShimmer from '../sharedComponents/SkeletonShimmer'

export default function Hero() {
    const [isLoaded, setIsLoaded] = useState(false)

    return (
        <div className="mt-12 flex flex-col items-center justify-center gap-4">
            <Header />

            <div className="relative w-full">
                {!isLoaded && (
                    <SkeletonShimmer className="absolute inset-0 mb-2 aspect-[16/9] rounded-3xl sm:mb-8" />
                )}

                <motion.img
                    className={`mb-2 w-full rounded-3xl shadow-lg transition-opacity duration-500 sm:mb-8 ${
                        isLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    src={nlbHero}
                    alt="NLB Hero"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{
                        opacity: isLoaded ? 1 : 0,
                        y: isLoaded ? 0 : 30,
                    }}
                    transition={{ duration: 0.5 }}
                    onLoad={() => setIsLoaded(true)}
                />
            </div>

            <div className="flex w-full flex-row justify-end gap-2 sm:gap-4">
                <Attributes text="User Testing" />
                <Attributes text="UI / UX" />
                <Attributes text="Figma" />
            </div>
        </div>
    )
}
