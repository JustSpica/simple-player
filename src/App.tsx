import { PlayerProvider } from 'contexts/PlayerContext'

import { Home } from './pages/Home'

function App() {
  return (
    <PlayerProvider>
      <Home />
    </PlayerProvider>
  )
}

export default App
