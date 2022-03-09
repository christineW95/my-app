import { useEffect, useMemo, useState } from "react"
import axios from "axios"
import superheroesData from "../services/constants/superheroes-data"
import { API_KEY, config } from "../services/config";
import { getRequest } from "../services/APIs/MoviesAPIs";

const fetchStaticData=()=>require('../services/constants/superheroes-data.json')
const generateRandom=(limit)=>  Math.floor(Math.random() * limit);

export  function useFetchMovies(){
    const superheroes=fetchStaticData();
const superhero=useMemo(()=>superheroes[generateRandom(superheroes.length)],[superheroes.length])

const [response,setResponse] = useState(null)
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(false)
    useEffect(() => {
        (
            async function(){
                try{
                    setLoading(true)
                      const {Search,totalResults}=await getRequest(config.base_url,{
                          apikey:API_KEY,
                          s:superhero,
                          type:'movie'
                      })
                    setResponse({Search,totalResults})
                    
                }catch(err){ 
                    setError(err)
                }finally{
                    setLoading(false)
                }
            }
        )()
    }, [])

    return { response, error, loading }

}
 