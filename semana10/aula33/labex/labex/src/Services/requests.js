import axios from "axios";

export const getDataFromAPI = (url, setData) => {
  axios
    .get(url)
    .then((resposta) => {
      setData(resposta.data);
    })
    .catch((erro) => {
      console.log(erro);
    });
};
