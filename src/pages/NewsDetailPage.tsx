import { Link, useParams } from 'react-router'
import { ArrowLeft, ArrowRight, CalendarDays } from 'lucide-react'
import { format } from 'date-fns'
import { enUS } from 'date-fns/locale'
import PageLayout from '@/components/PageLayout'
import { useLanguage } from '@/context/LanguageContext'
import { news } from '@/lib/data'

export default function NewsDetailPage() {
  const { id } = useParams()
  const { t, lang } = useLanguage()
  const item = news.find((n) => n.id === id)

  if (!item) {
    return (
      <PageLayout>
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 pt-24 text-center">
          <h1 className="font-display text-3xl font-semibold text-forest-900 dark:text-foreground">
            {t.news.notFound}
          </h1>
          <p className="mt-3 text-muted-foreground">{t.news.notFoundDesc}</p>
          <Link
            to="/news"
            className="mt-6 inline-flex items-center rounded-full bg-forest-700 px-6 py-2.5 text-sm font-semibold text-white hover:bg-forest-600"
          >
            <ArrowLeft className="mr-1.5 h-4 w-4" /> {t.news.backToNews}
          </Link>
        </div>
      </PageLayout>
    )
  }

  const related = news.filter((n) => n.id !== item.id).slice(0, 3)

  return (
    <PageLayout>
      <header className="bg-forest-950 pb-14 pt-32 sm:pt-40">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <span className="rounded-full bg-ember-500 px-3 py-1 text-xs font-semibold text-forest-950">
            {item.category[lang]}
          </span>
          <h1 className="text-balance mt-4 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
            {item.title[lang]}
          </h1>
          <p className="mt-4 flex items-center gap-1.5 text-sm text-white/70">
            <CalendarDays className="h-4 w-4" />
            {format(new Date(item.dateISO), 'MMM d, yyyy', { locale: enUS })}
          </p>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <Link
          to="/news"
          className="inline-flex items-center text-sm font-semibold text-forest-700 hover:text-forest-500 dark:text-foreground"
        >
          <ArrowLeft className="mr-1.5 h-4 w-4" /> {t.news.allNews}
        </Link>

        <p className="mt-8 font-display text-xl leading-relaxed text-forest-900 dark:text-foreground">
          {item.excerpt[lang]}
        </p>

        <div className="mt-8 space-y-5">
          {item.body[lang].map((para, i) => (
            <p key={i} className="leading-relaxed text-foreground/85">
              {para}
            </p>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-forest-800 p-8 text-center">
          <p className="font-display text-xl font-semibold text-white">
            {t.news.poweredBy}
          </p>
          <Link
            to="/donate"
            className="mt-5 inline-flex items-center rounded-full bg-ember-500 px-7 py-3 text-sm font-semibold text-forest-950 transition-colors hover:bg-ember-400"
          >
            {t.news.makeDonation} <ArrowRight className="ml-1.5 h-4 w-4" />
          </Link>
        </div>
      </article>

      <section className="bg-sand-100 py-16 dark:bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-semibold text-forest-900 dark:text-foreground">
            {t.news.moreUpdates}
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {related.map((n) => (
              <Link
                key={n.id}
                to={`/news/${n.id}`}
                className="group flex flex-col rounded-2xl bg-card p-6 shadow-soft transition-shadow hover:shadow-lg"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="rounded-full bg-forest-100 px-3 py-1 font-semibold text-forest-700">
                    {n.category[lang]}
                  </span>
                  <span className="text-muted-foreground">
                    {format(new Date(n.dateISO), 'MMM d, yyyy', { locale: enUS })}
                  </span>
                </div>
                <h3 className="mt-3 flex-1 font-display text-lg font-semibold leading-snug text-forest-900 group-hover:text-forest-600 dark:text-foreground">
                  {n.title[lang]}
                </h3>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-forest-700 dark:text-foreground">
                  {t.news.readMore}
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
