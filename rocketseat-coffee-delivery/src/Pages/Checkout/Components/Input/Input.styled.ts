import styled from "styled-components";

export const Input = styled.input<{$widthNumber: number}>`
  background: ${({theme})=>theme['white-400']};
  border-radius: 5px;
  border: 1px solid ${({theme})=>theme['white-500']};
  outline: none;
  padding: .7rem;
  width: ${({$widthNumber})=> $widthNumber === 100 ? `${$widthNumber}%` : `calc( ${$widthNumber}% - .25rem)`};


  @media(max-width: 550px){
    width: 100%;
  }
  
  &::placeholder{
    opacity: .3;
  }
  
  &[type='radio']{
    display: none;
  }
  
  &:checked + label{
    background: ${({theme})=>theme['secondary-light']};
    border: 1px solid ${({theme})=>theme['secondary-medium']};
    color: ${({theme})=>theme['secondary-dark']};
  }
`