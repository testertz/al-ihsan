import { useLanguage } from '@/context/LanguageContext'
import { partners } from '@/lib/data'

export default function PartnersStrip() {
  const { lang } = useLanguage()

  return (
    <section className="border-y border-border bg-card py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {lang === 'en' ? 'Our Partners & Sponsors' : 'Washirika & Wadhamini Wetu'}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-16">
          {partners.map((p) => (
            <div
              key={p.id}
              className="flex items-center justify-center rounded-lg px-6 py-3 text-lg font-display font-semibold text-forest-700/60 transition-colors hover:text-forest-700 dark:text-foreground/50 dark:hover:text-foreground"
            >
              {p.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
