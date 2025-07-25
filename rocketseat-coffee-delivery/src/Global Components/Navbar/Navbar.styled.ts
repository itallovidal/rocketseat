import styled from "styled-components";

export const Wrapper = styled.nav`
  padding-block: calc( (6rem / 2) - 20px) ;
  
  nav{
    max-width: 75rem;
    width: 90%;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
  }
`

export const DataWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 23rem;
    justify-content: space-between;

  @media(max-width: 550px){
    width: 90%;
  }
`