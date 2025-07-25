import { TOrderStatus } from '@/api/getOrders.ts'

const orderStatusMap: Record<TOrderStatus, string> = {
  canceled: 'Cancelado',
  delivered: 'Entregue',
  delivering: 'Em entrega',
  pending: 'Pendente',
  processing: 'Em preparo',
}

export function OrderStatus({ status }: { status: TOrderStatus }) {
  return (
    <div className={'flex items-center gap-2'}>
      {status === 'pending' && (
        <span
          data-testid="badge"
          className={'h-2 w-2 rounded-full bg-slate-400'}
        />
      )}

      {status === 'canceled' && (
        <span
          data-testid="badge"
          className={'h-2 w-2 rounded-full bg-rose-500'}
        />
      )}
      {status === 'delivering' && (
        <span
          data-testid="badge"
          className={'h-2 w-2 rounded-full bg-purple-600'}
        />
      )}

      {status === 'delivered' && (
        <span
          data-testid="badge"
          className={'h-2 w-2 rounded-full bg-emerald-500'}
        />
      )}

      {status === 'processing' && (
        <span
          data-testid="badge"
          className={'h-2 w-2 rounded-full bg-amber-500'}
        />
      )}
      <span>{orderStatusMap[status]}</span>
    </div>
  )
}
