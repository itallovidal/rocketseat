import React from 'react';
import * as gStyles from '../styles/globalStyle.styled'
import {TouchableOpacityProps} from "react-native";

interface Props extends TouchableOpacityProps{
    text: string,
    variantType: 'primary' | 'secondary'
}

function Button({text, variantType, ...props} : Props) {
    return (
        <gStyles.Button {...props} variant={variantType}>
            <gStyles.TextButton>{text}</gStyles.TextButton>
        </gStyles.Button>
    );
}

export default Button;