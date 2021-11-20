import styled from "styled-components";
import * as Ai from 'react-icons/ai' 


export const ComentaryStyled = styled.article`
width: 100%;
display: flex;
min-height: 50px;
`
export const DetailsStyled = styled.div`
width: 500px;
`
export const LikeButtom = styled(Ai.AiOutlineLike)`
color: green;
font-size: 20px;
:hover{
    cursor: pointer;
    transform: scale(1.1);
}
`
export const DisLikeButtom = styled(Ai.AiOutlineDislike)`
color: red;
font-size: 20px;
:hover{
    cursor: pointer;
    transform: scale(1.1);
}


`

export const PointsStyled = styled.div`
color: ${({value})=> value === 0 ? '#000000' :  value > 0 ? 'green' : 'red'};
width: 150px;
display: flex;
align-items: center;
gap: 5px;
`
