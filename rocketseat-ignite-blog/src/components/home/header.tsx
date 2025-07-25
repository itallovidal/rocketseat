import { Card, CardContent } from '@/components/ui/card.tsx'
import { IconSpan } from '@/components/iconSpan.tsx'
import { GithubIcon } from '@/assets/github-icon.tsx'
import { FolderGit2Icon, Rocket, TreePalmIcon } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { getProfile } from '@/api/getProfile.ts'
import { Button } from '@/components/ui/button.tsx'

export function Header() {
  const { data, isLoading } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
  })

  if (isLoading) return <></>

  return (
    data && (
      <Card className={'bg-gray-850 border-0 outline-0 p-0 text-white'}>
        <CardContent className={'flex flex-col sm:flex-row gap-6 p-6'}>
          <picture className={'block sm:size-[225px] w-full'}>
            <img
              className={
                'max-w-max w-full h-full object-center object-cover rounded '
              }
              src={data.avatar_url}
              alt="Imagem de Perfil"
            />
          </picture>

          <div className={'flex flex-col  justify-between'}>
            <div className={'flex mb-8 sm:mb-0 justify-between items-center'}>
              <h1 className={'text-2xl font-bold'}>{data.name}</h1>
              <Button
                className={'gap-4'}
                onClick={() => (window.location.href = data!.html_url)}
              >
                <GithubIcon />
                GitHub
              </Button>
            </div>

            <p className={'max-w-[80%] mb-8 sm:mb-0'}>{data.bio}</p>

            <div className={'flex flex-col sm:flex-row gap-6'}>
              <IconSpan icon={<GithubIcon />}>{data.login}</IconSpan>
              <IconSpan icon={<TreePalmIcon />}>{data.location}</IconSpan>
              <IconSpan icon={<FolderGit2Icon />}>
                {data.public_repos.toString()} Repositórios
              </IconSpan>
              <IconSpan icon={<Rocket />}>Rocketseat</IconSpan>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  )
}
