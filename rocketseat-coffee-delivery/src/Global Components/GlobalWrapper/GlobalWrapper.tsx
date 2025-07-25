import {ReactNode} from "react";
import {ExternalWrapper, InternalWrapper} from "./GlobalWrapper.styled.ts";

function GlobalWrapper({children} : {children: ReactNode}) {
    return (
        <ExternalWrapper>
            <InternalWrapper>
                {children}
            </InternalWrapper>
        </ExternalWrapper>
    );
}

export default GlobalWrapper;