import {Coffee} from "../Pages/Home/Components/Coffe/Coffe.tsx";

export type PaymentType = 'credit' | 'debit' | 'money'
export interface Address {
    cep: string,
    street: string,
    houseNumber: string | null,
    AddDetails: string | null,
    district: string,
    city: string
    FU: string
}

export interface CartProduct{
    id: string,
    quantity: number
}

export interface User{
    name: string | null,
    shoppingCart: Array<CartProduct> | null,
    address: Address | null,
    payment: PaymentType,
}

export interface ProviderProps{
    changeUserLocation: (a: {})=> void,
    userData: User,
    addItemInShoppingCart: (a: string)=> void,
    removeItemInShoppingCart: (a: string)=> void,
    changeItemAmount: (a: string, b: number)=> void,
    selectedProducts: null | Coffee[],
    changePaymentType: (a: PaymentType)=> void,
    resetUser: ()=>void
}



type ACTIONS =  'SET_ADDRESS' | 'SET_NAME' | 'SET_PAYMENT_PREFERENCE' |
                'SET_ITEM_IN_SHOPPING_CART' | 'REMOVE_ITEM_IN_SHOPPING_CART' |
                'CHANGE_ITEM_AMOUNT' | 'CHANGE_PAYMENT_TYPE' | 'RESET'

export interface ActionProps{
    type: ACTIONS
    payload: any
}