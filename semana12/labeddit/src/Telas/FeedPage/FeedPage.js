import React, { useEffect, useState } from 'react';
import { Conteudo, Loadin } from './StyledFeed'
// import { useHistory } from 'react-router-dom'
import { Autentica } from '../../Hooks/autenticacaoPage';
import { CardPost } from './CardPost/CardPost';
import axios from 'axios';
// import Loadin from '../Loadin/Loadin'
import Load from '../../Arquivos/loading.gif'
// import { goToPost } from '../../Routers/Coordenadas';

const FeedPage = (props) => {
    Autentica()

    const [postagens, setPostagens] = useState([])
 
    // let history = useHistory()

    useEffect(() =>{
      axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts
      `, {
        headers:{
                  Authorization: localStorage.getItem('token') 
                }
      }).then((Response) => {
        
        setPostagens(Response.data.posts)

      }).catch((erro) =>{
         console.log(erro)
          alert("Erro pfvr tente novamente")
        })
        
    }, [])
    const MostraPa = () => {
      return(
        postagens.map((item) => {
          return(
                  <CardPost
                    Key={item.id}                    
                    CardNameU={item.title} 
                    Post={item.text}
                    Numeros={item.userVoteDirection-item.votesCount}
                    Coment={item.commentsCount}
                  />
                );
        })
      );
    }
    return(
      <Conteudo>
        {postagens.length > 0 ? MostraPa() : <Loadin alt={"Load"} src={Load} />}
      </Conteudo>
    );
}
export default FeedPage;