import { Link } from "react-router-dom"
import { IoGameController} from 'react-icons/io5'
import { ImNewspaper} from 'react-icons/im'
import {HiHome} from 'react-icons/hi'


import { HeaderStyled, NavItemStyled, NavListStyled } from "./Navbar.style"
import { SwithTheme } from "../SwichTheme"

export const Navbar = ()=>{

    return (
        <HeaderStyled>
        <Link to='/'>DEVinMMO.</Link>
        <nav>
            <NavListStyled>
                <NavItemStyled>
                    <Link to='/'><HiHome/> Inicio</Link>
                </NavItemStyled>
                <NavItemStyled>
                    <Link to='/games'><IoGameController/> Jogos</Link>
                </NavItemStyled>
                <NavItemStyled>
                    <Link to='/news'><ImNewspaper/> Noticias</Link>
                </NavItemStyled>
                <SwithTheme/>
                
               
            </NavListStyled>
        </nav>
        </HeaderStyled>

    )

}