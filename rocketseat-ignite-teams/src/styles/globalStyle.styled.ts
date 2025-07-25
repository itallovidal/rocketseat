import styled from "styled-components/native";
import {defaultTheme} from "./themes.styled";
import {SafeAreaView} from 'react-native-safe-area-context'

interface ButtonProps {
    variant: 'primary' | 'secondary'
}
export const Button = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  background-color: ${({variant})=> variant === 'primary' ? defaultTheme.COLORS.GREEN_500 : defaultTheme.COLORS.RED};
  padding: 15px;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 5px;
`

export const TextButton = styled.Text`
  color: white;
`

export const Header = styled.View`
  margin-top: 20px;
  width: 100%;
  align-items: center;
  margin-bottom: 20px;
`

export const Title = styled.Text`
  font-size: ${defaultTheme.FONT_SIZE.XL};
  margin-bottom: 10px;
  color: white;
  font-family: ${defaultTheme.FONT_FAMILY.BOLD};
`

export const Subtitle = styled.Text`
  font-size: ${defaultTheme.FONT_SIZE.MD};
  color: ${defaultTheme.COLORS.GRAY_300};
`

interface SpanProps{
    textSize: number,
    textColor: string
}
export const Span = styled.Text<SpanProps>`
  color: ${({textColor})=> textColor};
  font-size: ${({textSize})=> textSize}px;
`

export const NavbarWrapper = styled.View`
  width: 100%;
  padding: 15px;
  margin-bottom: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const GlobalWrapper = styled(SafeAreaView)`
    flex: 1;
    padding: 24px;
    background: ${defaultTheme.COLORS.WHITE};
    justify-content: center;
    align-items: center;
    background: ${defaultTheme.COLORS.GRAY_600};
    color: white;
`

export const Input = styled.TextInput`
  padding: 15px 10px;
  color: white;
  border-radius: 8px;
  margin-bottom: 15px;
  background-color: ${defaultTheme.COLORS.GRAY_700} ;
`