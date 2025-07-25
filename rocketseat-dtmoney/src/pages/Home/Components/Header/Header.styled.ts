import styled from "styled-components";

import {Button as BaseButton, GlobalWrapper} from "../../Home.styled.ts";

export const Header = styled.header`
  padding-block: 2.5rem 7.5rem;
  background: ${({theme})=> theme['gray-900']};
  
  @media (max-width: 550px){
    padding-block: 2.5rem 3.5rem;
  }
`

export const Content = styled(GlobalWrapper)`
  display: flex;
  justify-content: space-between;
`
export const Button = styled(BaseButton)``
