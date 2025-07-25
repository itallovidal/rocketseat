import styled from "styled-components/native";
import {Input} from "../../styles/globalStyle.styled";
import {defaultTheme} from "../../styles/themes.styled";
import {User} from "phosphor-react-native";

export const Form = styled.View`
  flex-direction: row;
  width: 100%;
  height: 60px;
  margin-bottom: 15px;
`

export const AddButton = styled.TouchableOpacity`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 8px 8px 0;
  background-color: ${defaultTheme.COLORS.GRAY_700} ;
`

export const NewTeamInput = styled(Input)`
  flex: 1;
  height: 100%;
  border-radius: 8px 0 0 8px;
`

export const Main = styled.View`
  flex: 1;
  width: 100%;
`

export const TeamNav = styled.View`
  flex-direction: row;
  gap: 10px;
  align-items: center;
  margin-bottom: 15px ;
`

interface TeamButtonProps{
    selected: boolean
}
export const TeamButton = styled.TouchableOpacity<TeamButtonProps>`
  padding: 10px;
  font-weight: bold;
  width: 80px;
  border-style: solid;
  border-width: 2px;
  border-color: ${({selected})=> selected ? defaultTheme.COLORS.GREEN_500 : 'transparent' as const};
  border-radius: 8px;
`

export const TeamCounter = styled.Text`
  flex: 1;
  color: white;
  text-align: right;
  padding-right: 10px;
  font-weight: bold;  
`

export const TeamMemberWrapper = styled.View`
    flex-direction: row;
  align-items: center;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 15px;
  background-color: ${defaultTheme.COLORS.GRAY_500};
`

export const UserIcon = styled(User).attrs(()=>{
    return {
        size: 32,
        color: defaultTheme.COLORS.GREEN_500,
        weight: 'fill',
    }
})``