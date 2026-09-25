import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { Heart, HandHeart, Megaphone, Calendar, Handshake, Building2 } from 'lucide-react'
import PageLayout from '@/components/PageLayout'
import PageHeader from '@/components/PageHeader'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useLanguage } from '@/context/LanguageContext'

export default function GetInvolvedPage() {
  const { t } = useLanguage()

  const volunteerSchema = z.object({
    name: z.string().min(2, t.volunteer.errors.name),
    email: z.string().email(t.volunteer.errors.email),
    phone: z.string().min(5, t.volunteer.errors.phone),
    city: z.string().min(2, t.volunteer.errors.city),
    skills: z.string().min(3, t.volunteer.errors.skills),
    message: z.string().min(10, t.volunteer.errors.message),
  })

  const partnerSchema = z.object({
    orgName: z.string().min(2, t.volunteer.errors.orgName),
    contactName: z.string().min(2, t.volunteer.errors.contactName),
    email: z.string().email(t.volunteer.errors.email),
    phone: z.string().min(5, t.volunteer.errors.phone),
    partnershipType: z.string().min(1, t.volunteer.errors.partnershipType),
    message: z.string().min(10, t.volunteer.errors.partnerMessage),
  })

  const volunteerForm = useForm({
    resolver: zodResolver(volunteerSchema),
  })

  const partnerForm = useForm({
    resolver: zodResolver(partnerSchema),
  })

  const onVolunteerSubmit = (_data: Record<string, string>) => {
    setTimeout(() => {
      toast.success(t.volunteer.fields.success)
      volunteerForm.reset()
    }, 1200)
  }

  const onPartnerSubmit = (_data: Record<string, string>) => {
    setTimeout(() => {
      toast.success(t.volunteer.partnerFields.success)
      partnerForm.reset()
    }, 1200)
  }

  const availabilityOptions = [
    { id: 'weekends', label: t.volunteer.fields.availableWeekends },
    { id: 'weekdays', label: t.volunteer.fields.availableWeekdays },
    { id: 'fulltime', label: t.volunteer.fields.availableFullTime },
    { id: 'remote', label: t.volunteer.fields.availableRemote },
  ]

  const partnershipTypes = [
    { value: 'corporate', label: t.volunteer.partnerFields.types.corporate },
    { value: 'ngo', label: t.volunteer.partnerFields.types.ngo },
    { value: 'funding', label: t.volunteer.partnerFields.types.funding },
    { value: 'other', label: t.volunteer.partnerFields.types.other },
  ]

  const waysIcons = [Megaphone, Calendar, Heart, Building2]

  return (
    <PageLayout>
      <PageHeader
        eyebrow={t.volunteer.eyebrow}
        title={t.volunteer.title}
        description={t.volunteer.description}
      />

      {/* Forms */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* Volunteer form */}
          <div className="rounded-2xl bg-card p-8 shadow-soft">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-100">
                <HandHeart className="h-5 w-5 text-forest-700" />
              </span>
              <div>
                <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-foreground">
                  {t.volunteer.volunteerTitle}
                </h2>
                <p className="text-sm text-muted-foreground">{t.volunteer.volunteerIntro}</p>
              </div>
            </div>

            <form onSubmit={volunteerForm.handleSubmit(onVolunteerSubmit)} className="mt-6 space-y-4">
              <div>
                <Label htmlFor="v-name">{t.volunteer.fields.name}</Label>
                <Input id="v-name" {...volunteerForm.register('name')} className="mt-1.5 rounded-xl" />
                {volunteerForm.formState.errors.name && (
                  <p className="mt-1 text-xs text-destructive">
                    {volunteerForm.formState.errors.name.message as string}
                  </p>
                )}
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="v-email">{t.volunteer.fields.email}</Label>
                  <Input id="v-email" type="email" {...volunteerForm.register('email')} className="mt-1.5 rounded-xl" />
                  {volunteerForm.formState.errors.email && (
                    <p className="mt-1 text-xs text-destructive">
                      {volunteerForm.formState.errors.email.message as string}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="v-phone">{t.volunteer.fields.phone}</Label>
                  <Input id="v-phone" type="tel" {...volunteerForm.register('phone')} className="mt-1.5 rounded-xl" />
                  {volunteerForm.formState.errors.phone && (
                    <p className="mt-1 text-xs text-destructive">
                      {volunteerForm.formState.errors.phone.message as string}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <Label htmlFor="v-city">{t.volunteer.fields.city}</Label>
                <Input id="v-city" {...volunteerForm.register('city')} className="mt-1.5 rounded-xl" />
                {volunteerForm.formState.errors.city && (
                  <p className="mt-1 text-xs text-destructive">
                    {volunteerForm.formState.errors.city.message as string}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="v-skills">{t.volunteer.fields.skills}</Label>
                <Input
                  id="v-skills"
                  {...volunteerForm.register('skills')}
                  placeholder={t.volunteer.fields.skillsPlaceholder}
                  className="mt-1.5 rounded-xl"
                />
                {volunteerForm.formState.errors.skills && (
                  <p className="mt-1 text-xs text-destructive">
                    {volunteerForm.formState.errors.skills.message as string}
                  </p>
                )}
              </div>
              <div>
                <Label className="mb-2 block">{t.volunteer.fields.availability}</Label>
                <div className="grid grid-cols-2 gap-3">
                  {availabilityOptions.map((opt) => (
                    <label key={opt.id} className="flex items-center gap-2 text-sm">
                      <Checkbox id={`v-${opt.id}`} />
                      {opt.label}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <Label htmlFor="v-message">{t.volunteer.fields.message}</Label>
                <Textarea id="v-message" rows={3} {...volunteerForm.register('message')} className="mt-1.5 rounded-xl" />
                {volunteerForm.formState.errors.message && (
                  <p className="mt-1 text-xs text-destructive">
                    {volunteerForm.formState.errors.message.message as string}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                disabled={volunteerForm.formState.isSubmitting}
                className="w-full rounded-full bg-forest-700 font-semibold text-white hover:bg-forest-600"
              >
                {volunteerForm.formState.isSubmitting ? t.common.loading : t.volunteer.fields.submit}
              </Button>
            </form>
          </div>

          {/* Partner form */}
          <div className="rounded-2xl bg-card p-8 shadow-soft">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ember-500/15">
                <Handshake className="h-5 w-5 text-ember-600" />
              </span>
              <div>
                <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-foreground">
                  {t.volunteer.partnerTitle}
                </h2>
                <p className="text-sm text-muted-foreground">{t.volunteer.partnerIntro}</p>
              </div>
            </div>

            <form onSubmit={partnerForm.handleSubmit(onPartnerSubmit)} className="mt-6 space-y-4">
              <div>
                <Label htmlFor="p-org">{t.volunteer.partnerFields.orgName}</Label>
                <Input id="p-org" {...partnerForm.register('orgName')} className="mt-1.5 rounded-xl" />
                {partnerForm.formState.errors.orgName && (
                  <p className="mt-1 text-xs text-destructive">
                    {partnerForm.formState.errors.orgName.message as string}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="p-contact">{t.volunteer.partnerFields.contactName}</Label>
                <Input id="p-contact" {...partnerForm.register('contactName')} className="mt-1.5 rounded-xl" />
                {partnerForm.formState.errors.contactName && (
                  <p className="mt-1 text-xs text-destructive">
                    {partnerForm.formState.errors.contactName.message as string}
                  </p>
                )}
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="p-email">{t.volunteer.partnerFields.email}</Label>
                  <Input id="p-email" type="email" {...partnerForm.register('email')} className="mt-1.5 rounded-xl" />
                  {partnerForm.formState.errors.email && (
                    <p className="mt-1 text-xs text-destructive">
                      {partnerForm.formState.errors.email.message as string}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="p-phone">{t.volunteer.partnerFields.phone}</Label>
                  <Input id="p-phone" type="tel" {...partnerForm.register('phone')} className="mt-1.5 rounded-xl" />
                  {partnerForm.formState.errors.phone && (
                    <p className="mt-1 text-xs text-destructive">
                      {partnerForm.formState.errors.phone.message as string}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <Label className="mb-2 block">{t.volunteer.partnerFields.partnershipType}</Label>
                <Select
                  onValueChange={(v) => partnerForm.setValue('partnershipType', v)}
                  defaultValue=""
                >
                  <SelectTrigger className="w-full rounded-xl">
                    <SelectValue placeholder={t.volunteer.partnerFields.partnershipType} />
                  </SelectTrigger>
                  <SelectContent>
                    {partnershipTypes.map((p) => (
                      <SelectItem key={p.value} value={p.value}>
                        {p.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {partnerForm.formState.errors.partnershipType && (
                  <p className="mt-1 text-xs text-destructive">
                    {partnerForm.formState.errors.partnershipType.message as string}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="p-message">{t.volunteer.partnerFields.message}</Label>
                <Textarea id="p-message" rows={3} {...partnerForm.register('message')} className="mt-1.5 rounded-xl" />
                {partnerForm.formState.errors.message && (
                  <p className="mt-1 text-xs text-destructive">
                    {partnerForm.formState.errors.message.message as string}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                disabled={partnerForm.formState.isSubmitting}
                className="w-full rounded-full bg-ember-500 font-semibold text-forest-950 hover:bg-ember-400"
              >
                {partnerForm.formState.isSubmitting ? t.common.loading : t.volunteer.partnerFields.submit}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Ways to help */}
      <section className="bg-sand-100 py-20 sm:py-28 dark:bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-semibold text-forest-900 dark:text-foreground sm:text-4xl">
            {t.volunteer.waysToHelpTitle}
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.volunteer.waysToHelp.map((way, i) => {
              const Icon = waysIcons[i] ?? Megaphone
              return (
                <div key={way.title} className="rounded-2xl bg-card p-6 shadow-soft">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-100">
                    <Icon className="h-6 w-6 text-forest-700" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-forest-900 dark:text-foreground">
                    {way.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{way.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
