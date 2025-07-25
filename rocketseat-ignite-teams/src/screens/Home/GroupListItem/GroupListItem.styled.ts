import styled from "styled-components/native";
import {UsersThree} from "phosphor-react-native";
import {defaultTheme} from "../../../styles/themes.styled";

export const Wrapper = styled.TouchableOpacity`
  background-color: ${defaultTheme.COLORS.GRAY_500};
  width: 100%;
  padding: 25px;
  border-radius: 8px;
  margin: 10px 0 10px;
  flex-direction: row;
  align-items: center;
  gap: 15px;
`

export const TeamsIcon = styled(UsersThree).attrs(()=> ({
    size: 32,
    color: defaultTheme.COLORS.GREEN_500,
    weight: 'fill'
}))``
