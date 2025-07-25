import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  place-items: center;
  grid-auto-flow: column;
  
  picture{
    align-self: end;
  }

  @media(max-width: 550px){
    gap: 3rem;
    grid-auto-flow: row;
  }
`

export const OrderWrapper = styled.div`
  h1{
    font-family: ${({theme})=> theme['Font-1']};
    color: ${({theme})=> theme['primary-medium']};
    margin-bottom: 0;
  }
  
  p{
    font-size: 1.25rem ;
  }
  
`

export const Data = styled.div`
  display: flex;
  gap: 1rem;
  
  h3{
    font-weight: normal;
    margin-bottom: .5rem;
  }
  svg{
    box-sizing: content-box;
    padding: .5rem;
    border-radius: 50%;
    color: white;
  }
`

export const Button = styled.button`
  width: 50%;
  background: transparent;
  align-self: center;
  &:hover{
    background: ${({theme})=> theme['primary-medium']};
    color: white;
  }
`


export const DataWrapper = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  border-radius: 5px 15px 5px 15px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  background: white;
  
  &:before{
    border-radius: calc(5px +  2px) calc(15px +  2px) calc(5px +  2px) calc(15px +  2px);
    content: '';
    background-image: linear-gradient(0deg, #8047F8, #DBAC2C);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    position: absolute;
    top: 50%;
    transform: rotate(0deg) translate(-50%,-50%);
    left: 50%;
    z-index: -1;
  }

  div:nth-child(1n) svg{
    background: ${({theme})=> theme['primary-medium']};
  }

  div:nth-child(2n) svg{
    background: ${({theme})=> theme['secondary-medium']};
  }

  div:nth-child(3n) svg{
    background: ${({theme})=> theme['secondary-dark']};
  }
`


