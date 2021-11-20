import { Footer } from "../Components/Footer"
import { Navbar } from "../Components/Navbar"

export const TemplatePage = ({children})=>{

return(
    <>
        <Navbar/>
        <main>
        {children}
        </main>
        <Footer/>
    </>
)
}