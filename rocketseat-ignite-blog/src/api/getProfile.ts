import { api } from '@/lib/axios.config.ts'

interface IProfile {
  login: string
  avatar_url: string
  html_url: string
  name: string
  location: string
  hireable: boolean
  bio: string
  public_repos: number
}

export async function getProfile(): Promise<IProfile> {
  const response = await api.get('/users/itallovidal')
  return response.data as IProfile
}
