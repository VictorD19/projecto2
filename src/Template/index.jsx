import { Navbar } from "../Components/Navbar"

export const TemplatePage = ({children})=>{

return(
    <>
        <Navbar/>
        <main>
        {children}
        </main>

    </>
)
}