
import { ContainerFeatured, LinkStyled, RowListContainer, RowListHeader } from "./RowList.style"


export const RowList = ({title,children,to,direction})=>{
  
    return (
        <RowListContainer >
            <RowListHeader>
            <h1>{title}</h1>
             <LinkStyled to={`/${to}`} >Ver mas...</LinkStyled>
            </RowListHeader>
            <ContainerFeatured direction={direction} >
            {children}
            </ContainerFeatured>
        </RowListContainer>
        )
}