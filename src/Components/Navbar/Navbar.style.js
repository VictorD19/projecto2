import styled from "styled-components";

export const HeaderStyled = styled.header`
background: #222831;
display: flex;
justify-content: space-between;
padding: 0 20px;
align-items: center;
height: 60px;
a{
    text-decoration: none;
    color:#ffffff;
    display: flex;
    align-items: center;
    gap: 5px;
}
`;
export const NavListStyled = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
`;
export const NavItemStyled = styled.li`
  padding: 8px 5px;
  position: relative;
  :after {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    left: 0px;
    bottom: 2px;
    background: ${({ theme})=>theme.color.primary};
    transition: 0.3s all ease-in;
  }
 Link{
   :hover{
     color: ${({ theme})=>theme.color.primary};

   }
   
 }
  :hover::after {
    width: 100%;
    
  }
`;
