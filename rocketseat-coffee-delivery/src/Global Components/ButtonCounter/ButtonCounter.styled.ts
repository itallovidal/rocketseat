import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  place-items: center;
  grid-auto-flow: column;
  gap: .5rem;
  background: ${({theme})=>theme['white-500']};
  max-width: 5.875rem;
  border-radius: 10px;
  color: ${({theme})=>theme['secondary-dark']};
  
  svg{
    cursor: pointer;
    transition: 100ms;
    padding: .5rem;
    box-sizing: content-box;
    border-radius: 10px;
    
    &:hover{
      background:  ${({theme})=>theme['secondary-dark']} !important;
      color: white;
    }
  }
`