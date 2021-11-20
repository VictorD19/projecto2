import { Link } from "react-router-dom";
import styled from "styled-components";

export const FeaturedContainer = styled.section`
background-image: url('${(props)=> props.background}');
background-repeat: no-repeat;
background-size: 100%;
width: 100%;
height: 600px;
color: ${({ theme})=> theme.color.white};
border-radius: 10px;
`
export const TitleFeatured = styled.h1`
font-size: 45px;
font-weight: 900;
`
export const BackgroundDegrade = styled.div`
    border-radius: 10px;
    width: inherit  ;
    height: inherit;
    background: linear-gradient(to top, ${({ theme})=> theme.color.black} 6%, transparent 94%);
    display: flex;
    padding: 0 30px;
    justify-content:flex-end;
    flex-direction: column;
`
export const DescriptionFeatured = styled.div`
margin-bottom: 80px;
`
export const DetailsFeatured = styled.div`
border-radius: 10px;

display: flex;
gap: 15px;
text-align: center;
margin-bottom: 15px;
h3{
    position: relative;
    font-size: 20px;
    letter-spacing: 0.5px;
    :before{
        content: '';
        position: absolute;
        width: 70px;
        top: 22px;
        height: 2px;
        background: ${({ theme})=> theme.color.primary};
        left: 0;
        right: 0;
        margin: auto;
    }
    small{
        color: ${({ theme})=> theme.color.white}
    }
}
`

export const Description = styled.p`
font-size: 18px;
width: 60%;
font-weight: 500;
margin-bottom:20px ;
`
export const ToDetails = styled(Link)`

text-decoration: none;
background: ${({ theme})=> theme.color.primary};
color:  ${({ theme })=> theme.color.white};
padding: 10px;
margin: 10px 0;
border-radius: 5px;
transition: 0.3s all ease;
:hover{
    background: ${({ theme})=> theme.color.primary_light};
    color:  ${({ theme })=> theme.color.white};
}

`