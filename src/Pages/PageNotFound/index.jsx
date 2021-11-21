import { Container } from "../../Components/Container"
import NotFoundPage from '../../Assets/not_found.svg'
import { NotFoundPageContainer } from "./PageNotFound.style"
export const PageNotFound = ()=>{
    return (
        <Container>
            <NotFoundPageContainer>
            <img src={NotFoundPage} alt="" />
            <h1>Pagina não encontrada</h1>
            </NotFoundPageContainer>
        </Container>
    )
}