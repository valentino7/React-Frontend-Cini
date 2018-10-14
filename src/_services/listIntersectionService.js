
import {URL_GET_ALL_SENSOR_BROKEN} from "../_constants/configurationConstants";

export const listIntersectionService = {
    getSensors,

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
