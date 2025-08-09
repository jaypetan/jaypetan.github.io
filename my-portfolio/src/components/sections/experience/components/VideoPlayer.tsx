import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import sarcVideo from "@/assets/videos/sarcVideo.mp4";
export default function VideoPlayer() {
  const playerRef = React.useRef<HTMLVideoElement>(null);
  const urlInputRef = React.useRef<HTMLInputElement>(null);

  type PlayerState = {
    src: string;
    playing: boolean;
    loop: boolean;
    controls: boolean;
  };
  const [playerState, setPlayerState] = useState<PlayerState>({
    src: sarcVideo,
    playing: false,
    loop: false,
    controls: true,
  });

  return (
    <>
      <ReactPlayer
        ref={playerRef}
        src={playerState.src}
        playing={playerState.playing}
        loop={playerState.loop}
        controls={playerState.controls}
        width="100%"
        height="100%"
        className="bg-black"
      />
    </>
  );
}
