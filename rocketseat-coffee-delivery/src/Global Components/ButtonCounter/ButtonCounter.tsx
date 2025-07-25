import {Wrapper} from "./ButtonCounter.styled.ts";
import {Minus, Plus, ShoppingCartSimple} from "@phosphor-icons/react";
import React from "react";
import {UserContext} from "../../Context/UserContextProvider.tsx";
import {useLocation, useNavigate} from "react-router-dom";

function ButtonCounter({productID, quantity} : {productID: string, quantity: number}) {
    const {addItemInShoppingCart, removeItemInShoppingCart, changeItemAmount} = React.useContext(UserContext)
    const [count, setCount] = React.useState(quantity)
    const Navigate = useNavigate()
    const {pathname} = useLocation()
    const [error, setError] = React.useState(false)
    React.useEffect(()=>{
        setCount(quantity)
    }, [quantity])

    React.useEffect(()=>{
        if (count >= 1){
            changeItemAmount(productID, count)
        }
    }, [count])

    React.useEffect(()=>{
        return ()=>{
            setTimeout(()=>{
                setError(false)
            }, 3000)
        }
    }, [error])

    function handleCount(value: string){
        if(value === 'plus'){
            if(count === 0){
                addItemInShoppingCart(productID)
            }

            setCount(prev => prev + 1)
        }
        else{
            if(count === 1){
                removeItemInShoppingCart(productID)
            }
            if(count === 0){
                return
            }
            else{
                setCount(prev => prev - 1)
            }
        }
    }

    function toCheckout(){
        if(count >= 1){
            Navigate('/checkout')
        }
        else{
            setError(true)
        }
    }

    return (
        <>
        <Wrapper>
            <Plus style={error ? {background: '#b20000', color: 'white'} : {background: 'transparent'}}  onClick={()=> handleCount('plus')} size={18} />
            <span>{count}</span>
            <Minus onClick={()=> handleCount('minus') } size={18} />
        </Wrapper>

            {pathname !== '/checkout' && <ShoppingCartSimple onClick={()=> toCheckout()} size={18} />}
        </>
    );
}

export default ButtonCounter;