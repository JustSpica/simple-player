import { Play } from 'phosphor-react';


export function Queue() {
  return(
    <div className='w-full p-4 flex items-center bg-zinc-900 rounded-lg'>
      <div className='flex flex-col'>
        <span className='text-white text-sm'>Somebody That I Used To Know</span>
        <span className='text-zinc-400 text-sm'>Gotye</span>
      </div>
      <button 
        className='group ml-8 p-2 bg-white rounded-full text-zinc-900 
        transition-colors hover:bg-amber-600 hover:text-white'
      >
        <Play 
            weight='fill' 
            size={16} 
            className="group-active:scale-75 transition-transform"
          />
      </button>
    </div>
  );
}