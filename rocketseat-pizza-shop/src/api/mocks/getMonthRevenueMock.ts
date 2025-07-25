import { http, HttpResponse } from 'msw'
import { GetMonthRevenueResponse } from '@/api/getMonthRevenue.ts'

export const getMonthRevenueMock = http.get('/metrics/month-receipt', () => {
  return HttpResponse.json<GetMonthRevenueResponse>({
    receipt: 2000,
    diffFromLastMonth: 24,
  })
})
