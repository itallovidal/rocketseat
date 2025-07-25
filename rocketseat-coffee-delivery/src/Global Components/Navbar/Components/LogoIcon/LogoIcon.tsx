import {Link} from "react-router-dom";
import logo from "../../../../assets/logo.svg";
import logoMobile from "../../../../assets/iconLogo.png";

function LogoIcon({hasLink} :{hasLink: boolean}) {
    return (
        <Link to={hasLink ? '/' : '/checkout/success'}>
            <picture>
                <source media={'(max-width: 550px)'} srcSet={logoMobile}/>
                <source media={'(min-width: 555px)'} srcSet={logo}/>
                <img alt=""/>
            </picture>
        </Link>
    );
}

export default LogoIcon;