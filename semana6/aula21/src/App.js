import React from 'react';
// import './App.css';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Fimpro from './components/Fimpro';
// import styled from "styled-components"
 
class App extends React.Component {

  state = {

    etapa: 1
  };

  proximo = () => {
    this.setState({ etapa: this.state.etapa + 1 });
  };

    EtapaM = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      default:
        return <Fimpro />;
    }
  };
render() {

    return(

      <div>
      <div>{this.EtapaM()}</div>

      
      <p><button onClick={this.proximo()}>Próxima Etapa</button></p>
   
      </div>

      );

  }
 

}

export default App;
