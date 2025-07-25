import {Api} from "../lib/axios.ts";

export type TransactionType = 'income' | 'outcome'

export interface Transaction{
    "id": number,
    "description": string,
    "type": TransactionType
    "category": string,
    "price": number,
    "createdAt": string
}

export async function getTransactions(query: null | string = null ) : Promise<Transaction[]>{
    try{
        const response = await Api.get('transactions',{
            params:{
                q: query,
                _order: 'desc',
                _sort: 'createdAt'
            },
        })
        return await response.data
    }catch (e) {
        throw new Error('JSON Server desligado.')
    }

}

export const MoneyFormatter = new Intl.NumberFormat("BR", {
    currency: "BRL",
    style: "currency"
})

export const DateFormatter = new Intl.DateTimeFormat("BR")