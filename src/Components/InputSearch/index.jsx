import {  Formik } from "formik";
import {  useEffect, memo } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useGameData } from "../../Context/Index";
import { ButtonStyled, FormStyled, InputStyled } from "./InputS.style";

 const InputSearch = () => {
    const {setSearchParam} = useGameData()
    const iVSearch = {
      paramSearch: "",
    };
    const getParam = (values) => setSearchParam(values)
  
    return (
      <Formik initialValues={iVSearch} onSubmit={getParam}>
        {({values,handleSubmit}) => {
  
           return (
            <FormStyled>
              <InputStyled name="paramSearch" />
              <ButtonStyled type='submit' onClick={handleSubmit} >
                <BiSearchAlt />
              </ButtonStyled>
            </FormStyled>
          );
        }}
      </Formik>
    );
  } 
  
export default  memo(InputSearch)
