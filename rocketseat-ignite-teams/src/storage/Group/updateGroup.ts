import AsyncStorage from "@react-native-async-storage/async-storage";
import {getAllGroups} from "./getAllGroups";

export interface Group{
    groupName: string,
    teamA: string[],
    teamB: string[],
    selected: "teamA" | "teamB"
}
export async function updateStorageGroup(group: Group){
    try{
        const storedGroups = await getAllGroups()
        const updatedGroups = [...storedGroups.filter((stored=> stored.groupName !== group.groupName)), group]
        await AsyncStorage.setItem('groups', JSON.stringify(updatedGroups))
    }catch(error){
        throw error
    }
}