import React from 'react';
import * as gStyles from "../../styles/globalStyle.styled";
import Navbar from "../../globalComponents/Navbar";
import {Alert, FlatList} from "react-native";
import Header from "../../globalComponents/Header";
import {Plus} from "phosphor-react-native";
import Button from "../../globalComponents/Button";
import * as Styles from './GroupConfig.styled'
import TeamButton from "./Components/TeamButton";
import TeamMember from "./Components/TeamMember";
import {useFocusEffect, useNavigation, useRoute} from "@react-navigation/native";
import {createNewGroup, Group} from "../../storage/Group/createGroup";
import {getSingleGroup} from "../../storage/Group/getSingleGroup";
import {updateStorageGroup} from "../../storage/Group/updateGroup";
import {AppError} from "../../utils/AppError";

interface ParamProps {
    groupName: string,
    newGroup?: boolean
}

interface Teams{
    teamA: string[],
    teamB: string[],
    selected: 'teamA' | 'teamB'
}

const ACTION ={
    SELECT_TEAM: 'SELECT_TEAM',
    ADD_PLAYER: 'ADD_PLAYER',
    REMOVE_PLAYER: 'REMOVE_PLAYER',
    CREATE_GROUP: 'CREATE_GROUP',
    UPDATE_GROUP: 'UPDATE_GROUP',
    SET_GROUP: 'SET_GROUP'
} as const

type ActionType = keyof typeof ACTION

interface Action {
    type: ActionType,
    payload: any
}

function GroupConfig() {
    const navigation  = useNavigation()
    const route = useRoute()
    const {groupName, newGroup} = route.params as ParamProps
    const [playerName, setPlayerName] = React.useState("")
    const [teams, dispatch] = React.useReducer((state: Teams, action: Action)=>{
        if(action.type === 'SELECT_TEAM'){
            return {
                ...state,
                selected: action.payload
            }
        }

        if(action.type === 'ADD_PLAYER'){
            setPlayerName('')
            return {
                ...state,
                [state.selected]: [...state[state.selected], action.payload],
            }
        }

        if(action.type === 'REMOVE_PLAYER'){
            const teamName = state.teamA.includes(action.payload) ? 'teamA' : 'teamB'

            return {
                ...state,
                [teamName]: [...state[teamName].filter((name)=> name !== action.payload)],
            }
        }

        if(action.type === 'SET_GROUP'){
            return action.payload
        }

        if(action.type === 'CREATE_GROUP'){
            createNewGroup({groupName, ...action.payload})
                .then(()=>{
                    navigation.navigate('home')
                })
                .catch((e)=>{
                    if(e instanceof AppError){
                        Alert.alert(e.message)
                    }
                })
        }

        if(action.type === 'UPDATE_GROUP'){
            updateStorageGroup(action.payload).then(()=>{
                navigation.navigate('home')
            })
        }

        return state
    },{
        teamA: [],
        teamB: [],
        selected: 'teamA'
    })

    function selectTeam(team: 'teamA' | 'teamB'){
        dispatch({
            type: 'SELECT_TEAM',
            payload: team
        })
    }

    function addPlayer(){
        dispatch({
            type:'ADD_PLAYER',
            payload: playerName
        })
    }

    function removePlayer(player: string){
        dispatch({
            type:'REMOVE_PLAYER',
            payload: player
        })
    }

    function updateGroup(updatedGroup: Group){
        dispatch({
            type: 'UPDATE_GROUP',
            payload: updatedGroup
        })
    }

    function setGroup(group: Group){
        dispatch({
            type: 'SET_GROUP',
            payload: group
        })
    }

    function createGroup(newGroup: Group){
        dispatch({
            type: 'CREATE_GROUP',
            payload: newGroup
        })
    }

    function handleSubmit(){
        if(newGroup){
            createGroup(teams)
            return
        }

        updateGroup(teams)
    }


    useFocusEffect(React.useCallback(()=>{
        if(!newGroup){
            getSingleGroup(groupName).then(setGroup)
        }
    },[]))

    return (
        <gStyles.GlobalWrapper>
            <Navbar/>
            <Styles.Main>
                <Header title={groupName}
                        subtitle={'Crie uma turma para adicionar pessoas'}/>

                <Styles.Form>
                    <Styles.NewTeamInput value={playerName} onChangeText={setPlayerName} placeholder={'Nome do Jogador'} placeholderTextColor={'#7C7C8A'}/>
                    <Styles.AddButton onPress={addPlayer}>
                        <Plus size={24} weight="light" color={'white'}/>
                    </Styles.AddButton>
                </Styles.Form>

                <Styles.TeamNav>
                    <TeamButton onPress={()=> selectTeam('teamA')} selected={teams.selected === 'teamA'}>Time 1</TeamButton>
                    <TeamButton onPress={()=> selectTeam('teamB')} selected={teams.selected === 'teamB'}>Time 2</TeamButton>
                    <Styles.TeamCounter>{teams.selected === 'teamA' ? teams.teamA.length : teams.teamB.length}</Styles.TeamCounter>
                </Styles.TeamNav>

                <FlatList style={{marginBottom: 15}}
                          showsVerticalScrollIndicator={false}
                          data={teams.selected === 'teamA' ? teams.teamA : teams.teamB}
                          renderItem={({item})=>{

                    return <TeamMember username={item} removeMember={removePlayer}/>
                }}/>
                <Button onPress={()=> handleSubmit()  } variantType={'primary'} text={newGroup ? 'criar' : 'alterar'}/>
            </Styles.Main>
        </gStyles.GlobalWrapper>
    );
}

export default GroupConfig;