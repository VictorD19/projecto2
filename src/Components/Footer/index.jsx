import {ImLinkedin,ImGithub} from 'react-icons/im'
import { FooterStyled } from './Footer.style'
export const Footer = ()=>{
    return (
        <FooterStyled>
            <div>
            <a  target="_blank" href='https://www.linkedin.com/in/victord08/' ><ImLinkedin/></a>
            <a  target="_blank" href='https://github.com/VictorD19/projecto2' ><ImGithub/></a>
            </div>
            <h2>Desenvolvido por VictorD</h2>
        </FooterStyled>
    )
}