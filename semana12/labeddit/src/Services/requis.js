import axios from 'axios'
import { goToEntrar } from '../Routers/Coordenadas'

export const Login = (body, history, setBotaoSair) => {
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login`,body)
    .then((Response)=> {localStorage.setItem('token',Response.data.token)
    goToEntrar(history)
    setBotaoSair('Sair')
    })
    .catch((error) => {
        console.log(error)
        alert("Erro tente logar novamente")
    })

}

export const Cadastro = (body, history, setBotaoSair) => {
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup`,body)
    .then((Response)=> {localStorage.setItem('token',Response.data.token)
    goToEntrar(history)
    setBotaoSair('Sair')
    })
    .catch((error) => {
        console.log(error)
        alert("Erro tente cadastrar novamente")
    })

}
