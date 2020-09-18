import React from "react";
import { useHistory } from "react-router-dom";
import { goToLogin } from "../../router/goToPages";

const HomePage = () => {
  const history = useHistory();

  return (
    <div>

      <p>Home Page</p>
      <button onClick={() => goToLogin(history)}>
        Login
      </button>
      <button >
        ADM
      </button>
      
    </div>
  );
};

export default HomePage;
