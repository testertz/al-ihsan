import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { Globe, Menu, Moon, Sun, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { useLanguage } from '@/context/LanguageContext'
import { programs } from '@/lib/data'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const { lang, toggleLang, t } = useLanguage()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const solidAlways = ['/about', '/programs', '/news', '/donate', '/contact', '/get-involved', '/stories'].includes(
    pathname,
  )
  const solid = scrolled || open || solidAlways

  const navLinks = [
    { label: t.nav.home, to: '/' },
    { label: t.nav.about, to: '/about' },
    { label: t.nav.stories, to: '/stories' },
    { label: t.nav.news, to: '/news' },
    { label: t.nav.contact, to: '/contact' },
  ]

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        solid ? 'bg-forest-950/95 shadow-lg backdrop-blur dark:bg-card' : 'bg-gradient-to-b from-forest-950/70 to-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ember-500 font-arabic text-lg font-bold text-forest-950">
            ع
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-white">
            Al Ihsan<span className="text-ember-400"> Foundation</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  'text-sm font-medium transition-colors hover:text-ember-400',
                  isActive ? 'text-ember-400' : 'text-white/80',
                )
              }
            >
              {l.label}
            </NavLink>
          ))}

          {/* Programs dropdown */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-sm font-medium text-white/80 hover:text-ember-400 data-[active]:text-ember-400">
                  {t.nav.programs}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 p-3 lg:w-[500px] lg:grid-cols-2">
                    {programs.map((p) => (
                      <li key={p.id}>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/programs"
                            className="block rounded-lg p-3 leading-none transition-colors hover:bg-forest-50 dark:hover:bg-secondary"
                          >
                            <div className="font-semibold text-forest-900 dark:text-foreground">
                              {p.name[lang]}
                            </div>
                            <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                              {p.description[lang]}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/programs"
                          className={cn(navigationMenuTriggerStyle(), 'w-full justify-center bg-forest-700 text-white hover:bg-forest-600')}
                        >
                          {t.navPrograms.all}
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavLink
            to="/get-involved"
            className={({ isActive }) =>
              cn(
                'text-sm font-medium transition-colors hover:text-ember-400',
                isActive ? 'text-ember-400' : 'text-white/80',
              )
            }
          >
            {t.nav.getInvolved}
          </NavLink>
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-white/10"
            aria-label="Toggle language"
          >
            <Globe className="h-3.5 w-3.5" />
            <span className={lang === 'en' ? 'text-ember-400' : ''}>EN</span>
            <span className="text-white/40">|</span>
            <span className={lang === 'sw' ? 'text-ember-400' : ''}>SW</span>
          </button>

          {/* Theme toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="hidden rounded-full border border-white/20 p-1.5 text-white transition-colors hover:bg-white/10 sm:block"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* Donate button */}
          <Button
            asChild
            className="hidden rounded-full bg-ember-500 px-5 font-semibold text-forest-950 hover:bg-ember-400 sm:inline-flex"
          >
            <Link to="/donate">{t.nav.donate}</Link>
          </Button>

          {/* Mobile menu toggle */}
          <button
            className="text-white lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-white/10 bg-forest-950/95 px-4 pb-6 pt-3 backdrop-blur lg:hidden">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  'block py-2.5 text-base font-medium hover:text-ember-400',
                  isActive ? 'text-ember-400' : 'text-white/85',
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
          {/* Programs in mobile */}
          <div className="py-2.5">
            <p className="text-sm font-semibold text-white/50 uppercase tracking-wider">
              {t.nav.programs}
            </p>
            <div className="mt-1.5 space-y-1.5 pl-3">
              {programs.map((p) => (
                <Link
                  key={p.id}
                  to="/programs"
                  className="block py-1 text-sm text-white/75 hover:text-ember-400"
                >
                  {p.name[lang]}
                </Link>
              ))}
            </div>
          </div>
          <NavLink
            to="/get-involved"
            className={({ isActive }) =>
              cn(
                'block py-2.5 text-base font-medium hover:text-ember-400',
                isActive ? 'text-ember-400' : 'text-white/85',
              )
            }
          >
            {t.nav.getInvolved}
          </NavLink>
          <Button
            asChild
            className="mt-3 w-full rounded-full bg-ember-500 font-semibold text-forest-950 hover:bg-ember-400"
          >
            <Link to="/donate">{t.nav.donate}</Link>
          </Button>
        </nav>
      )}
    </header>
  )
}
