import { api } from '@/lib/axios.ts'

export interface GetManagedRestaurantResponse {
  id: string
  name: string
  email: string
  managerId: string | null
  description: string | null
  createdAt: Date | null
  updatedAt: Date | null
}

export async function getManagedRestaurant(): Promise<GetManagedRestaurantResponse> {
  const response = await api.get('/managed-restaurant')

  return response.data
}
