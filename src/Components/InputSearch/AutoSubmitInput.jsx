import { useFormikContext } from "formik"
import { useEffect } from "react"
import { useGameData } from "../../Context/Index"

export const AutoSubmitInput = ()=>{
    const {values,submitForm} = useFormikContext()
    const {setSearchParam } = useGameData()
        useEffect(() => {
        setSearchParam(values)
        submitForm()
     
    },[values,submitForm,setSearchParam])
    return <></>
}