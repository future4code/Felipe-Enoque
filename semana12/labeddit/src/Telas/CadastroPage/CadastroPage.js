import React, { useState } from 'react';
import {Conteudo, Centro, Label, Campo, Bot, Botoes, Titulo} from './StyledCadastro'
import { useHistory } from 'react-router-dom'
import { goToEntrar, goToLogin } from '../../Routers/Coordenadas'

const CadastroPage = (props) => {

  const [form, setForm ] = useState({nome: "", email: "", senha: ""})

  const capturaCadastro = (evento) =>{

      const { name, value } = evento.target
      setForm({...form, [name]: value})
  }
  let history = useHistory()

  return (
    <Conteudo>
      <Centro>
        <Titulo>Pagina Cadastro</Titulo>

        <p>
          
            <div>
              <Label>Nome: </Label>
              <Campo
                name="nome"
                value={form.name}
                placeholder="Digite seu Nome"
                onChange={capturaCadastro}
                type="text"
              />
            </div>
        </p>

        <p>
          
            <div>
              <Label>Email: </Label>
              <Campo
                name="email"
                value={form.email}
                placeholder="Digite seu E-mail"
                onChange={capturaCadastro}
                type="email"
              />
            </div>
        </p>

        <p>
          
            <div>
              <Label>senha: </Label>
              <Campo
                name="senha"
                value={form.senha}
                placeholder="Digite a sua Senha"
                onChange={capturaCadastro}
                type="password"      
              />
            </div>
        </p>

        <Botoes>
          <Bot onClick={() => goToEntrar(history)}>Criar</Bot>
          <Bot onClick={() => goToLogin(history)}>login</Bot>
        </Botoes>
      </Centro>
    </Conteudo>
  );
}

export default CadastroPage;
