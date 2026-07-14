import { useEffect, useRef, useState } from 'react'
import {
  getLeaderboard,
  saveLeaderboardEntry,
} from '../services/leaderboardStorage'
import { validateWordExists } from '../services/wordApi'
import type { Feedback, GameStatus, LeaderboardEntry } from '../types/game'
import {
  getLastLetter,
  getWordScore,
  respectsChain,
  wasWordUsed,
} from '../utils/gameRules'
import { normalizeWord } from '../utils/normalizeWord'

const TURN_SECONDS = 15
const FEEDBACK_DURATION = 3000
const DEFAULT_PLAYER_NAME = 'Jugador anonimo'

export function useWordGame() {
  const [words, setWords] = useState<string[]>([])
  const [feedback, setFeedback] = useState<Feedback | null>(null)
  const [gameStatus, setGameStatus] = useState<GameStatus>('idle')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>(() =>
    getLeaderboard(),
  )
  const [seconds, setSeconds] = useState(TURN_SECONDS)
  const gameStatusRef = useRef(gameStatus)
  const scoreRef = useRef(0)
  const wasCurrentGameSavedRef = useRef(false)
  const currentGameIdRef = useRef(crypto.randomUUID())
  const playerNameRef = useRef(DEFAULT_PLAYER_NAME)
  const wordsRef = useRef<string[]>([])

  const score = words.reduce((total, word) => total + getWordScore(word), 0)

  useEffect(() => {
    gameStatusRef.current = gameStatus
  }, [gameStatus])

  useEffect(() => {
    scoreRef.current = score
    wordsRef.current = words
  }, [score, words])

  useEffect(() => {
    if (gameStatus !== 'playing') {
      return
    }

    const intervalId = window.setInterval(() => {
      setSeconds((currentSeconds) => {
        if (currentSeconds <= 1) {
          window.clearInterval(intervalId)
          setGameStatus('finished')

          if (wordsRef.current.length > 0 && !wasCurrentGameSavedRef.current) {
            wasCurrentGameSavedRef.current = true
            const updatedLeaderboard = saveLeaderboardEntry({
              id: currentGameIdRef.current,
              playerName: playerNameRef.current,
              score: scoreRef.current,
              wordsCount: wordsRef.current.length,
              date: new Date().toISOString(),
            })

            setLeaderboard(updatedLeaderboard)
          }

          return 0
        }

        return currentSeconds - 1
      })
    }, 1000)

    return () => window.clearInterval(intervalId)
  }, [gameStatus])

  useEffect(() => {
    if (feedback === null) {
      return
    }

    const timeoutId = window.setTimeout(() => {
      setFeedback(null)
    }, FEEDBACK_DURATION)

    return () => window.clearTimeout(timeoutId)
  }, [feedback])

  const submitWord = async (word: string, playerName: string) => {
    if (gameStatus === 'finished') {
      return false
    }

    const normalizedWord = normalizeWord(word)
    const normalizedPlayerName = playerName.trim() || DEFAULT_PLAYER_NAME

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

    if (words.length === 0) {
      playerNameRef.current = normalizedPlayerName
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
    setFeedback(null)
    setGameStatus('idle')
    setIsSubmitting(false)
    setSeconds(TURN_SECONDS)
    wasCurrentGameSavedRef.current = false
    currentGameIdRef.current = crypto.randomUUID()
    playerNameRef.current = DEFAULT_PLAYER_NAME
  }

  return {
    feedback,
    gameStatus,
    isSubmitting,
    leaderboard,
    restartGame,
    score,
    seconds,
    submitWord,
    words,
  }
}
