import { TableCell, TableRow } from '@/components/ui/table.tsx'
import { Button } from '@/components/ui/button.tsx'
import { ChevronRight, Search, X } from 'lucide-react'
import { Dialog, DialogTrigger } from '@/components/ui/dialog.tsx'
import { OrderDetails } from '@/pages/app/orders/orderDetails.tsx'
import { GetOrdersResponse, Order, TOrderStatus } from '@/api/getOrders.ts'
import { OrderStatus } from '@/pages/app/orders/orderStatus.tsx'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { cancelOrder } from '@/api/cancelOrder.ts'
import { approveOrder } from '@/api/approveOrder.ts'
import { deliverOrder } from '@/api/deliverOrder.ts'
import { dispatchOrder } from '@/api/dispatchOrder.ts'

export function OrderRow({
  order: { orderId, status, total, customerName, createdAt },
}: {
  order: Order
}) {
  const [isOpen, setIsOpen] = useState(false)
  const queryClient = useQueryClient()

  async function handleStatusChange(orderId: string, status: TOrderStatus) {
    const ordersCached = queryClient.getQueriesData<GetOrdersResponse>([
      'orders',
    ])

    ordersCached.map(([cacheKey, cacheData]) => {
      if (!cacheData) {
        // eslint-disable-next-line array-callback-return
        return
      }

      return queryClient.setQueriesData(cacheKey, {
        ...cacheData,
        orders: cacheData.orders.map((order) => {
          if (order.orderId === orderId) {
            return {
              ...order,
              status,
            }
          }

          return order
        }),
      })
    })
  }

  const { mutateAsync: aproveOrderFn, isLoading: isApproveLoading } =
    useMutation({
      mutationFn: () => approveOrder(orderId),
      onSuccess: async () => {
        await handleStatusChange(orderId, 'processing')
      },
    })

  const { mutateAsync: cancelOrderFn, isLoading: isCancelLoading } =
    useMutation({
      mutationFn: () => cancelOrder(orderId),
      onSuccess: async () => {
        await handleStatusChange(orderId, 'canceled')
      },
    })

  const { mutateAsync: deliverOrderFn, isLoading: isDeliverLoading } =
    useMutation({
      mutationFn: () => deliverOrder(orderId),
      onSuccess: async () => {
        await handleStatusChange(orderId, 'delivered')
      },
    })

  const { mutateAsync: dispatchOrderFn, isLoading: isDispatchLoading } =
    useMutation({
      mutationFn: () => dispatchOrder(orderId),
      onSuccess: async () => {
        await handleStatusChange(orderId, 'delivering')
      },
    })

  return (
    <TableRow className={`${isCancelLoading && 'opacity-20'}`}>
      <TableCell>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button variant={'outline'} size={'xs'}>
              <Search className={'h-3 w-3'} />
              <span className={'sr-only'}>Detalhes do Pedido</span>
            </Button>
          </DialogTrigger>
          <OrderDetails isOpen={isOpen} orderId={orderId} />
        </Dialog>
      </TableCell>
      <TableCell className={'font-mono'}>{orderId}</TableCell>

      <TableCell>
        {formatDistanceToNow(createdAt, {
          locale: ptBR,
          addSuffix: true,
        })}
      </TableCell>

      <TableCell>
        <OrderStatus status={status} />
      </TableCell>

      <TableCell>{customerName}</TableCell>

      <TableCell>
        {(total / 100).toLocaleString('pt-BR', {
          currency: 'BRL',
          style: 'currency',
        })}
      </TableCell>
      <TableCell>
        {status === 'pending' && (
          <Button
            disabled={isApproveLoading}
            onClick={() => aproveOrderFn()}
            variant={'ghost'}
            size={'xs'}
          >
            Aprovar
            <ChevronRight className={'h-4 w-4'} />
          </Button>
        )}

        {status === 'processing' && (
          <Button
            onClick={() => dispatchOrderFn()}
            variant={'ghost'}
            disabled={isDispatchLoading}
            size={'xs'}
          >
            Em entrega
            <ChevronRight className={'h-4 w-4'} />
          </Button>
        )}
        {status === 'delivering' && (
          <Button
            onClick={() => deliverOrderFn()}
            variant={'ghost'}
            size={'xs'}
            disabled={isDeliverLoading}
          >
            Entregue
            <ChevronRight className={'h-4 w-4'} />
          </Button>
        )}

        {status === 'delivered' && <></>}
      </TableCell>
      <TableCell>
        <Button
          onClick={() => cancelOrderFn()}
          type={'button'}
          disabled={
            !['pending', 'processing'].includes(status) || isCancelLoading
          }
          variant={'ghost'}
          size={'xs'}
        >
          Cancelar
          <X className={'h-4 w-4'} />
        </Button>
      </TableCell>
    </TableRow>
  )
}
