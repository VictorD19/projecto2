import styled from "styled-components";
import * as Ai from 'react-icons/ai' 


export const ComentaryStyled = styled.article`
display: flex;
min-height: 50px;
background: #FFFFFF;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
border-radius: 10px;
padding: 5px 10px;
`
export const DetailsStyled = styled.div`
width: 100%;
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
display: flex;
align-items: center;
gap: 5px;
`

export const ContainerCommentarys = styled.section`
width: 600px;
display: flex;
flex-direction: column;
gap: 8px;
`