import React from "react";
import { useHistory } from "react-router-dom";
import { goBack } from "../../router/goToPages";

const ListTripsPage = () => {
  const history = useHistory();

  return (
    <div>
      <p>Lista de Viagens</p>
     
      <button onClick={() => goBack(history)}>Voltar</button>
    </div>
  );
};

export default ListTripsPage;