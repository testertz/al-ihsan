import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { Clock, Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react'
import PageLayout from '@/components/PageLayout'
import PageHeader from '@/components/PageHeader'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useLanguage } from '@/context/LanguageContext'

export default function ContactPage() {
  const { t } = useLanguage()

  const schema = z.object({
    name: z.string().min(2, t.contact.errors.name),
    email: z.string().email(t.contact.errors.email),
    subject: z.string().min(2, t.contact.errors.subject),
    message: z.string().min(10, t.contact.errors.message),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmit = (_data: Record<string, string>) => {
    setTimeout(() => {
      toast.success(t.contact.success)
      reset()
    }, 1200)
  }

  const socials = [
    { Icon: Facebook, label: 'Facebook' },
    { Icon: Twitter, label: 'Twitter' },
    { Icon: Instagram, label: 'Instagram' },
    { Icon: Youtube, label: 'Youtube' },
  ]

  return (
    <PageLayout>
      <PageHeader
        eyebrow={t.contact.eyebrow}
        title={t.contact.title}
        description={t.contact.description}
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* Contact form */}
          <div className="rounded-2xl bg-card p-8 shadow-soft">
            <h2 className="font-display text-2xl font-semibold text-forest-900 dark:text-foreground">
              {t.contact.formTitle}
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5">
              <div>
                <Label htmlFor="c-name">{t.contact.name}</Label>
                <Input id="c-name" {...register('name')} className="mt-1.5 rounded-xl" />
                {errors.name && (
                  <p className="mt-1 text-xs text-destructive">{errors.name.message as string}</p>
                )}
              </div>
              <div>
                <Label htmlFor="c-email">{t.contact.email}</Label>
                <Input id="c-email" type="email" {...register('email')} className="mt-1.5 rounded-xl" />
                {errors.email && (
                  <p className="mt-1 text-xs text-destructive">{errors.email.message as string}</p>
                )}
              </div>
              <div>
                <Label htmlFor="c-subject">{t.contact.subject}</Label>
                <Input id="c-subject" {...register('subject')} className="mt-1.5 rounded-xl" />
                {errors.subject && (
                  <p className="mt-1 text-xs text-destructive">{errors.subject.message as string}</p>
                )}
              </div>
              <div>
                <Label htmlFor="c-message">{t.contact.message}</Label>
                <Textarea
                  id="c-message"
                  rows={5}
                  {...register('message')}
                  className="mt-1.5 rounded-xl"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-destructive">{errors.message.message as string}</p>
                )}
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-forest-700 font-semibold text-white hover:bg-forest-600"
              >
                {isSubmitting ? t.contact.sending : t.contact.send}
              </Button>
            </form>
          </div>

          {/* Contact details */}
          <div className="space-y-6">
            <div className="rounded-2xl bg-card p-6 shadow-soft">
              <h3 className="font-display text-lg font-semibold text-forest-900 dark:text-foreground">
                {t.contact.hqTitle}
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ember-600" />
                  {t.contact.hqAddress}
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-ember-600" />
                  {t.contact.hqPhone}
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-ember-600" />
                  {t.contact.hqEmail}
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-ember-600" />
                  <div>
                    <p className="font-medium text-forest-900 dark:text-foreground">{t.contact.hoursTitle}</p>
                    <p>{t.contact.hours}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-card p-6 shadow-soft">
              <h3 className="font-display text-lg font-semibold text-forest-900 dark:text-foreground">
                {t.contact.intlTitle}
              </h3>
              <p className="mt-3 flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0 text-ember-600" />
                {t.contact.intlEmail}
              </p>
            </div>

            {/* Map placeholder */}
            <div className="flex h-48 items-center justify-center rounded-2xl border border-border bg-sand-100 dark:bg-secondary">
              <div className="text-center">
                <MapPin className="mx-auto h-10 w-10 text-forest-600" />
                <p className="mt-2 text-sm font-medium text-forest-700 dark:text-foreground">
                  {t.contact.mapTitle}
                </p>
                <p className="text-xs text-muted-foreground">{t.contact.hqAddress}</p>
              </div>
            </div>

            {/* Social */}
            <div className="rounded-2xl bg-card p-6 shadow-soft">
              <h3 className="font-display text-lg font-semibold text-forest-900 dark:text-foreground">
                {t.contact.socialTitle}
              </h3>
              <div className="mt-4 flex gap-3">
                {socials.map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-ember-500 hover:text-forest-950"
                    aria-label={label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-sand-100 py-20 sm:py-28 dark:bg-secondary/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-semibold text-forest-900 dark:text-foreground sm:text-4xl">
            {t.contact.faqTitle}
          </h2>
          <Accordion type="single" collapsible className="mt-10 space-y-3">
            {t.contact.faq.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-xl border border-border bg-card px-5"
              >
                <AccordionTrigger className="text-left font-semibold text-forest-900 dark:text-foreground">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </PageLayout>
  )
}
