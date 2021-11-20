import NotResult from '../../Assets/not_result.svg'
import { NotResulContent } from './Not_result.style'
export const Not_Results = ()=>{

    return(
        <NotResulContent>
        <img src={NotResult} alt="" />
        <h1>Sem Resultados!.</h1>
        </NotResulContent>
    )

}