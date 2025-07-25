import styled from "styled-components";

export const Wrapper = styled.form`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;

  @media(max-width: 550px){
    grid-template-columns: 1fr;
  }
`
const formWrapper = styled.div`
  background: ${({theme})=>theme['white-300']};
  padding: 1.5rem;
  border-radius: 10px;
`
export const AddressWrapper = styled(formWrapper)`
  margin-bottom: 1rem;
`

export const AddressForm = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
`

export const PaymentForm = styled(AddressForm)``

export const OrderData = styled.div`
  
`

export const PaymentWrapper = styled(formWrapper)`
`

export const ChartWrapper = styled(formWrapper)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`

export const Label = styled.label`
  background: ${({theme})=>theme['white-400']};
  border-radius: 5px;
  border: 1px solid ${({theme})=>theme['white-500']};
  outline: none;
  padding: .7rem;
  flex: 1;
  display: grid;
  place-items: center;
  grid-auto-flow: column;
  
  &:hover{
    cursor: pointer;
  }
`
export const Button = styled.button`
  width: 100%;
  background: ${({theme})=>theme['primary-medium']};
  color: white;
  padding: 1rem;
  
  &:hover{
    background: ${({theme})=>theme['secondary-medium']};
  }
`

export const TotalOrderWrapper = styled.div`
  flex: 1;
  div{
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-block: 1rem;
    
    span{
      font-weight: bold;
      font-family: ${({theme})=>theme['Font-1']};
      font-size: 1.2rem;
    }
  }
`