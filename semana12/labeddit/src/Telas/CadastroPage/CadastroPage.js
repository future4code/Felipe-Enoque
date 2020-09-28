import React from 'react';
import styled from 'styled-components'



const Conteudo = styled.div`
  text-align:center;
  font-size: 16px;
 
`
const Titulo = styled.p`
text-align: center;
`

function CadastroPage() {
  return (
    <Conteudo>
      <Titulo>Pagina Cadastro</Titulo>
    </Conteudo>
  );
}

export default CadastroPage;
