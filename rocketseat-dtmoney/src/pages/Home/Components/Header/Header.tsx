import * as Styles from "./Header.styled.ts";
import logoDTMoney from "../../../../assets/logoDTMONEY.svg";
import Modal from "../Modal/Modal.tsx";
function Header() {
    return (
        <Styles.Header>
            <Styles.Content>
                <picture>
                    <img src={logoDTMoney} alt=""/>
                </picture>

                <Modal trigger={<Styles.Button> Nova transação </Styles.Button>}/>
            </Styles.Content>
        </Styles.Header>
    );
}

export default Header;