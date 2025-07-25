import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx'
import { DollarSign } from 'lucide-react'
import { useQuery } from 'react-query'
import { getMonthRevenueAmount } from '@/api/getMonthRevenue.ts'
import {MetricsCardSkeleton} from "@/components/skeletons/metricsCardSkeleton.tsx";

export function MonthRevenue() {
  const { data } = useQuery({
    queryFn: getMonthRevenueAmount,
    queryKey: ['metrics', 'month-revenue-amount'],
  })

  return (
    <Card>
      <CardHeader
        className={'flex-row items-center justify-between space-y-0 pb-2'}
      >
        <CardTitle>Receita total (mês)</CardTitle>
        <DollarSign className={`h-4 w-4 text-muted-foreground`} />
      </CardHeader>
      <CardContent>
        {data ? (
          <>
            {data.diffFromLastMonth >= 0 ? (
              <>
                <span className={'text-2xl font-bold tracking-tight'}>
                  {data.receipt.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </span>
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
                  {data.receipt.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
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
