type GameLayoutProps = {
  children: React.ReactNode
}

export function GameLayout({ children }: GameLayoutProps) {
  return (
    <main className="min-h-screen bg-[#f5f7f6] px-4 py-8">
      <section
        className="mx-auto w-full max-w-[576px] rounded-2xl border border-[#dde5e2] bg-white px-5 py-7 shadow-panel sm:px-8 sm:py-10"
        aria-label="Juego Palabras Encadenadas"
      >
        {children}
      </section>
    </main>
  )
}
