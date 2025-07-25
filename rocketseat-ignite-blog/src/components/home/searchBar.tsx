import { Input } from '@/components/ui/input.tsx'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getIssues } from '@/api/getIssues.ts'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button.tsx'

const searchSchema = z.object({
  query: z
    .string({
      required_error: 'Para pesquisar escreva pelo menos 3 letras.',
    })
    .min(3, {
      message: 'Para pesquisar escreva pelo menos 3 letras.',
    }),
})

type ISearchSchema = z.infer<typeof searchSchema>

export function SearchBar() {
  const { data } = useQuery({
    queryKey: ['articles'],
    queryFn: getIssues,
  })

  const queryClient = useQueryClient()

  const [unfilteredArticles, setUnfilteredArticles] = useState({
    data,
    filtered: false,
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ISearchSchema>({
    resolver: zodResolver(searchSchema),
  })

  function clearFilter() {
    setUnfilteredArticles((prev) => {
      return {
        ...prev,
        filtered: false,
      }
    })
    queryClient.setQueryData(['articles'], unfilteredArticles.data)
    reset()
  }

  function handleFilter({ query }: ISearchSchema) {
    if (data?.items) {
      const articles = data.items.filter((article) => {
        return article.title.toLowerCase().includes(query)
      })

      if (articles.length === 0) {
        toast.message('Nenhum artigo com esse nome!')
        clearFilter()
        return
      }

      setUnfilteredArticles((prev) => {
        return {
          ...prev,
          filtered: true,
        }
      })

      queryClient.setQueryData(['articles'], {
        items: articles,
      })
    }
  }

  return (
    <div className={'px-4 sm:px-0 space-y-4 w-full mt-12'}>
      <div className={'flex justify-between'}>
        <h1 className={'text-2xl font-bold'}>Publicações</h1>
        <span className={'opacity-40'}>{data?.total_count} postagens</span>
      </div>

      <form
        onSubmit={handleSubmit(handleFilter)}
        className={'flex flex-col gap-4'}
      >
        {/* <Controller */}
        {/*  control={control} */}
        {/*  render={({ field: { name, value, onChange, onBlur } }) => { */}
        {/*    return ( */}
        {/*      <Input */}
        {/*        placeholder={'Buscar conteúdo'} */}
        {/*        className={' bg-gray-850 border-gray-800'} */}
        {/*        name={name} */}
        {/*        value={value} */}
        {/*        onChange={onChange} */}
        {/*        onBlur={onBlur} */}
        {/*      /> */}
        {/*    ) */}
        {/*  }} */}
        {/*  name={'query'} */}
        {/* /> */}

        <Input
          placeholder={'Buscar conteúdo'}
          className={' bg-gray-850 border-gray-800'}
          {...register('query')}
        />

        {unfilteredArticles.filtered && (
          <Button variant={'ghost'} onClick={() => clearFilter()}>
            Limpar Filtro
          </Button>
        )}

        <span
          className={
            (errors.query ? 'opacity-1' : 'opacity-0') +
            ' text-rose-500 transition'
          }
        >
          {errors.query?.message || 'Sem erros'}
        </span>
      </form>
    </div>
  )
}
