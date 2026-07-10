export function WordForm() {
  return (
    <form className="my-8">
      <label className="mb-2 block font-extrabold text-ink" htmlFor="word">
        Ingresa una palabra
      </label>

      <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
        <input
          className="min-w-0 rounded-xl border border-[#dfe3ec] bg-white px-4 py-3 text-ink outline-none transition focus:border-violet-main focus:ring-4 focus:ring-violet-soft"
          id="word"
          name="word"
          placeholder="Ej: casa"
          type="text"
          autoComplete="off"
        />
        <button
          className="rounded-xl bg-violet-main px-6 py-3 font-black text-white transition hover:bg-violet-dark"
          type="submit"
        >
          Enviar
        </button>
      </div>

      <p className="mt-3 rounded-xl border border-[#dfe3ec] bg-[#f8fafc] px-4 py-3 text-sm font-semibold text-muted">
        La primera palabra puede ser cualquiera.
      </p>
    </form>
  )
}
