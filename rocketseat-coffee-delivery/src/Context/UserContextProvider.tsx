import React, {ReactNode} from 'react';
import {ActionProps, PaymentType, ProviderProps, User} from "./UserContextProvider.ts";
import {Coffee} from "../Pages/Home/Components/Coffe/Coffe.tsx";
import {GetCoffes} from "../utilities/fetchData.ts";

export const UserContext = React.createContext({} as ProviderProps)

function UserContextProvider({children} : {children: ReactNode}) {
    const [userData, dispatch] = React.useReducer((state: User, action: ActionProps)=>{
        if(action.type === 'SET_ADDRESS'){
            return {
                ...state,
                address: {
                    cep: action.payload.cep,
                    street: action.payload.street,
                    houseNumber: null,
                    AddDetails: null,
                    district: action.payload.neighborhood,
                    city: action.payload.city,
                    FU: action.payload.state
                }
            }
        }

        if(action.type === 'SET_ITEM_IN_SHOPPING_CART'){
            if(state.shoppingCart){
                console.log('adicionando ao carrinho pela primeira vez.')
                console.log(action.payload)
                return {
                    ...state,
                    shoppingCart: [...state.shoppingCart, {id: action.payload, quantity: 1}]
                }
            }

            return {
                ...state,
                shoppingCart: [{id: action.payload, quantity: 1}]
            }
        }

        if(action.type === 'REMOVE_ITEM_IN_SHOPPING_CART'){
            if(state.shoppingCart){
                const productsLeft = state.shoppingCart.filter((item)=>{
                    return item.id !== action.payload
                })

                if(productsLeft.length > 0){
                    return {
                        ...state,
                        shoppingCart: productsLeft
                    }
                }
                else{
                    return {
                        ...state,
                        shoppingCart: null
                    }
                }
            }
        }

        if(action.type === 'CHANGE_ITEM_AMOUNT'){
            if(state.shoppingCart){
                return {
                    ...state,
                    shoppingCart: state.shoppingCart.map((item)=>{
                        if(item.id === action.payload.id){
                            return action.payload
                        }else{
                            return item
                        }
                    })
                }
            }

            return {
                ...state,
                shoppingCart: [action.payload]
            }
        }

        if(action.type === 'CHANGE_PAYMENT_TYPE'){
            return {
                ...state,
                payment: action.payload
            }
        }

        if(action.type === 'RESET'){
            return {
                ...state,
                name: null,
                shoppingCart: null,
            }
        }

        return state
    }, {
        name: null,
        shoppingCart: null,
        address: null,
        payment: 'money',
    })

    const [selectedProducts, setSelectedProducts] = React.useState<null | Coffee[]>(null)

    React.useEffect(()=>{
        if(userData.shoppingCart !== null){
            GetCoffes(userData.shoppingCart).then((selectedProduct)=>{
                setSelectedProducts(selectedProduct)
            })
        }
        else{
            setSelectedProducts(null)
        }
    }, [userData.shoppingCart])

    function resetUser(){
        dispatch({
            type: "RESET",
            payload: {}
        })
    }

    // adicionar localidade
    function changeUserLocation(value: {}){
        dispatch({
            type: "SET_ADDRESS",
            payload: value
        })
    }

    function changePaymentType(value: PaymentType){
        dispatch({
            type: "CHANGE_PAYMENT_TYPE",
            payload: value
        })
    }

    // adicionar item ao carrinho
    function addItemInShoppingCart(id: string){
        dispatch({
            type: "SET_ITEM_IN_SHOPPING_CART",
            payload: id
        })
    }

    // apagar item no carrinho
    function removeItemInShoppingCart(id: string) {
        dispatch({
            type: "REMOVE_ITEM_IN_SHOPPING_CART",
            payload: id
        })
    }

    function changeItemAmount(id: string, quantity: number){
        dispatch({
            type: "CHANGE_ITEM_AMOUNT",
            payload: {id, quantity}
        })
    }


    return (
        <UserContext.Provider value={{
            userData,
            selectedProducts,
            changeUserLocation,
            addItemInShoppingCart,
            removeItemInShoppingCart,
            changeItemAmount,
            resetUser,
            changePaymentType}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;