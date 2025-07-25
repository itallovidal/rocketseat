import GlobalWrapper from "../../Global Components/GlobalWrapper/GlobalWrapper.tsx";
import * as Styles from './Success.styled.ts'
import deliveryGuy from '../../assets/deliveryGuy.svg'
import {CurrencyDollar, MapPin, Timer} from "@phosphor-icons/react";
import React from "react";
import {UserContext} from "../../Context/UserContextProvider.tsx";


function Success() {
    const {userData, resetUser} = React.useContext(UserContext)
    const payment = {
        debit: 'Cartão de Débito',
        credit: 'Cartão de Crédito',
        money: 'Dinheiro'
    }

    return (
        <GlobalWrapper>
            <Styles.Wrapper>
                <Styles.OrderWrapper>
                    <h1>Uhul, pedido confirmado!</h1>
                    <p>Agora é só aguardar o pedido chegar até você.</p>

                    <Styles.DataWrapper>
                        <Styles.Data>
                            <MapPin size={24} />
                            <div>
                                <h3>Entrega em <b>{userData.address?.street}</b></h3>
                                <span>{userData.address?.district} - {userData.address?.FU}</span>
                            </div>
                        </Styles.Data>

                        <Styles.Data>
                            <Timer size={24} />

                            <div>
                                <h3>Previsão de entrega</h3>
                                <span><b>20 - 30 min</b></span>
                            </div>
                        </Styles.Data>

                        <Styles.Data>
                            <CurrencyDollar size={24} />

                            <div>
                                <h3>Pagamento na entrega</h3>
                                <span> <b>{payment[userData.payment]}</b></span>
                            </div>
                        </Styles.Data>


                        <Styles.Button onClick={resetUser}>Voltar para o início</Styles.Button>
                    </Styles.DataWrapper>

                </Styles.OrderWrapper>

                <picture>
                    <img src={deliveryGuy} alt=""/>
                </picture>
                
            </Styles.Wrapper>

        </GlobalWrapper>
    );
}

export default Success;