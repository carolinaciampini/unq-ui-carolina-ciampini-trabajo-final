import { GameHeader } from '../../components/game/GameHeader'
import { GameOver } from '../../components/game/GameOver'
import { GameStats } from '../../components/game/GameStats'
import { Leaderboard } from '../../components/game/Leaderboard'
import { WordChain } from '../../components/game/WordChain'
import { WordForm } from '../../components/game/WordForm'
import { GameLayout } from '../../components/layout/GameLayout'
import { useWordGame } from '../../hooks/useWordGame'

export function GamePage() {
  const {
    feedback,
    gameStatus,
    isSubmitting,
    leaderboard,
    restartGame,
    score,
    seconds,
    submitWord,
    words,
  } = useWordGame()
  const isGameFinished = gameStatus === 'finished'

  return (
    <GameLayout>
        <GameHeader />
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">
        <div>
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
              isPlayerNameDisabled={gameStatus !== 'idle'}
              isSubmitting={isSubmitting}
              onSubmitWord={submitWord}
            />
          )}
          <WordChain words={words} />
        </div>
        <Leaderboard entries={leaderboard} />
      </div>
    </GameLayout>
  )
}
