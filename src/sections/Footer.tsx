import { useState } from 'react'
import { Link } from 'react-router'
import { CheckCircle2, Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/context/LanguageContext'
import { toast } from 'sonner'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const { t } = useLanguage()

  const columns = [
    {
      title: t.footer.explore,
      links: [
        { label: t.nav.about, to: '/about' },
        { label: t.nav.programs, to: '/programs' },
        { label: t.nav.stories, to: '/stories' },
        { label: t.nav.news, to: '/news' },
        { label: t.nav.contact, to: '/contact' },
      ],
    },
    {
      title: t.footer.getInvolved,
      links: [
        { label: t.nav.donate, to: '/donate' },
        { label: t.footer.monthlyGiving, to: '/donate' },
        { label: t.footer.fundraise, to: '/get-involved' },
        { label: t.footer.corporatePartners, to: '/get-involved' },
        { label: t.footer.volunteer, to: '/get-involved' },
      ],
    },
    {
      title: t.footer.programs,
      links: [
        { label: t.navPrograms.water, to: '/programs' },
        { label: t.navPrograms.education, to: '/programs' },
        { label: t.navPrograms.health, to: '/programs' },
        { label: t.navPrograms.orphan, to: '/programs' },
        { label: t.navPrograms.food, to: '/programs' },
      ],
    },
  ]

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.includes('@')) {
      setSubscribed(true)
      toast.success(t.footer.subscribed)
    }
  }

  return (
    <footer className="border-t border-white/10 bg-forest-950 text-white dark:border-border">
      <div className="islamic-pattern absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr_1.3fr]">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ember-500 font-arabic text-lg font-bold text-forest-950">
                ع
              </span>
              <span className="font-display text-xl font-semibold">
                Al Ihsan<span className="text-ember-400"> Foundation</span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              {t.footer.description}
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-white/60">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ember-400" />
                {t.footer.address}
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-ember-400" /> {t.footer.phone}
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-ember-400" /> {t.footer.email}
              </li>
            </ul>

            {/* Social */}
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-ember-400">
                {t.footer.follow}
              </p>
              <div className="mt-3 flex gap-3">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:bg-ember-500 hover:text-forest-950"
                    aria-label="Social media"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-ember-400">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        className="text-sm text-white/60 transition-colors hover:text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display text-lg font-semibold">{t.footer.newsletterTitle}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">
              {t.footer.newsletterDesc}
            </p>
            {subscribed ? (
              <p className="mt-5 flex items-center gap-2 rounded-xl bg-forest-900 p-4 text-sm text-ember-400">
                <CheckCircle2 className="h-5 w-5" /> {t.footer.subscribed}
              </p>
            ) : (
              <form className="mt-5 flex gap-2" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.footer.emailPlaceholder}
                  className="w-full rounded-full border border-white/15 bg-forest-900 px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/40 focus:border-ember-400"
                />
                <Button
                  type="submit"
                  className="shrink-0 rounded-full bg-ember-500 px-5 font-semibold text-forest-950 hover:bg-ember-400"
                >
                  {t.footer.subscribe}
                </Button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/45 sm:flex-row">
          <p>{t.footer.copyright}</p>
          <div className="flex gap-6">
            <Link to="/about" className="hover:text-white">{t.footer.privacy}</Link>
            <Link to="/about" className="hover:text-white">{t.footer.terms}</Link>
            <Link to="/about" className="hover:text-white">{t.footer.accessibility}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
