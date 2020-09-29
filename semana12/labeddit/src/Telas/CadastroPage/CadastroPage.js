import React from 'react';
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'



const Conteudo = styled.div`
  text-align:center;
  font-size: 16px;
 
`
const Titulo = styled.p`
text-align: center;
`

function CadastroPage() {

  let history = useHistory()

  function cadastrar(){
  history.push("/Feed")
  }
  function returnlog(){
    history.push("/Login")
  }

  return (
    <Conteudo>
      <Titulo>Pagina Cadastro</Titulo>
      <button onClick={cadastrar}>Criar</button>
      <button onClick={returnlog}>login</button>
    </Conteudo>
  );
}

export default CadastroPage;
