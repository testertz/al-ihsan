import { CheckCircle2 } from 'lucide-react'
import { useInView } from '@/hooks/useInView'
import { useLanguage } from '@/context/LanguageContext'

export default function Mission() {
  const { ref, inView } = useInView<HTMLDivElement>(0.15)
  const { t } = useLanguage()

  return (
    <section id="mission" className="py-20 sm:py-28">
      <div
        ref={ref}
        className={`reveal mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8 ${
          inView ? 'is-visible' : ''
        }`}
      >
        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-soft">
            <img
              src="https://images.pexels.com/photos/6994925/pexels-photo-6994925.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Community volunteer in hijab"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 max-w-xs rounded-xl bg-forest-800 p-5 text-white shadow-soft sm:-right-8">
            <p className="font-display text-3xl font-bold text-ember-400">85¢</p>
            <p className="mt-1 text-sm text-white/80">
              {t.mission.perDollar}
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ember-600">
            {t.mission.eyebrow}
          </p>
          <h2 className="text-balance mt-3 font-display text-3xl font-semibold leading-tight text-forest-900 dark:text-foreground sm:text-4xl">
            {t.mission.headline}
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            {t.mission.body}
          </p>

          <ul className="mt-8 space-y-5">
            {t.mission.principles.map((p) => (
              <li key={p.title} className="flex gap-4">
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-forest-600" />
                <div>
                  <h3 className="font-semibold text-forest-900 dark:text-foreground">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
