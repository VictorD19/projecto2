import styled from "styled-components";

export const NotFoundPageContainer = styled.section`
width: 100%;
height: 68vh;
display: flex;
flex-direction: column;
align-items:center;
img{
    width: 500px;
}
h1{
    font-size:30px;
    color:${({ theme})=> theme.color.text};
}
`