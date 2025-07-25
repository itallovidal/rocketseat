import {
  Pagination as ShadCnPagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination.tsx'

interface IPaginationProps {
  pageIndex: number
  totalCount: number
  perPage: number
  onPageChange: (pageIndex: number) => void
}

export function Pagination({
  totalCount,
  perPage,
  pageIndex,
  onPageChange,
}: IPaginationProps) {
  const pages = Math.ceil(totalCount / perPage) || 1

  return (
    <div
      className={
        'flex items-center justify-between flex-col md:flex-row gap-4 md:gap-0 md:items-center'
      }
    >
      <span>Total de {totalCount} item(s).</span>

      <div>
        <ShadCnPagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                className={'cursor-pointer'}
                onClick={() => onPageChange(pageIndex - 1)}
                title="Anterior"
              />
            </PaginationItem>
            {Array.from({ length: pages }, (_, i) => {
              if (i > 2) {
                return <></>
              }

              return (
                <PaginationItem key={i}>
                  <PaginationLink
                    className={'cursor-pointer'}
                    onClick={() => onPageChange(i)}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              )
            })}
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                className={'cursor-pointer'}
                onClick={() => onPageChange(pageIndex + 1)}
              ></PaginationNext>
            </PaginationItem>
          </PaginationContent>
        </ShadCnPagination>
      </div>
    </div>
  )
}
