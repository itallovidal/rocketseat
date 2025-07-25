import { BadgeContent, Title, Wrapper } from './badge.style'
import { DotIcon } from '../dot-icon/dot-icon'
import { TDietStyle } from '../global.styles'

interface IBadgeProps {
  children: string
  variant: TDietStyle
}

export function Badge({ children, variant }: IBadgeProps) {
  return (
    <Wrapper>
      <BadgeContent>
        <DotIcon variant={variant} />
        <Title>{children}</Title>
      </BadgeContent>
    </Wrapper>
  )
}
