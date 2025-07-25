import styled from 'styled-components/native'

export const Wrapper = styled.TouchableOpacity({
  flexDirection: 'row',
  padding: 16,
  background: 'white',
  borderRadius: 8,
  borderWidth: 1,
  borderColor: 'gray',
})

export const Hour = styled.Text({
  width: 'fit-content',
  borderRightWidth: 1,
  borderColor: 'gray',
  paddingRight: 16,
})

export const Description = styled.Text({
  paddingLeft: 16,
  flex: 1,
})

export const Dot = styled.View<{ variant: 'diet-in' | 'diet-out' }>(
  ({ variant, theme }) => ({
    width: 18,
    height: 18,
    backgroundColor:
      variant === 'diet-in' ? theme.colors.greenMid : theme.colors.redMid,
    borderRadius: 50,
  }),
)
