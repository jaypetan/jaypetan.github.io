import lightbulb from '@/assets/lightbulb.svg'
import { useState, useEffect } from 'react'
export default function Light() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    useEffect(() => {
        const mediaQueryObj = window.matchMedia('(prefers-color-scheme: dark)')
        setTheme(mediaQueryObj.matches ? 'dark' : 'light')
    }, [])

    function toggleTheme() {
        setTheme((prev) => {
            const next = prev === 'light' ? 'dark' : 'light'
            document.body.classList.remove('light', 'dark') // clear both
            document.body.classList.add(next) // add the new one
            return next
        })
    }

    return (
        <div className="relative mx-4 sm:mb-4">
            <div
                className={`${theme === 'light' ? 'opacity-80' : 'opacity-5'} hover: absolute top-2 -left-2 z-10 aspect-square h-3/5 rounded-full bg-yellow-200 shadow-[0px_0px_20px_10px] shadow-yellow-200`}
            />
            <img
                src={lightbulb}
                alt="light-toggle"
                className="relative z-20 w-16 -rotate-25 hover:cursor-pointer active:scale-90 md:w-1/3 xl:w-1/4"
                onClick={toggleTheme}
            />
        </div>
    )
}
