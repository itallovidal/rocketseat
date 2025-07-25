import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog.tsx'
import { Button } from '@/components/ui/button.tsx'
import { Input } from '@/components/ui/input.tsx'
import { Textarea } from '@/components/ui/textarea.tsx'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { getManagedRestaurant } from '@/api/getManagedRestaurant.ts'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { updateProfile } from '@/api/updateProfile.ts'
import { toast } from 'sonner'

const storeProfileSchema = z.object({
  name: z.string().min(1),
  description: z.string(),
})

interface IStoreProfileSchema extends z.infer<typeof storeProfileSchema> {}

export function StoreProfileDialog() {
  const queryClient = useQueryClient()

  const { data: managedRestaurant } = useQuery({
    queryKey: ['managed-restaurant'],
    queryFn: getManagedRestaurant,
    staleTime: Infinity,
  })

  const { mutateAsync: updateProfileFn } = useMutation({
    mutationFn: updateProfile,
    onSuccess(_, { name, description }) {
      const cache = queryClient.getQueryData(['managed-restaurant'])

      if (cache) {
        queryClient.setQueryData(['managed-restaurant'], {
          ...cache,
          name,
          description,
        })
      }
    },
  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<IStoreProfileSchema>({
    resolver: zodResolver(storeProfileSchema),
    values: {
      name: managedRestaurant?.name ?? '',
      description: managedRestaurant?.description ?? '',
    },
  })

  async function handleUpdate(data: IStoreProfileSchema) {
    try {
      await updateProfileFn(data)

      toast.success('Perfeito, as informações foram atualizadas.')
    } catch (e) {
      console.log(e)
      toast.error('Falha ao atualizar o perfil, tente novamente.')
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Perfil da Loja</DialogTitle>
        <DialogDescription>
          Atualize as informações do seu estabelecimento visíveis ao seu cliente
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(handleUpdate)}>
        <div className={'space-y-4 py-4'}>
          <div className={'grid grid-cols-4 items-center gap-4'}>
            <label className={'text-right'} htmlFor="name">
              Nome
            </label>
            <Input className={'col-span-3'} id={'name'} {...register('name')} />
          </div>

          <div className={'grid grid-cols-4 items-center gap-4'}>
            <label className={'text-right'} htmlFor="description">
              Descrição
            </label>
            <Textarea
              className={'col-span-3'}
              id={'description'}
              {...register('description')}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant={'ghost'} type={'button'}>
              Cancelar
            </Button>
          </DialogClose>
          <Button disabled={isSubmitting} type={'submit'} variant={'success'}>
            Salvar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
