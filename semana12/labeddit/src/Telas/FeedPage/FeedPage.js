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





function FeedPage() {

    let history = useHistory()

    function post(){
    history.push("/Post")
    }

    function sair(){
      history.push("/Login")
      }
    
  return (
    <Conteudo>
      <Titulo>Feed</Titulo>
      <button onClick={post}>Post</button>
      <button onClick={sair}>Sair</button>
    </Conteudo>
  );
}

export default FeedPage;
