import { ContainerStyled } from "./Container.style"


export const Container = ({ children})=>{
    return <ContainerStyled>
        {children}
    </ContainerStyled>
}