import UserLocation from "./Components/UserLocation/UserLocation.tsx";
import ShoppingCartWrapper from "./Components/ShoppingCart/ShoppingCart.tsx";
import * as Styles from './Navbar.styled.ts'
import LogoIcon from "./Components/LogoIcon/LogoIcon.tsx";
import {useLocation} from "react-router-dom";


function Navbar() {
    const {pathname} = useLocation()

    return (
        <Styles.Wrapper>
            <nav>
                <LogoIcon hasLink={pathname !== '/checkout/success'}/>

                <Styles.DataWrapper>
                    <UserLocation/>
                    {
                        pathname === '/checkout/success' ? null : <ShoppingCartWrapper/>
                    }

                </Styles.DataWrapper>
            </nav>
        </Styles.Wrapper>
    );
}

export default Navbar;