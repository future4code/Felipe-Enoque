import React from 'react';
// import './App.css';



class Etapa1 extends React.Component {


	  render() {

		return( 

		<div>
			    
		<h2>ETAPA 1 - DADOS GERAIS</h2>
			          
		<p>1. Qual o seu Nome?</p>
		<input />
			          
		<p>2. Qual o sua Idade?</p>
		<input />
			          
		<p>3. Qual o seu Email?</p>
		<input />
			          
		<p>4. Qual a sua Escolaridade?</p>
			                
       <select value="{this.state.seleEscola}">
		    
              <option value="">Ensino Médio Incompleto</option>
              <option value="">Ensino Médio Completo</option>
              <option value="">Ensino Superior Incompleto</option>
              <option value="">Ensino Superior Completo</option>
        </select>

		</div>
       		);
		}
}
export default Etapa1;