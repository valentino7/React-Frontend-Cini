
import {URL_GET_RANKING_QUERY1} from "../_constants/configurationConstants";

export const queryService = {
    getElements,

};




function getElements() {
    const requestOptions = {
        method: 'GET',
    };
    return fetch(URL_GET_RANKING_QUERY1).then(handleResponse);
}



function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }

    return response.json();
}
