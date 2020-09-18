import React from "react";
// import { useHistory } from "react-router-dom";
import { goBack } from "../../router/goFun";


function login() {

  
  

  return (
    <div>
      <p>Login</p>
      <button>entrar</button>
      <button onClick={() => goBack()}>Voltar</button>
    </div>
  );
};

export default login;
