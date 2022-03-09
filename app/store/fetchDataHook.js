import { useEffect, useMemo, useState } from "react";
import { API_KEY, config } from "../services/config";
import { getRequest } from "../services/APIs/MoviesAPIs";

export const fetchStaticData = () =>
  require("../services/constants/superheroes-data.json");

export function useFetchMovies(type,actor) {
 
  const [result, setResult] = useState({
    loading: true,
    data: null,
  });
  const [error, setError] = useState(null);
  useEffect(() => {
    getRequest(config.base_url, {
      apikey: API_KEY,
      s: actor,
      type,
    })
      .then((res) => {
        if (res) {
          setResult({ loading: false, data: res });
        }
      })
      .catch((err) => {setError(err)
      setResult({loading:false,data:null})})
    return () => {};
  }, [type,actor]);

  return { result, error };
}
