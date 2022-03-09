import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import superheroesData from "../services/constants/superheroes-data";
import { API_KEY, config } from "../services/config";
import { getRequest } from "../services/APIs/MoviesAPIs";

const fetchStaticData = () =>
  require("../services/constants/superheroes-data.json");
const generateRandom = (limit) => Math.floor(Math.random() * limit);

export function useFetchMovies(type) {
  const superheroes = fetchStaticData();
  const superhero = useMemo(
    () => superheroes[generateRandom(superheroes.length)],
    [superheroes.length]
  );
  const [result, setResult] = useState({
    loading: true,
    data: null,
  });
  const [error, setError] = useState(null);
  useEffect(() => {
    getRequest(config.base_url, {
      apikey: API_KEY,
      s: superhero,
       type,
    })
      .then((res) => {
        if (res) {
          setResult({ loading: false, data: res });
        }
      })
      .catch((err) => setError(err)).finally(()=>
      setResult({loading:false,data:null}));
    return () => {};
  }, [superhero]);

  return { result, error };
}
