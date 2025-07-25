import styled, {keyframes} from "styled-components";

const show = keyframes`
100%{
  opacity: 1;
  transform: translateY(0);
}
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background: transparent;
  padding: 1rem;
  border-radius: 10px;
  opacity: 0;
  animation: ${show} 200ms forwards;
  height: 6rem;
  width: 100%;
  position: relative;

  &:before {
    position: absolute;
    content: '';
    width: 100%;
    height: 2px;
    background: rgba(128, 128, 128, 0.11);
    bottom: -.5rem;
    left: 50%;
    transform: translateX(-50%);
  }

  svg {
    background: ${({theme}) => theme["white-500"]}
  }

  picture {
    flex-grow: 1;
    height: 100%;
  }

  .wrapperItemData {
    width: 50%;
    height: 100%;
    
    > svg{
      display: none;
    }

    p {
      margin-bottom: .5rem;
      color: black;
      font-size: 1rem;
    }
  }

  .price {
    width: 20%;
    font-family: ${({theme}) => theme['Font-1']};
    color: black;
    font-size: 1.3rem;
  }
`