import React, { useState } from 'react';
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'



const Conteudo = styled.div`
  text-align:center;
  font-size: 16px;
 
`
const Titulo = styled.p`
    align-items: center;
    justify-content: center;
    vertical-align: middle;
`


////Login////////
const LoginPage = (props) => {
  
    const [form, setForm ] = useState({email: "", senha: ""})

    const capturaDados = (evento) =>{

        const { name, value } = evento.target
        setForm({...form, [name]: value})


    }

  




    let history = useHistory()

    function entrar(){
    history.push("/Feed")
    }
    function cadastrar(){
      history.push("/cadastro")
    }

  return (
    <Conteudo>
      <Titulo>Login</Titulo>

      <p><input
        name="email"
        value={form.email}
        onChange={capturaDados}
        type="email"
      /></p>
      
      <p><input
        name="senha"
        value={form.senha}
        onChange={capturaDados}
        type="password"      
      /></p>


      <button onClick={entrar}>Entrar</button>
      <button onClick={cadastrar}>Cadatrar</button>
    </Conteudo>
  );
}

export default LoginPage;
