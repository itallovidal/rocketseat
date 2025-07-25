import { Button } from '@/components/ui/button.tsx'
import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className={'flex h-screen flex-col items-center justify-center gap-2'}>
      <h1 className={'text-4xl font-bold pb-4'}>Página não encontrada.</h1>
      <Button variant={'ghost'}>
        <Link to={'/'}>Voltar para o dashboard</Link>
      </Button>
    </div>
  )
}
