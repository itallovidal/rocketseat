import { api } from '@/lib/axios.ts'

export async function approveOrder(orderId: string) {
  await api.patch(`orders/${orderId}/approve`)
}
