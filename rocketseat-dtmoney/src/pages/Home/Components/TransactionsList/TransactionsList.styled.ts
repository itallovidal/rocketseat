import styled from "styled-components";
import {Button, InputBase, show} from "../../Home.styled.ts";
import {darkTheme} from "../../../../styles/theme.ts";
import {TransactionType} from "../../../../utilities/API.ts";

export const SearchWrapper = styled.form`
  display: flex;
  width: 100%;
  gap: 1rem;
  position: relative;
`

export const Error = styled.span`
  opacity: 0;
  animation: ${show} 400ms forwards;
  width: 100%;
  position: absolute;
  bottom: calc(100% + .8rem);
  left: .8rem;
  color: ${({theme})=> theme['red-300']};
`

export const SearchButton = styled(Button)`
  display: flex;
  gap: .5rem;
  align-items: center;
  background: transparent;
  color: ${({theme})=> theme['green-300']};
  //font-weight: bold;
  
  svg{
    font-size: 1rem;
  }
`

export const Input = styled(InputBase)``


export const TransactionTableWrapper = styled.section`
  margin-block: 2rem;
  table{
    width: 100%;
  }
  
  table tbody {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: white;
  }

  table tbody tr{
    background: ${({theme})=> theme['gray-700']};
    padding: 1.5rem 1.25rem;
    display: flex;
    gap: .5rem;
    border-radius: 6px;
  }

  table tbody tr td:nth-child(1){
    flex: 5;
  }

  table tbody tr td:nth-child(2){
    flex: 3;
    text-transform: uppercase;
  }

  table tbody tr td:nth-child(3){
    flex: 3;
  }

  table tbody tr td:nth-child(4){
    flex: 2;
  }
  
  @media(max-width: 550px){
    table tbody tr{
      flex-direction: column;
    }
  }
`

interface TransactionTypeProps{
    $transactionType: TransactionType
}

const TransactionTypeColors={
    'income': darkTheme['green-300'],
    'outcome': darkTheme['red-300']
} as const
export const TransactionValue = styled.span<TransactionTypeProps>`
  color: ${({$transactionType})=> TransactionTypeColors[$transactionType]} ;
  
`