import React from 'react'
import { Card, CardBot, CardNameU, Coment, Deslike, Like, Post, ReacBot } from './StyledCardPost'

export const CardPost = (props) => {

   return(
    <Card>
        <CardNameU>{props.CardNameU}</CardNameU>
        <Post>{props.Post}</Post>
        <CardBot>
            <ReacBot>
                <Like>{props.Like}</Like>
                <Deslike>{props.Deslike}</Deslike>
            </ReacBot>
        
            <Coment>{props.Coment}</Coment>
        </CardBot>
    </Card>
        )
}