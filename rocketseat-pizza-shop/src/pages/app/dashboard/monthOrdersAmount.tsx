import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx'
import { DollarSign } from 'lucide-react'
import { useQuery } from 'react-query'
import { getMonthOrdersAmount } from '@/api/getMonthOrdersAmount.ts'
import { MetricsCardSkeleton } from '@/components/skeletons/metricsCardSkeleton.tsx'

export function MonthOrdersAmount() {
  const { data } = useQuery({
    queryFn: getMonthOrdersAmount,
    queryKey: ['metrics', 'month-orders-amount'],
  })

  return (
    <Card>
      <CardHeader
        className={'flex-row items-center justify-between space-y-0 pb-2'}
      >
        <CardTitle> Pedidos totais (mês)</CardTitle>
        <DollarSign className={`h-4 w-4 text-muted-foreground`} />
      </CardHeader>
      <CardContent>
        {data ? (
          <>
            <span className={'text-2xl font-bold tracking-tight'}>
              {data.amount}
            </span>

            {data.diffFromLastMonth >= 0 ? (
              <>
                <span>{data.amount}</span>
                <p className={'text-xs text-muted-foreground'}>
                  <span
                    className={'mr-2 text-emerald-500 dark:text-emerald-400'}
                  >
                    +{data.diffFromLastMonth}%
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
                    {data.diffFromLastMonth}%
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
