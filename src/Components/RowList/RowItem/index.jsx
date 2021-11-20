import { Background, RowItenContainer } from "./RowItem.style"

export const RowItem = ({title,img})=>{


    return (
        <RowItenContainer>
            <img src={img} alt={title} />
            <Background>
            <h2>{title}</h2>
            </Background>
        </RowItenContainer>
    )
}