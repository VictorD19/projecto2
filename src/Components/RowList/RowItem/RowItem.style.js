import styled from "styled-components";

export const RowItenContainer = styled.article`

width: 266px;
height: 150px;
transform: scale(0.95);
transition: 0.3s all ease-in;
position: relative;
border-radius: 5px;

h2{

    padding: 0 0 5px 5px ;
    border-radius: inherit;
    color:  ${({ theme})=> theme.color.white};
    font-size:19px;
    
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

}

img{
    width: inherit;
    height: inherit;
border-radius: 5px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

}
:hover{
transform: scale(1);
cursor: pointer;

}
`
export const Background = styled.span`
    position: absolute;
display: flex;
    align-items: flex-end;
    background: linear-gradient(to top, ${({ theme})=> theme.color.black} 1%, transparent 98%);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
border-radius: 5px;

`
