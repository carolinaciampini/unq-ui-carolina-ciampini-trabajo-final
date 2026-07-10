type GameLayoutProps = {
  children: React.ReactNode
}

export function GameLayout({ children }: GameLayoutProps) {
  return (
    <main className="min-h-screen bg-[#f8fbff] px-4 py-8">
      <section
        className="mx-auto w-full max-w-[576px] rounded-2xl border border-[#ece8f7] bg-white px-5 py-7 shadow-panel sm:px-8 sm:py-10"
        aria-label="Juego Palabras Encadenadas"
      >
        {children}
      </section>
    </main>
  )
}
