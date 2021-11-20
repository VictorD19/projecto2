import styled from "styled-components";

export const RequerimentSystemStyled = styled.div`
  margin: 20px 0;
  padding: 10px;
  color: ${({ theme })=> theme.color.black};
  background: ${({ theme})=> theme.color.primary};
  border-radius: 5px;
  h3 {
    font-weight: 500;
    margin-bottom: 10px;
  }
`;
export const ListRequeriment = styled.ul`
  li {
    display: flex;
    margin-bottom: 5px;
    b {
      width: 190px;
    }
  }
`;