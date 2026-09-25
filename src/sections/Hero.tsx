import { Link } from 'react-router'
import { ArrowRight, BookOpen, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import FundProgress from '@/components/FundProgress'
import { useLanguage } from '@/context/LanguageContext'
import { annualFund, recentDonations } from '@/lib/data'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/11568054/pexels-photo-11568054.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920"
          alt="Children of Tanzania"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 via-forest-950/60 to-forest-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-forest-950/30" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-ember-400" />
              {t.hero.badge}
            </p>

            <p className="font-arabic mb-3 text-2xl text-ember-400 sm:text-3xl" dir="rtl">
              الإحسان
            </p>

            <h1 className="text-balance font-display text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              {t.hero.headline}{' '}
              <span className="italic text-ember-400">{t.hero.headlineAccent}</span>
            </h1>
            <p className="mt-3 text-lg font-medium text-ember-400/90">
              {t.hero.swahiliTagline}
            </p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              {t.hero.subtext}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-ember-500 px-7 text-base font-semibold text-forest-950 hover:bg-ember-400"
              >
                <Link to="/donate">
                  {t.hero.donateCta} <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white/40 bg-transparent px-7 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
              >
                <Link to="/stories">
                  <BookOpen className="mr-1 h-4 w-4" /> {t.hero.storiesCta}
                </Link>
              </Button>
            </div>
          </div>

          {/* Annual fund card */}
          <div className="rounded-2xl bg-white/95 p-6 shadow-soft backdrop-blur dark:bg-card sm:p-8">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-foreground">
                {annualFund.year} {t.hero.fundTitle}
              </h2>
              <span className="rounded-full bg-forest-100 px-3 py-1 text-xs font-semibold text-forest-700">
                {t.hero.live}
              </span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              {t.hero.fundSubtitle}
            </p>

            <div className="mt-5">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-3xl font-bold text-forest-800 dark:text-foreground">
                  ${annualFund.raised.toLocaleString()}
                </span>
                <span className="text-sm text-muted-foreground">
                  {t.hero.raised} ${annualFund.goal.toLocaleString()} {t.hero.goal}
                </span>
              </div>
              <div className="mt-3">
                <FundProgress raised={annualFund.raised} goal={annualFund.goal} />
              </div>
              <p className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground">
                <Users className="h-4 w-4 text-forest-600" />
                <strong className="font-semibold text-forest-800 dark:text-foreground">
                  {annualFund.donors.toLocaleString()}
                </strong>
                {t.hero.donorsThisYear}
              </p>
            </div>

            <div className="mt-5 border-t border-border pt-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {t.hero.justNow}
              </p>
              <div className="relative h-24 overflow-hidden">
                <div className="animate-ticker">
                  {[...recentDonations, ...recentDonations].map((d, i) => (
                    <div key={i} className="flex h-8 items-center justify-between text-sm">
                      <span className="text-forest-800 dark:text-foreground">
                        <strong>{d.name}</strong>{' '}
                        <span className="text-muted-foreground">· {d.place}</span>
                      </span>
                      <span className="font-semibold text-forest-700 dark:text-foreground">
                        ${d.amount}
                        <span className="ml-1 hidden text-xs font-normal text-muted-foreground sm:inline">
                          → {d.campaign}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
                <div className="pointer-events-none absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-white to-transparent dark:from-card" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-white to-transparent dark:from-card" />
              </div>
            </div>

            <Button
              asChild
              className="mt-4 w-full rounded-full bg-forest-700 font-semibold text-white hover:bg-forest-600"
            >
              <Link to="/donate">{t.hero.joinThem}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
