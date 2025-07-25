import { http, HttpResponse } from 'msw'
import { GetManagedRestaurantResponse } from '@/api/getManagedRestaurant.ts'

export const getManagedRestaurantMock = http.get('/managed-restaurant', () => {
  return HttpResponse.json<GetManagedRestaurantResponse>({
    id: 'restaurant-id-1',
    name: 'Admin Profile',
    email: 'admin@gmail.com',
    managerId: 'manager-id-1',
    description: 'Admin restaurant',
    createdAt: Date.now(),
    updatedAt: null,
  })
})
