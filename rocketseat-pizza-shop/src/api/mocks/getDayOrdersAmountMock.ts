import { http, HttpResponse } from 'msw'
import { GetDayOrdersAmountResponse } from '@/api/getDayOrdersAmount.ts'

export const getDayOrdersAmountMock = http.get(
  '/metrics/day-orders-amount',
  () => {
    return HttpResponse.json<GetDayOrdersAmountResponse>({
      amount: 20,
      diffFromYesterday: -5,
    })
  },
)
