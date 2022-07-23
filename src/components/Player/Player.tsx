import { Play, Pause, SkipBack, SkipForward, ArrowClockwise, Shuffle } from 'phosphor-react';

export function Player() {
  return(
    <div className="h-full p-10 bg-zinc-800">
      <strong className="text-2xl text-white">Reproduzindo agora</strong>
      <img 
        src='https://i.imgur.com/WQzL6me.jpg'
        className="w-80 h-80 mt-10 rounded-2xl" 
      />
      <div className="w-full mt-6 flex flex-col items-center font-inter text-lg">
        <strong className='text-white'>Happier Than Ever</strong>
        <span className='text-gray-200'>Billie Eilish</span>
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
        <button className='hover:text-zinc-300 transition-colors'>
          <Shuffle size={24}/>
        </button>
        <button className='hover:text-zinc-300 transition-colors'>
          <SkipBack weight='fill' size={24}/>
        </button>
        <button 
          className='p-4 bg-white rounded-full text-zinc-900 
          hover:bg-zinc-200 transition-colors'
        >
          <Play weight='fill' size={24}/>
        </button>
        <button className='hover:text-zinc-300 transition-colors'>
          <SkipForward weight='fill' size={24}/>
        </button>
        <button className='hover:text-zinc-300 transition-colors'>
          <ArrowClockwise size={24}/>
        </button>
      </div>
    </div>
  )
}