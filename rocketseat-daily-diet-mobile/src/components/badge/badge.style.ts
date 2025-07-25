import styled from 'styled-components/native'
import { theme } from '../global.styles'

export const Wrapper = styled.View(() => ({
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
}))

export const Title = styled.Text({
  fontSize: 16,
})

export const BadgeContent = styled.View(() => ({
  background: theme.colors.gray200,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 50,
  paddingHorizontal: 16,
  gap: 12,
}))
