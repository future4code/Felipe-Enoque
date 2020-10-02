import React, { useState } from 'react';
import {Conteudo, Centro, Label, Campo, Bot, Botoes, Titulo} from './StyledCadastro'
import { useHistory } from 'react-router-dom'
import { goToLogin } from '../../Routers/Coordenadas'
import { Cadastro } from '../../Services/requis';
import { AutenticaLogin } from '../../Hooks/autenticacaoPage';

const CadastroPage = (props) => {

  AutenticaLogin()

  const [form, setForm ] = useState({email: "", password: "", username: ""})

  const capturaCadastro = (evento) =>{

      const { name, value } = evento.target
      setForm({...form, [name]: value})
  }
  let history = useHistory()

  const cadastroConta = (event) => {
    event.preventDefault()
    const elemento = document.getElementById("cad_new")
    const valido = elemento.checkValidity()
    elemento.reportValidity()
        if(valido){
          Cadastro(form, history, props.setBotaoSair)
        }
  }

  return (
    <Conteudo>
      <Centro>
        <Titulo>Cadastre-se</Titulo>
          <form id="cad_new">
            <p>
              <Label>Nome: </Label>
              <Campo
                name="username"
                value={form.username}
                placeholder="Digite seu Nome"
                onChange={capturaCadastro}
                type="text"
              />
            </p>
            <p>
              <Label>Email: </Label>
              <Campo
                name="email"
                value={form.email}
                placeholder="Digite seu E-mail"
                onChange={capturaCadastro}
                type="email"
              />
            </p>
            <p>
              <Label>senha: </Label>
              <Campo
                name="password"
                value={form.password}
                placeholder="Digite a sua Senha"
                onChange={capturaCadastro}
                type="password"      
              />
            </p>
          <Botoes>
            <Bot onClick={cadastroConta}>Criar</Bot>
            <Bot onClick={() => goToLogin(history)}>login</Bot>
          </Botoes>
          </form>
      </Centro>
    </Conteudo>
  );
}

export default CadastroPage;
