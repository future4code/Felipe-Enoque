import React from 'react'
import { Card, CardBot, CardNameU, Coment, Deslike, Like, Post, ReacBot, Numeros } from './StyledCardPost'
import iconLike from '../../../Arquivos/iconLike.png'
import iconDeslike from '../../../Arquivos/iconDeslike.png'

export const CardPost = (props) => {

   return(
    <Card>
        <CardNameU>{props.CardNameU}</CardNameU>
        <Post>{props.Post}</Post>
        <CardBot>
            <ReacBot>
                {/* <Like >{props.Like}</Like> */}
                <Like alt={"Like"} src={iconLike} />
                <Numeros>{props.Numeros}</Numeros>
                {/* <Deslike>{props.Deslike}</Deslike> */}
                <Deslike alt={"Deslike"} src={iconDeslike}/>
            </ReacBot>
            {/* <div> */}
                
                <Coment>Comentários: {props.Coment}</Coment>
            {/* </div> */}
        </CardBot>
    </Card>
        )
}