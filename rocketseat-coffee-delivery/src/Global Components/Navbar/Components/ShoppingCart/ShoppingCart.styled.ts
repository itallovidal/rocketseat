import styled, {keyframes} from "styled-components";

const show = keyframes`
100%{
  opacity: 1;
  transform: translateY(0);
}
`
export const Wrapper = styled.div`
  position: relative;
  color: ${({theme})=> theme["primary-dark"]};
  display: grid;
  place-items: center;
  
  > svg{
    background: ${({theme})=> theme["primary-light"]};
    border-radius: 5px;
    padding: .5rem;
    box-sizing: content-box;
    cursor: pointer;
  }
`
export const CartNumber = styled.div`
  position: absolute;
  background: ${({theme})=> theme["secondary-dark"]};
  color: white;
  //padding: .4rem;
  font-size: .8rem;
  display: grid;
  place-items: center;
  border: 5px solid white;
  box-sizing: content-box;
  top: -50%;
  right: -75%;
  transform: translate(-50%);
  border-radius: 50%;
  width: 1.25rem;
  height: 1.25rem;
`


export const Cart = styled.div`
  position: absolute;
  background: ${({theme}) => theme["white-300"]};
  padding: 1rem;
  border-radius: 5px;
  z-index: 10;
  width: 23rem;

  animation: ${show} 400ms 200ms forwards;
  opacity: 0;
  transform: translateY(2rem);
  top: calc(100% + 3rem + 2rem);

  right: 0;
  min-height: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  transition: height 400ms;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.20);

  > picture {
    height: 10rem;
    padding: 1rem;
    opacity: .6;
  }
`

export const CheckoutBtn = styled.button`
  position: absolute;
  background: ${({theme})=> theme["white-300"]};
  border-radius: 5px;
  top: calc(100% + 1rem);
  height: 3rem;
  transform: translateY(2rem);
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.20);
  z-index: 1000;
  right: 0;
  width: 23rem;
  opacity: 0;
  animation: ${show} 400ms forwards;
  display: flex;
  justify-content: center; 
  align-items: center;

  .checkoutIcon{
    background: none;
  }
  
  &:hover{
    background: ${({theme})=> theme["secondary-dark"]};
    color: white;
  }
`

