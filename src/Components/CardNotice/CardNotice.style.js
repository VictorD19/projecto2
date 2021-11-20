import styled from "styled-components";

export const CardNoticeStyled = styled.article`
display: flex;
height: 210px;
gap: 30px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
background: ${({ theme})=> theme.color.white};
color:  ${({ theme })=> theme.color.black};
img{
    width: 356px;
    height: 100%;
}

`
export const DescriptionCard = styled.div`
padding: 12px 0 ;
display: flex;
flex-direction: column;
  h1{
      margin-bottom: 10px;
      margin-right: 10px;
  }
  p{
      margin: 15px 0;
  }
`
export const LinkStyled = styled.a`
text-decoration: none;
border: 1px solid ${({ theme})=> theme.color.blue_light};
padding: 8px 7px;
border-radius: 5px;
color:  ${({ theme })=> theme.color.blue_light};
transition: 0.3s all ease;
width: 160px;
:hover{
    background: ${({ theme })=> theme.color.blue_light} ;
    color :  ${({ theme })=> theme.color.white};
}

`