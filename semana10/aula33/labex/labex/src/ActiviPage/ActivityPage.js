import React from "react";
import useRequestData from "../hooks/useRequestData";
import { useParams } from "react-router-dom";

const ActivityPage = () => {
  const pathParams = useParams();
  const [atividade, atualizaAtividade] = useRequestData(
    `https://www.boredapi.com/api/activity?key=${pathParams.id}`,
    {}
  );

  return <div>{atividade.activity}</div>;
};

export default ActivityPage;
