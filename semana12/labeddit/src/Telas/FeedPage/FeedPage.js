import React, { useEffect, useState } from 'react';
import { Conteudo } from './StyledFeed'
// import { useHistory } from 'react-router-dom'
import { Autentica } from '../../Hooks/autenticacaoPage';
import { CardPost } from './CardPost/CardPost';
import axios from 'axios';

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
                  key={item.id}
                  onClick={()=> null}
                  CardNameU={item.title} 
                  Post={item.text}
                  Like={item.userVoteDirection}
                  Deslike={item.votesCount}
                  Coment={item.commentsCount}
                />
              );
        })
      );
    }

    return(

      <Conteudo>
        
        {MostraPa()}

      </Conteudo>


    );



  
}

export default FeedPage;