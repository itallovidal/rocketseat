import { Input } from '@/components/ui/input.tsx'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select.tsx'
import { Search, X } from 'lucide-react'
import { Button } from '@/components/ui/button.tsx'
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSearchParams } from 'react-router-dom'

const orderFilterSchema = z.object({
  orderId: z.string().optional(),
  customerName: z.string().optional(),
  status: z.string().optional(),
})

interface OrderFilterSchema extends z.infer<typeof orderFilterSchema> {}

export function OrderFilters() {
  const [searchParams, setParams] = useSearchParams()
  const orderId = searchParams.get('orderId') ?? ''
  const status = searchParams.get('status') ?? 'all'
  const customerName = searchParams.get('customerName') ?? ''

  const { register, handleSubmit, control, reset } = useForm<OrderFilterSchema>(
    {
      resolver: zodResolver(orderFilterSchema),
      defaultValues: {
        orderId,
        customerName,
        status,
      },
    },
  )

  function handleFilter({ orderId, customerName, status }: OrderFilterSchema) {
    setParams((params) => {
      if (orderId) {
        params.set(`orderId`, orderId)
      } else {
        params.delete(`orderId`)
      }

      if (status) {
        params.set(`status`, status)
      } else {
        params.delete(`status`)
      }

      if (customerName) {
        params.set(`customerName`, customerName)
      } else {
        params.delete(`customerName`)
      }

      params.set('page', '1')
    })
  }

  return (
    <form
      onSubmit={() => handleSubmit(handleFilter)}
      className={'flex-col md:flex-row flex items-start md:items-center gap-2'}
    >
      <span>Filtros:</span>
      <Input
        placeholder={'Id do pedido'}
        className={'h-8 w-[320px]'}
        {...register('orderId')}
      />
      <Input
        placeholder={'Nome do cliente'}
        className={'h-8 w-[320px]'}
        {...register('customerName')}
      />
      <Controller
        control={control}
        render={({ field: { name, value, onChange } }) => {
          return (
            <Select
              defaultValue={'all'}
              name={name}
              value={value}
              onValueChange={onChange}
            >
              <SelectTrigger className={'h-8 w-[180px]'}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={'all'}>Todos</SelectItem>
                <SelectItem value={'pending'}>Pendentes</SelectItem>
                <SelectItem value={'canceled'}>Cancelados</SelectItem>
                <SelectItem value={'processing'}>Em preparo</SelectItem>
                <SelectItem value={'delivered'}>Entregue</SelectItem>
              </SelectContent>
            </Select>
          )
        }}
        name={'status'}
      />

      <Button type={'submit'} size={'xs'} variant={'secondary'}>
        <Search className={'mr-2 h-4 w-4'} />
        Filtrar Resultados
      </Button>

      <Button
        onClick={() => {
          reset()
          handleFilter({})
        }}
        type={'button'}
        size={'xs'}
        variant={'secondary'}
      >
        <X className={'mr-2 h-4 w-4'} />
        Limpar filtros
      </Button>
    </form>
  )
}
