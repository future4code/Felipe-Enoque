import React from "react";
import { useHistory } from "react-router-dom";
import { goToAboutPage, goToContactPage } from "../../router/goToPages";

const HomePage = () => {
  const history = useHistory();

  return (
    <div>
      <p>Home Page</p>
      <button onClick={() => goToAboutPage(history, "portugues")}>
        Ir para Sobre (PT)
      </button>
      <button onClick={() => goToAboutPage(history, "ingles")}>
        Ir para Sobre (EN)
      </button>
      <button onClick={() => goToContactPage(history, "5881028")}>
        Atividade com param id
      </button>
    </div>
  );
};

export default HomePage;
