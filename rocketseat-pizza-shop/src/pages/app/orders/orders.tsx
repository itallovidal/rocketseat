import { Helmet } from 'react-helmet-async'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table.tsx'
import { OrderRow } from '@/pages/app/orders/orderRow.tsx'
import { OrderFilters } from '@/pages/app/orders/orderFilters.tsx'
import { Pagination } from '@/components/pagination.tsx'
import { useQuery } from 'react-query'
import { getOrders } from '@/api/getOrders.ts'
import { z } from 'zod'
import { useSearchParams } from 'react-router-dom'
import { OrderTableSkeleton } from '@/components/skeletons/orderTableSkeleton.tsx'

const URLPageSchema = z.coerce.number().transform((page) => page - 1)

export function Orders() {
  const [searchParams, setSearchParams] = useSearchParams()

  const orderId = searchParams.get('orderId')
  const status = searchParams.get('status')
  const customerName = searchParams.get('customerName')
  const pageIndex = URLPageSchema.parse(searchParams.get('page') ?? 1)

  const { data: ordersResponse } = useQuery({
    queryFn: () =>
      getOrders({
        pageIndex,
        orderId,
        status,
        customerName,
      }),
    queryKey: ['orders', pageIndex, orderId, status, customerName],
  })

  function handlePage(pageIndex: number) {
    setSearchParams((prev) => {
      if (pageIndex < 0) {
        return prev
      }

      prev.set('page', (pageIndex + 1).toString())

      return prev
    })
  }

  return (
    <>
      <Helmet title={'Pedidos'} />
      <div className={'space-y-4'}>
        <div className={'flex flex-col gap-4'}>
          <h1 className={'text-3xl font-bold tracking-tight'}>Pedidos</h1>
        </div>

        <OrderFilters />

        <div className={'border rouded-md'}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className={'w-[64px]'}></TableHead>
                <TableHead className={'w-[140px]'}>Identificador</TableHead>
                <TableHead className={'w-[180px]'}>Realizado há</TableHead>
                <TableHead className={'w-[140px]'}>Status</TableHead>
                <TableHead className={'flex-1'}>Cliente</TableHead>
                <TableHead className={'w-[140px]'}>Total do pedido</TableHead>
                <TableHead className={'w-[120px]'}></TableHead>
                <TableHead className={'w-[120px]'}></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ordersResponse ? (
                ordersResponse.orders.map((order) => {
                  return <OrderRow key={order.orderId} order={order} />
                })
              ) : (
                <OrderTableSkeleton />
              )}
            </TableBody>
          </Table>
        </div>
        {ordersResponse && (
          <Pagination
            onPageChange={handlePage}
            pageIndex={pageIndex}
            totalCount={ordersResponse.meta.totalCount}
            perPage={ordersResponse.meta.perPage}
          />
        )}
      </div>
    </>
  )
}
