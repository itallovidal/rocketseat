import * as Styles from "./EmptyGroupMessage.styled";
import {UserList} from "phosphor-react-native";

function EmptyGroupMessage() {
    return (
        <Styles.Wrapper>
            <UserList size={128} weight="light" color={'white'}/>
            <Styles.Message> Sem grupos registrados.</Styles.Message>
        </Styles.Wrapper>
    );
}

export default EmptyGroupMessage;