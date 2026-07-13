import { HiOutlineTrophy } from 'react-icons/hi2'
import type { LeaderboardEntry } from '../../types/game'

type LeaderboardProps = {
  entries: LeaderboardEntry[]
}

export function Leaderboard({ entries }: LeaderboardProps) {
  return (
    <section className="mt-6 border-t border-[#dfe3ec] pt-6" aria-labelledby="leaderboard-title">
      <h2
        className="mb-4 flex items-center gap-2 text-sm font-black uppercase tracking-wide text-[#6c7280]"
        id="leaderboard-title"
      >
        <HiOutlineTrophy className="text-xl text-teal-main" aria-hidden="true" />
        Mejores puntajes
      </h2>

      {entries.length === 0 ? (
        <p className="rounded-xl border border-dashed border-[#dfe3ec] px-4 py-5 text-center text-sm font-semibold text-muted">
          Todavia no hay partidas registradas.
        </p>
      ) : (
        <ol className="grid gap-2">
          {entries.map((entry, index) => (
            <li
              className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-xl bg-[#f4f7f6] px-4 py-3"
              key={entry.id}
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-teal-soft text-sm font-black text-teal-main">
                {index + 1}
              </span>
              <span className="font-bold text-ink">
                {entry.score} puntos
              </span>
              <span className="text-sm font-semibold text-muted">
                {entry.wordsCount} palabras
              </span>
            </li>
          ))}
        </ol>
      )}
    </section>
  )
}
