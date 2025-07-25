import styled from 'styled-components/native'
import { dietStyle, TDietStyle } from '../global.styles'

const Wrapper = styled.Text<{ variant: TDietStyle }>(({ variant }) => ({
  color: dietStyle[variant].color,
  fontSize: 24,
}))

export function DotIcon({ variant }: { variant: TDietStyle }) {
  return (
    <Wrapper
      style={{
        transform: [
          {
            scale: 2,
          },
        ],
      }}
      variant={variant}
    >
      •
    </Wrapper>
  )
}
