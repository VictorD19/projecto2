import { useFormikContext } from "formik"
import { useEffect } from "react"
import { useGameData } from "../../Context/Index"

export const AutoSubmitInput = ()=>{
    const {values,submitForm} = useFormikContext()
    const {dispatch } = useGameData()
        useEffect(() => {
            dispatch({method:'GetParamSearch',value: values})
        submitForm()
     
    },[values,submitForm,dispatch])
    return <></>
}