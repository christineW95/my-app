import { useEffect, useMemo, useState } from "react";
import { API_KEY, config } from "../services/config";
import { getMovieDetailsRequest, getRequest } from "../services/APIs/MoviesAPIs";

export const fetchStaticData = () =>
  require("../services/constants/superheroes-data.json");

export function useFetchMovies(movie) {
 
  const [result, setResult] = useState({
    loading: true,
    data: null,
  });
  const [error, setError] = useState(null);
  useEffect(() => {
    getRequest(config.base_url+config.search_movie, {
      api_key: API_KEY,
      query: movie,
    })
      .then((res) => {
        if (res) {
          setResult({ loading: false, data: res });
        }
      })
      .catch((err) => {setError(err)
      setResult({loading:false,data:null})})
    return () => {};
  }, [movie]);

  return { result, error };
}
export function useFetchMovieDetails(id) {
 
  const [result, setResult] = useState({
    loading: true,
    data: null,
  });
  const [error, setError] = useState(null);
  useEffect(() => {
    getMovieDetailsRequest(config.base_url, {
      apikey: API_KEY,
      i:id,
    })
      .then((res) => {
        if (res) {
          setResult({ loading: false, data: res.data });
        }
      })
      .catch((err) => {setError(err)
      setResult({loading:false,data:null})})
    return () => {};
  }, [id]);

  return { result, error };
}