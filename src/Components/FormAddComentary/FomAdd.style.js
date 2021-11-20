import styled from "styled-components";

export const FormStyled = styled.form`
  width: 600px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-end;
`;
export const FormGroupStyled = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
`;
export const Error = styled.span`
  background: ${({ theme }) => theme.color.red};
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  color: #94101f;
`;
export const ButtonForm = styled.button`
  width: 150px;
  padding: 5px;
  border-radius: 5px;
  border: none;
  background: #4180c7;
  color: #fff;
  transition: 0.3s all ease;
  :hover {
    cursor: pointer;
    opacity: 0.76;
  }
`;
export const SpaceErrors = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;
