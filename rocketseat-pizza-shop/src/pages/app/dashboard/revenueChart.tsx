import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx'

import * as colors from 'tailwindcss/colors'

import {
  ResponsiveContainer,
  LineChart,
  YAxis,
  CartesianGrid,
  Line,
  XAxis,
} from 'recharts'
import { useQuery } from 'react-query'
import { getDailyRevenueInPeriod } from '@/api/getDailyRevenueInPeriod.ts'
import { Loader2 } from 'lucide-react'

export function RevenueChart() {
  const { data } = useQuery({
    queryFn: getDailyRevenueInPeriod,
    queryKey: ['daily-revenue-in-period', 'metrics'],
  })

  return (
    <Card className={'col-span-6'}>
      <CardHeader className={'flex-row items-center justify-between pb-8'}>
        <div className={'space-y-1'}>
          <CardTitle>Receita no período</CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        {data ? (
          <ResponsiveContainer width={'100%'} height={240}>
            <LineChart data={data} style={{ fontSize: 12 }}>
              <CartesianGrid vertical={false} className={'stroke-muted'} />

              <XAxis dataKey={'date'} tickLine={false} dy={16} />

              <YAxis
                width={80}
                axisLine={false}
                tickLine={false}
                tickFormatter={(value: number) =>
                  value.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })
                }
              />
              <Line
                type={'linear'}
                strokeWidth={2}
                dataKey={'receipt'}
                stroke={colors.red['600']}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <div className={'flex items-center justify-center h-[240px]'}>
            <Loader2 className={'size-8 animate-spin text-muted-foreground'} />
          </div>
        )}
      </CardContent>
    </Card>
  )
}
