import styled from "styled-components";

export const FooterStyled = styled.footer`
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
height: 100px;
position: relative;
    bottom: 0;
color:  ${({ theme })=> theme.color.white};
background: ${({ theme }) => theme.color.black};
a{
    color: inherit;
    text-decoration: none;
    font-size: 25px;
    margin: 0 5px;
    transition: 0.3s all ease;
    :hover{
        color: ${({ theme })=> theme.color.blue_light};
    }
}
`