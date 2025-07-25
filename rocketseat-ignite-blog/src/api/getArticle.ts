import { api } from '@/lib/axios.config.ts'
import { IArticle } from '@/api/getIssues.ts'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AxiosError, isAxiosError } from 'axios'

export async function getArticle(id: string): Promise<IArticle> {
  try {
    const response = await api.get(
      `/repos/itallovidal/rocketseat-ignite-blog/issues/${id}`,
    )

    return response.data as IArticle
  } catch (e: unknown) {
    console.log('erro!')
    console.log(e)

    if (!isAxiosError(e)) throw new Error('Erro interno')

    if (e.response?.status === 404) {
      throw new Error('Artigo não encontrado.')
    }

    throw new Error('Erro  do axios')
  }
}
