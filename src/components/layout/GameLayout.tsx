type GameLayoutProps = {
  children: React.ReactNode
}

export function GameLayout({ children }: GameLayoutProps) {
  return (
    <main className="min-h-screen bg-[#f5f7f6] px-4 py-5 sm:py-6 lg:grid lg:place-items-center">
      <section
        className="mx-auto w-full max-w-[576px] rounded-2xl border border-[#dde5e2] bg-white px-5 py-6 shadow-panel sm:px-7 sm:py-7 lg:max-w-[980px]"
        aria-label="Juego Palabras Encadenadas"
      >
        {children}
      </section>
    </main>
  )
}
