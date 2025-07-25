import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  @media (max-width: 700px){
    //:root{
    //  font-size: 12px;
    //}
    
    //svg{
    //  scale: .8;
    //}
  }
  
  body{
    //background: ${({theme})=> theme["gray-900"]};
    //color: ${({theme})=> theme["green-300"]};
  }
  
  path{
    transition: 300ms;
  }
  
  :focus:not(button){
    transition: 400ms;
    outline: none;
    border: none;
  }
  
  body, input, button,textarea, a{
    font-family: ${({theme})=> theme["Font-2"]};
    font-weight: 400;
    font-size: 1rem;
  }

  a{
    text-decoration: none;
    color: black;
  }

  picture{
    display: block;
    img{
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
    }
  }

  button{
    border: none;
    background: transparent;
    padding: 10px;
    border-radius: 8px;
    transition: 500ms;
    cursor: pointer;
  }
`