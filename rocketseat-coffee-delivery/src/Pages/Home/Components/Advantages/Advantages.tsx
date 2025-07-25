import * as Styles from "./Advantages.styled.ts";
import {Coffee, Package, ShoppingCart, Timer} from "@phosphor-icons/react";

function Advantages() {
    return (
        <Styles.Wrapper>
            <Styles.Item>
                <ShoppingCart size={18} weight="duotone"/>
                <span>Compra simples e segura</span>
            </Styles.Item>

            <Styles.Item>
                <Timer size={18} weight="duotone" />
                <span>Entrega Rápida</span>
            </Styles.Item>

            <Styles.Item>
                <Package size={18} weight="duotone" />
                <span>Embalagem mantém o café intacto</span>
            </Styles.Item>

            <Styles.Item>
                <Coffee size={18} weight="duotone" />
                <span>Café chega fresquinho até você.</span>
            </Styles.Item>
        </Styles.Wrapper>
    );
}

export default Advantages;