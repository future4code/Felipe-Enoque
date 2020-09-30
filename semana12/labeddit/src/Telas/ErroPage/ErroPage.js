import React from 'react'
import styled from 'styled-components'
import Erroim from '../../Arquivos/404.gif'

const Conteudo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content:center;
`
const Back = styled.img`
    align-self:center;
    min-width: 70vw;
    min-height: 70vh;
`
const ErroPage = () => {

    return(
        <Conteudo>
            <Back alt={"Erro 404"} src={Erroim}></Back>
            <h1>Erro 404</h1>
        </Conteudo>
    )
}
export  default ErroPage