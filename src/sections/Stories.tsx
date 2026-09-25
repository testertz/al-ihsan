import { Link } from 'react-router'
import { ArrowRight, MapPin } from 'lucide-react'
import { useInView } from '@/hooks/useInView'
import { useLanguage } from '@/context/LanguageContext'
import { stories } from '@/lib/data'

export default function Stories() {
  const { ref, inView } = useInView<HTMLDivElement>(0.1)
  const { t, lang } = useLanguage()
  const [featured, ...rest] = stories

  return (
    <section id="stories" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`reveal mx-auto max-w-2xl text-center ${inView ? 'is-visible' : ''}`}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ember-600">
            {t.stories.eyebrow}
          </p>
          <h2 className="text-balance mt-3 font-display text-3xl font-semibold text-forest-900 dark:text-foreground sm:text-4xl">
            {t.stories.headline}
          </h2>
          <p className="mt-4 text-muted-foreground">{t.stories.subtext}</p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Featured story */}
          <Link
            to={`/stories/${featured.id}`}
            className="group relative block overflow-hidden rounded-2xl shadow-soft"
          >
            <img
              src={featured.image}
              alt={featured.title[lang]}
              className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105 lg:aspect-auto lg:h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/30 to-transparent" />
            <div className="absolute bottom-0 p-6 sm:p-8">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-ember-500 px-3 py-1 text-xs font-semibold text-forest-950">
                  {t.stories.featured}
                </span>
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  {featured.program}
                </span>
              </div>
              <h3 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
                {featured.title[lang]}
              </h3>
              <p className="mt-2 line-clamp-2 max-w-lg text-sm leading-relaxed text-white/80">
                {featured.excerpt[lang]}
              </p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-ember-400">
                {t.stories.readFull}{' '}
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>

          {/* Story list */}
          <div className="flex flex-col gap-6">
            {rest.map((s) => (
              <Link
                key={s.id}
                to={`/stories/${s.id}`}
                className="group flex flex-1 gap-5 rounded-2xl bg-card p-4 shadow-soft transition-shadow hover:shadow-lg sm:gap-6 sm:p-5"
              >
                <img
                  src={s.image}
                  alt={s.title[lang]}
                  className="h-28 w-32 shrink-0 rounded-xl object-cover sm:h-full sm:w-44"
                />
                <div className="flex min-w-0 flex-col justify-center py-1">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                    <span className="font-semibold text-ember-600">{s.program}</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> {s.location[lang]}
                    </span>
                    <span>{s.readTime[lang]}</span>
                  </div>
                  <h3 className="mt-1.5 font-display text-lg font-semibold leading-snug text-forest-900 group-hover:text-forest-600 dark:text-foreground sm:text-xl">
                    {s.title[lang]}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {s.excerpt[lang]}
                  </p>
                  <span className="mt-2 inline-flex items-center text-sm font-semibold text-forest-700 dark:text-foreground">
                    {t.stories.readStory}
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/stories"
            className="inline-flex items-center rounded-full border-2 border-forest-700 px-7 py-3 text-sm font-semibold text-forest-700 transition-colors hover:bg-forest-700 hover:text-white dark:border-foreground dark:text-foreground"
          >
            {t.stories.browseAll} <ArrowRight className="ml-1.5 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
