import { HiOutlineLink } from 'react-icons/hi2'
export function GameHeader() {
  return (
    <header className="mb-5 text-center">
      <p className="mb-3 inline-flex rounded-md bg-teal-soft px-4 py-1 text-xs font-extrabold tracking-[0.16em] text-teal-main">
        JUEGO RAPIDO DE PALABRAS
      </p>

      <h1 className="flex flex-col items-center justify-center gap-1 text-center text-3xl font-black leading-tight text-ink sm:flex-row sm:gap-2 sm:text-[2.15rem]">
        <HiOutlineLink className="text-[1.9rem] text-teal-main sm:text-[1.9rem]" aria-hidden="true" />
        Palabras Encadenadas
      </h1>

      <p className="mx-auto mt-2 max-w-[390px] text-base text-muted">
        Arma una cadena usando la ultima letra de la palabra anterior.
      </p>
    </header>
  )
}
