import { Link } from "react-router-dom"
import { IoGameController} from 'react-icons/io5'
import { ImNewspaper} from 'react-icons/im'


import { HeaderStyled, NavItemStyled, NavListStyled } from "./Navbar.style"

export const Navbar = ()=>{

    return (
        <HeaderStyled>
        <Link to='/'>DEVinMMO.</Link>
        <nav>
            <NavListStyled>
                <NavItemStyled>
                    <Link to='/'><IoGameController/> Jogos</Link>
                </NavItemStyled>
                <NavItemStyled>
                    <Link to='/news'><ImNewspaper/> Noticias</Link>
                </NavItemStyled>
               
            </NavListStyled>
        </nav>
        </HeaderStyled>

    )

}