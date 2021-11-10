import {  Formik } from "formik";
import { BiSearchAlt } from "react-icons/bi";
import { ButtonStyled, FormStyled, InputStyled } from "./InputS.style";

export const InputSearch = () => {
  const iVSearch = {
    paramSearch: "",
  };

  return (
    <Formik initialValues={iVSearch}>
      {() => {
        return (
          <FormStyled>
            <InputStyled name="paramSearch" />
            <ButtonStyled>
              <BiSearchAlt />
            </ButtonStyled>
          </FormStyled>
        );
      }}
    </Formik>
  );
};
