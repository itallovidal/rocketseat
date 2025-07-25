import  {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body, button, input{
    font-family: 'Roboto', sans-serif;
  }
  
  body{
    background: ${({theme})=> theme['gray-800']};
  }
`