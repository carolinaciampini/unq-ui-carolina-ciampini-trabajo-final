import { GameHeader } from './components/game/GameHeader'
import { GameStats } from './components/game/GameStats'
import { WordChain } from './components/game/WordChain'
import { WordForm } from './components/game/WordForm'
import { GameLayout } from './components/layout/GameLayout'
import type { GameStatus } from './types/game'

const initialWords: string[] = []
const gameStatus: GameStatus = 'idle'

function App() {
  return (
    <GameLayout>
      <GameHeader status={gameStatus} />
      <GameStats seconds={15} score={0} wordsCount={initialWords.length} />
      <WordForm />
      <WordChain words={initialWords} />
    </GameLayout>
  )
}

export default App
