interface PageHeaderProps {
  eyebrow: string
  title: string
  description?: string
}

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="bg-forest-950 pb-16 pt-32 sm:pb-20 sm:pt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ember-400">{eyebrow}</p>
        <h1 className="text-balance mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight text-white sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">{description}</p>
        )}
      </div>
    </header>
  )
}
