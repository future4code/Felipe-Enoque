import styled from 'styled-components'

export const Card = styled.div` 
    flex-direction: column;
    background: white;
    width: 40vw;
    height: 30vh;
    display: flex;
    
    align-self:center;
    justify-content: space-between;
    
    border-radius: 20px;
    margin: 5px;
    padding: 10px;

`
export const CardNameU = styled.h2`
    margin:0%;
    /* margin-left:5px; */ 
    display: flex;
    /* flex-direction: column; */
    align-items:flex-start;
`
export const Post = styled.div`
    
`
export const CardBot = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    
    justify-content:space-between
    
`
export const ReacBot = styled.div`
    display: inline-flex;
    flex-direction: row;
    align-self:flex-start;
    text-align:center;
`
export const Like = styled.img`
    width: 2vw;
    height: 4vh;
    /* border-radius: 20px; */ 

    
`
export const Numeros = styled.p`
     width: 2vw;
     margin-top:0px;
     margin-bottom:0px;
     align-self:center;
    /* height: 5vh;  */
    
`
export const Deslike = styled.img`
    width: 2vw;
    height: 4vh;
`
export const Coment = styled.div`
    display: inline;
    flex-direction: row-reverse;
    align-self: flex-end;
    
`



    