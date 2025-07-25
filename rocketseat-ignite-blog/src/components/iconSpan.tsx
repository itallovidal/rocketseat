import { ReactNode } from 'react'

interface IIConSpanProps {
  children: string | string[]
  icon: ReactNode
}

export function IconSpan({ children, icon }: IIConSpanProps) {
  return (
    <div className={'flex gap-2'}>
      {icon}
      <span>{children}</span>
    </div>
  )
}
