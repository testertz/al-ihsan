import { Link } from 'react-router'
import { ArrowRight, ShieldCheck, Target, Eye, Scale } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import PageLayout from '@/components/PageLayout'
import PageHeader from '@/components/PageHeader'
import Mission from '@/sections/Mission'
import ImpactStats from '@/sections/ImpactStats'
import Transparency from '@/sections/Transparency'
import { Button } from '@/components/ui/button'
import { useLanguage as useLang } from '@/context/LanguageContext'

export default function AboutPage() {
  const { t } = useLang()

  const valueIcons = [Scale, Target, Eye, ShieldCheck]

  return (
    <PageLayout>
      <PageHeader
        eyebrow={t.about.eyebrow}
        title={t.about.title}
        description={t.about.description}
      />

      {/* History + Vision */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-2xl bg-card p-8 shadow-soft">
            <h2 className="font-display text-2xl font-semibold text-forest-900 dark:text-foreground">
              {t.about.history}
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">{t.about.historyBody}</p>
          </div>
          <div className="rounded-2xl bg-forest-800 p-8 text-white shadow-soft">
            <h2 className="font-display text-2xl font-semibold">{t.about.vision}</h2>
            <p className="mt-5 leading-relaxed text-white/80">{t.about.visionBody}</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-sand-100 py-20 sm:py-28 dark:bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-semibold text-forest-900 dark:text-foreground sm:text-4xl">
            {t.about.values}
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.about.valuesList.map((v, i) => {
              const Icon = valueIcons[i] ?? Scale
              return (
                <div key={v.title} className="rounded-2xl bg-card p-6 shadow-soft">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-100">
                    <Icon className="h-6 w-6 text-forest-700" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-forest-900 dark:text-foreground">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-semibold text-forest-900 dark:text-foreground sm:text-4xl">
            {t.about.leadership}
          </h2>
          <p className="mt-4 text-center text-muted-foreground">{t.about.leadershipIntro}</p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.about.team.map((member) => (
              <div key={member.name} className="rounded-2xl bg-card p-6 text-center shadow-soft">
                <Avatar className="mx-auto h-24 w-24">
                  <AvatarFallback className="bg-forest-700 text-xl font-bold text-white">
                    {member.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <h3 className="mt-4 font-display text-lg font-semibold text-forest-900 dark:text-foreground">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-ember-600">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Mission />
      <ImpactStats />
      <Transparency />

      {/* Transparency section */}
      <section className="bg-sand-100 py-20 sm:py-28 dark:bg-secondary/30">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-forest-900 dark:text-foreground sm:text-4xl">
            {t.about.transparency}
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">{t.about.transparencyBody}</p>
          <Button asChild className="mt-8 rounded-full bg-ember-500 font-semibold text-forest-950 hover:bg-ember-400">
            <Link to="/donate">
              {t.nav.donate} <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  )
}
