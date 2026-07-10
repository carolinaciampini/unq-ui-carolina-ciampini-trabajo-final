import { useState } from 'react'
import { FeedbackMessage } from './FeedbackMessage'
import type { Feedback } from '../../types/game'

type WordFormProps = {
  feedback: Feedback
  isSubmitting: boolean
  onSubmitWord: (word: string) => Promise<boolean>
}

export function WordForm({
  feedback,
  isSubmitting,
  onSubmitWord,
}: WordFormProps) {
  const [word, setWord] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const wasAdded = await onSubmitWord(word)

    if (wasAdded) {
      setWord('')
    }
  }

  return (
    <form className="my-8" onSubmit={handleSubmit}>
      <label className="mb-2 block font-extrabold text-ink" htmlFor="word">
        Ingresa una palabra
      </label>

      <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
        <input
          className="min-w-0 rounded-xl border border-[#dfe3ec] bg-white px-4 py-3 text-ink outline-none transition focus:border-violet-main focus:ring-4 focus:ring-violet-soft"
          disabled={isSubmitting}
          id="word"
          name="word"
          placeholder="Ej: casa"
          type="text"
          autoComplete="off"
          value={word}
          onChange={(event) => setWord(event.target.value)}
        />
        <button
          className="rounded-xl bg-violet-main px-6 py-3 font-black text-white transition hover:bg-violet-dark disabled:cursor-not-allowed disabled:bg-[#bda7ff]"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? 'Validando...' : 'Enviar'}
        </button>
      </div>

      <FeedbackMessage feedback={feedback} />
    </form>
  )
}
