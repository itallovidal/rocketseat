import { Helmet } from 'react-helmet-async'
import { Button } from '@/components/ui/button.tsx'
import { Label } from '@/components/ui/label.tsx'
import { Input } from '@/components/ui/input.tsx'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { Link, useSearchParams } from 'react-router-dom'
import { Separator } from '@/components/ui/separator.tsx'
import { useMutation } from 'react-query'
import { signIn } from '@/api/signIn.ts'
import { isAxiosError } from 'axios'

const signInSchema = z.object({
  email: z
    .string({
      required_error: 'Campo obrigatório',
    })
    .min(10, {
      message: 'Campo deve haver pelo menos 10 caracteres.',
    })
    .email({
      message: 'O campo precisa ser um email.',
    }),
})

interface ISignInSchema extends z.infer<typeof signInSchema> {}

export function SignIn() {
  const [searchParams] = useSearchParams()

  const {
    handleSubmit,
    register,

    formState: { isSubmitting, errors },
  } = useForm<ISignInSchema>({
    defaultValues: {
      email: searchParams.get('email') || '',
    },
    resolver: zodResolver(signInSchema),
  })

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  })

  async function handleSignIn(data: ISignInSchema) {
    try {
      const signLink = await authenticate({ email: data.email })

      toast.success('Autenticado com sucesso!', {
        action: {
          label: 'Ir para dashboard',
          onClick: () => {
            window.location.href = signLink
          },
        },
      })
    } catch (e) {
      if (isAxiosError(e)) {
        const { cause } = e.response.data as { cause: string }
        toast.error(cause)
        return
      }

      toast.error('Não foi possível se conectar ao servidor')
    }
  }

  return (
    <>
      <Helmet title={'Signin'} />
      <div className={'p-8 animate-show'}>
        <div className={'flex w-[350px] flex-col justify-center gap-6'}>
          <div className={'flex flex-col gap-2 text-center'}>
            <h1 className={'text-2xl font-semibold tracking-tight'}>
              Acessar painel
            </h1>
            <p className={'text-sm text-muted-foreground'}>
              Acompanhe suas vendas pelo painel do parceiro!
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignIn)} className={'space-y-4'}>
            <div className={'space-y-2'}>
              <Label>Seu e-mail</Label>
              <Input id={'email'} type={'email'} {...register('email')} />
              {errors.email && <p>{errors.email.message}</p>}
            </div>

            <Button
              disabled={isSubmitting}
              className={'w-full'}
              type={'submit'}
            >
              Acessar Painel
            </Button>
          </form>
          <Separator className={'w-1/2 m-auto'} />

          <div
            className={'space-y-4 flex justify-center flex-col items-center'}
          >
            <p className={'text-sm'}>Novo Por aqui?</p>
            <Button asChild variant={'outline'}>
              <Link to={'/sign-up'}>Cadastre seu estabelecimento</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
