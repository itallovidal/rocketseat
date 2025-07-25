import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card.tsx'
import { IconSpan } from '@/components/iconSpan.tsx'
import { GithubIcon } from '@/assets/github-icon.tsx'
import { ArrowLeft, Calendar, ExternalLink, MessageSquare } from 'lucide-react'
import { IArticle } from '@/api/getIssues.ts'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.tsx'

interface IHeaderProps {
  data: Pick<
    IArticle,
    'title' | 'html_url' | 'comments' | 'user' | 'created_at'
  >
}

export function Header({ data }: IHeaderProps) {
  return (
    <Card className={'bg-gray-850 border-0 outline-0 p-0 text-white'}>
      <CardHeader className={' flex flex-row justify-between items-center'}>
        <Link to={'/'}>
          <Button className={'gap-4'} variant={'ghost'}>
            <ArrowLeft className={'size-4'} />
            Voltar
          </Button>
        </Link>

        <Button
          className={'gap-4'}
          onClick={() => (window.location.href = data.html_url)}
          variant={'ghost'}
        >
          Ver no Github
          <ExternalLink className={'size-4'} />
        </Button>
      </CardHeader>
      <CardContent className={'flex gap-6'}>
        <div className={'flex flex-col justify-between'}>
          <h1 className={'text-2xl font-bold'}>{data.title}</h1>
        </div>
      </CardContent>
      <CardFooter className={'flex gap-6 sm:flex-row flex-col items-start'}>
        <IconSpan icon={<GithubIcon />}>{data.user.login}</IconSpan>
        <IconSpan icon={<Calendar />}>
          {' '}
          {formatDistanceToNow(data.created_at, {
            locale: ptBR,
            addSuffix: true,
          })}
        </IconSpan>
        <IconSpan icon={<MessageSquare />}>
          {data.comments.toString()} Comentários
        </IconSpan>
      </CardFooter>
    </Card>
  )
}
