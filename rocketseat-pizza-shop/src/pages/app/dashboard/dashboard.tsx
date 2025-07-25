import { Helmet } from 'react-helmet-async'
import { MonthRevenue } from '@/pages/app/dashboard/monthRevenue.tsx'
import { MonthOrdersAmount } from '@/pages/app/dashboard/monthOrdersAmount.tsx'
import { DayOrdersAmount } from '@/pages/app/dashboard/dayOrdersAmount.tsx'
import { CanceledOrdersAmount } from '@/pages/app/dashboard/canceledOrdersAmount.tsx'
import { RevenueChart } from '@/pages/app/dashboard/revenueChart.tsx'
import { PopularProductsChart } from '@/pages/app/dashboard/popularProductsChart.tsx'

export function Dashboard() {
  return (
    <>
      <Helmet title={'Dashboard'} />
      <div className={'flex flex-col gap-4'}>
        <div className={'flex flex-col gap-4'}>
          <h1 className={'text-3xl font-bold tracking-tight'}>Dashboard</h1>
        </div>

        <div className={`grid md:grid-cols-4 gap-4 grid-cols-1`}>
          <MonthRevenue />
          <MonthOrdersAmount />
          <DayOrdersAmount />
          <CanceledOrdersAmount />
        </div>

        <div className={`grid md:grid-cols-9 gap-4 grid-cols-1`}>
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  )
}
