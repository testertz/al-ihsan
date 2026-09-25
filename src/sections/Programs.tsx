import { Link } from 'react-router'
import { BookOpen, Droplets, GraduationCap, HeartPulse, Sprout, ShieldAlert } from 'lucide-react'
import { useInView } from '@/hooks/useInView'
import { useLanguage } from '@/context/LanguageContext'
import { programs } from '@/lib/data'

const icons: Record<string, typeof Droplets> = {
  water: Droplets,
  education: BookOpen,
  health: HeartPulse,
  orphan: GraduationCap,
  food: Sprout,
  emergency: ShieldAlert,
}

export default function Programs() {
  const { ref, inView } = useInView<HTMLDivElement>(0.15)
  const { t, lang } = useLanguage()

  return (
    <section id="programs" className="relative bg-forest-950 py-20 sm:py-28">
      <div className="islamic-pattern absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`reveal mx-auto max-w-2xl text-center ${inView ? 'is-visible' : ''}`}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ember-400">
            {t.programs.eyebrow}
          </p>
          <h2 className="text-balance mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            {t.programs.headline}
          </h2>
          <p className="mt-4 text-white/70">{t.programs.subtext}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => {
            const Icon = icons[p.id] ?? Droplets
            return (
              <div
                key={p.id}
                className={`reveal rounded-2xl border border-white/10 bg-forest-900/60 p-7 transition-colors hover:border-ember-500/40 ${
                  inView ? 'is-visible' : ''
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ember-500/15">
                    <Icon className="h-6 w-6 text-ember-400" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/40">
                    {t.programs[p.category as keyof typeof t.programs] as string}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-white">
                  {p.name[lang]}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {p.description[lang]}
                </p>
                <ul className="mt-5 space-y-2 border-t border-white/10 pt-4">
                  {p.stats[lang].map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-white/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-ember-400" />
                      {s}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/programs"
                  className="mt-5 inline-flex items-center text-sm font-semibold text-ember-400 hover:text-ember-300"
                >
                  {t.common.learnMore} →
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
