import { api } from '@/lib/axios.ts'

export interface GetCanceledOrdersAmountResponse {
  amount: number
  diffFromLastMonth: number
}

export async function getCanceledOrdersAmount(): Promise<GetCanceledOrdersAmountResponse> {
  const response = await api.get('/metrics/month-canceled-orders-amount')

  return response.data
}
