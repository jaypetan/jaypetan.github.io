import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import sarcVideo from "@/assets/videos/sarcVideo.mp4";

export default function VideoPlayer({
  selectedExperience,
}: {
  selectedExperience: string;
}) {
  //   TODO CHANGE THE VIDEO
  const videoURL = [
    {
      title: "MET EV",
      url: sarcVideo,
    },
    {
      title: "Mentai-Ya",
      url: sarcVideo,
    },
    {
      title: "Satellite Research Center",
      url: sarcVideo,
    },
  ];

  type PlayerState = {
    src: string;
    playing: boolean;
    loop: boolean;
    controls: boolean;
  };
  const [playerState, setPlayerState] = useState<PlayerState>({
    src: videoURL[0].url,
    playing: false,
    loop: true,
    controls: true,
  });

  useEffect(() => {
    // For example, pause video when URL changes
    setPlayerState((prev) => ({
      ...prev,
      playing: true,
      src: videoURL.find((video) => video.title === selectedExperience)!.url,
    }));
  }, [selectedExperience]);

  return (
    <>
      <ReactPlayer
        src={playerState.src}
        playing={playerState.playing}
        loop={playerState.loop}
        width="100%"
        height="100%"
        className="bg-primary pl-8 pr-2"
      />
    </>
  );
}
