import { http, HttpResponse } from 'msw'
import { GetMonthOrdersAmountResponse } from '@/api/getMonthOrdersAmount.ts'

export const getMonthOrdersAmountMock = http.get(
  '/metrics/month-orders-amount',
  () => {
    return HttpResponse.json<GetMonthOrdersAmountResponse>({
      amount: 230,
      diffFromLastMonth: -44,
    })
  },
)
