import styled from "styled-components";

export const Wrapper = styled.div`
    padding: .5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({theme})=> theme["secondary-light"]};
    color: ${({theme})=> theme["secondary-dark"]};
    border-radius: 5px;
    width: 100%;
    
    &:hover{
      cursor: pointer;
    }
    
    span{
    margin-left: 1rem;
    }
    
    input{
      background: none;
      border: none;
      outline: none;
      margin-left: 1rem;
      color: ${({theme})=> theme["secondary-dark"]} ;
      
      &::placeholder{
        color: ${({theme})=> theme["secondary-placeholder"]};
      }
    }
`