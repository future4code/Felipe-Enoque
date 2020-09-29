import React, { useState } from 'react';
import {Conteudo, Centro, Label, Campo, Bot, Botoes, Titulo} from './StyledCadastro'
import { useHistory } from 'react-router-dom'



// const Conteudo = styled.div`
//     margin: 0;
//     padding: 0;
//     background: #eeeeee;
//     width: 100%;
//     height: 100vh;
//     display: flex;
//     justify-content: center;
//     align-items: center;
 
// `
// const Centro = styled.div`
//     flex-direction: column;
//     background: white;
//     min-width: 350px;
//     min-height: 400px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     border-radius: 50px;

// `

// const Label = styled.label`
//     margin-right: 10px;
    
// `

// const Campo = styled.input`
//     border-radius: 50px;
//     border: none;
//     background: #f3f1f1;
//     margin: 10px 0;
//     padding: 0 15px;
//     outline: none;

//     min-width: 15vw;
//     min-height: 7vh;
    
// `

// const Titulo = styled.p`
//     font-size: 30px;
//     align-items: center;
//     justify-content: center;
//     margin-bottom: 10px;
// `

// const Botoes = styled.div`
    
//     display: flex;
//     justify-content: center;
//     align-items: center;

// `
// const Bot = styled.button`

//     margin: 10px 10px 10px 10px;    
//     width: 100px;
//     height: 40px;
//     border: none;
//     border-radius: 50px;    
//     justify-content: center;
//     align-items: center;
//     color: white;
//     background: #ff414f;
//     :hover{background: #ff2735af;}
// `

const CadastroPage = (props) => {

  const [form, setForm ] = useState({nome: "", email: "", senha: ""})

  const capturaCadastro = (evento) =>{

      const { name, value } = evento.target
      setForm({...form, [name]: value})


  }




  let history = useHistory()

  function cadastrar(){
  history.push("/Feed")
  }
  function returnlog(){
    history.push("/Login")
  }

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
          <Bot onClick={cadastrar}>Criar</Bot>
          <Bot onClick={returnlog}>login</Bot>
        </Botoes>
      </Centro>
    </Conteudo>
  );
}

export default CadastroPage;
