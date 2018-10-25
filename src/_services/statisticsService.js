
import {
    URL_GET_STATISTICS_TOP2,
    URL_GET_STATISTICS_TOP1,
    INSERT_STATISTICS
} from "../_constants/configurationConstants";

export const statisticsService = {
    getStatisticsTop1,getStatisticsTop2,insertStatistics

};




function getStatisticsTop1() {
    const requestOptions = {
        method: 'GET',
    };
    return fetch(URL_GET_STATISTICS_TOP1).then(handleResponse);
}



function insertStatistics(query,latency,emitted) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
            latency,emitted
        ),
    };
    return fetch(INSERT_STATISTICS+ query).then(handleResponse);
}



function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }

    return response.json();
}

function getStatisticsTop2() {
    const requestOptions = {
        method: 'GET',
    };
    return fetch(URL_GET_STATISTICS_TOP2).then(handleResponse);
}


