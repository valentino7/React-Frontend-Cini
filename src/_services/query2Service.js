
import {URL_GET_MEDIANS_QUERY2} from "../_constants/configurationConstants";

export const query2Service = {
    getElements,

};




function getElements(choose) {
    const requestOptions = {
        method: 'GET',
    };
    return fetch(URL_GET_MEDIANS_QUERY2+ choose).then(handleResponse);
}



function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }

    return response.json();
}
