import { api } from '@/lib/axios.ts'

export interface SignUpBody {
  restaurantName: string
  email: string
  phone: string
  managerName: string
}

export async function signUp({
  email,
  managerName,
  restaurantName,
  phone,
}: SignUpBody) {
  await api.post('/restaurants', {
    email,
    restaurantName,
    managerName,
    phone,
  })
}
