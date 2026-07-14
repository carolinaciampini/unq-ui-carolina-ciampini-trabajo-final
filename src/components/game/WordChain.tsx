import { HiOutlineLink } from 'react-icons/hi2'

type WordChainProps = {
  words: string[]
}

export function WordChain({ words }: WordChainProps) {
  return (
    <section className="border-t border-[#dfe3ec] pt-4" aria-labelledby="chain-title">
      <h2
        className="mb-3 flex items-center gap-2 text-sm font-black uppercase tracking-wide text-[#6c7280]"
        id="chain-title"
      >
        <HiOutlineLink className="text-xl text-teal-main" aria-hidden="true" />
        Cadena
      </h2>

      {words.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-1 rounded-xl bg-[#f8faf9] px-4 py-4 text-center sm:flex-row sm:gap-2">
          <HiOutlineLink className="text-2xl text-teal-light" aria-hidden="true" />
          <p className="m-0 text-sm font-semibold text-muted sm:text-base">
            Todavia no ingresaste palabras. Empeza con la primera.
          </p>
        </div>
      ) : (
        <ol className="flex flex-wrap gap-2 p-0">
          {words.map((word) => (
            <li
              className="animate-word-pop list-none rounded-full bg-teal-soft px-3 py-2 font-extrabold text-ink shadow-sm"
              key={word}
            >
              {word}
            </li>
          ))}
        </ol>
      )}
    </section>
  )
}
