import { useInView, useCountUp } from '@/hooks/useInView'
import { useLanguage } from '@/context/LanguageContext'
import { impactStats } from '@/lib/data'

function Stat({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) {
  const n = useCountUp(value, active)
  return (
    <div className="text-center">
      <p className="font-display text-4xl font-bold text-ember-400 sm:text-5xl">
        {n.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-white/70">{label}</p>
    </div>
  )
}

export default function ImpactStats() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3)
  const { t } = useLanguage()

  return (
    <section id="impact" className="relative bg-forest-900 py-16 sm:py-20">
      <div className="islamic-pattern absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-10 text-center text-sm font-semibold uppercase tracking-[0.2em] text-ember-400">
          {t.impact.title}
        </p>
        <div
          ref={ref}
          className={`reveal grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-6 ${
            inView ? 'is-visible' : ''
          }`}
        >
          {impactStats.map((s) => (
            <Stat key={s.key} value={s.value} suffix={s.suffix} label={t.impact[s.key as keyof typeof t.impact]} active={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
