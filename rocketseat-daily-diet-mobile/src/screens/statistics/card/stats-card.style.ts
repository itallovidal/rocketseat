import styled from 'styled-components/native'
import { dietStyle, TDietStyle } from '../../../components/global.styles'

const CardWrapper = styled.View<{ variant: TDietStyle }>(({ variant }) => ({
  padding: 24,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 8,
  width: '100%',
  background: dietStyle[variant].background,
}))

const CardTitle = styled.Text({
  fontSize: 24,
  fontWeight: 'bold',
})

const CardDescription = styled.Text({
  fontSize: 12,
})

export const Card = {
  Wrapper: CardWrapper,
  Title: CardTitle,
  Description: CardDescription,
}
