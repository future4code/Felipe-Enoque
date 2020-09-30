import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { goToEntrar, goToLogin } from '../../Routers/Coordenadas';
import { Menu, Boto } from './StyledMenu'

const MenuSuperiorPage = () =>{

    let history = useHistory()

   return(
        <Menu>
            <Boto onClick={() => goToEntrar(history)}>Labbedin</Boto>
            <Boto onClick={() => goToLogin(history)}>Sair</Boto>
        </Menu>
    )
}
export default MenuSuperiorPage;