import { TableCell, TableRow } from '@/components/ui/table.tsx'
import { Button } from '@/components/ui/button.tsx'
import { Search } from 'lucide-react'

import { Skeleton } from '@/components/ui/skeleton.tsx'

export function OrderTableSkeleton() {
  return Array.from({ length: 10 }, (_, i) => {
    return (
      <TableRow key={i}>
        <TableCell>
          <Button disabled={true} variant={'outline'} size={'xs'}>
            <Search className={'h-3 w-3'} />
            <span className={'sr-only'}>Detalhes do Pedido</span>
          </Button>
        </TableCell>
        <TableCell className={'font-mono'}>
          <Skeleton className={'h-4 w-12'} />
        </TableCell>
        <TableCell>
          <Skeleton className={'h-4 w-12'} />
        </TableCell>
        <TableCell>
          <Skeleton className={'h-4 w-12'} />
        </TableCell>

        <TableCell>
          <Skeleton className={'h-4 w-12'} />
        </TableCell>

        <TableCell>
          <Skeleton className={'h-4 w-12'} />
        </TableCell>
        <TableCell>
          <Skeleton className={'h-4 w-12'} />
        </TableCell>
        <TableCell>
          <></>
        </TableCell>
      </TableRow>
    )
  })
}
