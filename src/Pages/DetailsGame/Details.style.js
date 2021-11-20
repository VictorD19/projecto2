import styled from "styled-components";

export const LoadingStyled = styled.img`
  height: 150px;
  width: 150px;
`;
export const LoadingContainerStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 400px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 20px;
    margin: 0;
  }
`;
export const DivStyled = styled.div`
  display: flex;
  gap: 45px;
`;
export const DescripionStyled = styled.div`
  h3 {
    margin: 10px 0;
  }
`;
export const RequerimentSystemStyled = styled.div`
  margin: 20px 0;
  border: 1px solid #141414;
  padding: 10px;
  background: ${({ theme})=> theme.color.blue_light};
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

export const SubTitle = styled.h3`
  margin: 10px 0;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 25px;
`;

