
import {URL_GET_ALL_SENSOR_BROKEN,URL_GET_ALL_INTERSECTION} from "../_constants/configurationConstants";

export const listIntersectionService = {
    getSensors,getIntersections,

};




function getSensors() {
    const requestOptions = {
        method: 'GET',
    };
    return fetch(URL_GET_ALL_SENSOR_BROKEN).then(handleResponse);
}



function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }

    return response.json();
}


function getIntersections() {
    const requestOptions = {
        method: 'GET',
    };
    return fetch(URL_GET_ALL_INTERSECTION).then(handleResponseIntersections);
}



function handleResponseIntersections(response) {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }

    return response.json();
}
