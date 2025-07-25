import * as Styles from "./TransactionsList.styled.ts";
import {MagnifyingGlass} from "phosphor-react";
import {GlobalWrapper} from "../../Home.styled.ts";
import {Input} from "./TransactionsList.styled.ts";
import React from "react";
import {GlobalContext} from "../../../../contexts/GlobalContextProvider.tsx";
import {DateFormatter, getTransactions, MoneyFormatter} from "../../../../utilities/API.ts";
import {useForm} from "react-hook-form";
import * as z from 'zod'
import {zodResolver} from "@hookform/resolvers/zod";

const schema = z.object({
    query: z.string()
            .min(3, {message: 'Mínimo de 3 Caracteres.'})
})

interface Schema extends z.infer<typeof schema>{}

function TransactionsList() {
    const {transactionData, setTransactions} = React.useContext(GlobalContext)
    const [isLoading, setIsLoading] = React.useState(false)
    const {
        register,
        watch,
        clearErrors,
        handleSubmit,
        formState : { errors, isDirty}} = useForm<Schema>({
        resolver: zodResolver(schema)
    })

    const queryStatus = watch('query')
    React.useEffect(()=>{
        if(isDirty){
            if (queryStatus.length === 0 ){
                getTransactions().then((data)=>{
                    clearErrors('query')
                    setTransactions(data)
                })
            }
        }
    }, [queryStatus])


    function handleSubmitQuery({query}: {query: string}){
        setIsLoading(true)
        getTransactions(query).then((data)=>{
            setIsLoading(false)
            setTransactions(data)
        })
    }
    return (
        <>
            <GlobalWrapper>
                <Styles.SearchWrapper onSubmit={handleSubmit(handleSubmitQuery)}>
                    { errors.query && <Styles.Error>{String(errors.query.message)}</Styles.Error>}

                    <Input {...register('query')} type="text" placeholder={'Busque por transações'}/>

                    <Styles.SearchButton disabled={isLoading} type={'submit'}>
                        <MagnifyingGlass size={16} weight={'bold'}/> Buscar
                    </Styles.SearchButton>

                </Styles.SearchWrapper>
            </GlobalWrapper>

            <GlobalWrapper>
                <Styles.TransactionTableWrapper>
                    <table>
                        <tbody>
                        {
                            transactionData && transactionData.map((item)=>{
                               return <tr key={item.id}><td>{item.description}</td>
                                    <td>
                                        <Styles.TransactionValue $transactionType={item.type}>{ MoneyFormatter.format( item.price)}</Styles.TransactionValue>
                                    </td>
                                    <td>{item.category}</td>
                                    <td>{DateFormatter.format( new Date(item.createdAt))}</td></tr>
                            })
                        }

                        </tbody>
                    </table>
                </Styles.TransactionTableWrapper>
            </GlobalWrapper>
        </>
    );
}

export default TransactionsList;