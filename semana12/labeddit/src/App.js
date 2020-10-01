import React, { useState } from 'react';
import Routers from './Routers/Routers';
import { BrowserRouter } from 'react-router-dom'
import MenuSuperiorPage from './Telas/Menu/MenuSuperiorPage';

function App() {

  const token = localStorage.getItem('token')
  const [botaoSair, setBotaoSair] = useState(token ? 'Sair':'Entrar')

  return (
    <div>
      <BrowserRouter>
           
           <MenuSuperiorPage botaoSair={botaoSair} setBotaoSair={setBotaoSair} />

            <Routers setBotaoSair={setBotaoSair}/>
            
      </BrowserRouter>
    </div>
  );
}

export default App;
