import { Play, Pause } from 'phosphor-react';

import { MusicDataProps } from 'contexts/@types/player';

import { usePlayer } from 'hooks';

import { convertDurationToTimeString } from 'utils/convertDurationToTimeString';

export interface CardProps {
  data: MusicDataProps;
}

export function Card({ data }: CardProps) {
  const { current, handlePlay, handlePause } = usePlayer();

  const durationFormat = convertDurationToTimeString(data.file.duration);

  return(
    <div className="group w-full h-full relative rounded-2xl">
      <div className="h-full w-full absolute bg-gradient-to-r from-[#121212]
      via-[#121212] z-10 rounded-l-2xl"/>
      <img 
        src={data.thumbnail} 
        className="h-full absolute right-0 rounded-r-2xl" 
      />
      <div 
        className="w-1/2 h-full pl-8 pb-8 absolute flex flex-col justify-end 
        z-20"
      >
        <button 
          className='group p-3 absolute top-12 bg-white rounded-full
          text-zinc-900 hover:bg-amber-600 opacity-0 hover:text-white 
          group-hover:opacity-100 transition-all'
          onClick={() => {
            if(!current.id || current.id !== data.id || !current.isPlay) {
              return handlePlay(data);
            }
            
            handlePause();
          }}
        >
          {current.id === data.id && current.isPlay ? (
            <Pause 
              weight='fill' 
              size={20} 
              className="group-active:scale-75 transition-transform"
            />
          ): (
            <Play 
              weight='fill' 
              size={20} 
              className="group-active:scale-75 transition-transform"
            />
          )}
          
        </button>
        <strong className="text-white text-2xl capitalize">
          {data.title.length > 17 ? `${data.title.slice(0, 17)}...` : data.title}
        </strong>
        <div className="text-zinc-400 space-x-2">
          <span>{data.author}</span>
          <span className='text-sm'>
            {durationFormat}
          </span>
        </div>
      </div>
    </div>
  )
}