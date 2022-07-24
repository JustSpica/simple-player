import { useContext } from 'react';

import { PlayerContext } from 'contexts/PlayerContext';

export function usePlayer() {
  const context = useContext(PlayerContext);

  return context;
}

