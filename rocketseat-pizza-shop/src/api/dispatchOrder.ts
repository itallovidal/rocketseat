import { api } from '@/lib/axios.ts'

export async function dispatchOrder(orderId: string) {
  await api.patch(`orders/${orderId}/dispatch`)
}
