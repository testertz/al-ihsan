import { useState } from 'react'
import { Link } from 'react-router'
import { ArrowRight, CalendarDays, Search } from 'lucide-react'
import { format } from 'date-fns'
import { enUS } from 'date-fns/locale'
import PageLayout from '@/components/PageLayout'
import PageHeader from '@/components/PageHeader'
import DonateCTA from '@/sections/DonateCTA'
import { Input } from '@/components/ui/input'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useLanguage } from '@/context/LanguageContext'
import { news } from '@/lib/data'

export default function NewsPage() {
  const { t, lang } = useLanguage()
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')

  const categories = [
    { value: 'all', label: t.news.all },
    { value: 'Announcement', label: lang === 'en' ? 'Announcement' : 'Tangazo' },
    { value: 'Field Notes', label: lang === 'en' ? 'Field Notes' : 'Maelezo ya Uwanjani' },
    { value: 'Report', label: lang === 'en' ? 'Report' : 'Ripoti' },
  ]

  const filtered = news.filter((n) => {
    const matchesSearch =
      n.title[lang].toLowerCase().includes(search.toLowerCase()) ||
      n.excerpt[lang].toLowerCase().includes(search.toLowerCase())
    const matchesCategory = category === 'all' || n.category.en === category
    return matchesSearch && matchesCategory
  })

  return (
    <PageLayout>
      <PageHeader
        eyebrow={t.news.eyebrow}
        title={t.news.headline}
        description={t.stories.subtext}
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Search + filter */}
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative max-w-sm flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t.news.search}
                className="rounded-full pl-10"
              />
            </div>
            <Tabs value={category} onValueChange={setCategory}>
              <TabsList className="flex flex-wrap gap-1 rounded-xl h-auto p-1.5">
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
          </div>

          {/* Articles */}
          {filtered.length === 0 ? (
            <div className="py-20 text-center text-muted-foreground">
              {lang === 'en' ? 'No articles found.' : 'Hakuna makala yaliyopatikana.'}
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((n) => (
                <Link
                  key={n.id}
                  to={`/news/${n.id}`}
                  className="group flex flex-col rounded-2xl bg-card p-7 shadow-soft transition-shadow hover:shadow-lg"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="rounded-full bg-forest-100 px-3 py-1 font-semibold text-forest-700">
                      {n.category[lang]}
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {format(new Date(n.dateISO), 'MMM d, yyyy', { locale: enUS })}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-forest-900 group-hover:text-forest-600 dark:text-foreground">
                    {n.title[lang]}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {n.excerpt[lang]}
                  </p>
                  <span className="mt-5 inline-flex items-center text-sm font-semibold text-forest-700 dark:text-foreground">
                    {t.news.readMore}
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <DonateCTA />
    </PageLayout>
  )
}
