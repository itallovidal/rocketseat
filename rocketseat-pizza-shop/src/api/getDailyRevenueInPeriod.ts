import { api } from '@/lib/axios.ts'

export interface GetDailyRevenueInPeriod {
  date: number
  receipt: number
}

export async function getDailyRevenueInPeriod(): Promise<
  GetDailyRevenueInPeriod[]
> {
  const response = await api.get('/metrics/daily-receipt-in-period')

  return response.data
}
