import { api } from '@/lib/axios.ts'

export interface UpdateProfile {
  name: string
  description: string | null
}

export async function updateProfile({ name, description }: UpdateProfile) {
  await api.put('/profile', {
    name,
    description,
  })
}
