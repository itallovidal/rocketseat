import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  row-gap: 1rem;

  @media(max-width: 550px){
    div{
      width: 100%;
      svg{
        scale: 1.2;
      }
    }
  }
  
  div:nth-child(1) svg{
    background: ${({theme})=> theme['black-400']};
  }

  div:nth-child(2) svg{
    background: ${({theme})=> theme['primary-dark']};
  }

  div:nth-child(3) svg{
    background: ${({theme})=> theme['secondary-medium']};
  }

  div:nth-child(4) svg{
    background: ${({theme})=> theme['secondary-dark']};
  }
`

export const Item = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 1rem;
    border-radius: 50%;
    padding: .5rem;
    color: white;
    box-sizing: content-box;
  }


`