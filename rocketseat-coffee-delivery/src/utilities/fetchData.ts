import {Coffee} from "../Pages/Home/Components/Coffe/Coffe.tsx";
import {CartProduct} from "../Context/UserContextProvider.ts";

export async function GetCoffes(values: null | CartProduct[] = null){
    const data = await fetch('/coffeeData/coffeData.json')
    const products = await data.json()

    if(values){
        let listItems: Coffee[]  = []
        for (const item of values) {
            listItems = [...listItems, ...products.filter((product: Coffee)  =>{
                return product.id === item.id
            })]
        }
        return listItems
    }
    else{
        return products
    }
}



export async function GetAddress(local: string){
        const response = await fetch(`https://brasilapi.com.br/api/cep/v2/${local}`)

        if(response.status !== 200){
            throw Error()
        }

        return await response.json()
}