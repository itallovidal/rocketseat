import { http, HttpResponse } from 'msw'
import { SignInBody } from '@/api/signIn.ts'

export const signInMock = http.post<never, SignInBody>(
  '/authenticate',
  async ({ request }) => {
    const { email } = await request.json()

    if (email === 'admin@gmail.com') {
      return new HttpResponse(null, {
        status: 200,
        headers: {
          'Set-Cookie': 'auth=sample-jwt',
        },
      })
    }

    return HttpResponse.json(
      {
        cause: 'Email não encontrado.',
      },
      {
        status: '401',
      },
    )
  },
)
