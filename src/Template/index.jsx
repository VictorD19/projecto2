import { Navbar } from "../Components/Navbar"

export const TemplatePage = ({children})=>{

return(
    <main>
        <Navbar/>
        {children}

    </main>
)
}