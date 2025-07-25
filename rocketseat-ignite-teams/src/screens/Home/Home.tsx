import {useFocusEffect, useNavigation} from "@react-navigation/native";
import {FlatList, StatusBar} from "react-native";
import * as gStyles from "../../styles/globalStyle.styled";
import igniteTeamsIcon from '../../assets/Icons/Logo.png'
import EmptyGroupMessage from "./EmptyGroupMessage/EmptyGroupMessage";
import Button from "../../globalComponents/Button";
import Header from "../../globalComponents/Header";
import GroupListItem from "./GroupListItem/GroupListItem";
import React from "react";
import {getAllGroups} from "../../storage/Group/getAllGroups";
import {Group} from "../../storage/Group/createGroup";



function Home() {
    const navigation = useNavigation()
    const [storedGroups, setStoredGroups] = React.useState<Group[]>([])

    function handleNewGroup(){
        navigation.navigate('createGroup')
    }

    function handleOpenGroup(group : string){
        navigation.navigate('groupConfig', {
            groupName: group
        })
    }

    useFocusEffect(React.useCallback(()=>{
        getAllGroups().then(groups =>{
            setStoredGroups(groups)
        })
    }, []))

    return (
        <gStyles.GlobalWrapper>
            <StatusBar translucent={true}/>

            <Header
                imgPath={igniteTeamsIcon}
                title={'Grupos'}
                subtitle={'Jogue com sua turma'}
            />

            <FlatList data={storedGroups}
                      showsVerticalScrollIndicator={false}
                      style={{width: '100%'}}
                      contentContainerStyle={storedGroups.length === 0 && {flex: 1} }
                      ListEmptyComponent={<EmptyGroupMessage/>}
                      renderItem={({item})=>{
                          return <GroupListItem onPress={()=> handleOpenGroup(item.groupName)} groupName={item.groupName}/>
                      }}/>

            <Button variantType={'primary'}
                    onPress={handleNewGroup}
                    text={'Criar nova Turma!'}/>

        </gStyles.GlobalWrapper>
    );
}

export default Home;