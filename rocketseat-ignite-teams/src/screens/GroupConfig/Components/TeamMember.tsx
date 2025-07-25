import * as Styles from '../GroupConfig.styled'
import {Text, TouchableOpacity} from "react-native";
import {X} from "phosphor-react-native";

interface Props {
    username: string,
    removeMember: (a: string)=> void
}
function TeamMember({username, removeMember} : Props) {
    return (
        <Styles.TeamMemberWrapper>
            <Styles.UserIcon/>
            <Text style={{marginLeft: 15, color: 'white', flex: 1}}>{username}</Text>
            <TouchableOpacity onPress={()=> removeMember(username)}>
                <X  size={24} color={'red'} weight={'fill'}/>
            </TouchableOpacity>
        </Styles.TeamMemberWrapper>
    );
}

export default TeamMember;