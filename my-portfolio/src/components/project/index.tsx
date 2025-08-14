import { useState } from 'react'
export default function Project() {
    const [selectedProject, setSelectedProject] = useState('')
    return (
        <>
            <section className="flex h-dvh min-h-dvh flex-col">
                <h1>Projects</h1>
                <div className="mt-4 grid h-3/5 w-full grid-rows-5 gap-4">
                    <div
                        className={`${selectedProject === 'Dont Drown' ? 'row-span-3' : ''} border-secondary w-full border-2`}
                    >
                        <div
                            className="bg-secondary/20 flex h-full flex-col justify-center p-4 hover:cursor-pointer"
                            onClick={() => setSelectedProject('Dont Drown')}
                        >
                            <h3>Don't Drown</h3>
                            <p>Game Development</p>
                        </div>
                    </div>
                    <div className="border-primary w-full border-2">
                        <div className="bg-primary/20 flex h-full flex-col justify-center p-4">
                            <h3>Don't Drown</h3>
                            <p>Game Development</p>
                        </div>
                    </div>
                    <div className="border-secondary w-full border-2">
                        <div className="bg-secondary/20 flex h-full flex-col justify-center p-4">
                            <h3>Don't Drown</h3>
                            <p>Game Development</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
