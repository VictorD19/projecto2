import { InputStyled, TextAreaStyled } from "./Input.style"

export const Input = ({placeholder,name})=>{
    return (
        <InputStyled placeholder={placeholder} name={name}/>
    )
}
export const TextArea = ({placeholder,name,...props})=>{
    return (<TextAreaStyled as='textarea' name={name} placeholder={placeholder} {...props.field}/>)
}