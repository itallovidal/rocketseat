import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  padding: 1.2rem;
  
  h2{
    font-family: ${({theme})=>theme['Font-1']};
    font-size: ${({theme})=>theme['escala-m']};
    text-align: center;
    margin-bottom: .5rem;
  }
  
  p{
    font-size: ${({theme})=>theme['escala-pp']};
    opacity: .8;
    text-align: center;
  }
  
  &:before{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 85%;
    z-index: -1;
    width: 100%;
    background:${({theme})=>theme['white-300']};
    border-radius: 5px 15px 5px 15px;
  }
`

export const TagsWrapper = styled.div` 
  display: flex;
  gap: .5rem;
  
  span{
    background: ${({theme})=>theme['primary-light']};
    color: ${({theme})=>theme['primary-dark']};
    border-radius: 15px;
    padding: .5rem;
    font-weight: bold;
    text-transform: uppercase;
    font-size: ${({theme})=>theme['escala-xpp']};
  }
`

export const Footer = styled.div` 
  display: flex;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  align-items: center;
  
  span{
    font-family:  ${({theme})=>theme['Font-1']};
  }
  &>svg{
    padding: .5rem;
    box-sizing: content-box;
    border-radius: 10px;
    background:  ${({theme})=>theme['secondary-dark']};
    color: white;
    cursor: pointer;
    transition: 400ms;
    
    &:hover{
      transform: scale(1.1);
    }
  }
`