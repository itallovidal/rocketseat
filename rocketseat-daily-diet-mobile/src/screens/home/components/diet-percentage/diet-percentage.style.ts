import styled from 'styled-components/native'

export const Wrapper = styled.TouchableOpacity<{
  variant: 'diet-in' | 'diet-out'
}>(({ variant, theme }) => ({
  backgroundColor:
    variant === 'diet-in' ? theme.colors.greenLight : theme.colors.redMid,
  padding: 24,
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 16,
  borderRadius: 8,
}))

export const Description = styled.Text({
  fontSize: 18,
})

export const Percentage = styled.Text({
  fontSize: 32,
  fontWeight: 'bold',
})

export const Icon = styled.View({
  width: 24,
  height: 24,
  position: 'absolute',
  top: 6,
  right: 12,
  opacity: 0.1,
})
