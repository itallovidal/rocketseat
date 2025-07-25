import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx'
import { DollarSign } from 'lucide-react'
import { useQuery } from 'react-query'
import { getDayOrdersAmount } from '@/api/getDayOrdersAmount.ts'
import { MetricsCardSkeleton } from '@/components/skeletons/metricsCardSkeleton.tsx'

export function DayOrdersAmount() {
  const { data } = useQuery({
    queryFn: getDayOrdersAmount,
    queryKey: ['metrics', 'day-orders-amount'],
  })

  return (
    <Card>
      <CardHeader
        className={'flex-row items-center justify-between space-y-0 pb-2'}
      >
        <CardTitle> Pedidos (dia)</CardTitle>
        <DollarSign className={`h-4 w-4 text-muted-foreground`} />
      </CardHeader>
      <CardContent>
        {data ? (
          <>
            <span className={'text-2xl font-bold tracking-tight'}>
              {data.amount}
            </span>

            {data.diffFromYesterday >= 0 ? (
              <>
                <p className={'text-xs text-muted-foreground'}>
                  <span
                    className={'mr-2 text-emerald-500 dark:text-emerald-400'}
                  >
                    +{data.diffFromYesterday}%
                  </span>
                  em relação a ontem.
                </p>
              </>
            ) : (
              <>
                <p className={'text-xs text-muted-foreground'}>
                  <span className={'mr-2 text-rose-500 dark:text-rose-400'}>
                    -{data.diffFromYesterday}%
                  </span>
                  em relação a ontem.
                </p>
              </>
            )}
          </>
        ) : (
          <MetricsCardSkeleton />
        )}
      </CardContent>
    </Card>
  )
}
