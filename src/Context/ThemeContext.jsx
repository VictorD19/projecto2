import { createContext, useContext, useState } from "react"
import { ThemeProvider } from "styled-components"
import {DarkTheme,LightTheme } from '../style'

const AppThemeContext = createContext()

export const AppThemeProvider = ({children})=>{
    const [darkTheme, setDarkTheme] = useState(JSON.parse(localStorage.getItem('darkTheme')) ||false)
    const switchTheme = ()=>{
        setDarkTheme(value =>  !value)
        localStorage.setItem('darkTheme',JSON.stringify(darkTheme))
    }
    return (
        <AppThemeContext.Provider value={{darkTheme, switchTheme}}>
            <ThemeProvider theme={darkTheme ? DarkTheme : LightTheme}>
                {children}
            </ThemeProvider>

        </AppThemeContext.Provider>
    )

}
export const useTheme = ()=>{
    const {darkTheme, switchTheme} = useContext(AppThemeContext)
    return {darkTheme, switchTheme} 
}