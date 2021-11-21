import { Formik } from "formik";
import { memo } from "react";
import { useGameData } from "../../Context/Index";
import { FormStyled, InputStyled } from "./InputS.style";
import { AutoSubmitInput } from "./AutoSubmitInput";

const InputSearch = ({ page }) => {
  const { dispatch } = useGameData();
  const iVSearch = {
    paramSearch: "",
  };
  const getParam = (values) =>  dispatch({method:'GetParamSearch',value: values});

  return (
    <Formik initialValues={iVSearch} onSubmit={getParam}>
      {() => {
        return (
          <FormStyled>
            <InputStyled
              name="paramSearch"
              placeholder={
                page === "games"
                  ? "Buscar jogo pelo titulo ou descripção"
                  : "Buscar noticia pelo titulo ou descripção"
              }
            />
            <AutoSubmitInput />
          </FormStyled>
        );
      }}
    </Formik>
  );
};

export default memo(InputSearch);
