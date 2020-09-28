import React from 'react';
import styled from 'styled-components'



const Conteudo = styled.div`
  text-align:center;
  font-size: 16px;
 
`
const Titulo = styled.p`
    align-items: center;
    justify-content: center;
    vertical-align: middle;
`

function LoginPage() {
  return (
    <Conteudo>
      <Titulo>Login</Titulo>
    </Conteudo>
  );
}

export default LoginPage;
