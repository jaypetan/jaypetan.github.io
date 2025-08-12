import Nav from './component/Nav'
import AboutMe from './component/AboutMe'
import Skillset from './component/Skillset'
import heroPic from '@/assets/heroPic.jpg'
import Light from './component/Light'

export default function Hero() {
    return (
        <>
            <section className="flex flex-col lg:grid lg:h-[100dvh] lg:grid-cols-[1fr_2fr] xl:grid-cols-2">
                <div className="my-4 flex flex-row-reverse justify-between gap-2 text-nowrap lg:flex-col">
                    <div className="flex flex-col text-nowrap text-right lg:text-left">
                        <Nav />
                    </div>
                   
                        <Light />
                    
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex grid-cols-2 flex-col-reverse sm:grid">
                        <div className="mt-4 flex flex-col gap-2 pr-4">
                            <AboutMe />
                        </div>
                        <div>
                            <img
                                src={heroPic}
                                alt="Tan Jun Peng"
                                className="aspect-square h-full w-3/4 rounded-full object-cover md:aspect-auto md:w-full md:rounded-none "
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
