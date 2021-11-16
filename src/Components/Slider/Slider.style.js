import styled from "styled-components";

export const Arrow = styled.div`
position: absolute;
width: 40px;
background: rgba(0,0,0,0.3);
z-index: 20;
top: 0;
bottom: 0;
color: #fff;
display: flex;
justify-content: center;
align-items: center;
opacity: 0;
cursor: pointer;
font-size: 22px;
transition: 0.3s all ease;
`

export const MainContainerSlider = styled.div `
position: relative;
width: 100%;
overflow: hidden;
margin:10px auto;
:hover{
    cursor: pointer;
    ${Arrow}{
        opacity:1;
    }
}
`

export const ArrowNext = styled(Arrow)`
right:0;
`

export const ContainerImgStyles = styled.div`
height: 430px;
display: flex;
transition: .3s all ease;
`
export const MainImgStyled = styled.img`
width: 100%;
transition:0.3s all ease;

`