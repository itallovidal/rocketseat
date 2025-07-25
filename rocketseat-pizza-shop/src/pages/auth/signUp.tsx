import { Helmet } from 'react-helmet-async'
import { Button } from '@/components/ui/button.tsx'
import { Label } from '@/components/ui/label.tsx'
import { Input } from '@/components/ui/input.tsx'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { Separator } from '@/components/ui/separator.tsx'
import { Link, useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { signIn } from '@/api/signIn.ts'
import { signUp } from '@/api/signUp.ts'

const signUpSchema = z.object({
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
  restaurantName: z
    .string({
      required_error: 'Campo obrigatório',
    })
    .min(4, {
      message: 'Campo deve haver pelo menos 4 caracteres.',
    }),

  phone: z
    .string({
      required_error: 'Campo obrigatório',
    })
    .min(4, {
      message: 'Campo deve haver pelo menos 4 caracteres.',
    }),

  managerName: z
    .string({
      required_error: 'Campo obrigatório',
    })
    .min(4, {
      message: 'Campo deve haver pelo menos 4 caracteres.',
    }),
})

interface ISignInSchema extends z.infer<typeof signUpSchema> {}

export function SignUp() {
  const navigate = useNavigate()

  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm<ISignInSchema>({
    resolver: zodResolver(signUpSchema),
  })

  const { mutateAsync: registerRestaurant } = useMutation({
    mutationFn: signUp,
  })

  async function handleSignUp(data: ISignInSchema) {
    try {
      await registerRestaurant(data)
      toast.success('Estabelecimento criado com sucesso!', {
        action: {
          label: 'Login',
          onClick: () => navigate(`/sign-in?email=${data.email}`),
        },
      })
    } catch (e) {
      toast.error('Erro ao cadastrar o restaurante.')
    }
  }

  return (
    <>
      <Helmet title={'Signin'} />
      <div className={'p-8 animate-show'}>
        <div className={'flex w-[350px] flex-col justify-center gap-6'}>
          <div className={'flex flex-col gap-2 text-center'}>
            <h1 className={'text-2xl font-semibold tracking-tight'}>
              Crie uma conta grátis
            </h1>
            <p className={'text-sm text-muted-foreground'}>
              Seja um parceiro e comece suas vendas!
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignUp)} className={'space-y-4'}>
            <div className={'space-y-2'}>
              <Label>Nome do Estabelecimento</Label>
              <Input
                id={'restaurantName'}
                type={'restaurantName'}
                {...register('restaurantName')}
              />
              {errors.restaurantName && <p>{errors.restaurantName.message}</p>}
            </div>

            <div className={'space-y-2'}>
              <Label>Seu nome</Label>
              <Input
                id={'managerName'}
                type={'managerName'}
                {...register('managerName')}
              />
              {errors.managerName && <p>{errors.managerName.message}</p>}
            </div>

            <div className={'space-y-2'}>
              <Label>Seu e-mail</Label>
              <Input id={'email'} type={'email'} {...register('email')} />
              {errors.email && <p>{errors.email.message}</p>}
            </div>

            <div className={'space-y-2'}>
              <Label>Telefone de contato</Label>
              <Input id={'phone'} type={'phone'} {...register('phone')} />
              {errors.phone && <p>{errors.phone.message}</p>}
            </div>

            <Button
              disabled={isSubmitting}
              className={'w-full'}
              type={'submit'}
            >
              Finalizar Cadastro
            </Button>
          </form>

          <Separator className={'w-1/2 m-auto'} />

          <div
            className={'space-y-4 flex justify-center flex-col items-center'}
          >
            <p className={'text-sm'}>Já possui acesso?</p>
            <Button asChild variant={'outline'}>
              <Link to={'/sign-in'}>Entrar</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
