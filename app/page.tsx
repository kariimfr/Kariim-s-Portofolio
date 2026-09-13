import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Work } from '@/components/work'
import { Skills } from '@/components/skills'
import { Certificates } from '@/components/certificates'

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Work />
        <Skills />
        <Certificates />
      </main>
    </div>
  )
}
