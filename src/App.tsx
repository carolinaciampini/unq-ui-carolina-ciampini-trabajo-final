import { useMemo, useState } from 'react'
import { GameHeader } from './components/game/GameHeader'
import { GameStats } from './components/game/GameStats'
import { WordChain } from './components/game/WordChain'
import { WordForm } from './components/game/WordForm'
import { GameLayout } from './components/layout/GameLayout'
import type { GameStatus } from './types/game'
import { getWordScore } from './utils/gameRules'
import { normalizeWord } from './utils/normalizeWord'

function App() {
  const [words, setWords] = useState<string[]>([])

  const score = useMemo(
    () => words.reduce((total, word) => total + getWordScore(word), 0),
    [words],
  )

  const gameStatus: GameStatus = words.length > 0 ? 'playing' : 'idle'

  const addWord = (word: string) => {
    const normalizedWord = normalizeWord(word)

    if (normalizedWord.length === 0) {
      return
    }

    setWords((currentWords) => [...currentWords, normalizedWord])
  }

  return (
    <GameLayout>
      <GameHeader status={gameStatus} />
      <GameStats seconds={15} score={score} wordsCount={words.length} />
      <WordForm onSubmitWord={addWord} />
      <WordChain words={words} />
    </GameLayout>
  )
}

export default App
