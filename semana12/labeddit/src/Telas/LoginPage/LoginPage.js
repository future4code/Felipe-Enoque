import React, { useState } from 'react';
import {Conteudo, Centro, Label, Campo, Bot, Botoes, Titulo} from './StyledLogin'
import { useHistory } from 'react-router-dom'
import { goToEntrar, goToCadastrar } from '../../Routers/Coordenadas'

const LoginPage = (props) => {
  
    const [form, setForm ] = useState({email: "", senha: ""})

    const capturaDados = (evento) =>{

        const { name, value } = evento.target
        setForm({...form, [name]: value})
    }

    let history = useHistory()
  return (    
        <Conteudo>
          <Centro>
            <Titulo>Login</Titulo>
              <p>
                
                  <div>
                    <Label>Email: </Label>
                    <Campo
                      name="email"
                      value={form.email}
                      placeholder="Digite seu E-mail"
                      onChange={capturaDados}
                      type="email"
                    />
                  </div>
              </p>

              <p>
                
                  <div>
                    <Label>Senha: </Label>
                    <Campo
                      name="senha"
                      value={form.senha}
                      placeholder="Digite a sua Senha"
                      onChange={capturaDados}
                      type="password"      
                    />
                  </div>
                <Botoes>
                  <Bot onClick={() => goToEntrar(history)}>Entrar</Bot>
                  <Bot onClick={() => goToCadastrar(history)}>Cadastrar</Bot>
                </Botoes>          
              </p>
          </Centro>

        </Conteudo>
      );
}

export default LoginPage;
