import * as Dialog from "@radix-ui/react-dialog";
import React, {ReactNode} from "react";
import * as Styles from './Modal.styled.ts'
import Input from "../Input/Input.tsx";
import {X} from "phosphor-react";
// import {GlobalContext} from "../../../../contexts/GlobalContextProvider.tsx";
import {useForm} from "react-hook-form";
import * as z from 'zod'
import {zodResolver} from "@hookform/resolvers/zod";
import {Api} from "../../../../lib/axios.ts";
import {GlobalContext} from "../../../../contexts/GlobalContextProvider.tsx";

const schema = z.object({
    description: z.string()
        .min(3, {message: 'Mínimo de 3 Caracteres.'}),
    price: z.number({invalid_type_error: 'Escreva uma quantia de reais.'})
        .min(1, {message: 'Mínimo de 1 real.'}),
    category: z.string()
        .min(3, {message: 'Mínimo de 3 Caracteres.'}),
    transferType: z.enum(['income', 'outcome'] as const, {invalid_type_error: "Por favor, selecione o tipo da transação."})
})

export interface ModalSchema extends z.infer<typeof schema>{}
function Modal({trigger} : {trigger: ReactNode}) {
    const {addTransaction} = React.useContext(GlobalContext)
    const {register, reset, handleSubmit, formState : {errors, isSubmitting}} = useForm<ModalSchema>({
        resolver: zodResolver(schema)
    })
    const closeButton = React.useRef<HTMLButtonElement>(null)

    async function handleSubmitQuery(data: ModalSchema){
        const {description, price, category, transferType} = data

        try{
            const response = await Api.post('transactions', {
                type: transferType,
                price, description,
                category,
                createdAt: new Date()
            })

            if(response.status === 201){
                addTransaction(response.data)
                closeButton.current!.click()
                return
            }
        }catch (e){
            window.alert('Conexão com as transações não foi estabelecida, você ligou o JSON-Server? Veja o Readme para mais informações.')
        }
    }


    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                {trigger}
            </Dialog.Trigger>

            <Dialog.Portal>
                <Styles.Overlay/>
                <Styles.Content>
                    <Styles.CloseButton ref={closeButton} onClick={()=> reset()}> <X size={24}/> </Styles.CloseButton>

                    <form onSubmit={handleSubmit(handleSubmitQuery)}>
                        <h1>Nova Transação</h1>

                        <Input errorHandling={errors} register={register} name={'description'} placeholder={'Descrição'}/>
                        <Input errorHandling={errors} register={register} type={'number'} name={'price'} placeholder={'Preço'}/>
                        <Input errorHandling={errors} register={register} name={'category'} placeholder={'Categoria'}/>

                        <Styles.WrapperTransferTypeButton>
                            <Input errorHandling={errors} register={register} type={'radio'} name={'transferType'} id={'income'} labelName={'Entrada'}/>
                            <Input errorHandling={errors} register={register} type={'radio'} name={'transferType'} id={'outcome'} labelName={'Saída'}/>

                            {errors.transferType &&
                                <Styles.Error>Ops! <span> {String(errors.transferType.message)}</span>
                                </Styles.Error>}
                        </Styles.WrapperTransferTypeButton>

                        <Styles.SubmitButton disabled={isSubmitting}> Adicionar </Styles.SubmitButton>
                    </form>

                </Styles.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}

export default Modal;