import styled, {css} from "styled-components";
import {InputBase, show} from "../../Home.styled.ts";

interface TransferType {
    $Transfertype: 'Entrada' | 'Saída'
}

export const Input = styled(InputBase)`
  ${({$isHidden})=> $isHidden && css`
    display: none;
  `}
`

export const Error = styled.span`
  margin-block: .4rem;
  color: ${({theme})=> theme['red-300']};
  opacity: 0;
  animation: ${show} 400ms forwards;
  span{
    color: white;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`

export const TransferName = styled.label<TransferType>`
  margin-block: 1.5rem;
  color: white;
  background: ${({theme})=> theme['gray-700']};
  padding: 1.2rem 1.2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  cursor: pointer;
  border-radius: 6px;

  svg{
    color: ${({theme, $Transfertype})=>{
      return $Transfertype === 'Entrada'
              ? theme['green-300']
              : theme['red-300']
    }};
  }

`


export const TransferTypeWrapper = styled.div<TransferType>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  
  input:checked + label{
    background: ${({theme, $Transfertype})=>{ 
      return $Transfertype === 'Entrada' 
          ? theme['green-300']
          : theme['red-300']
    }};
    
    svg{
      color: white !important;
    }
  }
`