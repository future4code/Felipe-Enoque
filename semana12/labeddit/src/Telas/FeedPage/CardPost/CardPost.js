import React from 'react'
import { Card, CardBot, CardNameU, Coment, Deslike, Like, Post, ReacBot, Numeros } from './StyledCardPost'
import iconLike from '../../../Arquivos/iconLike.png'
import iconDeslike from '../../../Arquivos/iconDeslike.png'
import { goToPost } from '../../../Routers/Coordenadas'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

export const CardPost = (props) => {

    let history = useHistory()
    console.log(props);
   return(
        <Card onClick={()=> goToPost(history, props.Key)}>
            <CardNameU>{props.CardNameU}</CardNameU>
            <Post>{props.Post}</Post>
            <CardBot>
                <ReacBot>
                    <Like alt={"Like"} src={iconLike} onClick={()=> console.log("kkklikekkk")}/>
                    <Numeros>{props.Numeros}</Numeros>
                    <Deslike alt={"Deslike"} src={iconDeslike} onClick={()=> console.log("kkkdeslikekkk")}/>
                </ReacBot>
                <Coment>Comentários: {props.Coment}</Coment>
            </CardBot>
        </Card>
        )
}