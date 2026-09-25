import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { testimonials } from '@/lib/data'
import { cn } from '@/lib/utils'

export default function TestimonialCarousel() {
  const { t, lang } = useLanguage()
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  useEffect(() => {
    const interval = setInterval(() => {
      emblaApi?.scrollNext()
    }, 6000)
    return () => clearInterval(interval)
  }, [emblaApi])

  return (
    <section className="relative overflow-hidden bg-forest-900 py-20 sm:py-28">
      <div className="islamic-pattern absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ember-400">
            {t.stories.eyebrow}
          </p>
          <h2 className="text-balance mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            {t.stories.headline}
          </h2>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((item) => (
              <div key={item.id} className="min-w-0 flex-[0_0_100%] px-4">
                <div className="mx-auto max-w-3xl rounded-2xl bg-forest-800/80 p-8 text-center shadow-soft sm:p-12">
                  <Quote className="mx-auto h-10 w-10 text-ember-400" />
                  <p className="mt-6 font-display text-xl leading-relaxed text-white sm:text-2xl">
                    "{item.quote[lang]}"
                  </p>
                  <div className="mt-6">
                    <p className="font-semibold text-ember-400">{item.author}</p>
                    <p className="mt-1 text-sm text-white/60">
                      {item.role[lang]} · {item.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={scrollPrev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-ember-500 hover:text-forest-950"
            aria-label="Previous"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {scrollSnaps.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={cn(
                  'h-2.5 rounded-full transition-all',
                  i === selectedIndex ? 'w-8 bg-ember-500' : 'w-2.5 bg-white/30',
                )}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={scrollNext}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-ember-500 hover:text-forest-950"
            aria-label="Next"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
