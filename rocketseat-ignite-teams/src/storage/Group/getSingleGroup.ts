import AsyncStorage from "@react-native-async-storage/async-storage";
import {Group} from "./createGroup";

export async function getSingleGroup(groupToSelect: string) : Promise<Group>{
    try{
        const data = await AsyncStorage.getItem('groups')

        if(data){
            const groups:Group[]  =  await JSON.parse(data)

            const selectedGroup = groups.find((item)=> item.groupName === groupToSelect )

            if(selectedGroup){
                return selectedGroup
            }
        }

        throw new Error

    }catch (error){
        throw error
    }
}