import { Background, RowItenContainer } from "./RowItem.style"
import {useNavigate} from 'react-router-dom'
import { useCallback } from "react"
export const RowItem = ({title,img,id})=>{

    const navigate = useNavigate()
    const toGame = useCallback(()=>{navigate(`game/${id}`)},[id,navigate])

    return (
        <RowItenContainer onClick={toGame }>
            <img src={img} alt={title} />
            <Background>
            <h2>{title}</h2>
            </Background>
        </RowItenContainer>
    )
}