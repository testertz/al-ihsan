import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import {
  Banknote,
  CreditCard,
  Globe,
  Heart,
  Lock,
  Smartphone,
  Building2,
} from 'lucide-react'
import PageLayout from '@/components/PageLayout'
import PageHeader from '@/components/PageHeader'
import ImpactStats from '@/sections/ImpactStats'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useLanguage } from '@/context/LanguageContext'
import {
  donationPresetsUSD,
  donationPresetsTZS,
  USD_TO_TZS,
  formatMoney,
} from '@/lib/data'

type Currency = 'USD' | 'TZS'
type Frequency = 'once' | 'monthly'
type PaymentMethod = 'mpesa' | 'bank' | 'international'

export default function DonatePage() {
  const { t } = useLanguage()
  const [currency, setCurrency] = useState<Currency>('USD')
  const [frequency, setFrequency] = useState<Frequency>('once')
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('mpesa')
  const [presetAmount, setPresetAmount] = useState<number>(100)
  const [customAmount, setCustomAmount] = useState('')
  const [fund, setFund] = useState('general')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const schema = z.object({
    name: z.string().min(2, t.donate.errors.name),
    email: z.string().email(t.donate.errors.email),
    phone: z.string().min(5, t.donate.errors.phone),
    mpesaPhone: z.string().optional(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  })

  const presets = currency === 'USD' ? donationPresetsUSD : donationPresetsTZS
  const effectiveAmountUSD =
    currency === 'USD'
      ? customAmount
        ? Number(customAmount) || 0
        : presetAmount
      : customAmount
        ? Math.round(Number(customAmount) / USD_TO_TZS)
        : Math.round(presetAmount / USD_TO_TZS)

  const impactKey = String(
    currency === 'USD' ? (customAmount ? 0 : presetAmount) : 0,
  )
  const impactLine = (t.donate.impactLines as Record<string, string>)[impactKey]

  const fundOptions = [
    { value: 'general', label: t.donate.funds.general },
    { value: 'water', label: t.donate.funds.water },
    { value: 'education', label: t.donate.funds.education },
    { value: 'health', label: t.donate.funds.health },
    { value: 'orphan', label: t.donate.funds.orphan },
    { value: 'food', label: t.donate.funds.food },
    { value: 'emergency', label: t.donate.funds.emergency },
  ]

  const handleCustom = (v: string) => {
    setCustomAmount(v.replace(/[^0-9]/g, ''))
  }

  const onSubmit = (data: Record<string, string>) => {
    if (effectiveAmountUSD <= 0) {
      toast.error(t.donate.errors.amount)
      return
    }
    if (paymentMethod === 'mpesa' && (!data.mpesaPhone || data.mpesaPhone.length < 8)) {
      toast.error(t.donate.errors.mpesaPhone)
      return
    }
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
      toast.success(t.donate.successTitle)
      reset()
    }, 1500)
  }

  const formatPreset = (n: number) => {
    if (currency === 'TZS') return formatMoney(n, 'TZS')
    return `$${n}`
  }

  return (
    <PageLayout>
      <PageHeader
        eyebrow={t.donate.eyebrow}
        title={t.donate.headline + ' ' + t.donate.headlineAccent}
        description={t.donate.body}
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="rounded-2xl bg-card p-10 text-center shadow-soft">
              <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-forest-100">
                <Heart className="h-10 w-10 fill-forest-600 text-forest-600" />
              </span>
              <h2 className="mt-6 font-display text-3xl font-semibold text-forest-900 dark:text-foreground">
                {t.donate.successTitle}
              </h2>
              <p className="mx-auto mt-4 max-w-md text-muted-foreground">
                {t.donate.successBody}
              </p>
              <Button
                variant="outline"
                className="mt-6 rounded-full"
                onClick={() => setSubmitted(false)}
              >
                {t.donate.makeAnother}
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Currency toggle */}
              <div className="flex items-center justify-center gap-2">
                <div className="inline-flex rounded-full border border-border bg-card p-1">
                  {(['USD', 'TZS'] as Currency[]).map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => {
                        setCurrency(c)
                        setCustomAmount('')
                        setPresetAmount(c === 'USD' ? 100 : 100000)
                      }}
                      className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                        currency === c
                          ? 'bg-forest-700 text-white'
                          : 'text-forest-700 hover:bg-sand-100 dark:text-foreground'
                      }`}
                    >
                      {c === 'USD' ? t.donate.currencyUSD : t.donate.currencyTZS}
                    </button>
                  ))}
                </div>
              </div>

              {/* Frequency toggle */}
              <div>
                <Label className="mb-3 block text-center text-sm font-medium text-muted-foreground">
                  {t.donate.frequency}
                </Label>
                <ToggleGroup
                  type="single"
                  value={frequency}
                  onValueChange={(v) => v && setFrequency(v as Frequency)}
                  className="mx-auto flex w-fit rounded-full bg-sand-100 p-1.5 dark:bg-secondary"
                >
                  <ToggleGroupItem
                    value="once"
                    className="rounded-full px-6 data-[state=on]:bg-forest-700 data-[state=on]:text-white"
                  >
                    {t.donate.oneTime}
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="monthly"
                    className="rounded-full px-6 data-[state=on]:bg-forest-700 data-[state=on]:text-white"
                  >
                    {t.donate.monthly}
                  </ToggleGroupItem>
                </ToggleGroup>
                {frequency === 'monthly' && (
                  <p className="mt-3 text-center text-xs font-medium text-ember-700">
                    {t.donate.monthlyNote}
                  </p>
                )}
              </div>

              {/* Amount selection */}
              <div>
                <Label className="mb-3 block text-sm font-medium text-muted-foreground">
                  {t.donate.amount}
                </Label>
                <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-4">
                  {presets.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => {
                        setPresetAmount(p)
                        setCustomAmount('')
                      }}
                      className={`rounded-xl border-2 py-3 font-display text-base font-bold transition-colors sm:text-lg ${
                        !customAmount && presetAmount === p
                          ? 'border-forest-600 bg-forest-50 text-forest-800 dark:bg-secondary'
                          : 'border-border text-forest-700 hover:border-forest-300 dark:text-foreground'
                      }`}
                    >
                      {formatPreset(p)}
                    </button>
                  ))}
                  <div
                    className={`flex items-center rounded-xl border-2 px-3 transition-colors ${
                      customAmount ? 'border-forest-600 bg-forest-50 dark:bg-secondary' : 'border-border'
                    }`}
                  >
                    <input
                      value={customAmount}
                      onChange={(e) => handleCustom(e.target.value)}
                      placeholder={t.donate.custom}
                      className="w-full bg-transparent py-3 font-display text-base font-bold text-forest-800 outline-none placeholder:font-body placeholder:text-sm placeholder:font-medium placeholder:text-muted-foreground dark:text-foreground sm:text-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Impact line */}
              <div className="min-h-12 rounded-xl bg-sand-100 px-4 py-3 text-sm leading-snug text-forest-800 dark:bg-secondary dark:text-foreground">
                {effectiveAmountUSD > 0 ? (
                  <>
                    <strong>{formatMoney(effectiveAmountUSD)}</strong>
                    {frequency === 'monthly' ? ` ${t.donate.eachMonth} ` : ' '}
                    {impactLine ?? t.donate.impactDefault}
                  </>
                ) : (
                  t.donate.chooseAmount
                )}
              </div>

              {/* Fund designation */}
              <div>
                <Label className="mb-3 block text-sm font-medium text-muted-foreground">
                  {t.donate.fundDesignation}
                </Label>
                <Select value={fund} onValueChange={setFund}>
                  <SelectTrigger className="w-full rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {fundOptions.map((f) => (
                      <SelectItem key={f.value} value={f.value}>
                        {f.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Donor info */}
              <div>
                <h3 className="mb-4 font-display text-lg font-semibold text-forest-900 dark:text-foreground">
                  {t.donate.donorInfo}
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="name">{t.donate.fullName}</Label>
                    <Input id="name" {...register('name')} className="mt-1.5 rounded-xl" />
                    {errors.name && (
                      <p className="mt-1 text-xs text-destructive">{errors.name.message as string}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="email">{t.donate.email}</Label>
                    <Input id="email" type="email" {...register('email')} className="mt-1.5 rounded-xl" />
                    {errors.email && (
                      <p className="mt-1 text-xs text-destructive">{errors.email.message as string}</p>
                    )}
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="phone">{t.donate.phone}</Label>
                    <Input id="phone" type="tel" {...register('phone')} className="mt-1.5 rounded-xl" />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-destructive">{errors.phone.message as string}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Payment method */}
              <div>
                <h3 className="mb-4 font-display text-lg font-semibold text-forest-900 dark:text-foreground">
                  {t.donate.paymentMethod}
                </h3>
                <Tabs value={paymentMethod} onValueChange={(v) => setPaymentMethod(v as PaymentMethod)}>
                  <TabsList className="grid w-full grid-cols-3 rounded-xl">
                    <TabsTrigger value="mpesa" className="rounded-xl">
                      <Smartphone className="mr-1.5 h-4 w-4" />
                      {t.donate.mpesa}
                    </TabsTrigger>
                    <TabsTrigger value="bank" className="rounded-xl">
                      <Building2 className="mr-1.5 h-4 w-4" />
                      {t.donate.bank}
                    </TabsTrigger>
                    <TabsTrigger value="international" className="rounded-xl">
                      <Globe className="mr-1.5 h-4 w-4" />
                      {t.donate.international}
                    </TabsTrigger>
                  </TabsList>

                  {/* M-Pesa */}
                  <TabsContent value="mpesa" className="mt-4 space-y-4 rounded-xl border border-border bg-card p-5">
                    <div>
                      <Label htmlFor="mpesaPhone">{t.donate.mpesaPhone}</Label>
                      <Input
                        id="mpesaPhone"
                        {...register('mpesaPhone')}
                        placeholder="0712 345 678"
                        className="mt-1.5 rounded-xl"
                      />
                      {errors.mpesaPhone && (
                        <p className="mt-1 text-xs text-destructive">
                          {errors.mpesaPhone.message as string}
                        </p>
                      )}
                    </div>
                    <div className="rounded-lg bg-sand-100 p-4 dark:bg-secondary">
                      <p className="text-xs font-semibold uppercase tracking-wider text-ember-600">
                        {t.donate.mpesaInstructions}
                      </p>
                      <ol className="mt-3 space-y-2">
                        {t.donate.mpesaSteps.map((step, i) => (
                          <li key={i} className="flex gap-3 text-sm text-forest-800 dark:text-foreground">
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-forest-700 text-xs font-bold text-white">
                              {i + 1}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </TabsContent>

                  {/* Bank Transfer */}
                  <TabsContent value="bank" className="mt-4 rounded-xl border border-border bg-card p-5">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Banknote className="h-5 w-5 text-forest-600" />
                        <div>
                          <p className="text-xs text-muted-foreground">{t.donate.bankDetails}</p>
                        </div>
                      </div>
                      <div className="rounded-lg bg-sand-100 p-4 font-mono text-sm dark:bg-secondary">
                        <p className="text-forest-800 dark:text-foreground">{t.donate.bankName}</p>
                        <p className="text-forest-800 dark:text-foreground">{t.donate.accountName}</p>
                        <p className="font-bold text-forest-900 dark:text-foreground">{t.donate.accountNumber}</p>
                        <p className="text-forest-800 dark:text-foreground">{t.donate.branch}</p>
                        <p className="text-forest-800 dark:text-foreground">{t.donate.swift}</p>
                      </div>
                    </div>
                  </TabsContent>

                  {/* International */}
                  <TabsContent value="international" className="mt-4 rounded-xl border border-border bg-card p-5">
                    <div className="text-center">
                      <CreditCard className="mx-auto h-12 w-12 text-forest-600" />
                      <p className="mt-4 font-semibold text-forest-900 dark:text-foreground">
                        {t.donate.intlComingSoon}
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">{t.donate.intlNote}</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={submitting || effectiveAmountUSD <= 0}
                className="w-full rounded-full bg-ember-500 py-6 text-base font-semibold text-forest-950 hover:bg-ember-400"
              >
                <Heart className="mr-2 h-5 w-5 fill-forest-950" />
                {submitting
                  ? t.common.loading
                  : `${t.donate.submit} — ${formatMoney(effectiveAmountUSD)}${
                      frequency === 'monthly' ? ' / ' + t.donate.monthly.toLowerCase() : ''
                    }`}
              </Button>
              <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                <Lock className="h-3.5 w-3.5" /> {t.donate.secure}
              </p>
            </form>
          )}
        </div>
      </section>

      <ImpactStats />
    </PageLayout>
  )
}
