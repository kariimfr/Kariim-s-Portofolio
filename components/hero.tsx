export function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl overflow-hidden px-6 pb-16 pt-20 md:pb-24 md:pt-28"><div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <p className="mb-6 flex items-center gap-2 text-sm font-medium text-muted-foreground">
        <span className="inline-block h-2 w-2 rounded-full bg-primary" />
        Tersedia untuk proyek freelance
      </p>

      <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-balance sm:text-6xl md:text-8xl">
        Desainer produk <span className="text-primary">&amp;</span> developer
      </h1>

      <div className="mt-8 grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
        <div>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Halo, saya Raka Pratama. Saya merancang dan membangun antarmuka digital
            yang rapi, cepat, dan bermakna — dari ide awal hingga produk yang siap
            digunakan.
          </p>
          <div className="mt-6 flex items-center gap-3" aria-label="Media sosial Raka">
            <span className="mr-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Temui saya</span>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="group flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-all hover:-translate-y-1 hover:border-[#be185d] hover:bg-[#fce7f3] hover:text-[#be185d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" className="fill-current stroke-none" /></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="group flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-all hover:-translate-y-1 hover:border-[#1d4ed8] hover:bg-[#dbeafe] hover:text-[#1d4ed8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M5.2 7.2A2.2 2.2 0 1 0 5.2 2.8a2.2 2.2 0 0 0 0 4.4ZM3.3 21h3.8V9H3.3v12ZM9.5 9v12h3.8v-6.1c0-1.6.3-3.2 2.3-3.2 1.9 0 1.9 1.8 1.9 3.3V21h3.8v-6.8c0-3.3-.7-5.8-4.7-5.8-1.9 0-3.2 1-3.7 2h-.1V9H9.5Z" /></svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="group flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-all hover:-translate-y-1 hover:border-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.7-1.3-2.3-.3-4.7-1.1-4.7-5a3.9 3.9 0 0 1 1-2.7c-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.5 9.5 0 0 1 5.1 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7a3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.7-4.7 5 .4.3.7 1 .7 1.9v2.7c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.5Z" /></svg>
            </a>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 md:justify-end">
          <a
            href="#karya"
            className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Lihat karya
          </a>
        </div>
      </div>

      <dl className="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-8 sm:grid-cols-4">
        {[
          { value: '6+', label: 'Tahun pengalaman' },
          { value: '40+', label: 'Proyek selesai' },
          { value: '25+', label: 'Klien senang' },
          { value: '12', label: 'Penghargaan desain' },
        ].map((stat) => (
          <div key={stat.label}>
            <dt className="font-display text-3xl font-bold md:text-4xl">{stat.value}</dt>
            <dd className="mt-1 text-sm text-muted-foreground">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
