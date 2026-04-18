import nlbHero from '@/assets/nlbCaseStudy/nlb-hero.png'
import Attributes from './components/Attributes'
import Header from './components/Header'

export default function Hero() {
    return (
        <div className="mt-12 flex flex-col items-center justify-center gap-4">
            <Header />

            <img
                className="mb-2 rounded-3xl shadow-lg sm:mb-8"
                src={nlbHero}
                alt="NLB Hero"
            />

            <div className="flex w-full flex-row justify-end gap-2 sm:gap-4">
                <Attributes text="User Testing" />
                <Attributes text="UI / UX" />
                <Attributes text="Figma" />
            </div>
        </div>
    )
}
