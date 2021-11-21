import styled from "styled-components";


export const MainContainerSlider = styled.div `
position: relative;
width: 100%;
overflow: hidden;
margin:10px auto;
`
export const ArrowNext = styled.button`
position: absolute;
top: 0;
bottom: 0;
right: 0;
width: 40px;
border: none;
background: rgba(0,0,0,0.1);
font-size: 26px;
color: ${({ theme })=> theme.color.white};
 opacity: 0;
transition: .3s all ease;
cursor: pointer;
`
export const ArrowBack = styled(ArrowNext)`
left:0;
`

export const ContainerImgStyles = styled.div`
height: 430px;
display: flex;
transition: .3s all ease;
position: relative;
:hover{
    ${ArrowNext}{
 opacity: 1;
    
}
}


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
