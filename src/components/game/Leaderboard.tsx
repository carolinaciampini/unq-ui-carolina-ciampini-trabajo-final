import { HiOutlineTrophy } from 'react-icons/hi2'
import type { LeaderboardEntry } from '../../types/game'

type LeaderboardProps = {
  entries: LeaderboardEntry[]
}

function getRankStyle(index: number) {
  if (index === 0) {
    return {
      badge: 'bg-teal-main text-white ring-teal-light',
      item: 'border-teal-light bg-teal-soft',
    }
  }

  return {
    badge: 'bg-teal-soft text-teal-main ring-teal-main/20',
    item: 'border-transparent bg-[#f4f7f6]',
  }
}

export function Leaderboard({ entries }: LeaderboardProps) {
  return (
    <section
      className="mt-4 border-t border-[#dfe3ec] pt-4 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0"
      aria-labelledby="leaderboard-title"
    >
      <h2
        className="mb-3 flex items-center gap-2 text-sm font-black uppercase tracking-wide text-[#6c7280]"
        id="leaderboard-title"
      >
        <HiOutlineTrophy className="text-xl text-teal-main" aria-hidden="true" />
        Mejores puntajes
      </h2>

      {entries.length === 0 ? (
        <p className="rounded-xl border border-dashed border-[#dfe3ec] px-4 py-4 text-center text-sm font-semibold text-muted">
          Todavia no hay partidas registradas.
        </p>
      ) : (
        <ol className="grid gap-2 lg:gap-1.5">
          {entries.map((entry, index) => {
            const rankStyle = getRankStyle(index)

            return (
              <li
                className={`grid grid-cols-[auto_1fr_auto] items-center gap-2 rounded-xl border px-3 py-2.5 shadow-sm sm:gap-3 sm:px-4 lg:py-2 ${rankStyle.item}`}
                key={entry.id}
              >
                <span
                  className={`grid h-9 w-9 place-items-center rounded-full text-sm font-black ring-2 lg:h-8 lg:w-8 ${rankStyle.badge}`}
                >
                  {index === 0 ? (
                    <HiOutlineTrophy className="text-xl lg:text-lg" aria-label="Primer puesto" />
                  ) : (
                    index + 1
                  )}
                </span>
                <span className="min-w-0 font-bold text-ink">
                  <span className="block truncate">
                    {entry.playerName || 'Jugador anonimo'}
                  </span>
                  <span className="block text-sm font-semibold text-muted lg:text-xs">
                    {entry.score} puntos
                  </span>
                </span>
                <span className="justify-self-end rounded-full bg-white/70 px-2.5 py-1 text-xs font-extrabold text-muted sm:px-3 sm:text-sm lg:px-2.5 lg:text-xs">
                  {entry.wordsCount} palabras
                </span>
              </li>
            )
          })}
        </ol>
      )}
    </section>
  )
}
