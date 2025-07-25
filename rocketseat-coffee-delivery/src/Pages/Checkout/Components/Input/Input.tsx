import * as Styles from './Input.styled.ts'
import {HTMLProps} from "react";
import {UseFormRegister} from "react-hook-form";
import {FormOrder} from "../../Checkout.tsx";
interface InputProps extends HTMLProps<HTMLInputElement>{
    $widthNumber: number,
    register: UseFormRegister<FormOrder>
}
function Input({register, $widthNumber, ...props} : InputProps) {
    return (

        <Styles.Input {...props}
                      {...register(props.name as keyof FormOrder)}
                      $widthNumber={$widthNumber}
        />
    );
}

export default Input;