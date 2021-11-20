import { Field } from "formik";
import styled from "styled-components";

export const InputStyled = styled(Field)`
outline: none;
border: 0;
border: 1px solid ${({ theme})=> theme.color.black_light};
border-radius:  6px;
height: 35px;
padding: 3px;
width: 100%;

color:  ${({ theme })=> theme.color.black};

`
export const FormStyled = styled.form`
display: flex;
width: 100%;
`
export const ButtonStyled = styled.button`
background: ${({ theme })=> theme.color.blue};
color: ${({ theme })=> theme.color.white};
border-radius:6px;
border: none;
width: 60px;
font-size: 22px;
cursor: pointer;
`