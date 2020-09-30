import React from 'react';
import { Conteudo, Titulo } from './StyledFeed'
import { useHistory } from 'react-router-dom'
import { goToLogin , goToPost } from '../../Routers/Coordenadas';

function FeedPage() {

    let history = useHistory()

  return (
    <Conteudo>
          
        <Titulo>Feed</Titulo>

        <button onClick={() => goToPost(history)}>Post</button>
        <button onClick={() => goToLogin(history)}>Sair</button>
    </Conteudo>
  );
}

export default FeedPage;
