import { createContext, ReactNode, useCallback, useState } from 'react';

import { 
  PlayerContextProps, 
  PlayerProviderProps, 
  MusicDataProps, 
  CurrentProps,
} from './@types/player';

export const PlayerContext = createContext({} as PlayerContextProps);

export function PlayerProvider({ children }: PlayerProviderProps) {
  const [current, setCurrent] = useState({} as CurrentProps);
  
  const handlePlay = useCallback((music: MusicDataProps) => {
    setCurrent({ ...music, isPlay: true });
  }, [])

  const handlePause = useCallback(() => {
    setCurrent(prevState => ({...prevState, isPlay: false}));
  }, [])

  console.log(current);

  return(
    <PlayerContext.Provider value={{ current, handlePlay, handlePause }}>
      {children}
    </PlayerContext.Provider>
  )
}