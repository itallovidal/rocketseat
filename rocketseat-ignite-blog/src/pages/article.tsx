import { Header } from '@/components/article/header.tsx'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getArticle } from '@/api/getArticle.ts'
import { toast } from 'sonner'

export function Article() {
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const id = params.get('id') ?? ''
  const { data, isLoading, isError } = useQuery({
    queryKey: ['article', id],
    queryFn: () => getArticle(id),
    staleTime: Infinity,
    enabled: !!id,
    retry: false,
  })

  useEffect(() => {
    if (!id) navigate('/')

    if (isError) {
      toast.error('Ops, artigo não encontrado.')
      navigate('/')
    }
  }, [id, isError])

  if (isLoading) return <></>

  if (isError) {
    console.log(isError)
    return
  }

  return (
    data && (
      <div className={'opacity-0 animate-show'}>
        <Header data={data} />
        <div
          className={
            'text-justify space-y-6 h-full mt-8 githubArticle pb-[100px]'
          }
        >
          <Markdown
            className={'sm:px-0 px-4 space-y-6'}
            remarkPlugins={[remarkGfm]}
          >
            {data.body}
          </Markdown>
        </div>
      </div>
    )
  )
}
