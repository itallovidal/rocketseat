import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog.tsx'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table.tsx'
import { useQuery } from 'react-query'
import { getOrderDetails } from '@/api/getOrderDetails.ts'
import { ptBR } from 'date-fns/locale'
import { formatDistanceToNow } from 'date-fns'
import { OrderStatus } from '@/pages/app/orders/orderStatus.tsx'
import { Card, CardDescription, CardTitle } from '@/components/ui/card.tsx'

export function OrderDetails({
  orderId,
  isOpen,
}: {
  orderId: string
  isOpen: boolean
}) {
  const { data: details } = useQuery({
    queryKey: ['orderDetails', orderId],
    queryFn: () => getOrderDetails(orderId),
    enabled: isOpen,
  })

  if (!isOpen || !details)
    return (
      <DialogContent>
        <Card className={`p-8`}>
          <CardTitle className={'mb-8'}>Carregando..</CardTitle>
          <CardDescription>
            Aguarde só um momento! Carregando informações.
          </CardDescription>
        </Card>
      </DialogContent>
    )

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido {details.id}</DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
      </DialogHeader>

      <div className={`space-y-6`}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className={'text-muted-foreground'}>Status</TableCell>
              <TableCell className={'flex justify-end'}>
                <OrderStatus status={details?.status} />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className={'text-muted-foreground'}>Cliente</TableCell>
              <TableCell className={'flex justify-end'}>
                {details?.customer.name}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className={'text-muted-foreground'}>
                Telefone
              </TableCell>
              <TableCell className={'flex justify-end'}>
                {details.customer.phone ?? 'Não informado'}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className={'text-muted-foreground'}>E-mail</TableCell>
              <TableCell className={'flex justify-end'}>
                {details?.customer.email}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className={'text-muted-foreground'}>
                Realizado há
              </TableCell>
              <TableCell className={'flex justify-end'}>
                {formatDistanceToNow(details.createdAt, {
                  locale: ptBR,
                })}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produto</TableHead>
              <TableHead className={'text-right'}>Quantidade</TableHead>
              <TableHead className={'text-right'}>Preço</TableHead>
              <TableHead className={'text-right'}>Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {details &&
              details.orderItems.map((item) => {
                console.log(item)

                return (
                  <TableRow key={item.id}>
                    <TableCell>{item.product.name}</TableCell>
                    <TableCell className={'text-right'}>
                      {item.quantity}
                    </TableCell>
                    <TableCell className={'text-right'}>
                      {(item.priceInCents / 100).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </TableCell>
                    <TableCell className={'text-right'}>
                      {(
                        (item.priceInCents * item.quantity) /
                        100
                      ).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </TableCell>
                  </TableRow>
                )
              })}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total do Pedido</TableCell>
              <TableCell className={'text-right font-medium'}>
                {details.totalInCents.toLocaleString(ptBR, {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  )
}
