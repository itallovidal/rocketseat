import {Footer, TagsWrapper, Wrapper} from "./Coffe.styled.ts";
import ButtonCounter from "../../../../Global Components/ButtonCounter/ButtonCounter.tsx";
import React from "react";
import {UserContext} from "../../../../Context/UserContextProvider.tsx";

type TagsType = 'tradicional' | 'com leite' | 'alcoólico' | 'gelado' | 'especial'
export interface Coffee{
    id: string,
    name: string,
    price: string,
    description: string,
    tags: Array<TagsType>,
    imagePath: string,
}
interface CoffeProps{
    coffee: Coffee
}
function Coffe({coffee}: CoffeProps) {
    const {userData : {shoppingCart}} = React.useContext(UserContext)
    const [quantity, setQuantity] = React.useState(0)

    React.useEffect(()=>{
        if(shoppingCart){
            const cart = shoppingCart.filter((item)=>item.id === coffee.id)

            if(cart.length > 0){
                setQuantity(cart[0].quantity)
            }
            else{
                setQuantity(0)
            }
        }
    },[shoppingCart])


    return (
        <Wrapper>
            <picture>
                <img src={coffee.imagePath} alt=""/>
            </picture>

            <TagsWrapper>
                {coffee.tags.map((tag, i)=> <span key={i} className={'tag'}>{tag.toUpperCase()}</span> )}
            </TagsWrapper>

            <div>
                <h2>{coffee.name}</h2>
                <p>{coffee.description}</p>
            </div>

            <Footer>
                <span>R$ {coffee.price}</span>
                <ButtonCounter quantity={quantity} productID={coffee.id}/>
            </Footer>
        </Wrapper>
    );
}

export default Coffe;