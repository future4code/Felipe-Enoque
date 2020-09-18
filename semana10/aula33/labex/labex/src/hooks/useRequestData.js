import { useState, useEffect } from "react";
import { getDataFromAPI } from "../services/requests";

const useRequestData = (url, initialState) => {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    getDataFromAPI(url, setData);
  }, [url]);

  const updateData = () => {
    getDataFromAPI(url, setData);
  };

  return [data, updateData];
};

export default useRequestData;
