import { Play, Pause, SkipBack, SkipForward, ArrowClockwise, Shuffle } from 'phosphor-react';

import { Queue } from 'components';

export function Player() {
  return(
    <div className="h-full p-10 bg-zinc-800 overflow-y-auto scrollbar">
      <strong className="text-2xl text-white">Reproduzindo agora</strong>
      <img 
        src='https://i.imgur.com/WQzL6me.jpg'
        className="w-80 h-80 mt-10 rounded-2xl" 
      />
      <div className="w-full mt-6 flex flex-col items-center font-inter text-lg">
        <strong className='text-white'>Happier Than Ever</strong>
        <span className='text-zinc-400'>Billie Eilish</span>
      </div>
      <div className="flex justify-center items-center mt-6 space-x-4 text-white">
        <span className="text-sm">00:00</span>
        <span className="h-4 block flex-1 bg-zinc-900 rounded-full" />
        <span className="text-sm">05:15</span>
      </div>
      <div 
        className='mt-6 flex justify-center items-center flex-1 gap-6 
        text-white'
      >
        <button className='hover:text-amber-600 transition-colors'>
          <Shuffle size={24}/>
        </button>
        <button className='hover:text-amber-600 transition-colors'>
          <SkipBack weight='fill' size={24}/>
        </button>
        <button className='group p-4 bg-white rounded-full text-zinc-900 
          transition-colors hover:bg-amber-600 hover:text-white'
        >
          <Play 
            weight='fill' 
            size={24} 
            className="group-active:scale-75 transition-transform"
          />
        </button>
        <button className='hover:text-amber-600 transition-colors'>
          <SkipForward weight='fill' size={24}/>
        </button>
        <button className='hover:text-amber-600 transition-colors'>
          <ArrowClockwise size={24}/>
        </button>
      </div>
      <strong className='mt-12 block text-white text-xl'>Sua Fila</strong>
      <div className='mt-6 space-y-4'>
        <Queue />
        <Queue />
        <Queue />
        <Queue />
      </div>
    </div>
  )
}