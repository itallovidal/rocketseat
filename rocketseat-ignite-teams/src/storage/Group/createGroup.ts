import AsyncStorage from "@react-native-async-storage/async-storage";
import {getAllGroups} from "./getAllGroups";
import {AppError} from "../../utils/AppError";

export interface Group{
    groupName: string,
    teamA: string[],
    teamB: string[],
    selected: "teamA" | "teamB"
}
export async function createNewGroup(newGroup: Group){
    try{
        const storedGroups = await getAllGroups()

        const alreadyStored = storedGroups.find((storedGroup)=> storedGroup.groupName.includes(newGroup.groupName))
        console.log(alreadyStored)
        if(alreadyStored){
            throw new AppError('Grupo já existe!')
        }

        const updatedGroups = [...storedGroups, newGroup]
        await AsyncStorage.setItem('groups', JSON.stringify(updatedGroups))
    }catch(error){
        throw error
    }
}