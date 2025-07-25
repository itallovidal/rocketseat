import GlobalWrapper from "../../Global Components/GlobalWrapper/GlobalWrapper.tsx";
import * as Styles from './Checkout.styled.ts'
import Header from "./Components/Header/Header.tsx";
import {Coffee, CreditCard, CurrencyCircleDollar, CurrencyDollar, MapPinLine, Money} from "@phosphor-icons/react";
import Input from "./Components/Input/Input.tsx";
import React from "react";
import {UserContext} from "../../Context/UserContextProvider.tsx";
import {useForm} from "react-hook-form";
import {z} from 'zod'
import {zodResolver} from "@hookform/resolvers/zod";
import CartItem from "../../Global Components/CartItem/CartItem.tsx";
import {GetAddress} from "../../utilities/fetchData.ts";
import {useNavigate} from "react-router-dom";

const HEADER_DATA ={
    ADDRESS: {
        ICON: MapPinLine,
        TITLE: 'Endereço de Entrega',
        SUBTITLE: 'Informe o endereço onde deseja receber seu pedido.'
    },
    PAYMENT:{
        ICON: CurrencyDollar,
        TITLE: 'Pagamento',
        SUBTITLE: 'O pagamento é feito na entrega, escolha o método.'
    },
    CHART:{
        ICON: Coffee,
        TITLE: 'Carrinho',
        SUBTITLE: 'Como é bom tomar café!'
    }
} as const



const paymentZOD = ['debit', 'credit', 'money'] as const

const schema = z.object({
    payment: z.enum(paymentZOD),
    cep: z.string().max(8).min(8).regex(/\d{5}\d{3}/, {message: 'Digite um cep válido'}),
    street: z.string().min(3),
    houseNumber: z.coerce.number().min(0),
    AddDetails: z.string(),
    district:z.string(),
    city: z.string(),
    FU: z.string().max(2).min(2)
    // orderedProducts:
})

export interface FormOrder extends z.infer<typeof schema>{}



function Checkout() {
    const {userData, selectedProducts, changeUserLocation, changePaymentType} = React.useContext(UserContext)
    const Navigate = useNavigate()
    const defaultFormValues = {
        cep: userData.address ? userData.address.cep : '',
        street: userData.address ? userData.address.street : '',
        houseNumber: 0,
        AddDetails: '',
        district: userData.address ? userData.address.district : '',
        city: userData.address ? userData.address.city : '',
        FU: userData.address ? userData.address.FU : ''
    }
    const {register, setValue, watch, handleSubmit, formState: {errors}} = useForm<FormOrder>({
        resolver: zodResolver(schema),
        defaultValues: {
            payment: userData.payment,
            ...defaultFormValues
        }
    })

    console.log(errors)


    const totalItems = userData.shoppingCart!.reduce((acc, item) =>{
        return acc + item.quantity
    }, 0)
    const totalOrder = selectedProducts!.reduce((acc, selectedItem)=>{
        const product = userData.shoppingCart?.find((item)=>{
            return item.id === selectedItem.id
        })

        if(product)
            return Number(((Number(selectedItem.price) * product.quantity) + acc).toFixed(3))

        return acc
    }, 3.50)

    function submitOrder(data: FormOrder){
        console.log({
            ...data,
            total: totalOrder
        })

        changePaymentType(data.payment)
        console.log('Tudo certo!')

        Navigate('/checkout/success')
    }

    if(watch('cep').length === 8 && watch('cep') !== userData.address?.cep){
        console.log(watch('cep'))
        GetAddress(watch('cep')).then(newAddress=>{
            changeUserLocation(newAddress)
            console.log(newAddress)
            setValue('street', newAddress.street, )
            setValue('district', newAddress.neighborhood)
            setValue('city', newAddress.city, )
            setValue('FU', newAddress.state, )
        } )
    }


    return (
        <GlobalWrapper>
            <Styles.Wrapper onSubmit={handleSubmit(submitOrder)}>
                <Styles.OrderData>
                    <Styles.AddressWrapper>
                        <Header
                            Icon={HEADER_DATA.ADDRESS.ICON}
                            title={HEADER_DATA.ADDRESS.TITLE}
                            subtitle={HEADER_DATA.ADDRESS.SUBTITLE}/>

                        <Styles.AddressForm>
                            <Input register={register} name={'cep'} $widthNumber={35} placeholder={'CEP'}/>
                            <Input register={register} name={'street'} $widthNumber={100} placeholder={'Rua'}/>
                            <Input register={register} name={'houseNumber'} $widthNumber={35} placeholder={'Número'}/>
                            <Input register={register} name={'AddDetails'} $widthNumber={65} placeholder={'Complemento'}/>
                            <Input register={register} name={'district'} $widthNumber={35} placeholder={'Bairro'}/>
                            <Input register={register} name={'city'} $widthNumber={50} placeholder={'Cidade'}/>
                            <Input register={register} name={'FU'} $widthNumber={14} placeholder={'UF'}/>
                        </Styles.AddressForm>
                    </Styles.AddressWrapper>

                    <Styles.PaymentWrapper>
                        <Header
                            Icon={HEADER_DATA.PAYMENT.ICON}
                            title={HEADER_DATA.PAYMENT.TITLE}
                            subtitle={HEADER_DATA.PAYMENT.SUBTITLE}/>

                        <Styles.PaymentForm>
                            <Input register={register}
                                   type={'radio'}
                                   id={'credit'}
                                   name={'payment'}
                                   $widthNumber={33}
                                   value={'credit'}/>

                            <Styles.Label htmlFor="credit"> <CreditCard size={24} />  Crédito </Styles.Label>

                            <Input register={register}
                                   type={'radio'} id={'debit'}
                                   name={'payment'}
                                   $widthNumber={33}
                                   value={'debit'}/>

                            <Styles.Label htmlFor="debit"> <CurrencyCircleDollar size={24} /> Débito </Styles.Label>

                            <Input register={register}
                                   type={'radio'} id={'money'}
                                   name={'payment'}
                                   $widthNumber={33}
                                   value={'money'}/>

                            <Styles.Label htmlFor="money"> <Money size={24} /> Dinheiro </Styles.Label>
                        </Styles.PaymentForm>
                    </Styles.PaymentWrapper>
                </Styles.OrderData>


                <Styles.ChartWrapper>
                    <Header
                        Icon={HEADER_DATA.CHART.ICON}
                        title={HEADER_DATA.CHART.TITLE}
                        subtitle={HEADER_DATA.CHART.SUBTITLE}/>

                    {
                        selectedProducts && selectedProducts.map((product)=>{
                            const productQuantity = userData.shoppingCart!.filter(item => item.id === product.id)[0]?.quantity
                            if(productQuantity === undefined) return
                            return <CartItem key={product.id} quantity={productQuantity} product={product}/>})
                    }

                    <Styles.TotalOrderWrapper>
                        <div>
                            <p>Total de itens</p>
                            <span>{totalItems} itens  </span>
                        </div>

                        <div>
                            <p>Entrega</p>
                            <span>R$ 3,50</span>
                        </div>

                        <div>
                            <h3>Total:</h3>
                            <span>R$ {totalOrder}</span>
                        </div>
                    </Styles.TotalOrderWrapper>
                    <Styles.Button type={'submit'}>Finalizar Pedido!</Styles.Button>
                </Styles.ChartWrapper>
            </Styles.Wrapper>
        </GlobalWrapper>
    );
}

export default Checkout;