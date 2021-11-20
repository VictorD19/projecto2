import { Link } from "react-router-dom";
import styled from "styled-components";

export const RowListHeader = styled.div`
    display : flex;
    justify-content: space-between;
    padding: 6px 0;

`
export const RowListContainer = styled.section`
padding: 10px 0;
`
export const LinkStyled = styled(Link)`
padding: 7px;
letter-spacing: 0.5px;
border-radius: 5px;
font-size: 15px;
background: ${({ theme})=> theme.color.primary};
transition: 0.3s all ease;
text-decoration: none;
color:  ${({ theme })=> theme.color.white};
:hover{
background:${({ theme})=> theme.color.primary_light};
cursor: pointer;
}
`