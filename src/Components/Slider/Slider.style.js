import styled from "styled-components";


export const MainContainerSlider = styled.div `
position: relative;
width: 100%;
overflow: hidden;
margin:10px auto;
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
export const ContainerImgPrevious = styled.div`
display:flex;
margin: 10px 0 ;
gap:10px;
`
export const ItemContainer = styled.div`
width: 150px;
img{
    width: 100%;
    :hover{
        cursor: pointer;
    }
}
`