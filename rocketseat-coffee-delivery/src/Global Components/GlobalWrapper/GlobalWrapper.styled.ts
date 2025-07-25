import styled, {keyframes} from "styled-components";

const show = keyframes`
  100%{
    opacity: 1;
  }
`

export const ExternalWrapper = styled.article`
  width: 90%;
  opacity: 0;
  margin: 0 auto;
  animation: ${show} 400ms forwards;
`


export const InternalWrapper = styled.section`
  width: 100%;
  max-width: 75rem;
  margin: 0 auto;
`