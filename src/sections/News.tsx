import { Link } from 'react-router'
import { ArrowUpRight, CalendarDays } from 'lucide-react'
import { format } from 'date-fns'
import { enUS } from 'date-fns/locale'
import { useInView } from '@/hooks/useInView'
import { useLanguage } from '@/context/LanguageContext'
import { news } from '@/lib/data'

export default function News({ hideHeader = false }: { hideHeader?: boolean }) {
  const { ref: headerRef, inView: headerInView } = useInView<HTMLDivElement>(0.15)
  const { ref: gridRef, inView: gridInView } = useInView<HTMLDivElement>(0.05)
  const { t, lang } = useLanguage()
  const locale = enUS

  return (
    <section id="news" className="bg-sand-100 py-20 sm:py-28 dark:bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {!hideHeader && (
          <div
            ref={headerRef}
            className={`reveal flex flex-wrap items-end justify-between gap-6 ${
              headerInView ? 'is-visible' : ''
            }`}
          >
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ember-600">
                {t.news.eyebrow}
              </p>
              <h2 className="text-balance mt-3 font-display text-3xl font-semibold text-forest-900 dark:text-foreground sm:text-4xl">
                {t.news.headline}
              </h2>
            </div>
            <Link
              to="/news"
              className="inline-flex items-center text-sm font-semibold text-forest-700 hover:text-forest-500 dark:text-foreground"
            >
              {t.news.viewAll} <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        )}

        <div ref={gridRef} className={`grid gap-6 md:grid-cols-3 ${hideHeader ? '' : 'mt-12'}`}>
          {news.slice(0, 3).map((n, i) => (
            <Link
              to={`/news/${n.id}`}
              key={n.id}
              className={`reveal group flex flex-col rounded-2xl bg-card p-7 shadow-soft transition-shadow hover:shadow-lg ${
                gridInView ? 'is-visible' : ''
              }`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="flex items-center justify-between text-xs">
                <span className="rounded-full bg-forest-100 px-3 py-1 font-semibold text-forest-700">
                  {n.category[lang]}
                </span>
                <span className="flex items-center gap-1 text-muted-foreground">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {format(new Date(n.dateISO), 'MMM d, yyyy', { locale })}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-forest-900 group-hover:text-forest-600 dark:text-foreground">
                {n.title[lang]}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {n.excerpt[lang]}
              </p>
              <span className="mt-5 inline-flex items-center text-sm font-semibold text-forest-700 dark:text-foreground">
                {t.news.readMore}
                <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
