import { HiOutlineClock, HiOutlineHashtag, HiOutlineStar } from 'react-icons/hi2'

type GameStatsProps = {
  seconds: number
  score: number
  wordsCount: number
}

export function GameStats({ seconds, score, wordsCount }: GameStatsProps) {
  return (
    <section className="grid gap-3 sm:grid-cols-3" aria-label="Estado de la partida">
      <article className="grid min-h-24 justify-items-center gap-1 rounded-xl bg-[#f4f7f6] px-3 py-3">
        <HiOutlineClock className="text-2xl text-teal-main" aria-hidden="true" />
        <strong className="text-3xl font-black leading-none text-ink">{seconds}s</strong>
        <span className="text-xs font-extrabold uppercase tracking-wide text-[#6c7280]">
          Tiempo
        </span>
      </article>

      <article className="grid min-h-24 justify-items-center gap-1 rounded-xl bg-[#f4f7f6] px-3 py-3">
        <HiOutlineStar className="text-2xl text-teal-main" aria-hidden="true" />
        <strong className="text-xl font-black leading-none text-ink">{score}</strong>
        <span className="text-xs font-extrabold uppercase tracking-wide text-[#6c7280]">
          Puntos
        </span>
      </article>

      <article className="grid min-h-24 justify-items-center gap-1 rounded-xl bg-[#f4f7f6] px-3 py-3">
        <HiOutlineHashtag className="text-2xl text-teal-main" aria-hidden="true" />
        <strong className="text-xl font-black leading-none text-ink">
          {wordsCount}
        </strong>
        <span className="text-xs font-extrabold uppercase tracking-wide text-[#6c7280]">
          Palabras
        </span>
      </article>
    </section>
  )
}
