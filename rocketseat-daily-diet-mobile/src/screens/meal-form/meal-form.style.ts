import styled from 'styled-components/native'
import { theme } from '../../components/global.styles'

export const Form = styled.View({
  background: 'white',
  padding: 16,
  gap: 16,
  borderRadius: 24,
  paddingTop: 32,
  flex: 1,
  marginTop: -16,
})

export const InputWrapper = styled.View({})

export const Input = styled.TextInput(({ theme }) => ({
  borderWidth: 1,
  borderColor: theme.colors.gray300,
  padding: 8,
  borderRadius: 6,
}))

export const Label = styled.TextInput({
  fontWeight: 'bold',
})

export const DateTimeWrapper = styled.View({
  flexDirection: 'row',
  gap: 4,
})

export const DateChoosed = styled.Text({
  borderWidth: 1,
  borderColor: theme.colors.gray300,
  padding: 8,
  borderRadius: 6,
})

export const HourChoosed = styled.Text({
  borderWidth: 1,
  borderColor: theme.colors.gray300,
  padding: 8,
  borderRadius: 6,
})

export const IsDietInListWrapper = styled.View({
  flexDirection: 'row',
  gap: 4,
  flexWrap: 'wrap',
})
