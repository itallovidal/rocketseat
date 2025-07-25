import React from 'react';
import * as Styles from '../GroupConfig.styled'
import {Text, TouchableOpacityProps} from "react-native";

interface Props extends TouchableOpacityProps{
    children : string,
    selected: boolean
}
function TeamButton({children, selected, ...props} : Props) {
    return (
        <Styles.TeamButton {...props} selected={selected}>
            <Text style={{color: 'white', textAlign: 'center'}}>{children}</Text>
        </Styles.TeamButton>
    );
}

export default TeamButton;