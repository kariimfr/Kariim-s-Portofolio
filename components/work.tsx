import Image from 'next/image'

const projects = [
  {
    title: 'Lumen Store',
    description:
      'Platform e-commerce headless dengan pengalaman belanja yang cepat dan checkout tanpa hambatan.',
    tags: ['Desain', 'Next.js', 'Shopify'],
    year: '2025',
    image: '/project-1.png',
    href: '#sertifikat',
  },
  {
    title: 'Sanka Finance',
    description:
      'Aplikasi keuangan mobile yang menyederhanakan pengelolaan anggaran harian bagi anak muda.',
    tags: ['UX/UI', 'React Native', 'Riset'],
    year: '2024',
    image: '/project-2.png',
    href: '#keahlian',
  },
  {
    title: 'Studio Rasa',
    description:
      'Identitas visual dan sistem brand untuk studio kuliner artisan, dari logo hingga kemasan.',
    tags: ['Branding', 'Identitas', 'Art Direction'],
    year: '2024',
    image: '/project-3.png',
    href: '#tentang',
  },
]

export function Work() {
  return (
    <section id="karya" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
              Karya pilihan
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              Proyek terbaru
            </h2>
          </div>
          <p className="max-w-xs text-sm text-muted-foreground">
            Sebagian kecil dari proyek yang saya kerjakan bersama tim dan klien.
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className={`group rounded-2xl p-3 transition-colors hover:bg-primary/5 ${i % 2 === 1 ? 'md:mt-16' : ''}`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-muted">
                <Image
                  src={project.image || '/placeholder.svg'}
                  alt={`Cuplikan proyek ${project.title}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-bold"><a href={project.href} className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">{project.title}</a></h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <span className="shrink-0 text-sm text-muted-foreground">{project.year}</span>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
