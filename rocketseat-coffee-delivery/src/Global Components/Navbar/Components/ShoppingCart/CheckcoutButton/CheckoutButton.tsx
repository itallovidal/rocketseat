import {Link} from "react-router-dom";
import {CaretRight} from "@phosphor-icons/react";
import * as Styles from "../ShoppingCart.styled.ts";
function CheckoutButton({hasProducts} : {hasProducts: boolean}) {
    return (
        <Link to={'/checkout'}>
            <Styles.CheckoutBtn>
                {hasProducts ? 'Ir para Checkout' : 'Selecione seus Produtos!'}
                {hasProducts ? <CaretRight className={'checkoutIcon'} size={18} /> : null}
            </Styles.CheckoutBtn>
        </Link>
    );
}

export default CheckoutButton;