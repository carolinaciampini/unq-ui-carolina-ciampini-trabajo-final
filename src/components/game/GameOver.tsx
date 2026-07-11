import { HiOutlineArrowPath, HiOutlineTrophy } from 'react-icons/hi2'

type GameOverProps = {
  score: number
  wordsCount: number
  onRestart: () => void
}

export function GameOver({ score, wordsCount, onRestart }: GameOverProps) {
  return (
    <section
      className="my-8 rounded-xl border border-teal-soft bg-[#f4f7f6] px-5 py-6 text-center"
      aria-labelledby="game-over-title"
    >
      <HiOutlineTrophy
        className="mx-auto mb-3 text-4xl text-teal-main"
        aria-hidden="true"
      />

      <h2 id="game-over-title" className="text-xl font-black text-ink">
        Se termino el tiempo
      </h2>

      <dl className="my-5 grid grid-cols-2 gap-3">
        <div>
          <dt className="text-xs font-extrabold uppercase tracking-wide text-[#6c7280]">
            Puntaje final
          </dt>
          <dd className="mt-1 text-3xl font-black text-teal-main">{score}</dd>
        </div>

        <div>
          <dt className="text-xs font-extrabold uppercase tracking-wide text-[#6c7280]">
            Palabras
          </dt>
          <dd className="mt-1 text-3xl font-black text-teal-main">
            {wordsCount}
          </dd>
        </div>
      </dl>

      <button
        className="inline-flex items-center gap-2 rounded-xl bg-teal-main px-5 py-3 font-black text-white transition hover:bg-teal-dark"
        type="button"
        onClick={onRestart}
      >
        <HiOutlineArrowPath className="text-xl" aria-hidden="true" />
        Jugar de nuevo
      </button>
    </section>
  )
}
