import AsyncStorage from "@react-native-async-storage/async-storage";
import {Group} from "./createGroup";

export async function getAllGroups() : Promise<Group[]>{
    try{
        const data = await AsyncStorage.getItem('groups')

        if(data){
            return await JSON.parse(data)
        }

        return []
    }catch (error){
        throw error
    }
}