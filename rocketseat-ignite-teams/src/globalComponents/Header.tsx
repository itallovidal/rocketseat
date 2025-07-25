import React, {JSX, ReactElement, ReactNode} from 'react';
import * as gStyles from '../styles/globalStyle.styled'
import {Image, ImagePropsBase} from "react-native";

interface Props {
    title: string,
    subtitle: string,
    HeaderIcon?: React.ElementType,
    imgPath?: ImagePropsBase
}
function Header({title, subtitle, HeaderIcon, imgPath} : Props) {
    return (
        <gStyles.Header>
            {HeaderIcon && <HeaderIcon size={42} color={'#00B37E'}/>}
            {imgPath && <Image style={{height: 55, objectFit: 'contain'}}  source={imgPath}/>}
            <gStyles.Title>{title}</gStyles.Title>
            <gStyles.Subtitle>{subtitle}</gStyles.Subtitle>
        </gStyles.Header>
    );
}

export default Header;