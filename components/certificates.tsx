'use client'

import { useEffect, useState } from 'react'

type Certificate = {
  title: string
  issuer: string
  year: string
  credentialId: string
  description: string
  skills: string[]
  credentialUrl: string
}

const certificates: Certificate[] = [
  {
    title: 'Google UX Design Professional',
    issuer: 'Google · Coursera',
    year: '2024',
    credentialId: 'UX-2024-8842',
    description:
      'Program profesional tujuh kursus yang mencakup riset pengguna, wireframing, prototyping, dan pengujian usability hingga membangun portofolio siap kerja.',
    skills: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing', 'Figma'],
    credentialUrl: 'https://coursera.org/verify/professional-cert/UX-2024-8842',
  },
  {
    title: 'Meta Front-End Developer',
    issuer: 'Meta · Coursera',
    year: '2023',
    credentialId: 'FE-2023-5571',
    description:
      'Sertifikasi pengembangan front-end yang berfokus pada React, JavaScript modern, dan praktik terbaik membangun antarmuka yang responsif serta mudah diakses.',
    skills: ['React', 'JavaScript', 'HTML & CSS', 'Responsive Design', 'Version Control'],
    credentialUrl: 'https://coursera.org/verify/professional-cert/FE-2023-5571',
  },
  {
    title: 'Advanced React & Next.js',
    issuer: 'Vercel Academy',
    year: '2023',
    credentialId: 'NEXT-2023-3390',
    description:
      'Pelatihan lanjutan tentang App Router, Server Components, strategi caching, dan optimasi performa untuk aplikasi Next.js skala produksi.',
    skills: ['Next.js', 'Server Components', 'Caching', 'Performance', 'TypeScript'],
    credentialUrl: 'https://vercel.com/academy/verify/NEXT-2023-3390',
  },
  {
    title: 'Design Systems Certification',
    issuer: 'Interaction Design Foundation',
    year: '2022',
    credentialId: 'DS-2022-1204',
    description:
      'Kurikulum mendalam tentang membangun dan memelihara design system yang skalabel, termasuk token desain, dokumentasi komponen, dan tata kelola.',
    skills: ['Design Tokens', 'Component Libraries', 'Documentation', 'Accessibility'],
    credentialUrl: 'https://interaction-design.org/verify/DS-2022-1204',
  },
]

export function Certificates() {
  const [active, setActive] = useState<Certificate | null>(null)

  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active])

  return (
    <section id="sertifikat" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-12">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            Pengakuan
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-balance md:text-4xl">
            Sertifikat & pelatihan
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Kredensial resmi yang mendukung keahlian saya di bidang desain dan pengembangan produk.
          </p>
        </div>

        <ul className="grid gap-4 md:grid-cols-2">
          {certificates.map((cert) => (
            <li
              key={cert.credentialId}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-bold text-primary"
                >
                  {cert.year}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold leading-snug">{cert.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
                  <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground/70">
                    ID: {cert.credentialId}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActive(cert)}
                className="mt-4 inline-flex items-center gap-1 self-start text-sm font-medium text-primary transition-colors hover:text-primary/80"
                aria-label={`Lihat selengkapnya tentang ${cert.title}`}
              >
                Lihat selengkapnya
                <svg
                  aria-hidden="true"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  <path
                    d="M6 3.5L10.5 8L6 12.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-foreground/40 p-4 backdrop-blur-sm sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-title"
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl border border-border bg-card p-6 shadow-xl md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Tutup"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path
                  d="M4.5 4.5L13.5 13.5M13.5 4.5L4.5 13.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 font-display text-sm font-bold text-primary">
              {active.year}
            </span>
            <h3 id="cert-title" className="mt-4 font-display text-2xl font-bold leading-tight">
              {active.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{active.issuer}</p>

            <p className="mt-4 text-sm leading-relaxed text-foreground/90">{active.description}</p>

            <div className="mt-6">
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Keahlian yang dicakup
              </p>
              <ul className="flex flex-wrap gap-2">
                {active.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/80"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
              <p className="text-xs uppercase tracking-wider text-muted-foreground/70">
                ID: {active.credentialId}
              </p>
              <a
                href={active.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Verifikasi kredensial
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path
                    d="M5 3H3.5C2.67 3 2 3.67 2 4.5v6C2 11.33 2.67 12 3.5 12h6c.83 0 1.5-.67 1.5-1.5V9M8 2h4v4M12 2L6.5 7.5"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
