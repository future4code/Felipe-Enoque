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

function PostPage() {

  let history = useHistory()

  function voltafeed(){
  history.push("/Feed")
  }


  return (
    <Conteudo>
      <Titulo>Post</Titulo>
      <button onClick={voltafeed}>Feed</button>
    </Conteudo>
  );
}

export default PostPage;