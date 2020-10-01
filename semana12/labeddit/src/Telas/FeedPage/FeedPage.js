import React, { useEffect, useLayoutEffect } from 'react';
import { Conteudo, Titulo } from './StyledFeed'
import { useHistory } from 'react-router-dom'
import { goToLogin , goToPost } from '../../Routers/Coordenadas';
import { Autentica } from '../../Hooks/autenticacaoPage';

function FeedPage() {

  Autentica()

    let history = useHistory()


    

  return (
    <Conteudo>
        <Titulo>Feed</Titulo>
        <button onClick={() => goToPost(history)}>Post</button>
        
    </Conteudo>
  );
}

export default FeedPage;
