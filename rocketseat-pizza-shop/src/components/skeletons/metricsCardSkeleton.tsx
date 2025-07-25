import { Skeleton } from '@/components/ui/skeleton.tsx'

export function MetricsCardSkeleton() {
  return (
    <>
      <Skeleton className={'mt-1 h-4 w-36'} />
      <Skeleton className={' mt-1 h-4 w-52'} />
    </>
  )
}
