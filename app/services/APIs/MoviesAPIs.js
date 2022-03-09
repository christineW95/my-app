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
        const {data:{Search ,totalResults},status}=result
        console.log({Search,totalResults})
        if(status == 200)
        if(Search !==null)
        return {Search,totalResults};
    }
    catch (Err) {
        console.log(Err)
    }

};
async function postRequest(url = '', body = {}) {

    var config = {
        method: 'post',
        url: url,
        params: body
    };
    try {
        const res = await axios(config);
        const { token } = data;
        if (res.status == 200 && token !== null)
            return token;
    } catch (Err) {
        console.log(Err)
    }
}

export {
    getRequest,
    postRequest
}