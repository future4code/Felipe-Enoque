import React from "react";
import { useHistory } from "react-router-dom";
import { goToAboutPage, goToContactPage } from "../../router/goToPages";

const Home = () => {
  const history = useHistory();

  return (
    <div>
      <p>Home Page</p>
      <button>
          Ir para Sobre (PT)
      </button>

      <button>
          Ir para Sobre (EN)
      </button>

      <button>
          Atividade com param id
      </button>
    </div>
  );
};

export default Home;