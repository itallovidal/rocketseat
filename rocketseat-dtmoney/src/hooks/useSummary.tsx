import React from "react";
import {GlobalContext} from "../contexts/GlobalContextProvider.tsx";

function UseSummary() {
    const {transactionData} = React.useContext(GlobalContext)

    if(transactionData){
        console.log(transactionData)
        const summaryData = transactionData.reduce((acc, item)=>{

            if(item.type === 'income'){
                acc.income += item.price
                acc.total += item.price
            }
            else{
                acc.outcome += item.price
                acc.total -= item.price
            }

            return acc
        }, {
            total: 0,
            income: 0,
            outcome: 0
        })

        return summaryData
    }

    return null
}

export default UseSummary;