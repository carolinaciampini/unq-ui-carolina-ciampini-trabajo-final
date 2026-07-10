type GameLayoutProps = {
  children: React.ReactNode
}

export function GameLayout({ children }: GameLayoutProps) {
  return (
    <main className="min-h-screen bg-[#f8fbff] bg-[linear-gradient(90deg,rgba(232,226,255,0.7),transparent_28%),linear-gradient(270deg,rgba(216,244,255,0.8),transparent_28%)] px-4 py-8">
      <section
        className="mx-auto w-full max-w-[576px] rounded-[28px] border border-[#ece8f7] bg-white px-5 py-7 shadow-panel sm:px-8 sm:py-10"
        aria-label="Juego Palabras Encadenadas"
      >
        {children}
      </section>
    </main>
  )
}
