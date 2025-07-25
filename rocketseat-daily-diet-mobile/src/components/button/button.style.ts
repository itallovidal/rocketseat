import styled from 'styled-components/native'
import { theme } from '../global.styles'

const buttonVariant = {
  light: {
    backgroundColor: theme.colors.gray100,
    color: 'black',
    borderColor: theme.colors.white,
    borderWidth: 0,
  },
  filled: {
    backgroundColor: theme.colors.gray600,
    color: 'white',
    borderColor: theme.colors.white,
    borderWidth: 0,
  },
  outlined: {
    backgroundColor: 'white',
    color: theme.colors.gray600,
    borderColor: theme.colors.gray600,
    borderWidth: 1,
  },
  transparent: {
    backgroundColor: 'transparent',
    color: theme.colors.gray600,
    borderColor: theme.colors.white,
    borderWidth: 0,
  },
  'diet-in': {
    backgroundColor: theme.colors.greenLight,
    borderColor: theme.colors.greenMid,
    borderWidth: 1,
    color: 'black',
  },
  'diet-out': {
    backgroundColor: theme.colors.redLight,
    borderColor: theme.colors.redMid,
    borderWidth: 1,
    color: 'black',
  },
}

export type ButtonVariantStyle = keyof typeof buttonVariant

export const Wrapper = styled.TouchableOpacity<{
  variant: ButtonVariantStyle
}>(({ variant }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  padding: 16,
  borderRadius: 8,
  gap: 8,

  background: buttonVariant[variant].backgroundColor,
  borderColor: buttonVariant[variant].borderColor,
  borderWidth: buttonVariant[variant].borderWidth,
}))

export const Text = styled.Text<{ variant: ButtonVariantStyle }>(
  ({ variant }) => ({
    fontSize: 14,
    color: buttonVariant[variant].color,
  }),
)
