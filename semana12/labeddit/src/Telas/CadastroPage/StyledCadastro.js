import styled from 'styled-components'

export const Conteudo = styled.div`
    margin: 0;
    padding: 0;
    background: #eeeeee;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
 
`
export const Centro = styled.div`
    flex-direction: column;
    background: white;
    min-width: 350px;
    min-height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;

`

export const Label = styled.label`
    margin-right: 10px;
    
`

export const Campo = styled.input`
    border-radius: 50px;
    border: none;
    background: #f3f1f1;
    margin: 10px 0;
    padding: 0 15px;
    outline: none;

    min-width: 15vw;
    min-height: 7vh;
    
`

export const Titulo = styled.p`
    font-size: 30px;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`

export const Botoes = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;

`
export const Bot = styled.button`

    margin: 10px 10px 10px 10px;    
    width: 100px;
    height: 40px;
    border: none;
    border-radius: 50px;    
    justify-content: center;
    align-items: center;
    color: white;
    background: #e44949;
    :hover{box-shadow: inset 6px 6px 12px #C94040,inset -6px -6px 12px #FF5252;}
    outline: none;
`