import { http, HttpResponse } from 'msw'
import { GetCanceledOrdersAmountResponse } from '@/api/getMonthCanceledOrdersAmount.ts'

export const getCanceledOrdersAmountMock = http.get(
  '/metrics/month-canceled-orders-amount',
  () => {
    return HttpResponse.json<GetCanceledOrdersAmountResponse>({
      amount: 40,
      diffFromLastMonth: -3,
    })
  },
)
