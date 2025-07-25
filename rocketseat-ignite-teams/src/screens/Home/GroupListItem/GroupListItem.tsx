import * as Styles from "./GroupListItem.styled";
import * as gStyles from '../../../styles/globalStyle.styled'
import {TouchableOpacityProps} from "react-native";

interface Props extends TouchableOpacityProps{
    groupName: string
}
function GroupListItem({groupName, ...props} : Props) {
    console.log(groupName)
    return (
        <Styles.Wrapper {...props}>
            <Styles.TeamsIcon/>
            <gStyles.Span textSize={18} textColor={'white'}>{groupName}</gStyles.Span>
        </Styles.Wrapper>
    );
}

export default GroupListItem;