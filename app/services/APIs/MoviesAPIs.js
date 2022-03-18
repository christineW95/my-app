/* eslint-disable prettier/prettier */
import axios from "axios";

const getRequest = async (url = '', body = {}) => {
    var config = {
        method: 'get',
        url,
        params: body
    };
    try {
        const result = await axios(config);
        const {data:{results ,page},status}=result
        if(status == 200)
      {  
          if(results !==null)
        return {results,page};}
    }
    catch (Err) {
        console.log(Err)
    }

};

export {
    getRequest,
   
}