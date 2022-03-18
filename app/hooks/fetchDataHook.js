import { useEffect } from "react";
import { API_KEY, config } from "../services/config";
import {  getRequest } from "../services/APIs/MoviesAPIs";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataError, fetchDataPending, fetchDataSuccess } from "../store/action";

export function useFetchMovies(movie) {
  let results = useSelector((state) => state?.payload?.results);
  const pending = useSelector((state) => state?.pending);
  const error = useSelector((state) => state?.error);
  const dispatch = useDispatch();


  useEffect(() => {
    if(!movie) return
      dispatch(fetchDataPending());
      getRequest(config.base_url + config.search_movie, {
        api_key: API_KEY,
        query: movie,
      })
        .then((res) => dispatch(fetchDataSuccess(res)))
        .catch((err) => dispatch(fetchDataError(err)));
    return () => {};
  }, [movie]);

  return { results,pending, error };
}
