import { api } from '@/lib/axios.ts'
import { TOrderStatus } from '@/api/getOrders.ts'

export interface OrderItems {
  id: number
  priceInCents: number
  quantity: number
  product: {
    name: string
  }
}

export interface GetOrderDetailsResponse {
  id: string
  createdAt: string
  status: TOrderStatus
  totalInCents: number
  customer: {
    name: string
    email: string
    phone: string | null
  }
  orderItems: OrderItems[]
}

export async function getOrderDetails(
  orderId: string,
): Promise<GetOrderDetailsResponse> {
  const response = await api.get(`/orders/${orderId}`)

  return response.data
}
