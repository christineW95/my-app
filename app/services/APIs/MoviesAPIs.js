/* eslint-disable prettier/prettier */
import axios from "axios";

const getRequest = async (url = '', body = {}) => {
    var data = JSON.stringify(body);
    var config = {
        method: 'get',
        url,
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };
    try {
        const response = await axios(config);
        const {  token } = response.data;
        return token;
    }
    catch (Err) {
        console.log(Err)
    }

};
async function postRequest(url = '', body = {}) {

    var config = {
        method: 'post',
        url: url,
        headers: {
            'Content-Type': 'application/json'
        },
        data: body
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