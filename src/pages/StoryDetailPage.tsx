import { Link, useParams } from 'react-router'
import { ArrowLeft, ArrowRight, CalendarDays, MapPin, Quote } from 'lucide-react'
import { format } from 'date-fns'
import { enUS } from 'date-fns/locale'
import PageLayout from '@/components/PageLayout'
import { useLanguage } from '@/context/LanguageContext'
import { stories } from '@/lib/data'

export default function StoryDetailPage() {
  const { id } = useParams()
  const { t, lang } = useLanguage()
  const story = stories.find((s) => s.id === id)

  if (!story) {
    return (
      <PageLayout>
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 pt-24 text-center">
          <h1 className="font-display text-3xl font-semibold text-forest-900 dark:text-foreground">
            {t.stories.notFound}
          </h1>
          <p className="mt-3 text-muted-foreground">{t.stories.notFoundDesc}</p>
          <Link
            to="/stories"
            className="mt-6 inline-flex items-center rounded-full bg-forest-700 px-6 py-2.5 text-sm font-semibold text-white hover:bg-forest-600"
          >
            <ArrowLeft className="mr-1.5 h-4 w-4" /> {t.stories.backToStories}
          </Link>
        </div>
      </PageLayout>
    )
  }

  const related = stories.filter((s) => s.id !== story.id).slice(0, 3)

  return (
    <PageLayout>
      {/* Hero */}
      <header className="relative">
        <img
          src={story.image}
          alt={story.title[lang]}
          className="h-[52vh] min-h-80 w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/30 to-forest-950/40" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-3xl px-4 pb-10 sm:px-6">
            <span className="rounded-full bg-ember-500 px-3 py-1 text-xs font-semibold text-forest-950">
              {story.program}
            </span>
            <h1 className="text-balance mt-4 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
              {story.title[lang]}
            </h1>
            <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-white/80">
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" /> {story.location[lang]}
              </span>
              <span className="flex items-center gap-1">
                <CalendarDays className="h-3.5 w-3.5" />
                {format(new Date(story.date), 'MMM d, yyyy', { locale: enUS })} · {story.readTime[lang]}
              </span>
            </p>
          </div>
        </div>
      </header>

      {/* Body */}
      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <Link
          to="/stories"
          className="inline-flex items-center text-sm font-semibold text-forest-700 hover:text-forest-500 dark:text-foreground"
        >
          <ArrowLeft className="mr-1.5 h-4 w-4" /> {t.stories.allStories}
        </Link>

        <p className="mt-8 font-display text-xl leading-relaxed text-forest-900 dark:text-foreground">
          {story.excerpt[lang]}
        </p>

        <div className="mt-8 space-y-5">
          {story.body[lang].slice(0, 3).map((para, i) => (
            <p key={i} className="leading-relaxed text-foreground/85">
              {para}
            </p>
          ))}
        </div>

        <blockquote className="my-10 rounded-xl border-l-4 border-ember-500 bg-sand-100 p-7 dark:bg-secondary">
          <Quote className="h-7 w-7 text-ember-500" />
          <p className="mt-4 font-display text-xl italic leading-relaxed text-forest-900 dark:text-foreground">
            "{story.quote[lang]}"
          </p>
          <footer className="mt-4 text-sm">
            <strong className="text-forest-800 dark:text-foreground">{story.quoteAuthor}</strong>
            <span className="text-muted-foreground"> — {story.quoteRole[lang]}</span>
          </footer>
        </blockquote>

        <div className="space-y-5">
          {story.body[lang].slice(3).map((para, i) => (
            <p key={i} className="leading-relaxed text-foreground/85">
              {para}
            </p>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-forest-800 p-8 text-center">
          <p className="font-display text-xl font-semibold text-white">
            {t.stories.poweredBy}
          </p>
          <Link
            to="/donate"
            className="mt-5 inline-flex items-center rounded-full bg-ember-500 px-7 py-3 text-sm font-semibold text-forest-950 transition-colors hover:bg-ember-400"
          >
            {t.stories.supportProgram} {story.program} {t.stories.program}
            <ArrowRight className="ml-1.5 h-4 w-4" />
          </Link>
        </div>
      </article>

      {/* Related */}
      <section className="bg-sand-100 py-16 dark:bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-semibold text-forest-900 dark:text-foreground">
            {t.stories.keepReading}
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {related.map((s) => (
              <Link
                key={s.id}
                to={`/stories/${s.id}`}
                className="group overflow-hidden rounded-2xl bg-card shadow-soft transition-shadow hover:shadow-lg"
              >
                <img
                  src={s.image}
                  alt={s.title[lang]}
                  className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-5">
                  <p className="text-xs font-semibold text-ember-600">{s.program}</p>
                  <h3 className="mt-1.5 font-display text-lg font-semibold leading-snug text-forest-900 group-hover:text-forest-600 dark:text-foreground">
                    {s.title[lang]}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
