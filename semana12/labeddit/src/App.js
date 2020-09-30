import React from 'react';
import Routers from './Routers/Routers';
import { BrowserRouter } from 'react-router-dom'
import MenuSuperiorPage from './Telas/Menu/MenuSuperiorPage';

function App() {
  return (
    <div>
      <BrowserRouter>
           
           <MenuSuperiorPage/>

            <Routers/>
            
      </BrowserRouter>
    </div>
  );
}

export default App;
