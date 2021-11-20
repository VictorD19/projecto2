import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardStyled =styled.article`
width: 258px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
transform: scale(0.98);
transition: 0.3s all ease-out;
img{
    width: 100%;
}
:hover{
    transform: scale(1);
    cursor:pointer;
}
`
export const LinkStyled = styled(Link)`
padding: 10px;
text-transform: uppercase;
letter-spacing: 0.5px;
border: 1px solid ${({ theme})=> theme.color.blue_light};
border-radius: 5px;
background: transparent;
color:  ${({ theme})=> theme.color.blue_light};
transition: 0.3s all ease;
text-decoration: none;
:hover{
background:${({ theme})=> theme.color.blue_light};
color:  ${({ theme })=> theme.color.white};
cursor: pointer;}
`

export const DecriptionContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 5px 10px 15px;
`
export const HeaderDescriptionStyled = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
margin: 6px 0 ;
font-size: 14px;
h3{
    text-transform: uppercase;
}
span{
    border: 1px solid ${({ theme})=>theme.color.blue};
    padding: 5px;
    border-radius: 20px;
    color: ${({ theme})=>theme.color.blue};
    font-size: 10px;
}

`
export const TextDescription = styled.p`
font-size: 14.5px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
   display: -webkit-box;
   line-height: 16px;     /* fallback */
   -webkit-line-clamp: 5; /* number of lines to show */
   margin-bottom: 10px;
`