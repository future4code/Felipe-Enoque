import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { goToHomePage, goBack } from "../../router/goToPages";

const AboutPage = () => {
  const history = useHistory();
  const pathParams = useParams();

  return (
    <div>
      {pathParams.linguagem === "portugues" ? (
        <p>Sobre este site</p>
      ) : (
        <p>About this site</p>
      )}
      <button onClick={() => goToHomePage(history)}>Ir para Home</button>
      <button onClick={() => goBack(history)}>Voltar</button>
    </div>
  );
};

export default AboutPage;
