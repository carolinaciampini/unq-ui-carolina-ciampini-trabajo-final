import { HiOutlineLink } from 'react-icons/hi2'

type WordChainProps = {
  words: string[]
}

export function WordChain({ words }: WordChainProps) {
  return (
    <section className="border-t border-[#dfe3ec] pt-6" aria-labelledby="chain-title">
      <h2
        className="mb-4 flex items-center gap-2 text-sm font-black uppercase tracking-wide text-[#6c7280]"
        id="chain-title"
      >
        <HiOutlineLink className="text-xl text-violet-main" aria-hidden="true" />
        Cadena
      </h2>

      {words.length === 0 ? (
        <div className="grid min-h-32 place-items-center rounded-xl border-2 border-dashed border-[#dfe3ec] p-6 text-center">
          <HiOutlineLink className="text-4xl text-violet-light" aria-hidden="true" />
          <p className="m-0 text-muted">
            Todavia no ingresaste palabras. Empeza con la primera.
          </p>
        </div>
      ) : (
        <ol className="flex flex-wrap gap-2 p-0">
          {words.map((word) => (
            <li
              className="list-none rounded-full bg-violet-soft px-3 py-2 font-extrabold text-ink"
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
