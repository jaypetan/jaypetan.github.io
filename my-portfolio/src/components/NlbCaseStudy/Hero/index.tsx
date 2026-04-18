import nlbHero from '@/assets/nlbCaseStudy/nlb-hero.png'
import Attributes from './components/Attributes'

export default function Hero() {
    return (
        <div className="mt-12 flex flex-col items-center justify-center gap-4">
            <div className="mb-8 flex w-full flex-row items-baseline justify-between">
                <div className="flex flex-col">
                    <h1 className="text-4xl font-bold">NLB Case Study</h1>
                    <p className="text-lg text-gray-600">By Tan Jun Peng</p>
                </div>
                <h2 className="text-xl font-semibold text-gray-400">
                    18/4/2026
                </h2>
            </div>
            <img
                className="mb-8 rounded-3xl shadow-lg"
                src={nlbHero}
                alt="NLB Hero"
            />
            <div className="flex w-full flex-row justify-end gap-4">
                <Attributes text="User Testing" />
                <Attributes text="UI / UX" />
                <Attributes text="Figma" />
            </div>
        </div>
    )
}
