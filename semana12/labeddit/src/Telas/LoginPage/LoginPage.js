import React, { useState } from 'react';
import {Conteudo, Centro, Label, Campo, Bot, Botoes, Loim, Cria} from './StyledLogin'
import Logoim from "../../Arquivos/Logo.png"
import { useHistory } from 'react-router-dom'
import { goToEntrar, goToCadastrar } from '../../Routers/Coordenadas'
import { Login } from '../../Services/requis';
import { AutenticaLogin } from '../../Hooks/autenticacaoPage';

const LoginPage = (props) => {
  
    AutenticaLogin()

    const [form, setForm ] = useState({email: "", password: ""})

    const capturaDados = (evento) =>{

        const { name, value } = evento.target
        setForm({...form, [name]: value})
    }

    const entrarConta = (event) => {
      event.preventDefault()
      const elemento = document.getElementById("login_key")
      const valido = elemento.checkValidity()
      elemento.reportValidity()
          if(valido){
            Login(form, history, props.setBotaoSair)
          }
    }

    let history = useHistory()
  return (    
        <Conteudo>
          <Centro>
            <Loim alt={"Logokk"} src={Logoim} />
             <form id="login_key"> 
               <p>
                  <Label>Email: </Label>
                  <Campo
                   name="email"
                   value={form.email}
                   placeholder="Digite seu E-mail"
                   onChange={capturaDados}
                   type="email"
                  />                  
              </p>
              <p>              
                  <Label>Senha: </Label>
                  <Campo
                   name="password"
                   value={form.password}
                   placeholder="Digite a sua Senha"
                   onChange={capturaDados}
                   type="password"      
                  />
              </p>
                <Botoes>
                  <Bot type={"submit"} onClick={entrarConta}>Entrar</Bot>
                </Botoes>
              </form>

              <Cria onClick={() => goToCadastrar(history)}>Criar conta</Cria>
          </Centro>

        </Conteudo>
      );
}
/*() => goToEntrar(history)*/
export default LoginPage;
