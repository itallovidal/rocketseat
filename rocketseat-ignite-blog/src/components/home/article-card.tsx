import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx'
import { IArticle } from '@/api/getIssues.ts'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useNavigate } from 'react-router-dom'

export function ArticleCard({
  data,
  index,
}: {
  data: IArticle
  index: number
}) {
  const navigate = useNavigate()

  return (
    <Card
      style={{
        animationDelay: `${index * 200}ms`,
      }}
      onClick={() => navigate(`/article?id=${data.number}`)}
      className={`opacity-0 animate-show group hover:text-gray-900 hover:bg-white  border-0  shadow-none w-full sm:w-[calc(50%-theme(gap.2))] bg-gray-850 text-white cursor-pointer transition hover:-translate-y-2`}
    >
      <CardHeader>
        <CardTitle className={'leading-12'}>{data.title}</CardTitle>
        <CardDescription className={'opacity-80'}></CardDescription>
      </CardHeader>
      <CardContent>
        <span className={'opacity-50 group-hover:opacity-100'}>
          {data.body.slice(0, 200)}...
        </span>
      </CardContent>
      <CardFooter className={'flex sm:flex-row flex-col opacity-90 '}>
        <span>
          Escrito por <span className={'font-bold'}>{data.user.login}</span>
        </span>
        <span className={'hidden sm:block'}>&nbsp;•&nbsp;</span>
        <span>
          {formatDistanceToNow(data.created_at, {
            locale: ptBR,
            addSuffix: true,
          })}
        </span>
      </CardFooter>
    </Card>
  )
}
