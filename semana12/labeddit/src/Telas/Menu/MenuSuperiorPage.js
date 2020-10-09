import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { LimpaTo } from '../../Hooks/autenticacaoPage';
import { goToEntrar, goToLogin } from '../../Routers/Coordenadas';
import { Menu, Boto } from './StyledMenu'

const MenuSuperiorPage = (props) =>{

    const {botaoSair, setBotaoSair} = props

    let history = useHistory()

    const Sair = () =>{
        const token = localStorage.getItem("token")
            if(token){
                LimpaTo(history)
                setBotaoSair('Entra')
            }
        goToLogin(history)
    }

   return(
        <Menu>
            <Boto onClick={() => goToEntrar(history)}>Labbedin</Boto>
            <Boto onClick={Sair}>{botaoSair}</Boto>
        </Menu>
    )
}
export default MenuSuperiorPage;