import * as Styles from './Input.styled.ts'
import {HTMLProps} from "react";
import {ArrowCircleDown, ArrowCircleUp} from "phosphor-react";
import {FieldErrors, UseFormRegister} from "react-hook-form";
import { ModalSchema} from "../Modal/Modal.tsx";

interface InpuptProps extends HTMLProps<HTMLInputElement> {
    labelName?: 'Entrada' | 'Saída',
    register: UseFormRegister<ModalSchema>,
    errorHandling: FieldErrors<ModalSchema>
}

type RegisterNameProps = keyof ModalSchema


function Input({errorHandling, register, labelName, ...props} :InpuptProps) {

    if(props.type === 'radio' && labelName){
        return (
            <Styles.TransferTypeWrapper $Transfertype={labelName}>
                <Styles.Input $isHidden
                              {...register(props.name as RegisterNameProps)}
                              type={'radio'}
                              name={props.name}
                              id={props.id}
                              value={props.id}
                              placeholder={props.placeholder}/>

                <Styles.TransferName $Transfertype={labelName} htmlFor={props.id}>
                    {labelName === 'Saída'
                        ? <ArrowCircleDown size={24} />
                        : <ArrowCircleUp size={24}/>}
                     {labelName}
                </Styles.TransferName>
            </Styles.TransferTypeWrapper>
        );
    }

    return (
        <Styles.Wrapper>
            <Styles.Input
                {...register(props.name as RegisterNameProps, {
                    valueAsNumber: props.type === "number"
                })}
                type={props.type}
                placeholder={props.placeholder}/>

            {errorHandling[props.name as RegisterNameProps] &&
                <Styles.Error> Ops! <span> {String(errorHandling[props.name as RegisterNameProps]!.message)}</span>
                </Styles.Error>}
        </Styles.Wrapper>
    );
}

export default Input;