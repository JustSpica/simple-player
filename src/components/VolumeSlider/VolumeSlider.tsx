import { 
  SpeakerHigh, 
  SpeakerLow, 
  SpeakerNone, 
  SpeakerSlash 
} from 'phosphor-react';
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
import { useState } from 'react';

export interface VolumeSliderProps {
  audioRef: React.RefObject<HTMLAudioElement>;
  volume: number;
  onChangeVolume: (amount: number) => void;
}

export function VolumeSlider({ 
  audioRef, 
  onChangeVolume, 
  volume 
}: VolumeSliderProps) {
  const [isMuted, setIsMuted] = useState(false);

  function handleDragVolumeSlider(amount: number) {
    if(!audioRef.current) return;

    audioRef.current.volume = amount;
    onChangeVolume(amount);
    setIsMuted(false);
  }

  function handleMutedPlayer() {
    if(!audioRef.current) return;

    audioRef.current.volume = !isMuted ? 0 : volume;
    setIsMuted(!isMuted);
  }

  return(
    <div className="mt-6 flex items-center space-x-4">
      <button onClick={handleMutedPlayer}>
        {isMuted ? (
          <SpeakerSlash className="text-white" size={24} />
        ) : volume === 0 ? (
          <SpeakerNone className="text-white" size={24}/>
        ) : volume > 0.5 ? (
          <SpeakerHigh className="text-white" size={24}/>
        ) : (
          <SpeakerLow className="text-white" size={24}/>
        )}
      </button>
      <Slider
        max={1}
        step={0.01}
        value={volume}
        trackStyle={{ backgroundColor: "#f59e0b" }}
        railStyle={{ backgroundColor: "#18181b" }}
        handleStyle={{
          borderColor: "#f59e0b",
          borderWidth: 4,
          boxShadow: "none",
          backgroundColor: "#f59e0b",
        }}
        onChange={amount => handleDragVolumeSlider(Number(amount))}
      />
    </div>
  )
}