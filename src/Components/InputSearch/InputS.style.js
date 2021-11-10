import { Field } from "formik";
import styled from "styled-components";

export const InputStyled = styled(Field)`
outline: none;
border: 0;
border: 1px solid ${({ theme})=> theme.color.gray};
border-radius: 6px 0 0 6px;
height: 35px;
padding: 3px;
width: 100%;

`
export const FormStyled = styled.form`
display: flex;
width: 100%;
`
export const ButtonStyled = styled.button`
background: ${({ theme })=> theme.color.blue};
color: ${({ theme })=> theme.color.white};
border-radius: 0 6px 6px 0;
border: none;
width: 60px;
font-size: 22px;
cursor: pointer;
`