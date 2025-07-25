import * as Styles from './Header.styled.ts'
import {Icon} from "@phosphor-icons/react";

interface HeaderProps{
    Icon: Icon,
    title: string,
    subtitle: string
}
function Header({Icon, title, subtitle} : HeaderProps) {
    return (
        <Styles.Header>
            <Icon size={24}/>
            <div>
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </div>
        </Styles.Header>
    );
}

export default Header;