import { http, HttpResponse } from 'msw'
import { GetDailyRevenueInPeriod } from '@/api/getDailyRevenueInPeriod.ts'

export const getDailyRevenueInPeriodMock = http.get(
  '/metrics/daily-receipt-in-period',
  () => {
    return HttpResponse.json<GetDailyRevenueInPeriod[]>([
      {
        receipt: 2000,
        date: '01/01/2024',
      },
      {
        receipt: 2100,
        date: '02/01/2024',
      },
      {
        receipt: 1800,
        date: '03/01/2024',
      },
      {
        receipt: 1090,
        date: '04/01/2024',
      },
      {
        receipt: 2040,
        date: '05/01/2024',
      },
    ])
  },
)
