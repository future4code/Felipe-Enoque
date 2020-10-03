import React, { useEffect, useState }  from 'react';
import axios from 'axios';
// import { useHistory } from 'react-router-dom'
// import { goToEntrar } from '../../Routers/Coordenadas';
import { Autentica } from '../../Hooks/autenticacaoPage';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { CardPostDet } from './CardPostDet';
import { ConteudoPost } from './StyledPostDet';

const PostPage = () => {
  Autentica()

  // let history = useHistory()

  const {id} = useParams()

  const [dados, setDados] = useState([])
    useEffect(() =>{
      axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}`, {
        headers:{
                  Authorization: localStorage.getItem('token') 
                }
      }).then((Response) => {
        
        setDados(Response.data.post)

      }).catch((erro) =>{
         console.log(erro)
          alert("Erro pfvr tente novamente")
        })
        
    }, [])
  console.log({dados});

  return (
    <ConteudoPost>
      <CardPostDet 
        Titulo={dados.title}
        Post={dados.text}
        Numeros={dados.userVoteDirection + dados.votesCount}
        NumComent={dados.commentsCount}
      />
      {dados && dados.comments.map((comment) => {
          return (
          <><div>{comment.username}</div>
          <div>{comment.text}</div> </>
        )})}
    </ConteudoPost>
  );
}
export default PostPage;