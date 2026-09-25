import { useState } from 'react'
import { Link } from 'react-router'
import { BookOpen, Droplets, GraduationCap, HeartPulse, Sprout, ShieldAlert, Users } from 'lucide-react'
import PageLayout from '@/components/PageLayout'
import PageHeader from '@/components/PageHeader'
import FundProgress from '@/components/FundProgress'
import DonateCTA from '@/sections/DonateCTA'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
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

export default function ProgramsPage() {
  const { t, lang } = useLanguage()
  const [filter, setFilter] = useState<string>('all')

  const categories = [
    { value: 'all', label: t.programs.all },
    { value: 'water', label: t.programs.water },
    { value: 'education', label: t.programs.education },
    { value: 'health', label: t.programs.health },
    { value: 'orphan', label: t.programs.orphan },
    { value: 'food', label: t.programs.food },
    { value: 'emergency', label: t.programs.emergency },
  ]

  const filtered = filter === 'all' ? programs : programs.filter((p) => p.category === filter)

  return (
    <PageLayout>
      <PageHeader
        eyebrow={t.programs.eyebrow}
        title={t.programs.headline}
        description={t.programs.subtext}
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filter tabs */}
          <p className="mb-4 text-sm font-medium text-muted-foreground">{t.programs.filterBy}</p>
          <Tabs value={filter} onValueChange={setFilter}>
            <TabsList className="flex flex-wrap justify-start gap-1 rounded-xl h-auto p-1.5">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat.value}
                  value={cat.value}
                  className="rounded-lg px-4 py-2 text-sm data-[state=active]:bg-forest-700 data-[state=active]:text-white"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Program cards */}
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => {
              const Icon = icons[p.category] ?? Droplets
              return (
                <div
                  key={p.id}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-soft transition-shadow hover:shadow-lg"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name[lang]}
                      className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-forest-950/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                      {t.programs[p.category as keyof typeof t.programs] as string}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest-100">
                        <Icon className="h-5 w-5 text-forest-700" />
                      </span>
                      <h3 className="font-display text-xl font-semibold text-forest-900 dark:text-foreground">
                        {p.name[lang]}
                      </h3>
                    </div>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {p.description[lang]}
                    </p>

                    <ul className="mt-4 space-y-1.5 border-t border-border pt-4">
                      {p.stats[lang].map((s) => (
                        <li key={s} className="flex items-center gap-2 text-sm text-foreground/80">
                          <span className="h-1.5 w-1.5 rounded-full bg-ember-400" />
                          {s}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5">
                      <FundProgress raised={p.raised} goal={p.goal} />
                      <div className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Users className="h-4 w-4 text-forest-600" />
                        {p.donors.toLocaleString()} {t.campaigns.donors}
                      </div>
                    </div>

                    <Button
                      asChild
                      className="mt-5 w-full rounded-full bg-forest-700 font-semibold text-white hover:bg-forest-600"
                    >
                      <Link to="/donate">{t.programs.donate}</Link>
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <DonateCTA />
    </PageLayout>
  )
}
