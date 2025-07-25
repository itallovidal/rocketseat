import { api } from '@/lib/axios.ts'

export async function deliverOrder(orderId: string) {
  await api.patch(`orders/${orderId}/deliver`)
}
