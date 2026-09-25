import { useInView } from '@/hooks/useInView'
import { pct } from '@/lib/data'

interface FundProgressProps {
  raised: number
  goal: number
  barClass?: string
  trackClass?: string
  showLabel?: boolean
  currency?: 'USD' | 'TZS'
}

export default function FundProgress({
  raised,
  goal,
  barClass = 'bg-ember-500',
  trackClass = 'bg-forest-100',
  showLabel = true,
  currency = 'USD',
}: FundProgressProps) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4)
  const percent = pct(raised, goal)

  const formatAmount = (n: number) => {
    if (currency === 'TZS') return 'TSh ' + n.toLocaleString()
    return '$' + n.toLocaleString()
  }

  return (
    <div ref={ref}>
      <div className={`h-3 w-full overflow-hidden rounded-full ${trackClass}`}>
        <div
          className={`progress-fill h-full rounded-full ${barClass}`}
          style={{ width: inView ? `${percent}%` : '0%' }}
        />
      </div>
      {showLabel && (
        <div className="mt-2 flex items-center justify-between text-sm">
          <span className="font-semibold">{percent}%</span>
          <span className="text-muted-foreground">
            {formatAmount(raised)} / {formatAmount(goal)}
          </span>
        </div>
      )}
    </div>
  )
}
