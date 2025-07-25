import styled, {keyframes} from "styled-components";

export const show = keyframes`
  100%{
    opacity: 1;
  }
`

export const Button = styled.button`
  padding: 0 1.2rem;
  border-radius: 6px;
  background: ${({theme})=> theme['green-500']};
  border: 1px solid ${({theme})=> theme['green-500']};
  color: white;
  cursor: pointer;
  transition: 400ms;
  
  &:disabled{
    opacity: .4;
    cursor: wait;
  }
  
  &:not(&:hover){
    background: ${({theme})=> theme['green-300']};
    color: white;
  }
`

export const GlobalWrapper = styled.article`
  max-width: 70rem;
  width: 95%;
  margin: 0 auto;
`

interface InputProps {
    $isHidden?: boolean
}
export const InputBase = styled.input<InputProps>`
  flex: 1;
  padding: 1.2rem 1.5rem;
  border-radius: 6px;
  border: 1px solid black;
  background: ${({theme})=> theme['gray-900']};
  color: white;
  transition: 400ms;
  outline: none;
  
  &:focus, &:active{
    border: 1px solid ${({theme})=> theme['green-300']};
    outline: none;
  }
`

