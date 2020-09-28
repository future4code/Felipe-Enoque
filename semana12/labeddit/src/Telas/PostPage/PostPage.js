import React from 'react';
import styled from 'styled-components'



const Conteudo = styled.div`
  text-align:center;
  font-size: 16px;
 
`
const Titulo = styled.p`
text-align: center;
`

function PostPage() {
  return (
    <Conteudo>
      <Titulo>Post</Titulo>
    </Conteudo>
  );
}

export default PostPage;