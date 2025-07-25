import * as Styles from "./CartItem.styled.ts";
import ButtonCounter from "../ButtonCounter/ButtonCounter.tsx";

function CartItem({product, quantity} : {product: any, quantity: number}) {
    return (
        <Styles.Wrapper>
            <picture>
                <img src={product.imagePath} alt=""/>
            </picture>

            <div className={'wrapperItemData'}>
                <p>{product.name}</p>
                <ButtonCounter quantity={quantity} productID={product.id}/>
            </div>

            <span className={'price'}>{product.price}</span>
        </Styles.Wrapper>
    );
}

export default CartItem;