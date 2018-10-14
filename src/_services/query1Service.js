
import {URL_GET_MEANS_QUERY1} from "../_constants/configurationConstants";

export const query1Service = {
    getElements,

};




function getElements(choose) {
    const requestOptions = {
        method: 'GET',
    };
    return fetch(URL_GET_MEANS_QUERY1+ choose).then(handleResponse);
}



function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }

    return response.json();
}
