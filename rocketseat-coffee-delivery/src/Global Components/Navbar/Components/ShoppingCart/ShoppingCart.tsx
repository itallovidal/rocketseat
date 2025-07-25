import { ShoppingCart} from "@phosphor-icons/react";
import React from "react";
import {UserContext} from "../../../../Context/UserContextProvider.tsx";
import CartItem from "../../../CartItem/CartItem.tsx";
import * as Styles from './ShoppingCart.styled.ts'
import CheckoutButton from "./CheckcoutButton/CheckoutButton.tsx";
import CoffeeIcon from '../../../../assets/coffee.png'
import {useLocation} from "react-router-dom";

function ShoppingCartWrapper() {
    const {userData: {shoppingCart}, selectedProducts} = React.useContext(UserContext)
    const [isOpen, setIsOpen] = React.useState(false)

    const {pathname} = useLocation()

    React.useEffect(()=>{
        setIsOpen(false)
    },[pathname])



    return (
        <Styles.Wrapper>
            <ShoppingCart onClick={()=> setIsOpen(prev=> !prev)} size={24} />

            { shoppingCart ? <Styles.CartNumber>{shoppingCart.length}</Styles.CartNumber> : null }

            {
                isOpen && (
                    <>
                        <CheckoutButton hasProducts={!!selectedProducts}/>

                        <Styles.Cart>
                            {
                                selectedProducts && shoppingCart
                                    ? selectedProducts.map((product)=>{
                                    const productQuantity = shoppingCart.filter(item => item.id === product.id)[0]?.quantity
                                    if(productQuantity === undefined) return
                                    return <CartItem key={product.id} quantity={productQuantity} product={product}/>})

                                    : <picture>
                                        <img src={CoffeeIcon} alt=""/>
                                      </picture>
                            }
                        </Styles.Cart>

                    </>

                )
            }

        </Styles.Wrapper>
    );
}

export default ShoppingCartWrapper;
