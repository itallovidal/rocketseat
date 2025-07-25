import * as gStyles from "../../styles/globalStyle.styled";
import Navbar from "../../globalComponents/Navbar";
import {Alert, View} from "react-native";
import Header from "../../globalComponents/Header";
import {UsersThree} from "phosphor-react-native";
import Button from "../../globalComponents/Button";
import {useNavigation} from "@react-navigation/native";
import React from "react";


function CreateGroup() {
    const navigation = useNavigation()
    const [group, setGroup] = React.useState("")

    function goCreate(){
        navigation.navigate('groupConfig', {
            groupName: group,
            newGroup: true
        })
    }

    return (
        <gStyles.GlobalWrapper>
            <Navbar/>
            <View style={{flex: 1, width: '100%'}}>
                <Header HeaderIcon={UsersThree}
                        title={'Nova Turma'}
                        subtitle={'crie uma turma para adicionar pessoas'}/>

                <gStyles.Input onChangeText={setGroup} placeholder={'Nome da Turma'} placeholderTextColor={'#7C7C8A'} />
                <Button onPress={goCreate} variantType={'primary'} text={'Criar'}/>
            </View>
        </gStyles.GlobalWrapper>
    );
}

export default CreateGroup;