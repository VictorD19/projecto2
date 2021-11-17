import { Formik } from "formik";
import { memo } from "react";
import { useGameData } from "../../Context/Index";
import { FormStyled, InputStyled } from "./InputS.style";
import { AutoSubmitInput } from "./AutoSubmitInput";

const InputSearch = ({ page }) => {
  const { setSearchParam } = useGameData();
  const iVSearch = {
    paramSearch: "",
  };
  const getParam = (values) => setSearchParam(values);

  return (
    <Formik initialValues={iVSearch} onSubmit={getParam}>
      {() => {
        return (
          <FormStyled>
            <InputStyled
              name="paramSearch"
              placeholder={
                page === "games"
                  ? "Buscar jogo pelo titulo"
                  : "Buscar noticia pelo titulo"
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
