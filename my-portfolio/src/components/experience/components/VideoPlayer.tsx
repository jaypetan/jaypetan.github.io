import { useState, useEffect } from 'react'
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
        playing: false,
        loop: true,
        controls: true,
    })

    useEffect(() => {
        const videoElement = document.getElementById('ExperienceVideo')
        if (!videoElement) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        console.log('Element is in viewport')
                    } else {
                        console.log('Element is not in viewport')
                    }
                })
            },
            {
                threshold: 0.1, // trigger when at least 10% visible
            }
        )

        observer.observe(videoElement)

        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        // For example, pause video when URL changes
        setPlayerState((prev) => ({
            ...prev,
            playing: true,
            src: videoURL.find((video) => video.title === selectedExperience)!
                .url,
        }))
    }, [selectedExperience])

    return (
        <>
            <ReactPlayer
                id="ExperienceVideo"
                src={playerState.src}
                playing={playerState.playing}
                loop={playerState.loop}
                width="100%"
                height="100%"
            />
        </>
    )
}
