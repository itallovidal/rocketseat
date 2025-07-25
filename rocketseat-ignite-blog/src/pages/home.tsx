import { Header } from '@/components/home/header.tsx'
import { SearchBar } from '@/components/home/searchBar.tsx'
import { ArticleCard } from '@/components/home/article-card.tsx'
import { getIssues } from '@/api/getIssues.ts'
import { useQuery } from '@tanstack/react-query'

export function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ['articles'],
    queryFn: getIssues,
  })

  if (isLoading) return <></>

  return (
    <div className={'opacity-0 animate-show'}>
      <Header />
      <SearchBar />

      <div
        className={
          'px-4 sm:px-0 flex sm:flex-row flex-col justify-between flex-wrap gap-4 mt-12'
        }
      >
        {data &&
          data.items.map((article, index) => {
            return (
              <ArticleCard index={index} key={article.number} data={article} />
            )
          })}
      </div>
    </div>
  )
}
