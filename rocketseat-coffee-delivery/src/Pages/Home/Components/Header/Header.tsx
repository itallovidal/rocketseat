import * as Styles from "../../Home.Styled.ts";
import headerImg from '../../../../assets/headerImage.png'
import Advantages from "../Advantages/Advantages.tsx";

function Header() {
    return (
        <Styles.Wrapper>
            <div>
                <h1> Encontre o café perfeito <br/> para qualquer hora do dia</h1>
                <p> Com o Coffe Delivery, você recebe seu café onde estiver, a qualquer hora.</p>
                <Advantages/>
            </div>
            <picture>
                <img src={headerImg} alt=""/>
            </picture>
        </Styles.Wrapper>
    );
}

export default Header;