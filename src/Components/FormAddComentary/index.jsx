import { ErrorMessage, Field, Formik } from "formik";
import { Input,TextArea } from "../Input";
import * as Yup from "yup";
import { ButtonForm, FormGroupStyled, FormStyled, SpaceErrors,Error } from "./FomAdd.style";
import { setCommentary } from "../../Pages/DetailsGame/funtions";

const iVComentary = {
    name: "",
    email: "",
    comentario: "",
    points: 0,
  };
  

export const FormAddComentary = ({id,setList})=>{

    const validation = Yup.object().shape({
        name: Yup.string().required("Nome é requerido"),
        email: Yup.string()
          .email("Digite um email valido")
          .required("Email é requerido"),
        comentario: Yup.string().required("Comentario é requerido"),
      });
    

    return(
        <>
        
    <Formik
        initialValues={iVComentary}
        onSubmit={(values) =>
          setCommentary(values, id, setList)
        }
        validationSchema={validation}
      >
        {({ handleSubmit, resetForm,errors }) => {
          return (
            <FormStyled>
              <FormGroupStyled>
                <Input name="name" placeholder="Nome" />
                <Input name="email" placeholder="Email" />
              </FormGroupStyled>
              <SpaceErrors>
                <ErrorMessage component={Error}  name="name" />
                <ErrorMessage component={Error} name="email" /> 
              </SpaceErrors>
              <Field
                name="comentario"
                placeholder="Comentario"
                component={TextArea}
              />
              <ErrorMessage component={Error}  name="comentario" />

              <ButtonForm
                type="button"
                onClick={() => {
                  console.log(errors);
                  handleSubmit();
                  if(!('name' in errors || 'email' in errors || 'comentario' in errors )){
                    setTimeout(()=> resetForm(),100)
                  }
                }}
              >
                Enviar
              </ButtonForm>
            </FormStyled>
          );
        }}
      </Formik>
      </>)
}
