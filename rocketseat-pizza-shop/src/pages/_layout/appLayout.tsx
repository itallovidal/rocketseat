import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { isAxiosError } from 'axios'
import { api } from '@/lib/axios.ts'
import { Header } from '@/components/header.tsx'

export function AppLayout() {
  const navigate = useNavigate()

  useEffect(() => {
    const interceptorId = api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (isAxiosError(error)) {
          const status = error.response.status
          const code = error.response.data.code

          if (status === 401 && code === 'UNAUTHORIZED') {
            navigate('/sign-in', {
              relative: true,
            })
          } else {
            throw error
          }
        }
      },
    )

    return () => {
      api.interceptors.response.eject(interceptorId)
    }
  }, [navigate])

  return (
    <div>
      <Header />

      <div className={'p-6'}>
        <Outlet />
      </div>
    </div>
  )
}
