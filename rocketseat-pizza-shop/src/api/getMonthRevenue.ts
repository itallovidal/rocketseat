import { api } from '@/lib/axios.ts'

export interface GetMonthRevenueResponse {
  receipt: number
  diffFromLastMonth: number
}

export async function getMonthRevenueAmount(): Promise<GetMonthRevenueResponse> {
  const response = await api.get('/metrics/month-receipt')

  return {
    receipt: response.data.receipt / 100,
    diffFromLastMonth: response.data.diffFromLastMonth,
  }
}
