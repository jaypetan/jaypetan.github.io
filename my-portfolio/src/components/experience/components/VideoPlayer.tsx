import { useState, useEffect, useRef } from 'react'
import ReactPlayer from 'react-player'
import sarcVideo from '@/assets/videos/sarcVideo.mp4'
import metevVideo from '@/assets/videos/metevVideo.mp4'
import mentaiyaVideo from '@/assets/videos/mentaiyaVideo.mp4'

export default function VideoPlayer({
    selectedExperience,
}: {
    selectedExperience: string
}) {
    const videoURL = [
        {
            title: 'MET EV',
            url: metevVideo,
        },
        {
            title: 'Mentai-Ya',
            url: mentaiyaVideo,
        },
        {
            title: 'Satellite Research Center',
            url: sarcVideo,
        },
    ]

    type PlayerState = {
        src: string
        playing: boolean
        loop: boolean
        controls: boolean
    }
    const [playerState, setPlayerState] = useState<PlayerState>({
        src: videoURL[0].url,
        playing: true,
        loop: true,
        controls: true,
    })

    const videoRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const videoElement = videoRef.current
        if (!videoElement) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setPlayerState((prev) => ({
                            ...prev,
                            playing: true, // Start playing when in viewport
                        }))
                        console.log('Element is in viewport')
                    } else {
                        setPlayerState((prev) => ({
                            ...prev,
                            playing: false,
                        }))
                        console.log('Element is not in viewport')
                    }
                })
            },
            { threshold: 0.3 }
        )

        observer.observe(videoElement)

        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        // For example, pause video when URL changes
        setPlayerState((prev) => ({
            ...prev,
            src: videoURL.find((video) => video.title === selectedExperience)!
                .url,
        }))
    }, [selectedExperience])

    return (
        <div ref={videoRef}>
            <ReactPlayer
                id="ExperienceVideo"
                src={playerState.src}
                playing={playerState.playing}
                loop={playerState.loop}
                width="100%"
                height="100%"
            />
        </div>
    )
}
