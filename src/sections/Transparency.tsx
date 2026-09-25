import { Award, FileText, ShieldCheck } from 'lucide-react'
import { useInView } from '@/hooks/useInView'
import { useLanguage } from '@/context/LanguageContext'
import { fundAllocation } from '@/lib/data'

export default function Transparency() {
  const { ref, inView } = useInView<HTMLDivElement>(0.25)
  const { t, lang } = useLanguage()

  const docs = [
    { icon: FileText, title: t.transparency.annualReport, meta: t.transparency.annualReportMeta },
    { icon: ShieldCheck, title: t.transparency.audited, meta: t.transparency.auditedMeta },
    { icon: Award, title: t.transparency.registration, meta: t.transparency.registrationMeta },
  ]

  return (
    <section id="transparency" className="py-20 sm:py-28">
      <div
        ref={ref}
        className={`reveal mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8 ${
          inView ? 'is-visible' : ''
        }`}
      >
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ember-600">
            {t.transparency.eyebrow}
          </p>
          <h2 className="text-balance mt-3 font-display text-3xl font-semibold text-forest-900 dark:text-foreground sm:text-4xl">
            {t.transparency.headline}
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">{t.transparency.body}</p>

          <div className="mt-8 space-y-3">
            {docs.map((d) => (
              <div
                key={d.title}
                className="group flex cursor-pointer items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-forest-400"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-forest-100">
                  <d.icon className="h-5 w-5 text-forest-700" />
                </span>
                <div>
                  <p className="font-semibold text-forest-900 group-hover:text-forest-600 dark:text-foreground">
                    {d.title}
                  </p>
                  <p className="text-sm text-muted-foreground">{d.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-card p-8 shadow-soft">
          <h3 className="font-display text-xl font-semibold text-forest-900 dark:text-foreground">
            {t.transparency.spendingTitle}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">$4.2M {t.transparency.spendingSubtitle}</p>

          <div className="mt-8 space-y-6">
            {fundAllocation.map((a) => (
              <div key={a.pct}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium text-forest-900 dark:text-foreground">{a.label[lang]}</span>
                  <span className="font-display text-lg font-bold text-forest-800 dark:text-foreground">
                    {a.pct}%
                  </span>
                </div>
                <div className="h-3.5 w-full overflow-hidden rounded-full bg-sand-200">
                  <div
                    className={`progress-fill h-full rounded-full ${a.color}`}
                    style={{ width: inView ? `${a.pct}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl bg-sand-100 p-5 dark:bg-secondary">
            <p className="text-sm leading-relaxed text-forest-800 dark:text-foreground">
              <strong>{t.transparency.topRated}</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
