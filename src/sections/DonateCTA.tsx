import { useState } from 'react'
import { CheckCircle2, Heart, Lock } from 'lucide-react'
import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { useInView } from '@/hooks/useInView'
import { useLanguage } from '@/context/LanguageContext'

const presets = [25, 50, 100, 250, 500]

export default function DonateCTA() {
  const { t } = useLanguage()
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('monthly')
  const [amount, setAmount] = useState<number>(100)
  const [custom, setCustom] = useState('')
  const { ref, inView } = useInView<HTMLDivElement>(0.2)

  const effectiveAmount = custom ? Number(custom) || 0 : amount
  const impact = !custom && (t.donate.impactLines as Record<string, string>)[String(amount)]

  const handleCustom = (v: string) => {
    setCustom(v.replace(/[^0-9]/g, ''))
  }

  return (
    <section id="give" className="relative overflow-hidden bg-forest-950 py-20 sm:py-28">
      <div className="islamic-pattern absolute inset-0 opacity-40" />
      <div
        ref={ref}
        className={`reveal relative mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8 ${
          inView ? 'is-visible' : ''
        }`}
      >
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ember-400">
            {t.donate.eyebrow}
          </p>
          <h2 className="text-balance mt-3 font-display text-3xl font-semibold leading-tight text-white sm:text-5xl">
            {t.donate.headline} <span className="italic text-ember-400">{t.donate.headlineAccent}</span>
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">{t.donate.body}</p>
          <ul className="mt-8 space-y-3 text-white/80">
            {t.donate.features.map((f) => (
              <li key={f} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-ember-400" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-white p-7 shadow-soft dark:bg-card sm:p-9">
          <div className="grid grid-cols-2 gap-2 rounded-full bg-sand-100 p-1.5 dark:bg-secondary">
            {(['once', 'monthly'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFrequency(f)}
                className={`rounded-full py-2.5 text-sm font-semibold transition-colors ${
                  frequency === f
                    ? 'bg-forest-700 text-white shadow'
                    : 'text-forest-700 hover:bg-sand-200 dark:text-foreground dark:hover:bg-secondary'
                }`}
              >
                {f === 'once' ? t.donate.oneTime : t.donate.monthly}
              </button>
            ))}
          </div>
          {frequency === 'monthly' && (
            <p className="mt-3 rounded-lg bg-ember-500/10 px-3 py-2 text-center text-xs font-medium text-ember-700">
              {t.donate.monthlyNote}
            </p>
          )}

          <div className="mt-5 grid grid-cols-3 gap-2.5">
            {presets.map((p) => (
              <button
                key={p}
                onClick={() => {
                  setAmount(p)
                  setCustom('')
                }}
                className={`rounded-xl border-2 py-3 font-display text-lg font-bold transition-colors ${
                  !custom && amount === p
                    ? 'border-forest-600 bg-forest-50 text-forest-800'
                    : 'border-border text-forest-700 hover:border-forest-300 dark:text-foreground'
                }`}
              >
                ${p}
              </button>
            ))}
            <div
              className={`flex items-center rounded-xl border-2 px-3 transition-colors ${
                custom ? 'border-forest-600 bg-forest-50' : 'border-border'
              }`}
            >
              <span className="font-display text-lg font-bold text-forest-700 dark:text-foreground">$</span>
              <input
                value={custom}
                onChange={(e) => handleCustom(e.target.value)}
                placeholder={t.donate.custom}
                className="w-full bg-transparent py-3 pl-1 font-display text-lg font-bold text-forest-800 outline-none placeholder:font-body placeholder:text-sm placeholder:font-medium placeholder:text-muted-foreground dark:text-foreground"
              />
            </div>
          </div>

          <p className="mt-4 min-h-10 rounded-xl bg-sand-100 px-4 py-3 text-sm leading-snug text-forest-800 dark:bg-secondary dark:text-foreground">
            {effectiveAmount > 0 ? (
              <>
                <strong>${effectiveAmount.toLocaleString()}</strong>
                {frequency === 'monthly' ? ` ${t.donate.eachMonth} ` : ' '}
                {impact ?? t.donate.impactDefault}
              </>
            ) : (
              t.donate.chooseAmount
            )}
          </p>

          <Button asChild className="mt-5 w-full rounded-full bg-ember-500 py-6 text-base font-semibold text-forest-950 hover:bg-ember-400">
            <Link to="/donate">
              <Heart className="mr-2 h-5 w-5 fill-forest-950" />
              {t.donate.submit}
            </Link>
          </Button>
          <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
            <Lock className="h-3.5 w-3.5" /> {t.donate.secure}
          </p>
        </div>
      </div>
    </section>
  )
}
