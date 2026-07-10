import { useEffect, useRef, useState } from 'react'
import { validateWordExists } from '../services/wordApi'
import type { Feedback, GameStatus } from '../types/game'
import {
  getLastLetter,
  getWordScore,
  respectsChain,
  wasWordUsed,
} from '../utils/gameRules'
import { normalizeWord } from '../utils/normalizeWord'

const initialFeedback: Feedback = {
  type: 'info',
  message: 'La primera palabra puede ser cualquiera.',
}

const TURN_SECONDS = 15

export function useWordGame() {
  const [words, setWords] = useState<string[]>([])
  const [feedback, setFeedback] = useState<Feedback>(initialFeedback)
  const [gameStatus, setGameStatus] = useState<GameStatus>('idle')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [seconds, setSeconds] = useState(TURN_SECONDS)
  const gameStatusRef = useRef(gameStatus)

  const score = words.reduce((total, word) => total + getWordScore(word), 0)

  useEffect(() => {
    gameStatusRef.current = gameStatus
  }, [gameStatus])

  useEffect(() => {
    if (gameStatus !== 'playing') {
      return
    }

    const intervalId = window.setInterval(() => {
      setSeconds((currentSeconds) => {
        if (currentSeconds <= 1) {
          window.clearInterval(intervalId)
          setGameStatus('finished')
          setFeedback({
            type: 'info',
            message: 'Se termino el tiempo.',
          })
          return 0
        }

        return currentSeconds - 1
      })
    }, 1000)

    return () => window.clearInterval(intervalId)
  }, [gameStatus])

  const submitWord = async (word: string) => {
    if (gameStatus === 'finished') {
      return false
    }

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

      if (gameStatusRef.current === 'finished') {
        return false
      }

      setWords((currentWords) => [...currentWords, normalizedWord])
      setGameStatus('playing')
      setSeconds(TURN_SECONDS)
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

  const restartGame = () => {
    setWords([])
    setFeedback(initialFeedback)
    setGameStatus('idle')
    setIsSubmitting(false)
    setSeconds(TURN_SECONDS)
  }

  return {
    feedback,
    gameStatus,
    isSubmitting,
    restartGame,
    score,
    seconds,
    submitWord,
    words,
  }
}
