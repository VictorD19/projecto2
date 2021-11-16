import styled from "styled-components";

export const ComentaryStyled = styled.article`
width: 100%;
display: flex;
min-height: 50px;
`
export const DetailsStyled = styled.div`
width: 500px;
`
export const ButtonPlus = styled.button`
    width: 40px;
    height: 20px;
    border-radius: 1px 50%;
    border: none;
    font-size: 20px;
    background: #c8c8c8;
    cursor: pointer;
    transition: .3s all ease;
    color: #fff;
    :hover{
    background: #787878;

    }
`
export const PointsStyled = styled.div`
color: ${({value})=> value === 0 ? '#000000' :  value > 0 ? 'green' : 'red'};
width: 150px;
display: flex;
align-items: center;
gap: 5px;
`
