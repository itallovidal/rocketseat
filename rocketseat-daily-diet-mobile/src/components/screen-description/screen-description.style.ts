import styled from 'styled-components/native'
import { dietStyle, TDietStyle } from '../global.styles'

export const Wrapper = styled.View<{ variant: TDietStyle }>(({ variant }) => ({
  background: dietStyle[variant].background,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: 24,
  paddingHorizontal: 16,
  paddingBottom: 42,
}))

export const Description = styled.Text({
  flex: 1,
  textAlign: 'center',
  fontSize: 18,
  fontWeight: 'bold',
})
