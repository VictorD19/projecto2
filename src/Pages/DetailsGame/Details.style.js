import styled from "styled-components";

export const LoadingStyled = styled.img`
height: 150px;
width: 150px;
`
export const LoadingContainerStyled = styled.div`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
margin: auto;
width: 400px;
height: 250px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
h1{
    font-size: 20px;
    margin: 0;
}
`
export const DivStyled = styled.div`
display: flex;
gap: 45px;
`
export const DescripionStyled = styled.div`
h3{
    margin: 10px 0;
}
`
export const RequerimentSystemStyled = styled.div`
margin: 20px 0;
border: 1px solid #141414;
padding: 10px;
background: #b8b8b8;
border-radius: 5px;
h3{ 
    font-weight: 500;
    margin-bottom: 10px;
}
`
export const ListRequeriment = styled.ul`
li{
    display: flex;
    margin-bottom: 5px;
    b{
        width: 190px;
    }
}
`
export const FormGroupStyled = styled.div`
display: flex;
gap: 15px;
width: 100%;
`
export const FormStyled = styled.form`
width: 600px;
display: flex;
flex-direction: column;
gap: 10px;
align-items: flex-end;

`
export const SubTitle = styled.h3`
margin: 10px 0;
`
export const ButtonForm = styled.button`
width: 150px;
padding:5px;
border-radius: 5px;
border:none;
background: #4180c7;
color:#fff;
transition: .3s all ease;
:hover{
    cursor: pointer;
    opacity: 0.76;
}
`
export const SpaceErrors = styled.div`
width: 100%;
display: flex;
gap:10px;
`
export const Error = styled.span`
background: ${({theme})=>theme.color.red};
width: 100%;
padding: 5px;
border-radius:5px;
color:#94101F;
`
export const Title = styled.h1`
font-weight: bold;
font-size: 25px;
`