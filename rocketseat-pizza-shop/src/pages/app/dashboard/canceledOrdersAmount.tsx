import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx'
import { DollarSign } from 'lucide-react'
import { useQuery } from 'react-query'
import { getMonthOrdersAmount } from '@/api/getMonthOrdersAmount.ts'
import { getCanceledOrdersAmount } from '@/api/getMonthCanceledOrdersAmount.ts'
import { MetricsCardSkeleton } from '@/components/skeletons/metricsCardSkeleton.tsx'

export function CanceledOrdersAmount() {
  const { data } = useQuery({
    queryFn: getCanceledOrdersAmount,
    queryKey: ['metrics', 'canceled-month-orders-amount'],
  })
  return (
    <Card>
      <CardHeader
        className={'flex-row items-center justify-between space-y-0 pb-2'}
      >
        <CardTitle> Cancelamentos (mês)</CardTitle>
        <DollarSign className={`h-4 w-4 text-muted-foreground`} />
      </CardHeader>
      <CardContent>
        {data ? (
          <>
            {data.diffFromLastMonth <= 0 ? (
              <>
                <span className={'text-2xl font-bold tracking-tight'}>
                  {data.amount}
                </span>
                <p className={'text-xs text-muted-foreground'}>
                  <span
                    className={'mr-2 text-emerald-500 dark:text-emerald-400'}
                  >
                    {data.diffFromLastMonth}%
                  </span>
                  em relação ao mês passado.
                </p>
              </>
            ) : (
              <>
                <span className={'text-2xl font-bold tracking-tight'}>
                  {data.amount}
                </span>
                <p className={'text-xs text-muted-foreground'}>
                  <span className={'mr-2 text-rose-500 dark:text-rose-400'}>
                    +{data.diffFromLastMonth}%
                  </span>
                  em relação ao mês passado.
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
