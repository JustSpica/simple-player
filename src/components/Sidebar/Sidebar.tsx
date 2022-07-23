import avatarDefault from 'assets/avatar-default.png';
import classNames from 'classnames';

import links from "./links";

export function Sidebar() {
  return(
    <div 
      className="h-full p-6 inline-flex flex-col items-center bg-zinc-800 
      space-y-20"
    >
      <img src={avatarDefault} className="w-12 rounded-full"/>
      <div className='flex flex-col space-y-4'>
        {links.map(link => (
          <button className="group p-3 relative flex items-center rounded 
          text-white bg-zinc-800 transition-all hover:bg-zinc-700"
          >
            {link.icon}
            <div className='translate-y-4 px-4 py-1 absolute left-[150%]
              bg-zinc-50 text-zinc-900 font-semibold rounded 
              pointer-events-none opacity-0 transition-all z-[30]
              group-hover:opacity-100 group-hover:translate-y-0'
            >
              {link.label}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}