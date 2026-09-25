import { Link } from 'react-router'
import { ArrowRight, CalendarDays, MapPin } from 'lucide-react'
import { format } from 'date-fns'
import { enUS } from 'date-fns/locale'
import PageLayout from '@/components/PageLayout'
import PageHeader from '@/components/PageHeader'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import DonateCTA from '@/sections/DonateCTA'
import { useInView } from '@/hooks/useInView'
import { useLanguage } from '@/context/LanguageContext'
import { stories } from '@/lib/data'

export default function StoriesPage() {
  const { ref, inView } = useInView<HTMLDivElement>(0.05)
  const { t, lang } = useLanguage()
  const [featured, ...rest] = stories

  return (
    <PageLayout>
      <PageHeader
        eyebrow={t.stories.eyebrow}
        title={t.stories.headline}
        description={t.stories.subtext}
      />

      <section className="py-16 sm:py-20">
        <div ref={ref} className={`reveal mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${inView ? 'is-visible' : ''}`}>
          {/* Featured */}
          <Link
            to={`/stories/${featured.id}`}
            className="group relative block overflow-hidden rounded-2xl shadow-soft"
          >
            <img
              src={featured.image}
              alt={featured.title[lang]}
              className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:aspect-[21/9]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/25 to-transparent" />
            <div className="absolute bottom-0 p-6 sm:p-10">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-ember-500 px-3 py-1 text-xs font-semibold text-forest-950">
                  {t.stories.featured}
                </span>
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  {featured.program}
                </span>
              </div>
              <h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold text-white sm:text-4xl">
                {featured.title[lang]}
              </h2>
              <p className="mt-2 line-clamp-2 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
                {featured.excerpt[lang]}
              </p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-ember-400">
                {t.stories.readFull}
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>

          {/* Grid */}
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((s, i) => (
              <Link
                key={s.id}
                to={`/stories/${s.id}`}
                className={`reveal group flex flex-col overflow-hidden rounded-2xl bg-card shadow-soft transition-shadow hover:shadow-lg ${
                  inView ? 'is-visible' : ''
                }`}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title[lang]}
                    className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                    <span className="font-semibold text-ember-600">{s.program}</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> {s.location[lang]}
                    </span>
                    <span className="flex items-center gap-1">
                      <CalendarDays className="h-3 w-3" /> {format(new Date(s.date), 'MMM d, yyyy', { locale: enUS })}
                    </span>
                  </div>
                  <h3 className="mt-2.5 font-display text-xl font-semibold leading-snug text-forest-900 group-hover:text-forest-600 dark:text-foreground">
                    {s.title[lang]}
                  </h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.excerpt[lang]}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-semibold text-forest-700 dark:text-foreground">
                    {t.stories.readStory} · {s.readTime[lang]}
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TestimonialCarousel />
      <DonateCTA />
    </PageLayout>
  )
}
