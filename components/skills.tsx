const services = [
  {
    title: 'Desain Produk',
    detail:
      'Riset pengguna, wireframe, prototipe interaktif, dan antarmuka yang matang untuk web maupun mobile.',
    items: ['Figma', 'Prototyping', 'User Flows', 'Usability Testing'],
  },
  {
    title: 'Pengembangan',
    detail:
      'Membangun front-end yang cepat, aksesibel, dan mudah dirawat dengan tumpukan teknologi modern.',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Sistem & Brand',
    detail:
      'Menyusun design system yang konsisten serta identitas visual yang kuat dan mudah dikenali.',
    items: ['Design Systems', 'Identitas', 'Motion', 'Guidelines'],
  },
]

export function Skills() {
  return (
    <section id="keahlian" className="scroll-mt-20 border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-12">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            Apa yang saya lakukan
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-balance md:text-4xl">
            Keahlian yang saya tawarkan
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group flex flex-col rounded-2xl border border-border bg-background p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
            >
              <span className="font-display text-sm font-bold text-primary">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.detail}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2 border-t border-border pt-6">
                {service.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground">
                    {item}
                    <span className="mx-2 text-border last:hidden">·</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
