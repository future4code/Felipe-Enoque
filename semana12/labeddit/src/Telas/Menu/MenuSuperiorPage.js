import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { goToEntrar, goToLogin } from '../../Routers/Coordenadas';
import { Menu, Ol, Li, A } from './StyledMenu'

const MenuSuperiorPage = () =>{

    let history = useHistory()

   return(
        <Menu>
            <Ol>
                <Li><A onClick={() => goToEntrar(history)}>Labbedin</A></Li>
                <Li><A onClick={() => goToLogin(history)}>Sair</A></Li>
            </Ol>
        </Menu>
    )
}
export default MenuSuperiorPage;