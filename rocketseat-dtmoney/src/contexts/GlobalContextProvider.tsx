import React, {ReactNode} from "react";
import {getTransactions, Transaction} from "../utilities/API.ts";

function discoverType<T>(data: unknown) : data is T{
    return !!data;
}

const actionTypes= {
    ADD_TRANSACTION: 'ADD_TRANSACTION',
    REMOVE_TRANSACTION: 'REMOVE_TRANSACTION',
    GET_TRANSACTIONS: 'SET_TRANSACTIONS',
} as const

type ActionType = typeof actionTypes[keyof typeof actionTypes]

interface Action{
    type: ActionType,
    payload?: Transaction | Transaction[]
}

interface globalContextProps{
    transactionData: null | Transaction[],
    setTransactions: (a: Transaction[]) => void,
    addTransaction: (a: Transaction) => void,
}

export const GlobalContext = React.createContext({} as globalContextProps)
function GlobalContextProvider({children} : {children: ReactNode}) {
    const [transactionData, dispatch] = React.useReducer((state: Transaction[] | null, action: Action)=>{
        if(action.type === "SET_TRANSACTIONS" && discoverType<Transaction[]>(action.payload) ){
            if(action.payload.length !== 0)
                return [
                    ...action.payload
                ]

            return null
        }

        if(action.type === 'ADD_TRANSACTION' && discoverType<Transaction>(action.payload)){
            console.log('adicionando')
            if(discoverType<Transaction[]>(state)){
                return [
                    ...state,
                    action.payload
                ]
            }

            return [
                action.payload
            ]
        }
        return state
    }, null)

    function setTransactions(data: Transaction[]){
        dispatch({
            type: "SET_TRANSACTIONS",
            payload: data
        })
    }


    function addTransaction(data: Transaction){
        dispatch({
            type: "ADD_TRANSACTION",
            payload: data
        })
    }


    React.useEffect(()=>{
            getTransactions().then((data)=>{
                setTransactions(data)
            })
            .catch(()=>{
                window.alert('Conexão com as transações não foi estabelecida.\nVocê ligou o JSON-Server?' +
                    '\n\nVeja o Readme para mais informações.')
            })
    }, [])



    return (
        <GlobalContext.Provider value={{transactionData, setTransactions, addTransaction}}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalContextProvider;