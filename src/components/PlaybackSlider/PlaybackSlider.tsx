import { useEffect, useRef, useState } from "react";
import Slider from "rc-slider";

import { usePlayer } from "hooks";

import { convertDurationToTimeString } from "utils/convertDurationToTimeString";

import "rc-slider/assets/index.css";

export function PlaybackSlider() {
  const [progress, setProgress] = useState(0);

  const audioRef = useRef<HTMLAudioElement>(null);

  const { current } = usePlayer();

  useEffect(() => {
    if (!audioRef.current) return;

    if (current.isPlay) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [current]);

  function changeCurrentProgress() {
    if (!audioRef.current) return;

    audioRef.current.addEventListener("timeupdate", () => {
      if (!audioRef.current) return;

      return setProgress(Math.floor(audioRef.current.currentTime));
    });
  }

  function handleDragProgressSlider(amount: number) {
    if(!audioRef.current) return;

    audioRef.current.currentTime = amount;
    setProgress(amount);
  }

  return (
    <div
      className="grid grid-cols-[0.2fr_1fr_0.2fr] gap-2 items-center 
      justify-between mt-6 text-white"
    >
      <span className="text-sm text-center">
        {convertDurationToTimeString(progress)}
      </span>
      <Slider
        max={current.file.duration}
        value={progress}
        trackStyle={{ backgroundColor: "#f59e0b" }}
        railStyle={{ backgroundColor: "#18181b" }}
        handleStyle={{
          borderColor: "#f59e0b",
          borderWidth: 4,
          boxShadow: "none",
          backgroundColor: "#f59e0b",
        }}
        onChange={(amount) => handleDragProgressSlider(Number(amount))}
      />
      <span className="text-sm text-center">
        {convertDurationToTimeString(current.file.duration)}
      </span>

      {current.id && (
        <audio
          ref={audioRef}
          src={current.file.path}
          autoPlay
          onLoadedMetadata={changeCurrentProgress}
        />
      )}
    </div>
  );
}
