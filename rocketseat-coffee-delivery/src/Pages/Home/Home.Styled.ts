import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding-block: 6.25rem;
  justify-content: space-between;
  
  h1{
    font-family: ${({theme})=> theme["Font-1"]};
    font-size: ${({theme})=> theme["escala-gg"]};
    line-height: 1.3;
    margin-block: 0.5rem;

    @media(max-width: 550px){
      font-size: 1.8rem;
    }
  }

  @media(max-width: 550px){
    p{
      line-height: 1.3;
      font-size: ${({theme})=> theme["escala-p"]};
    }
  }

  @media(max-width: 1300px){
    flex-direction: column;
    gap: 2rem;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    padding-block: 2.25rem;
  }


`

export const CoffeWrapper = styled.div`
    margin-bottom: 10rem;
`

export const CoffeList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
  
  @media(max-width: 1300px){
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media(max-width: 800px){
    grid-template-columns: 1fr 1fr;
  }

  @media(max-width: 550px){
    grid-template-columns: 1fr;
  }
`