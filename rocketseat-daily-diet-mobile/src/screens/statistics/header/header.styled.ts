import styled from 'styled-components/native'

export const Wrapper = styled.View<{ variant: 'diet-in' | 'diet-out' }>(
  ({ variant, theme }) => ({
    backgroundColor:
      variant === 'diet-in' ? theme.colors.greenLight : theme.colors.redMid,
    paddingTop: 24,
    paddingBottom: 48,
    alignItems: 'center',
    justifyContent: 'center',
  }),
)

export const Description = styled.Text({
  fontSize: 18,
})

export const Percentage = styled.Text({
  fontSize: 32,
  fontWeight: 'bold',
  marginTop: -24,
})
