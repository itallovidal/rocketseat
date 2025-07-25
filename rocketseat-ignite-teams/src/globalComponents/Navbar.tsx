import igniteTeamsIcon from '../assets/Icons/Logo.png'
import {CaretLeft} from "phosphor-react-native";
import {Image, TouchableOpacity} from "react-native";
import React from "react";
import {NavbarWrapper} from "../styles/globalStyle.styled";
import {useNavigation} from "@react-navigation/native";

function Navbar() {
    const navigation = useNavigation()

    function handleGoBack(){
        navigation.navigate('home')
    }

    return (
        <NavbarWrapper>
            <TouchableOpacity onPress={handleGoBack}>
                <CaretLeft size={32} color={'white'}/>
            </TouchableOpacity>
            <Image style={{height: 50, objectFit: 'contain'}} source={igniteTeamsIcon}/>
        </NavbarWrapper>
    );
}

export default Navbar;