import React from 'react';
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { goToEntrar } from '../../Routers/Coordenadas';
import { Autentica } from '../../Hooks/autenticacaoPage';

const Conteudo = styled.div`
  text-align:center;
  font-size: 16px;
 
`
const Titulo = styled.p`
text-align: center;
`

function PostPage() {

  Autentica()

  let history = useHistory()

  return (
    <Conteudo>
      <Titulo>Post</Titulo>
      <button onClick={() => goToEntrar(history)}>Feed</button>
    </Conteudo>
  );
}

export default PostPage;