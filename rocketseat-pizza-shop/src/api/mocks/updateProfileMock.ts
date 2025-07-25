import { http, HttpResponse } from 'msw'
import { UpdateProfile } from '@/api/updateProfile.ts'

export const updateProfileMock = http.put<never, UpdateProfile>(
  '/profile',
  async ({ request }) => {
    const { name } = await request.json()

    if (name === 'pitsa shop') {
      return new HttpResponse(null, {
        status: 204,
      })
    }

    return new HttpResponse(null, {
      status: 400,
    })
  },
)
