import Nav from './component/Nav'
import AboutMe from './component/AboutMe'
import Skillset from './component/Skillset'
import heroPic from '@/assets/heroPic.jpg'
import Light from './component/Light'

export default function Hero() {
    return (
        <>
            <section className="flex flex-col lg:grid lg:min-h-[100dvh] lg:grid-cols-[3fr_5fr]">
                <div className="my-4 flex flex-row-reverse justify-between gap-2 text-nowrap lg:flex-col">
                    <div className="flex flex-col text-right text-nowrap lg:text-left">
                        <Nav />
                    </div>
                    <Light />
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col-reverse sm:grid sm:grid-cols-2 xl:grid-cols-[2fr_3fr]">
                        <div className="mt-4 flex flex-col gap-2 pr-4">
                            <AboutMe />
                        </div>
                        <div className="flex items-center justify-center">
                            <img
                                src={heroPic}
                                alt="Tan Jun Peng"
                                className="aspect-square h-[20rem] w-[20rem] rounded-full object-cover lg:aspect-auto lg:h-full lg:w-[20rem] lg:rounded-none"
                            />
                        </div>
                    </div>
                    <div className="flex h-full flex-col justify-center">
                        <Skillset />
                    </div>
                </div>
            </section>
        </>
    )
}
