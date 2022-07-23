import { Play } from 'phosphor-react';

export interface CardProps {
  author: string;
  src: string;
  title: string;
}

export function Card({ author, src, title }: CardProps) {
  return(
    <div className="group w-full h-full relative rounded-2xl">
      <div className="h-full w-full absolute bg-gradient-to-r from-[#121212]
      via-[#121212] z-10 rounded-l-2xl"/>
      <img 
        src={src} 
        className="h-full absolute right-0 rounded-r-2xl" 
      />
      <div 
        className="w-1/2 h-full pl-8 pb-8 absolute flex flex-col justify-end 
        z-20"
      >
        <button className='group p-3 absolute top-12 bg-white rounded-full
          text-zinc-900 hover:bg-amber-600 opacity-0 hover:text-white 
          group-hover:opacity-100 transition-all'
        >
          <Play 
            weight='fill' 
            size={20} 
            className="group-active:scale-75 transition-transform"
          />
        </button>
        <strong className="text-white text-2xl">
          {title.length > 17 ? `${title.slice(0, 17)}...` : title}
        </strong>
        <span className="text-zinc-400">{author}</span>
      </div>
    </div>
  )
}