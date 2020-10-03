import React, { useEffect, useState }  from 'react';
import iconLike from '../../Arquivos/iconLike.png'
import iconDeslike from '../../Arquivos/iconDeslike.png'
import { Card, CardBot, CardNameU, Coment, Deslike, Like, Numeros, Post, ReacBot} from './StyledPostDet';

 
 export const CardPostDet = (props) =>{
        
    return(
                    <Card>
                        <CardNameU>{props.Titulo}</CardNameU>
                        <Post>{props.Post}</Post>
                        <CardBot>
                            <ReacBot>
                                <Like alt={"Like"} src={iconLike}/>
                                <Numeros>{props.Numeros}</Numeros>
                                <Deslike alt={"Deslike"} src={iconDeslike}/>
                            </ReacBot>
                            <Coment>Comentários: {props.NumComent}</Coment>
                        </CardBot>
                    </Card>
                    
        );

}