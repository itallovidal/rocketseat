import styled from 'styled-components/native'

export const theme = {
  colors: {
    redLight: '#F4E6E7',
    redMid: '#F3BABD',
    redDark: '#BF3B44',
    greenLight: '#E5F0DB',
    greenMid: '#CBE4B4',
    greenDark: '#639339',
    white: '#FFFFFF',
    gray100: '#FAFAFA',
    gray200: '#EFF0F0',
    gray300: '#DDDEDF',
    gray400: '#B9BBBC',
    gray500: '#5C6265',
    gray600: '#333638',
    gray700: '#1B1D1E',
  },
} as const

export type ITheme = typeof theme

export const dietStyle = {
  neutral: {
    background: theme.colors.gray200,
    color: theme.colors.greenDark,
  },
  'diet-in': {
    background: theme.colors.greenLight,
    color: theme.colors.greenDark,
  },
  'diet-out': {
    background: theme.colors.redLight,
    color: theme.colors.redDark,
  },
}

export type TDietStyle = keyof typeof dietStyle

const textStyle = {
  neutral: {
    weight: 'regular',
    color: theme.colors.gray700,
  },
  black: {
    weight: 'bold',
    color: theme.colors.gray700,
  },
  'diet-in': {
    weight: 'bold',
    color: theme.colors.greenDark,
  },
  'diet-out': {
    weight: 'bold',
    color: theme.colors.redDark,
  },
}

type ITextStyleProps = keyof typeof textStyle

export const Heading = styled.Text<{ variant: ITextStyleProps }>(
  ({ variant }) => ({
    fontSize: 32,
    fontWeight: textStyle[variant].weight,
    color: textStyle[variant].color,
  }),
)

export const Text = styled.Text<{ variant: ITextStyleProps }>(
  ({ variant }) => ({
    fontSize: 16,
    fontWeight: textStyle[variant].weight,
    color: textStyle[variant].color,
  }),
)
