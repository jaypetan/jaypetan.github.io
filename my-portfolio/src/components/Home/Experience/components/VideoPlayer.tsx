import { useState, useEffect, useRef } from 'react'
import ReactPlayer from 'react-player'
import sarcVideo from '@/assets/videos/sarcVideo.mp4'
import metevVideo from '@/assets/videos/metevVideo.mp4'
import mentaiyaVideo from '@/assets/videos/mentaiyaVideo.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePause } from '@fortawesome/free-solid-svg-icons'

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
        loading: boolean
        loop: boolean
        controls: boolean
    }
    const [playerState, setPlayerState] = useState<PlayerState>({
        src: videoURL[0].url,
        playing: true,
        loading: false,
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
                    } else {
                        setPlayerState((prev) => ({
                            ...prev,
                            playing: false,
                        }))
                    }
                })
            },
            { threshold: 0.3 } // When 0.3 of video is shown, the video will play if not will pause
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
        <div
            ref={videoRef}
            className="relative h-0 w-full overflow-hidden rounded-lg bg-black/50 pt-[56.25%]"
        >
            <ReactPlayer
                id="ExperienceVideo"
                src={playerState.src}
                playing={playerState.playing}
                loop={playerState.loop}
                width="100%"
                height="100%"
                className="absolute top-0 left-0 cursor-pointer"
                onWaiting={() =>
                    setPlayerState((prev) => ({ ...prev, loading: false }))
                }
                onSeeking={() =>
                    setPlayerState((prev) => ({ ...prev, loading: false }))
                }
                onPlaying={() =>
                    setPlayerState((prev) => ({ ...prev, loading: true }))
                }
                playsInline
                muted
                aria-placeholder="Video player"
                onClick={() =>
                    setPlayerState((prev) => ({
                        ...prev,
                        playing: !prev.playing,
                    }))
                }
            />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                {!playerState.playing && (
                    <FontAwesomeIcon
                        icon={faCirclePause}
                        className="text-6xl text-white opacity-70"
                    />
                )}
            </div>
            <div
                className={`${playerState.loading ? 'hidden' : ''} loader absolute inset-0 m-auto`}
            />
        </div>
    )
}
