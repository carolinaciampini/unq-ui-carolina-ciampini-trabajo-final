import { HiOutlineLink } from 'react-icons/hi2'
import type { GameStatus } from '../../types/game'

type GameHeaderProps = {
  status: GameStatus
}

const statusText: Record<GameStatus, string> = {
  idle: 'Listo para empezar',
  playing: 'Partida en curso',
  finished: 'Partida finalizada',
}

export function GameHeader({ status }: GameHeaderProps) {
  return (
    <header className="mb-7 text-center">
      <p className="mb-4 inline-flex rounded-full bg-violet-soft px-4 py-1 text-xs font-extrabold tracking-[0.16em] text-violet-main">
        JUEGO RAPIDO DE PALABRAS
      </p>

      <h1 className="flex items-center justify-center gap-2 text-3xl font-black leading-tight text-ink sm:text-4xl">
        <HiOutlineLink className="text-3xl text-violet-main" aria-hidden="true" />
        Palabras Encadenadas
      </h1>

      <p className="mx-auto mt-3 max-w-[390px] text-base text-muted sm:text-lg">
        Arma una cadena usando la ultima letra de la palabra anterior.
      </p>

      <p className="mt-4 text-sm font-bold text-violet-main">{statusText[status]}</p>
    </header>
  )
}
