import Image from 'next/image'

export function About() {
  return (
    <section id="tentang" className="scroll-mt-20 border-t border-border bg-[#fff7ed]">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1fr_1.3fr] md:py-28">
        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-muted">
            <Image
              src="/portrait.png"
              alt="Potret Raka Pratama"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            Tentang saya
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-balance md:text-4xl">
            Menggabungkan desain yang teliti dengan kode yang solid.
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Selama lebih dari enam tahun saya membantu startup dan brand
              membangun produk digital yang tidak hanya indah, tetapi juga terasa
              alami saat digunakan. Fokus saya adalah detail — dari tipografi
              hingga performa.
            </p>
            <p>
              Saya percaya desain yang baik adalah desain yang tidak terlihat:
              pengguna hanya merasakan bahwa semuanya berjalan dengan mulus. Saya
              bekerja lintas disiplin, dari riset dan prototipe hingga
              implementasi front-end.
            </p>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              'Product Design (UX/UI)',
              'Front-end Development',
              'Design Systems',
              'Brand & Identity',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
