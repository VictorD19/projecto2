import styled from "styled-components";

export const ButtonOutlineStyled = styled.button`
padding: 10px;
text-transform: uppercase;
letter-spacing: 0.5px;
border: 1px solid ${({ theme})=> theme.color.blue_light};
border-radius: 5px;
background: transparent;
color:  ${({ theme})=> theme.color.blue_light};
transition: 0.3s all ease;
:hover{
background:${({ theme})=> theme.color.blue_light};
color:  ${({ theme })=> theme.color.white};
cursor: pointer;

}
`