import { api } from '@/lib/axios.config.ts'

export interface IArticle {
  number: number
  body: string
  comments: number
  created_at: Date
  html_url: string
  labels: string[]
  repository_url: string
  title: string
  url: string
  user: {
    login: string
    html_url: string
    avatar_url: string
  }
}

interface IIssues {
  total_count: number
  items: IArticle[]
}

export async function getIssues(): Promise<IIssues> {
  const response = await api.get(
    'search/issues?q=repo:itallovidal/rocketseat-ignite-blog',
  )

  return response.data
}
