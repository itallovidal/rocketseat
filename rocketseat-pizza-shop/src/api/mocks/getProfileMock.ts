import { http, HttpResponse } from 'msw'
import { GetProfileResponse } from '@/api/getProfile.ts'

export const getProfileMock = http.get('/me', () => {
  return HttpResponse.json<GetProfileResponse>({
    email: 'admin@gmail.com',
    name: 'Admin Profile',
    phone: null,
    createdAt: Date.now(),
    role: 'manager',
    updatedAt: null,
    id: 'manager-id-1',
  })
})
