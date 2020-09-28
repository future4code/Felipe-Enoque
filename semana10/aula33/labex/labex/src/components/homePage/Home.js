import React from "react";
import { useHistory } from "react-router-dom";


const Home = () => {
  const history = useHistory();

  const goLogin = () =>{
    history.push("/login")
  }

  return (
    <div>
      <p>Home Page</p>

      <button onClick={() => goLogin()}>Login</button>

      <button>Nova Viagem</button>

    </div>
  );
};

export default Home;