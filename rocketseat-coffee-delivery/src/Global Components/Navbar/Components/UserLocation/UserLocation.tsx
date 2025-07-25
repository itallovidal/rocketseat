import {MapPinLine} from "@phosphor-icons/react";
import *  as Styles from "./UserLocation.styled.ts";
import React, {FormEvent} from "react";
import {UserContext} from "../../../../Context/UserContextProvider.tsx";
import {GetAddress} from "../../../../utilities/fetchData.ts";


function UserLocation() {
    const {userData, changeUserLocation} = React.useContext(UserContext)

    function handleUserLocation(e: FormEvent){
        e.preventDefault()
        const data = new FormData(e.target as HTMLFormElement)
        const cep = data.get('address')!.toString()

        GetAddress(cep)
            .then((newAddress)=> changeUserLocation(newAddress))
            .catch(()=>{
                console.log('Erro ao achar endereço')
            })
    }

    return (
        <Styles.Wrapper>
            <MapPinLine size={24} weight={userData.address ? 'fill' : 'regular'}/>
            {
                userData.address
                    ? <span> {userData.address.city}</span>
                    : <form onSubmit={handleUserLocation}> <input name={'address'} placeholder={'Digite seu CEP'}/> </form>
            }
        </Styles.Wrapper>
    )
}

export default UserLocation;

