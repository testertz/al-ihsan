import { Link } from 'react-router'
import { Clock, MapPin, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import FundProgress from '@/components/FundProgress'
import { useInView } from '@/hooks/useInView'
import { useLanguage } from '@/context/LanguageContext'
import { campaigns, formatMoney, type Campaign } from '@/lib/data'

function CampaignCard({ c, index }: { c: Campaign; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.15)
  const { t, lang } = useLanguage()
  const nearlyThere = c.goal - c.raised < c.goal * 0.05

  return (
    <div
      ref={ref}
      className={`reveal group flex flex-col overflow-hidden rounded-2xl bg-card shadow-soft ${
        inView ? 'is-visible' : ''
      }`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className="relative overflow-hidden">
        <img
          src={c.image}
          alt={c.title[lang]}
          className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-forest-950/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          {t.programs[c.category as keyof typeof t.programs] as string}
        </span>
        <span
          className={`absolute right-4 top-4 flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur ${
            nearlyThere ? 'bg-ember-500 text-forest-950' : 'bg-white/85 text-forest-800'
          }`}
        >
          <Clock className="h-3.5 w-3.5" />
          {nearlyThere ? `${t.campaigns.finalStretch} — ${c.daysLeft} ${t.campaigns.daysLeft}` : `${c.daysLeft} ${t.campaigns.daysLeft}`}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-forest-900 dark:text-foreground">
          {c.title[lang]}
        </h3>
        <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" /> {c.location[lang]}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {c.description[lang]}
        </p>

        <div className="mt-5">
          <FundProgress raised={c.raised} goal={c.goal} />
          <div className="mt-3 flex items-center justify-between text-sm">
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <Users className="h-4 w-4 text-forest-600" />
              {c.donors.toLocaleString()} {t.campaigns.donors}
            </span>
            <span className="font-medium text-forest-700 dark:text-foreground">
              {formatMoney(c.goal - c.raised)} {t.campaigns.toGo}
            </span>
          </div>
        </div>

        <Button
          asChild
          className="mt-5 w-full rounded-full bg-forest-700 font-semibold text-white hover:bg-forest-600"
        >
          <Link to="/donate">{t.campaigns.donateToThis}</Link>
        </Button>
      </div>
    </div>
  )
}

export default function Campaigns({ hideHeader = false }: { hideHeader?: boolean }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.3)
  const { t } = useLanguage()

  return (
    <section id="campaigns" className="bg-sand-100 py-20 sm:py-28 dark:bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {!hideHeader && (
          <div
            ref={ref}
            className={`reveal mx-auto max-w-2xl text-center ${inView ? 'is-visible' : ''}`}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ember-600">
              {t.campaigns.eyebrow}
            </p>
            <h2 className="text-balance mt-3 font-display text-3xl font-semibold text-forest-900 dark:text-foreground sm:text-4xl">
              {t.campaigns.headline}
            </h2>
            <p className="mt-4 text-muted-foreground">{t.campaigns.subtext}</p>
          </div>
        )}

        <div className={`grid gap-8 md:grid-cols-2 ${hideHeader ? '' : 'mt-14'}`}>
          {campaigns.map((c, i) => (
            <CampaignCard key={c.id} c={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
