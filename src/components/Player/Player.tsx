import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  ArrowClockwise,
  Shuffle,
} from "phosphor-react";

import { PlaybackSlider, Queue } from "components";
import { ButtonAction } from "./components/ButtonAction";

import { usePlayer } from "hooks";

export function Player() {
  const { current, handlePause, handlePlay } = usePlayer();

  return (
    <div className="h-full p-10 bg-zinc-800 overflow-y-auto scrollbar">
      <strong className="text-2xl text-white">Reproduzindo agora</strong>
      {current.id ? (
        <img src={current.thumbnail} className="w-80 h-80 mt-10 rounded-2xl" />
      ) : (
        <div
          className="w-80 h-80 p-4 mt-10 rounded-2xl bg-zinc-900 flex 
          items-center text-center text-white"
        >
          <span>Escolha uma música para reproduzir</span>
        </div>
      )}

      {current.id && (
        <>
          <div className="w-full mt-6 flex flex-col items-center font-inter text-lg">
            <strong className="text-white capitalize">{current.title}</strong>
            <span className="text-zinc-400">{current.author}</span>
          </div>
          <PlaybackSlider />
        </>
      )}

      <div className="mt-6 flex justify-center items-center flex-1 gap-6">
        <ButtonAction disabled={!current.id}>
          <Shuffle size={24} />
        </ButtonAction>
        <ButtonAction disabled={!current.id}>
          <SkipBack weight="fill" size={24} />
        </ButtonAction>
        <ButtonAction
          play
          onClick={() =>
            current.id && (current.isPlay ? handlePause() : handlePlay(current))
          }
          disabled={!current.id}
        />
        <ButtonAction disabled={!current.id}>
          <SkipForward weight="fill" size={24} />
        </ButtonAction>
        <ButtonAction disabled={!current.id}>
          <ArrowClockwise size={24} />
        </ButtonAction>
      </div>
      <strong className="mt-12 block text-white text-xl">Sua Fila</strong>
      <div className="mt-6 space-y-4">
        <Queue />
        <Queue />
        <Queue />
        <Queue />
      </div>
    </div>
  );
}
