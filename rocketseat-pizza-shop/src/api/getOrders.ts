import { api } from '@/lib/axios.ts'

export type TOrderStatus =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

export interface Order {
  orderId: string
  createdAt: string
  status: TOrderStatus
  customerName: string
  total: number
}

export interface GetOrdersResponse {
  orders: Order[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

interface GetOrdersRequest {
  pageIndex?: number | null
  orderId?: string | null
  status?: string | null
  customerName?: string | null
}

export async function getOrders({
  pageIndex,
  orderId,
  status,
  customerName,
}: GetOrdersRequest): Promise<GetOrdersResponse> {
  const response = await api.get('/orders', {
    params: {
      pageIndex,
      orderId,
      status: status === 'all' ? undefined : status,
      customerName,
    },
  })

  return response.data
}
