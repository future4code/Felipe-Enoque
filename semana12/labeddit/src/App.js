import React, { useState } from 'react';
import styled from 'styled-components'
import Routers from './Routers/Routers';
import { BrowserRouter } from 'react-router-dom'
import MenuSuperiorPage from './Telas/Menu/MenuSuperiorPage';

const Body = styled.body`
  background: #eeeeee;
`

function App() {

  const token = localStorage.getItem('token')
  const [botaoSair, setBotaoSair] = useState(token ? 'Sair':'Entrar')

  return (
    <Body>
      <BrowserRouter>
           
           <MenuSuperiorPage botaoSair={botaoSair} setBotaoSair={setBotaoSair} />

            <Routers setBotaoSair={setBotaoSair}/>
            
      </BrowserRouter>
    </Body>
  );
}

export default App;
