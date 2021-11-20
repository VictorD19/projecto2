
import { LinkStyled, RowListContainer, RowListHeader } from "./RowList.style"


export const RowList = ({title,children,to})=>{
  
    return (
        <RowListContainer >
            <RowListHeader>
            <h1>{title}</h1>
             <LinkStyled to={`/${to}`} >Ver mas...</LinkStyled>
            </RowListHeader>
            <div style={{display:'flex',gap:'5px'}}>
            {children}
            </div>
        </RowListContainer>
        )
}