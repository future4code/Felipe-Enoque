import React from 'react';
import styled from 'styled-components'



const Conteudo = styled.div`
  text-align:center;
  font-size: 16px;
 
`
const Titulo = styled.p`
text-align: center;
`

function FeedPage() {
  return (
    <Conteudo>
      <Titulo>Feed</Titulo>
    </Conteudo>
  );
}

export default FeedPage;
