import { http, HttpResponse } from 'msw'
import { GetPopularProductsResponse } from '@/api/getPopularProducts.ts'

export const getPopularProductsMock = http.get(
  '/metrics/popular-products',
  () => {
    return HttpResponse.json<GetPopularProductsResponse[]>([
      { product: 'Pizza Calabresa', amount: 10 },
      { product: 'Pizza Peperoni', amount: 20 },
      { product: 'Pizza 4 Queijos', amount: 33 },
      { product: 'Pizza Mussarela', amount: 21 },
      { product: 'Pizza Portuguesa', amount: 68 },
    ])
  },
)
