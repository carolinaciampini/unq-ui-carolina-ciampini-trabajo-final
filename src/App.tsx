import { useState } from 'react'
import { GameHeader } from './components/game/GameHeader'
import { GameStats } from './components/game/GameStats'
import { WordChain } from './components/game/WordChain'
import { WordForm } from './components/game/WordForm'
import { GameLayout } from './components/layout/GameLayout'
import { validateWordExists } from './services/wordApi'
import type { Feedback, GameStatus } from './types/game'
import {
  getLastLetter,
  getWordScore,
  respectsChain,
  wasWordUsed,
} from './utils/gameRules'
import { normalizeWord } from './utils/normalizeWord'

function App() {
  const [words, setWords] = useState<string[]>([])
  const [feedback, setFeedback] = useState<Feedback>({
    type: 'info',
    message: 'La primera palabra puede ser cualquiera.',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const score = words.reduce((total, word) => total + getWordScore(word), 0)

  const gameStatus: GameStatus = words.length > 0 ? 'playing' : 'idle'

  const addWord = async (word: string) => {
    const normalizedWord = normalizeWord(word)

    if (normalizedWord.length === 0) {
      setFeedback({
        type: 'error',
        message: 'Ingresa una palabra para jugar.',
      })
      return false
    }

    if (wasWordUsed(normalizedWord, words)) {
      setFeedback({
        type: 'error',
        message: 'Esa palabra ya fue utilizada.',
      })
      return false
    }

    const previousWord = words.at(-1)

    if (!respectsChain(normalizedWord, previousWord)) {
      setFeedback({
        type: 'error',
        message: `La palabra debe empezar con ${getLastLetter(previousWord ?? '').toUpperCase()}.`,
      })
      return false
    }

    setIsSubmitting(true)

    try {
      const exists = await validateWordExists(normalizedWord)

      if (!exists) {
        setFeedback({
          type: 'error',
          message: 'La palabra no existe en el diccionario.',
        })
        return false
      }

      setWords((currentWords) => [...currentWords, normalizedWord])
      setFeedback({
        type: 'success',
        message: 'Palabra agregada a la cadena.',
      })
      return true
    } catch {
      setFeedback({
        type: 'error',
        message: 'No se pudo validar la palabra. Intenta de nuevo.',
      })
      return false
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <GameLayout>
      <GameHeader status={gameStatus} />
      <GameStats seconds={15} score={score} wordsCount={words.length} />
      <WordForm
        feedback={feedback}
        isSubmitting={isSubmitting}
        onSubmitWord={addWord}
      />
      <WordChain words={words} />
    </GameLayout>
  )
}

export default App
