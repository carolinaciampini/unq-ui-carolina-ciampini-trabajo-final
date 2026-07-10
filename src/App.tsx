import { GameHeader } from './components/game/GameHeader'
import { GameOver } from './components/game/GameOver'
import { GameStats } from './components/game/GameStats'
import { WordChain } from './components/game/WordChain'
import { WordForm } from './components/game/WordForm'
import { GameLayout } from './components/layout/GameLayout'
import { useWordGame } from './hooks/useWordGame'

function App() {
  const {
    feedback,
    gameStatus,
    isSubmitting,
    restartGame,
    score,
    seconds,
    submitWord,
    words,
  } = useWordGame()
  const isGameFinished = gameStatus === 'finished'

  return (
    <GameLayout>
      <GameHeader status={gameStatus} />
      <GameStats seconds={seconds} score={score} wordsCount={words.length} />
      {isGameFinished ? (
        <GameOver
          score={score}
          wordsCount={words.length}
          onRestart={restartGame}
        />
      ) : (
        <WordForm
          feedback={feedback}
          isDisabled={isGameFinished}
          isSubmitting={isSubmitting}
          onSubmitWord={submitWord}
        />
      )}
      <WordChain words={words} />
    </GameLayout>
  )
}

export default App
