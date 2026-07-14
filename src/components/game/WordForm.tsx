import { useState } from 'react'
import { FeedbackMessage } from './FeedbackMessage'
import type { Feedback } from '../../types/game'

type WordFormProps = {
  feedback: Feedback | null
  isDisabled: boolean
  isPlayerNameDisabled: boolean
  isSubmitting: boolean
  onSubmitWord: (word: string, playerName: string) => Promise<boolean>
}

export function WordForm({
  feedback,
  isDisabled,
  isPlayerNameDisabled,
  isSubmitting,
  onSubmitWord,
}: WordFormProps) {
  const [playerName, setPlayerName] = useState('')
  const [word, setWord] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const wasAdded = await onSubmitWord(word, playerName)

    if (wasAdded) {
      setWord('')
    }
  }

  return (
    <form className="my-5" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="mb-2 block font-extrabold text-ink" htmlFor="player-name">
          Nombre del jugador
        </label>
        <input
          className="w-full rounded-xl border border-[#d8e1de] bg-white px-4 py-2.5 text-ink outline-none transition focus:border-teal-main focus:ring-4 focus:ring-teal-soft disabled:bg-[#f4f7f6]"
          disabled={isDisabled || isSubmitting || isPlayerNameDisabled}
          id="player-name"
          name="playerName"
          placeholder="Ej: Carolina"
          type="text"
          autoComplete="name"
          value={playerName}
          onChange={(event) => setPlayerName(event.target.value)}
        />
      </div>

      <label className="mb-2 block font-extrabold text-ink" htmlFor="word">
        Ingresa una palabra
      </label>

      <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
        <input
          className="min-w-0 rounded-xl border border-[#d8e1de] bg-white px-4 py-2.5 text-ink outline-none transition focus:border-teal-main focus:ring-4 focus:ring-teal-soft"
          disabled={isDisabled || isSubmitting}
          id="word"
          name="word"
          placeholder="Ej: casa"
          type="text"
          autoComplete="off"
          value={word}
          onChange={(event) => setWord(event.target.value)}
        />
        <button
          className="rounded-xl bg-teal-main px-6 py-2.5 font-black text-white transition hover:bg-teal-dark disabled:cursor-not-allowed disabled:bg-teal-light"
          disabled={isDisabled || isSubmitting}
          type="submit"
        >
          {isSubmitting ? 'Validando...' : 'Enviar'}
        </button>
      </div>

      <FeedbackMessage feedback={feedback} />
    </form>
  )
}
